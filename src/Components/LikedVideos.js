import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import Empty from '../Shimmer/Empty'
import VideoShimmer from '../Shimmer/VideoShimmer'
const VideoCard2 = lazy(() => import('./VideoCard2'))

const LikedVideos = () => {
    const LikedVideos = useSelector(store => store.app.like)
    return LikedVideos.length === 0 ? <Empty /> : (
        <div className='p-10'>
            <div className='m-2'>
                <p className='text-lg font-medium md:text-2xl text-gray-600'> Liked Video</p>
            </div>
            <div className='w-full flex flex-col justify-center md:justify-start '>
                {
                    LikedVideos.map(item => item &&
                        <Suspense fallback={<VideoShimmer />}>
                            <VideoCard2 data={item} />
                        </Suspense>
                    )
                }
            </div>
        </div>
    )
}

export default LikedVideos