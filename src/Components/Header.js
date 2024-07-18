import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { BiSolidUserCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { addYoutubeVideos, removeYoutubeVideos, toggleMenu } from '../utils/appSlice';
import { Google_Api_Key, Youtube_Logo_URL, Youtube_Small_Logo_URL } from '../utils/Constents';
import { addSearchApiResult, addSearchKeyword, addSearchcache } from '../utils/searchSlice';
import ErrorShimmer from '../Shimmer/ErrorShimmer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search);
    const searchKeywordValue = useSelector((store) => store.search.searchKeyword);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getSearchAutocomplete = useCallback(async () => {
        try {
            const data = await fetch(` http://clients1.google.com/complete/search?hl=en&output=toolbar&q=${searchQuery}`);
            const responseText = await data.text();

            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(responseText, 'text/xml');

            const suggestions = Array.from(xmlDoc.getElementsByTagName('suggestion')).map(suggestion => {
                return suggestion.getAttribute('data');
            });

            setSuggestions(suggestions);
            dispatch(addSearchcache({
                [searchQuery]: suggestions,
            }));

        } catch (error) {
            console.error('Error fetching autocomplete suggestions:', error);
        }
    }, [searchQuery, dispatch]);



    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery.trim() !== '') {
                if (searchCache[searchQuery]) {
                    setShowSuggestions(searchCache[searchQuery]);
                } else {
                    getSearchAutocomplete();
                }
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery, searchCache, getSearchAutocomplete]);

    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    };

    const handleSearchBtn = () => {
        dispatch(addSearchKeyword(searchQuery));
        getYoutubeSearchedVideos();
        getSearchedVideo(searchQuery);
        navigate("/")
    };


    const getYoutubeSearchedVideos = async () => {
        try {
            const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchKeywordValue}&key=${Google_Api_Key}`);
            const jsonData = await data.json();
            dispatch(addSearchApiResult(jsonData.items));
        } catch (error) {
            <ErrorShimmer />
        }
    };


    const handleSearchKeyClick = (e) => {
        removeYoutubeVideos();
        getSearchedVideo(searchQuery);
        setSearchQuery(e.target.innerText);
        navigate("/")
    };

    const handleBlur = () => {
        setTimeout(() => {
            setShowSuggestions(false);
        }, 100);
    };

    const getSearchedVideo = async (keyWord) => {
        try {
            const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyWord}&type=video&key=${Google_Api_Key}`);
            const jsonData = await data.json();
            dispatch(addYoutubeVideos(jsonData?.items));

        } catch (error) {
            <ErrorShimmer />
        }
    }

    return (
        <div data-testid="headerTest" className='fixed w-full py-4 mb-4 grid grid-flow-col z-30 bg-white '>

            <div className='flex items-center justify-between col-span-2 md:col-span-1 '>
                <AiOutlineMenu className='text-xl mx-2 md:text-2xl md:mx-6 text-gray-400 cursor-pointer' onClick={handleToggleMenu} />
                <LazyLoadImage className=' hidden md:block h-6 cursor-pointer ' effect="blur" loading="lazy" alt='youtube-logo' src={Youtube_Logo_URL} />
                <LazyLoadImage className='md:hidden block h-5 cursor-pointer ' effect="blur" loading="lazy" alt='youtube-small-logo' src={Youtube_Small_Logo_URL} />
            </div>

            <div className='col-span-7 md:col-span-8 px-2 md:px-8  '>
                <div className='flex items-center'>
                    <input
                        className='w-5/6 md:w-4/6 px-4 py-1 md:py-2 text-sm md:text-base border border-gray-400 rounded-l-full outline-none'
                        type='text'
                        placeholder='Search'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={handleBlur}

                    />
                    <button
                        className='text-md md:text-xl py-1 px-3 md:py-2 md:px-4 border bg-gray-50 border-l-0 border-gray-400 rounded-r-full'
                        onClick={handleSearchBtn}
                    >
                        <GoSearch className='m-[2px]' />
                    </button>
                </div>

                {showSuggestions && (
                    <div className='w-[60%] md:w-[40%] absolute bg-white p-2 z-30'>
                        <ul>
                            {suggestions.map((suggestion) => (
                                <li
                                    key={suggestion}
                                    className='flex items-center gap-4 p-2  text-sm md:text-base hover:bg-gray-100 cursor-pointer'
                                    data={suggestion}
                                    onClick={handleSearchKeyClick}
                                >
                                    <GoSearch /> {suggestion}
                                </li>

                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className='flex justify-end items-center col-span-1 '>
                <BiSolidUserCircle className='text-3xl md:text-4xl mr-2 sm:mr-4' />
            </div>
        </div>
    );
};

export default Header; 
