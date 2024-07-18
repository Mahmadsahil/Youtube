import React from 'react'
import { useSelector } from 'react-redux';
import { MdHomeFilled, MdOutlinePlaylistPlay, MdOutlineSubscriptions, MdOutlineWatchLater, MdSubscriptions, MdWatchLater } from "react-icons/md";
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { GoHome, GoVideo } from 'react-icons/go';
import { VscHistory } from 'react-icons/vsc';
import { SiYoutubeshorts } from 'react-icons/si';
import { FaHistory } from 'react-icons/fa';
import { RiVideoFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NavMenu = () => {

    const navItems = [
        {
            name: "Home",
            logoOn: <MdHomeFilled />,
            logoOff: <GoHome />,
            path: "/",
        },
        {
            name: "Shorts",
            logoOn: <SiYoutubeshorts />,
            logoOff: <SiYoutubeshorts />,
            // path: "shorts",
        },
        {
            name: "Subscriptions",
            logoOn: <MdSubscriptions />,
            logoOff: <MdOutlineSubscriptions />,
            // path: "subscriptions",
        },
        {
            name: "History",
            logoOn: <FaHistory />,
            logoOff: <VscHistory />,
            path: "history",
        },
        {
            name: "Playlists",
            logoOn: <MdOutlinePlaylistPlay />,
            logoOff: <MdOutlinePlaylistPlay />,
            // path: "playlists",
        },
        {
            name: "Your videos",
            logoOn: <RiVideoFill />,
            logoOff: <GoVideo />,
            // path: "yourVideo",
        },
        {
            name: "Watch later",
            logoOn: <MdWatchLater />,
            logoOff: <MdOutlineWatchLater />,
            // path: "watchLeter",
        },
        {
            name: "Liked videos",
            logoOn: <BiSolidLike />,
            logoOff: <BiLike />,
            path: "like",
        },
    ]

    const toggleResult = useSelector(store => store.app.toggleValue);

    return (
        < div data-testid="testNavMenu" className={`h-full fixed bg-white z-50 mt-14 transition ease`} >
            <ul data-testid="unList" className='flex flex-col items-start justify-center gap-2 md:gap-1 '>
                {navItems.map(item => <Link  to={item.path } rel="preload" key={item.name}> < li className={`gap-8 ${toggleResult && "text-center"} flex justify-start items-center text-sm py-2 px-4 md:py-3 md:px-6 hover:cursor-pointer hover:bg-slate-50  hover:rounded-xl`} >
                    <p className='text-xl md:text-2xl'>{item.logoOff}</p> {toggleResult && <p>{item.name}</p>} </li></Link>)}
            </ul>
        </div >
    )
}


export default NavMenu