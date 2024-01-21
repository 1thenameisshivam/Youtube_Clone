import React, { useEffect, useState } from 'react'
import { SEARCH_API, SEARCH_BY_ID } from '../utils/constant'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SearchVedio from './SearchVedio'
const Seach = () => {
  const value=useSelector(store=>store.vedio.searchName);
  const [data,setData]=useState("")
  const [result,setResult]=useState([])
  console.log(value)

  const seacrvedio=async(id)=>{
    const data=await fetch(SEARCH_BY_ID+id)
    const json =await data.json();
    setResult((e)=>[...json.items,...e])
  }
  console.log(result)
  useEffect(()=>{
    fetchseach()
  },[value])
  const fetchseach=async()=>{
    const dataa=await fetch(SEARCH_API+value ?? "")
    const json=await dataa.json();
    // console.log(json.items)
    setData(json.items)
    setResult([])
     data.map(vid=>seacrvedio(vid.id.videoId))
  }
  return (
    <div className='bg-black w-full'>
        <h1 className='mt-12 p-4' >
        { result && result.map((vedio,index)=><Link key={index} to={"/app/watch/"+vedio.id} ><SearchVedio info={vedio} /></Link>)}
        </h1>
    </div>
  )
}

export default Seach