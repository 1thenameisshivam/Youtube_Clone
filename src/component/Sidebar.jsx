import React from 'react'
import { HiTrendingUp } from "react-icons/hi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Sidebar = () => {
   const togglemenu=useSelector(store=>store.config.menuButton);

  if(!togglemenu) return;
  
  return (
    <div className='p-4 mt-12 shadow-lg w-64 bg-black text-white'>
        <ul className='border-b-2 border-gray-400  text-lg ' >
            <li><Link to={"/app"}>Home</Link></li>
            <li>Subscription</li>
            <li>Shorts</li>
            <li>Live</li>
        </ul>
        <h1 className='' >Subscription</h1>
        <ul className='border-b-2 border-gray-400 py-2 text-lg ' >
            <li>Sports</li>
            <li>Music</li>
            <li>Games</li>
            <li>Movies</li>
        </ul>
        <h1 className='' >you</h1>
        <ul className='border-b-2 border-gray-400 py-2 text-lg ' >
            <li>Your Channel</li>
            <li>Watch Later</li>
            <li>Histort</li>
            <li>Your Videos</li>
            <li>Liked Vedio</li>
        </ul>
        <h1 className='' >Explore</h1>
        <ul className='border-b-2 border-gray-400 py-2 text-lg ' >
            <li className='flex items-center gap-1'><HiTrendingUp/>Trending</li>
            <li>music</li>
            <li>News</li>
            <li>Sports</li>
            <li>Liked Vedio</li>
            <li>podcasts</li>
        </ul>
    </div>
  )
}

export default Sidebar