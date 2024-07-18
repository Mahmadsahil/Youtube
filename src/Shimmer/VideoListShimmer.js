import React from 'react'
import VideoShimmer from '../Shimmer/VideoShimmer'

const VideoListShimmer = () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7]
    return (
        <>
            {array.map(item => <VideoShimmer key={item} />)}
        </>
    )
}

export default VideoListShimmer