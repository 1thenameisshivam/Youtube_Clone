import React from 'react'
import { useEffect } from 'react';
import { openMenu } from '../utils/configSlice';
import MainContent from './MainContent';
import { useDispatch } from 'react-redux';
const Browse = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(openMenu())
},[])
  return (
    <div className='w-screen overflow-hidden bg-white' >
    <MainContent/>
    </div>
    
  )
}

export default Browse