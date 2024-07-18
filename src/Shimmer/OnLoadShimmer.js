import React from 'react'
import VideoShimmer from '../Components/VideoShimmer'

const OnLoadShimmer = () => {
    return (
        <div className='h-[100vh] w-full animate-pulse'>
            <div className='h-20 w-full p-4 flex items-center justify-between bg-blue-100'>
                <div className='h-8 w-14 bg-blue-200 rounded-lg'></div>
                <div className='h-8 w-6/12 bg-blue-200 rounded-lg'></div>
                <div className='h-8 w-8 bg-blue-200 rounded-lg'></div>
            </div>

            <div className='flex'>
                
                <div className='flex flex-wrap p-4 gap-4'> 
                <VideoShimmer/>
                <VideoShimmer/>
                <VideoShimmer/>
                <VideoShimmer/>
                <VideoShimmer/>
                <VideoShimmer/>
                <VideoShimmer/>
                <VideoShimmer/>
                </div>

            </div>
            <div></div>
        </div>
    )
}

export default OnLoadShimmer