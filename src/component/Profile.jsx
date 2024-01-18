import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { toggleProfile } from '../utils/configSlice'
const Profile = () => {
const {displayName,email} =useSelector(store=>store.user)
const dispatch =useDispatch()
function logout(){
    signOut(auth).then(() => {
        // Sign-out successful.
          dispatch(toggleProfile())
      }).catch((error) => {
        // An error happened.
      });
  }

function handleLogout(){
     logout();
}


  return (
    <div className='w-40 absolute top-12 bg-slate-700 h-56 right-1 p-1 flex flex-col gap-4' >
        <h1 className='text-white text-lg font-mono font-bold ' >Profile</h1>
        <h1 className='text-white font-mono font-bold' >{displayName ?? "not found "}</h1>
        <h1 className=' w-3 text-white text-sm font-mono font-bold' >{email}</h1>
        <button onClick={handleLogout} className='bg-red-700 mt-5 rounded p-1 text-white' >Log-Out</button>
    </div>
  )
}

export default Profile