import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {closeMenu} from "../utils/configSlice"
import { SEARCH_BY_ID } from '../utils/constant';

const Watch = () => {
    const dispatch=useDispatch()
    const {watchid}=useParams();
    const [info,setInfo]=useState(null);
    const [toggleDescription,setToggleDescription]=useState(false)
    useEffect(()=>{
        dispatch(closeMenu())
        fetchdata()
    },[])
  
    const fetchdata=async()=>{
      const data=await fetch(SEARCH_BY_ID+watchid)
      const json=await data.json();
      console.log(json)
      setInfo(json.items[0])
    }
    if(info===null) return
    const {snippet,statistics}=info;
    const {channelTitle,localized}=snippet;
    
  return (
    <div className='mt-12 p-2 w-screen h-auto bg-black'>
    <iframe className='rounded-lg' width="1100" height="500 " src={"https://www.youtube.com/embed/"+watchid} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <h1 className='text-white p-4 w-3/4 text-2xl z-10'>{localized.title}</h1>

    <h2 className='text-white pl-4 text-2xl' >{channelTitle}</h2>
    <div className='p-4 '>
      <p className='text-white' >{statistics.viewCount/1000} k views <span
       onClick={()=>setToggleDescription(!toggleDescription)}
       className='text-blue-600 cursor-pointer' >   ...more</span> </p>
      { toggleDescription && <div>
          <p className='text-gray-600 text-lg' >Description</p>
          <p className='text-white'>
           {localized.description}
         </p>
         <p className='text-white flex flex-wrap pt-4' >
           {snippet.tags.map(d=><li className='list-none text-white'># {d}</li>)}
         </p>
       </div>
      }
    </div>
    </div>
  )
}

export default Watch