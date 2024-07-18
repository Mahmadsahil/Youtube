import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToLink } from '../utils/appSlice';
import LiveChats from './LiveChats';
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike, BiSolidUserCircle } from 'react-icons/bi';
import { GoBell, GoBellFill } from 'react-icons/go';
import { Bounce, toast } from 'react-toastify';

const VideoSection = () => {

    const [bellIcon, setBellIcon] = useState(false);
    const [likeBtn, setLikeBtn] = useState(null);
    const [subScribeBtn, setSubscribeBtn] = useState(true);
    const dispatch = useDispatch()

    const VideoDetails = useSelector(store => store.app.VideoDetails);

    const handleBellClick = () => {
        bellIcon ? setBellIcon(false) : setBellIcon(true);
    }

    const handleLikeClick = () => {
        likeBtn === 'like' ? setLikeBtn(null) : setLikeBtn('like');
        dispatch(addToLink(VideoDetails))
    }
    const handleDisLikeClick = () => {
        likeBtn === 'disLike' ? setLikeBtn(null) : setLikeBtn('disLike');
    }

    const handleSubscriptBtn = () => {
        setSubscribeBtn(!subScribeBtn);

        subScribeBtn && toast.success('Subscribed', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <div data-testid="TestVideoSection" className='flex flex-col items-center mx-2 md:mx-2'>

            <div className='flex flex-col md:flex-row items-start ml-5 mt-10 md:mt-20 '>

                <div className="flex flex-col  ">
                    <div className='mx-2'>
                        <iframe className='rounded-xl w-[20rem] h-[11.25rem] md:w-[53.75rem] md:h-[30.25rem] bg-gray-200' src={`https://www.youtube.com/embed/${(VideoDetails?.id?.videoId || VideoDetails?.id)}?autoplay=1&si=F_U0b-NZX6yp9Fhv`}
                            title="YouTube video player" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                        <div>
                            <p className='text-sm md:text-xl font-bold p-2'>{VideoDetails?.snippet?.localized?.title}</p>
                        </div>
                    </div>

                    {/* Chennal Details*/}
                    <div className="w-full mx-auto flex items-center justify-between">

                        <div className="flex items-center ">
                            <BiSolidUserCircle className='text-4xl mx-2 cursor-pointer' />
                            <div className=''>
                                <p className='text-sm md:text-md font-semibold cursor-pointer'>{VideoDetails?.snippet?.channelTitle}</p>
                                <p className='text-xs md:text-sm cursor-pointer'>View {VideoDetails?.statistics?.viewCount}</p>
                            </div>
                        </div>

                        <div className='flex p-2 gap-3 md:gap-6 items-center'>
                            <div className='flex gap-4' onClick={handleLikeClick}>
                                {likeBtn === 'like' ? <BiSolidLike className='text-xl md:text-2xl text-gray-700 cursor-pointer' /> : <BiLike className='text-xl md:text-2xl text-gray-700 cursor-pointer' />}
                            </div>
                            <div className='flex gap-4' onClick={handleDisLikeClick}>
                                {likeBtn === 'disLike' ? <BiSolidDislike className='text-xl md:text-2xl text-gray-700 cursor-pointer' /> : <BiDislike className='text-xl md:text-2xl text-gray-700 cursor-pointer' />}
                            </div>
                            <div className='flex gap-4 items-center'>
                                <button className={`p-2 md:py-2 md:px-3 text-xs md:text-sm rounded-md ${subScribeBtn ? `bg-red-600 text-white cursor-pointer` : `bg-gray-300 shadow-lg cursor-pointer`}`}
                                    onClick={handleSubscriptBtn}>Subscriber</button>
                                <div className='cursor-pointer' onClick={handleBellClick}>
                                    {bellIcon ? <GoBellFill className='text-base md:text-xl cursor-pointer' /> : <GoBell className='text-xl cursor-pointer' />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full px-2 md-mx-2'>
                    <LiveChats />
                </div>
            </div>

            <div>
            </div>
        </div>

    )
}

export default VideoSection;