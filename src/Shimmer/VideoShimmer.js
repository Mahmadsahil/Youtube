import React from 'react';

const VideoShimmer = () => {
    return (
        <div className='w-[250px] m-2 p-2 rounded-lg animate-pulse '>
            <div className='h-[130px] bg-blue-200 rounded-lg'></div>
            <div className="flex items-center">
                <div className='flex items-center'>
                    <div className='h-10 w-10 bg-blue-200 rounded-full m-2'></div>
                </div>
                <div className='w-full '>
                    <div className='h-2 w-10/12 bg-blue-200 rounded-full my-2'></div>
                    <div className='h-2 w-10/12 bg-blue-200 rounded-full my-2'></div>
                </div>
            </div>
        </div>
    )
}

export default VideoShimmer;