import React, {useEffect, useState} from 'react'
import '../Styles/loginscreen.css'
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { ClipLoader } from 'react-spinners';
import { css } from "@emotion/react";

import { Link, useLocation } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../img1.svg'
import img2 from '../../../img2.svg'
import img3 from '../../../img3.svg'

import { loginUser } from '../../Data/API/firebaseLogin';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginScreen = () => {

    const navigate = useNavigate();

    //state
    const location = useLocation();
    const[userCreds, setUserCreds] = useState({
        email: "",
        password: ""
    })
    const[loading, setLoading] = useState(false)

    const handleSubmitForm = (event) => {
        event.preventDefault()
        console.log(userCreds);  
        handleLogin()      
    }

    const handleLogin = async() => {
        setLoading(true);
        const user = await loginUser(userCreds.email, userCreds.password);
        if(!user.error){
            navigate('/home');
        }else{
            toast("Failed to login!");
        }
        setLoading(false);
    }

    useEffect(() => {
        //check if user already exists and if it does then move to 
    })

    return (
        <div className='main'>
            <div className='part-1'>
                <h2>Login to Account</h2>
                <form className='login-form' onSubmit={(e) => handleSubmitForm(e)}>
                    <input className='inp-text'  placeholder='Enter email'type={"email"} onChange={(e) => setUserCreds({ email: e.target.value, password:userCreds.password })} />
                    <input minLength={8} className='inp-text' placeholder='Enter password'type={'password'} onChange={(e) => setUserCreds({ email: userCreds.email, password:e.target.value })} />
                    <button className='btn'>
                        <p>Login</p>
                        <ClipLoader color={'blue'} loading={loading} css={css} size={10} />
                    </button>
                </form>
                
                <div className='div-line'>
                    <div className='divider'></div>
                    <p style={{ fontSize: '12px' }}>or</p>
                    <div className='divider'></div>
                </div>
                
                <div className='other-social-media'>
                    <button className='fb-btn'>
                        <BsFacebook size={20} color={'#1773ea'}/>
                    </button>
                    <button className='g-btn'>
                        <BsGoogle size={20} color={'#d73b29'}/>
                    </button>
                </div>

                <div className='directive'>
                    <p>Don't have an account? </p>
                    <p><Link to={"/signup"}> Create Account </Link></p>
                    
                </div>
            </div>
            <div className='part-2'>
                <div className='part-divider'></div>
                <div className='main-part-2'>
					<Carousel showArrows={false} showStatus={false} showIndicators={false} centerMode={false} showThumbs={false} infiniteLoop={true} autoPlay={true} className='carousel'>
						<img alt='use case 1' src={img1} />
						<img alt='use case 2' src={img2} />
						<img alt='use case 3' src={img3} />
					</Carousel>
				</div>
            </div>
            <ToastContainer position='bottom-right'/>
        </div>
    )
}

export default LoginScreen
