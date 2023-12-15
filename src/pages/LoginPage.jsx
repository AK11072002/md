import React, {useEffect} from 'react'
import{useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Login from '../components/Login/Login.jsx';
const LoginPage = () => {
  const navigate=useNavigate();
  const {isAuthenticate}= useSelector((state)= state.user);
  <useEffect>{()=>{
    if(isAuthenticate===true){
      navigate("/")
    }
    }}</useEffect>  
  return (
    <div><Login/></div>
  )
}

export default LoginPage;