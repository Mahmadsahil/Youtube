import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const VideoCard2 = ({ data }) => {
    const { snippet, id } = data;
    const { title, channelTitle, thumbnails } = snippet;

    return (
        <div className='flex p-2 rounded-lg -z-50 cursor-pointer'>
            <LazyLoadImage effect="blur" loading="lazy" className='h-[60px] w-[140px]  md:h-[85px] md:w-[150px] object-cover mx-2 bg-blue-100  rounded-lg' id={id} alt='Video' src={thumbnails.high.url} />
           <div>
           <p className='md:truncate py-2 text-xs md:text-base text-gray-700 font-medium'>{title}</p>
           <p className='py-1 text-xs md:text-sm text-gray-700'>{channelTitle}</p>
           </div>
        </div>
    );
}
export default VideoCard2;