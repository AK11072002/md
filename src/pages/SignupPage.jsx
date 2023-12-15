import React, {useEffect} from 'react'
import{useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'  
import Signup from '../components/Signup/Signup.jsx';
const SignupPage = () => {
  const navigate=useNavigate();
  const {isAuthenticate}= useSelector((state)= state.user);
  <useEffect>{()=>{
    if(isAuthenticate===true){
      navigate("/")
      window.Location.reload(true);
    }
    }}</useEffect> 
  return (
    <div>
        <Signup/>
    </div>
  )
}

export default SignupPage