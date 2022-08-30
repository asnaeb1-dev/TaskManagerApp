import React, {useEffect, useState, useLayoutEffect} from 'react'
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { ClipLoader } from 'react-spinners';
import { css } from "@emotion/react";

import { Link, useNavigate } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../img1.svg'

import img2 from '../../../img2.svg'
import img3 from '../../../img3.svg'

import { getCurrentUser, loginUser, saveUserToDB } from '../../Data/API/firebaseLogin';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isNetworkConnected } from '../../Data/Utility/Util';
import { CONNECTION_FAILURE } from '../../Data/Utility/Strings';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import TitleBarLoginScreen from '../Components/TitleBarLoginScreen';


const LoginScreen = () => {

    const navigate = useNavigate();
    const[userCreds, setUserCreds] = useState({
        email: "",
        password: ""
    })
    const[loading, setLoading] = useState(false)
    const[isConnAvailable, setConnectionAvailable] = useState(false)

    //this function handles all the cases before making an API call.
    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log(userCreds);
        //check if connection is available
        if(isConnAvailable){
            //check if fields are empty
            if(userCreds.email === "" || userCreds.password === ""){
                toast("Cannot leave fields empty!");
            }else{
                handleLogin()      
            } 
        }else{
            toast(CONNECTION_FAILURE);
        }
    }

    const handleLogin = async() => {
        setLoading(true);
        const user = await loginUser(userCreds.email, userCreds.password);
        console.log(user.response);
        if(!user.error){
            navigate('/home');
        }else{
            toast("Failed to login!");
        }
        setLoading(false);
    }

    useEffect(() => {
        
    },[])


    useLayoutEffect(() => {
        const connectionStatus = isNetworkConnected();
        if(!connectionStatus){
            toast(CONNECTION_FAILURE);
        }else{
            //get current user if available
            onAuthStateChanged(getAuth(), user => {
                if(user){
                    navigate("/home")
                }
            })
        }
        setConnectionAvailable(connectionStatus)
    },[])

    return (
        <div className='flex flex-col w-full h-screen'>
            <TitleBarLoginScreen/>
            <div className='flex-1 h-screen grid md:grid-cols-2 sm:grid-cols-1'>
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <h2 className='font-bold lg:text-3xl sm:text-2xl my-4 '>Login to Account</h2>
                    <form className='w-2/3' onSubmit={(e) => handleSubmitForm(e)}>
                        <input className='w-full h-11 px-4 text-sm rounded-md mt-4 outline-none border-blue-400 border-2'  placeholder='Enter email'type={"email"} onChange={(e) => setUserCreds({ email: e.target.value, password:userCreds.password })} />
                        <input minLength={8} className='w-full h-11 px-4 text-sm rounded-md mt-4 border-blue-400 outline-none  border-2' placeholder='Enter password'type={'password'} onChange={(e) => setUserCreds({ email: userCreds.email, password:e.target.value })} />
                        <button className='mt-4'>
                            <p>Login</p>
                            <ClipLoader color={'blue'} loading={loading} css={css} size={10} />
                        </button>
                    </form>
                    
                    <div className='w-1/2 rounded-3xl h-[1.5px] my-4 bg-blue-400'>
                    </div>
                    
                    <div className='w-2/3 flex flex-row h-10 mb-4'>
                        <button className='w-full mx-2 px-4 flex flex-row items-center  rounded-lg bg-slate-200 border-slate-200'>
                            <BsFacebook size={20} color={'#1773ea'}/>
                            <h1 className='font-bold w-full mr-3 text-blue-700'>Facebook</h1>
                        </button>
                        <button className='w-full mx-2 px-4 flex flex-row items-center rounded-lg bg-slate-200 border-slate-200'>
                            <BsGoogle size={20} color={'#d73b29'}/>
                            <h1 className='font-bold w-full mr-3 text-red-600'>Google</h1>
                        </button>
                    </div>

                    <div className='w-2/3 flex flex-row justify-center mt-6'>
                        <p className='text-md'>Don't have an account? </p>
                        <p className='text-md mx-2 text-blue-400'><Link to={"/signup"}> Create Account </Link></p>
        
                    </div>
                </div>
                <ToastContainer position='bottom-right'/>
            </div>
        </div>
        
    )
}

export default LoginScreen
