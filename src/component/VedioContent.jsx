import React, { useEffect, useState } from 'react'
import ButtonList from './ButtonList'
import { POPULAR_VIDEO_API } from '../utils/constant';
import VedioCard from './VedioCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addLoadVedios } from '../utils/vediosSlice';


const VedioContent = () => {
    const dispatch = useDispatch()
    // const [page,setPage]=useState("")
    // const [pgvalue,setpgValue]=useState('')
    const vedios=useSelector(store=>store.vedio.loadVedios)
    // useEffect(()=>{
    //   window.addEventListener('scroll',handleScroll)
    //   return ()=> window.removeEventListener('scroll',handleScroll)
    // },[])
  
    // const handleScroll= async ()=>{
    //   // console.log("scroll height: "+ document.documentElement.scrollHeight)
    //   // console.log("window height: "+ window.innerHeight)
    //   // console.log("scroll : "+ document.documentElement.scrollTop)
      
    //   if(window.innerHeight+document.documentElement.scrollTop+2>=document.documentElement.scrollHeight){
    //       setPage(pgvalue);
    //   }

    //  }

    useEffect(()=>{
        getVideo();
    },[])
    
    const getVideo=async()=>{
        const data=await fetch(POPULAR_VIDEO_API);// +page+"&pageToken="
        const json=await data.json();
        console.log(json)
        // setpgValue(json.nextPageToken);
        // console.log(json.nextPageToken);
        dispatch(addLoadVedios(json.items))
    }
    
   

  if(vedios===null) return

  

  return (
   
    
    <div 
    className='w-screen h-auto bg-black text-white' >
    <ButtonList/>
     <div className='w-auto flex flex-wrap gap-4 p-6'> { vedios.map((vedio,index)=><Link key={index} to={"/app/watch/"+vedio.id} ><VedioCard info={vedio} /></Link>)}</div>
  
    </div>
  )
}

export default VedioContent