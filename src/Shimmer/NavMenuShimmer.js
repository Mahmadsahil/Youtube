import React from 'react'

const NavMenuShimmer = () => {
    return (
        <>
            <div className='absolute h-full z-30 mt-8 flex flex-col gap-8 py-8 px-2 md:px-4 '>
                <div className='h-4 md:h-6 w-8 md:w-10 bg-blue-300 rounded-lg animate-pulse'></div>
                <div className='h-4 md:h-6 w-8 md:w-10 bg-blue-300 rounded-lg animate-pulse'></div>
                <div className='h-4 md:h-6 w-8 md:w-10 bg-blue-300 rounded-lg animate-pulse'></div>
                <div className='h-4 md:h-6 w-8 md:w-10 bg-blue-300 rounded-lg animate-pulse'></div>
                <div className='h-4 md:h-6 w-8 md:w-10 bg-blue-300 rounded-lg animate-pulse'></div>
            </div>
        </>
    )
}

export default NavMenuShimmer