import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addUser,removeUser } from '../utils/userSlice';
import {onAuthStateChanged} from "firebase/auth"
import { auth } from "../utils/firebase";
export const useOnAuthChange=()=>{
    const navigate = useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        
        navigate("/app")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
    
      }
    });
  },[])
}