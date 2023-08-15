import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './context/usercontext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

function Card() {
    const {username} = useContext(UserContext);
    const [userDetails,setUserdetails] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        if(username){
            axios.get(`https://api.github.com/users/${username}`).then((response)=>{
                setUserdetails(response.data);
            })
        }
        else{
           navigate('/');
        }
    },[navigate, username])
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-[#77C3FD] via-[#6D7CFD] to-[#B3AAFC]'>
        <h1 className='text-3xl text-white font-bold mb-10'>Welcome {userDetails.login}! </h1>
        <div className="w-full p-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex flex-col items-center pb-10">
                <img className="w-32 h-32 mb-3 rounded-full shadow-lg" src={userDetails.avatar_url} alt=""/>
                <h5 className="text-2xl font-bold text-blue-700">{userDetails.login}</h5>
                <div className='shadow-md p-5 w-full'>
                    <p><span className='text-gray-500'>Name: </span>{userDetails.name ? userDetails.name : userDetails.login}</p>
                    <p><span className='text-gray-500'>No. of public repos: </span>{userDetails.public_repos}</p>
                    <p><span className='text-gray-500'>No. of public gists: </span>{userDetails.public_gists}</p>
                    <p><span className='text-gray-500'>Profile created at: </span>{userDetails.created_at ? format(new Date(userDetails.created_at),'yyyy-MM-dd') : ""}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card
