import React, { useContext, useState } from 'react'
import { UserContext } from '../context/usercontext';
import { useNavigate } from 'react-router-dom';

function Input() {
   const {username,setUsername} = useContext(UserContext);
   const [errMessage,setErrMessage] = useState('');
   const navigate = useNavigate();
   const submitForm = (e)=>{
        e.preventDefault();
        if(!username){
            setErrMessage("Username is Required");
        }
        else{
            console.log(username)
            navigate('/home');
        }
    }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-[#77C3FD] via-[#6D7CFD] to-[#B3AAFC]'>
       <div className='w-full md:w-1/2 lg:w-1/3 p-6 md:p-10 rounded-md bg-white flex flex-col justify-center gap-4 shadow-md'>
        <div className=''>
            <h1 className='text-center text-2xl'>Welcome Back!</h1>
            <h1 className='text-gray-400 text-center lg:whitespace-nowrap'>Enter Username and get your Guithub repo Details</h1>
        </div>
         <label htmlFor="username">User Name</label>
         <input className='p-2 border rounded-md' placeholder='Dulqar Salman' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
         {errMessage && <p className='text-red-500'>{errMessage}</p>}
         <button className='p-2 rounded-md bg-blue-500 text-white font-bold' onClick={submitForm}>Submit</button>
       </div>
    </div>)
}

export default Input
