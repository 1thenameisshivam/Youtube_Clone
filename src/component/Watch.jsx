import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {closeMenu} from "../utils/configSlice"

const Watch = () => {
    const dispatch=useDispatch()
    const {watchid}=useParams();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])

  return (
    <div className='mt-12 p-2 w-screen h-screen bg-black'>
    <iframe className='rounded-lg' width="1100" height="500 " src={"https://www.youtube.com/embed/"+watchid} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default Watch