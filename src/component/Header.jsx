import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { LOGO } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { toggleMenu, toggleProfile } from '../utils/configSlice';
import { useOnAuthChange } from '../hooks/useOnAuthChange';
const Header = () => {
  useOnAuthChange();
  const dispatch =useDispatch();
  
  function handleProfile(){
      dispatch(toggleProfile())
  }
  function handleMenu(){
    dispatch(toggleMenu());
  }
  return (
    <div className='w-screen fixed top-0 bg-black text-white flex items-center justify-center gap-9 md:gap-96 p-1' >
        <div className='flex items-center gap-1 md:gap-3'>
         <span onClick={handleMenu} className=' cursor-pointer text-lg md:text-3xl'><MdOutlineMenu/></span> 
         <span className='flex gap-1 items-center' ><img className='w-5 h-6 md:h-auto md:w-9' src={LOGO} /><h1 className='text-1xl md:text-2xl tracking-tighter font-medium' >YouTube</h1></span>
        </div>
        <div>
            <form className='flex items-center' onSubmit={(e)=>e.preventDefault()} >
                <input  className='border-gray-500 text-xs md:text-base p-1 border-1 md:border-2 border-r-0 w-[150px] md:w-[400px] md:p-2 focus:outline-none border-b-gray-500 rounded-l-3xl text-gray-600 bg-gray-900' type='text' placeholder='Search' /> 
                <button className=' border-gray-500 border-1   md:border-2 rounded-r-3xl w-7 md:w-14 md:p-2 md:text-2xl p-1 bg-slate-900' ><IoIosSearch/></button>
            </form>
        </div>
        <div onClick={handleProfile} className=' cursor-pointer md:text-2xl bg-slate-800 rounded-full p-2' >
            <CgProfile/>
        </div>
    </div>
  )
}

export default Header