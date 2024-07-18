import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromHistory } from '../utils/appSlice';
import Empty from '../Shimmer/Empty'
import VideoShimmer from '../Shimmer/VideoShimmer';
const VideoCard2 = lazy(() => import('./VideoCard2'))

const History = () => {
    const toggleResult = useSelector(store => store.app.toggleValue);

    const handleRemoveHistory = () => {
        dispatch(removeFromHistory())
    }

    const dispatch = useDispatch();
    const watchedVideo = useSelector(store => store.app.history);
    return watchedVideo.length === 0 ? <Empty /> : (
        <div  className='md:mx-0 mx-8 mt-12 pt-4'>
            {toggleResult && <div className={`w-full h-screen z-30 bg-black bg-opacity-25 fixed`}></div>}

            <div className='flex flex-wrap justify-start p-2'>
                <button className='p-2 mx-2 text-xs md:text-sm rounded-lg cursor-pointer bg-blue-300 text-gray-600 font-medium'
                    onClick={handleRemoveHistory}>Cleare history</button>
            </div>
           

            <div className='w-full flex flex-col justify-start md:justify-start'>

                {
                    watchedVideo && watchedVideo.map((video, idx) => video &&
                        <Suspense key={idx} fallback={<VideoShimmer />}>
                            <VideoCard2  data={video} />
                        </Suspense>
                    )
                }
            </div>
        </div>
    );
};

export default History;
