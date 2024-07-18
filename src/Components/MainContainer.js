
import React, { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import {  Youtube_Api, } from '../utils/Constents';
import VideoShimmer from '../Shimmer/VideoShimmer';
import { VideoList } from '../utils/RandomVideos';
import { useDispatch, useSelector } from 'react-redux';
import { addVideoDetails, addYoutubeVideos, addToHistory } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import ErrorShimmer from '../Shimmer/ErrorShimmer';
const VideoCard = lazy(() => import('./VideoCard'))


const MainContainer = () => {
    const [youtubeApiResult, setYoutubeApiResult] = useState([]);
    const dispatch = useDispatch();
    const Videos = useSelector(state => state.app.youtubeVideos);

    const getYoutubeVideos = useCallback(async () => {
        try {
            const data = await fetch(Youtube_Api + process.env.Google_Api_Key);
            const jsonData = await data.json();
            setYoutubeApiResult(jsonData?.items);
            dispatch(addYoutubeVideos(jsonData?.items));
        } catch (error) {
            <ErrorShimmer />
        }
    }, [dispatch]);

    useEffect(() => {
        if (Videos) {
            setYoutubeApiResult(Videos);
        }
    }, [Videos, getYoutubeVideos]);

    const toggleResult = useSelector(store => store.app.toggleValue);
    const watchedVideo = useSelector(store => store.app.history);

    const handleClickOnVideo = (data) => {
        dispatch(addVideoDetails(data));
        !watchedVideo.some(video => video.id === data.id) && dispatch(addToHistory(data));
    };


    return (
        <div data-testid="TestMainData" className={`w-full flex flex-col items-center px-4 pt-14 md:pt-20 bg-white`}>
            {toggleResult && <div className={`w-full h-screen z-0 -pt-14 bg-black bg-opacity-25 fixed`}></div>}

            <div data-testid="TestVideoData" className='w-[90%] flex flex-wrap justify-center'>
                {
                    youtubeApiResult.length ? youtubeApiResult.map((GetvideoData, idx) => (
                        <Link rel="preload" to={`/watch?v=${(GetvideoData?.id?.videoId || GetvideoData?.id)}`} key={(GetvideoData?.id?.videoId || GetvideoData?.id)} onClick={() => handleClickOnVideo(GetvideoData)}>
                            <Suspense fallback={<VideoShimmer />}>
                                <VideoCard data={GetvideoData} />
                            </Suspense>
                        </Link >

                    )
                    )
                        :
                        VideoList.items.map((GetvideoData, idx) => GetvideoData ?
                            <Link rel="preload" to={`/watch?v=${(GetvideoData?.id?.videoId || GetvideoData?.id)}`} key={(GetvideoData?.id?.videoId || GetvideoData?.id)} onClick={() => handleClickOnVideo(GetvideoData)} >
                                <Suspense fallback={<VideoShimmer />}>
                                    <VideoCard data={GetvideoData} />
                                </Suspense>
                            </Link> :

                            <VideoShimmer key={GetvideoData.id} />
                        )
                }
            </div>
        </div>
    );
};

export default MainContainer;
