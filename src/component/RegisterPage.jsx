import React, { useRef,useState } from 'react'
import { LOGO } from '../utils/constant'
import { validation } from '../utils/validation'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, } from '../utils/userSlice';
import { useOnAuthChange } from '../hooks/useOnAuthChange';
const RegisterPage = () => {
  
  const [toggle,setToggle]=useState(false)
  const [msg,setMsg]=useState(null)

  const name=useRef(null);
  const email=useRef(null)
  const password=useRef(null)
  const dispatch = useDispatch()
  
 useOnAuthChange();



  function togglePage(){
    setToggle(!toggle);
  }

  function handleSubmit(){
     const msg=validation(email.current.value,password.current.value)
     setMsg(msg);
     if(msg) return;
     if(toggle){
          
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        console.log(user)
        updateProfile(auth.currentUser, {
          displayName: name.current.value,
        }).then(() => {
          // Profile updated!
          const {uid,displayName,email} = auth.currentUser;
          dispatch(addUser({uid:uid,displayName:displayName,email:email}))
          // ...
          console.log(user);
        }).catch((error) => {
          // An error occurred
          // ...
          setMsg(error.message);
        });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMsg(errorMessage);
        // ..
      });

     }
     else{
         
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMsg(errorMessage);
      });

     }
  }
  console.log(msg);
  return (
    <div className='bg-black  w-screen h-screen text-white ' >
         <div className='flex justify-center items-center h-screen' >
             
            <form onSubmit={(p)=>{p.preventDefault()}} className=' rounded  bg-gray-900 w-full md:w-4/12 h-auto flex flex-col p-7' >
            <div className='flex mb-4 justify-center items-center gap-2' ><img src={LOGO} alt='logo' className='h-14' /> <span className='text-3xl font-bold tracking-tight' >YouTube</span> </div>
            <h1 className='text-2xl font-bold' >{toggle?"Sign-Up":"Log-In"}</h1>
            {
              toggle?<input ref={name} type='text' className=' rounded p-3 my-4 text-black' placeholder='Enter your Name'  />:null
            }
            <input ref={email} type='email' className=' rounded p-3 my-4 text-black' placeholder='Enter your email'  />
            <input ref={password} type='password' className=' rounded p-3 my-4 text-black'  placeholder='Please Enter your password' / >
            <p className='text-red-600' >{msg}</p>
            <button onClick={handleSubmit} className=' text-lg rounded p-3 my-4 bg-red-700' >{toggle?"Sign Up":"Log In"}</button>
            <p className='text-gray-600' >New to YouTube <span onClick={togglePage} className=' text-blue-500 cursor-pointer' >{toggle?"Log In":"Sign Up"}</span></p>
            </form>
         </div>
    </div>
  )
}

export default RegisterPage