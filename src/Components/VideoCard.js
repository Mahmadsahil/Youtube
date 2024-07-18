import React from 'react';
import { useDispatch } from 'react-redux';
import { RemoveVideoDetails, addVideoDetails } from '../utils/appSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const VideoCard = ({ data }) => {
    const { snippet, id } = data;
    const { title, channelTitle, thumbnails } = snippet;
    const dispatch = useDispatch();

    const handleClickOnVideo = () => {
        dispatch(RemoveVideoDetails());
        dispatch(addVideoDetails(data));
    }
    return (
        <div className='w-[250px] m-2 p-2 rounded-lg -z-50 cursor-pointer' onClick={() => handleClickOnVideo}>
            <LazyLoadImage className='h-[130px] md:h-[130px] w-[250px] object-cover bg-blue-100  rounded-lg' loading="lazy" effect="blur" id={id} alt='Video' src={thumbnails.high.url} />
            <p className='truncate py-1 md:py-2 text-sm md:text-md text-gray-700 font-medium'>{title}</p>
            <p className='text-xs text-gray-700'>{channelTitle}</p>
        </div>
    );
}

export default VideoCard;
