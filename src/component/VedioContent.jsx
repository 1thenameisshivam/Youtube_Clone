import React, { useEffect, useState } from 'react'
import ButtonList from './ButtonList'
import { POPULAR_VIDEO_API } from '../utils/constant';
import VedioCard from './VedioCard';
import { Link } from 'react-router-dom';


const VedioContent = () => {
    
    const [vedios,setVedios]=useState(null);
    useEffect(()=>{
        getVideo();
    },[])

    const getVideo=async()=>{
        const data=await fetch(POPULAR_VIDEO_API);
        const json=await data.json();
        console.log(json.items)
        setVedios(json.items);
    }

  if(vedios===null) return
  return (
   
    
    <div 
    className='w-screen bg-black text-white' >
    <ButtonList/>
    <div className='w-auto flex flex-wrap gap-4 p-6'> { vedios.map(vedio=><Link to={"/app/watch/"+vedio.id}><VedioCard info={vedio} /></Link>)}</div>
  
    </div>
  )
}

export default VedioContent