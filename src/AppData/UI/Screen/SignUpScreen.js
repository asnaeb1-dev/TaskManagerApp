import React, { useState } from 'react'

import '../Styles/signupscreen.css'
//loader-css-lib
import { ClipLoader } from 'react-spinners'
import { css } from "@emotion/react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../img1.svg'
import img2 from '../../../img2.svg'
import img3 from '../../../img3.svg'

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createUserAccount } from '../../Data/API/firebaseLogin'
import { async } from '@firebase/util';

import { useNavigate } from 'react-router-dom'

const SignUpScreen = () => {

	const INCORRECT_PASSWORD = "Passwords don't match"
	const FIELDS_ARE_EMPTY = "Cannot leave fields empty"


	const navigate = useNavigate()
	const [isLoading, setLoading] = useState(false)

	const handleSubmitForm = (e) => {
		e.preventDefault();
		const username = e.target.username.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const cnfPassword = e.target.cnfPassword.value;

		if(username === "" || email === ""){
			toast(FIELDS_ARE_EMPTY)
		}else if(password !== cnfPassword){
			toast(INCORRECT_PASSWORD)
		}else{
			//initiate signup
			signUpUser(email, password)
		}
	}


	const signUpUser = async (email, password) => {
		const response = await createUserAccount(email, password)
		if(!response.error){
			const user = response.obj
			if(!user.emailVerified){
				//move to login page
				navigate("/login", { state: { isSignUpSuccessful: true } })
			}else{
				//login user directly and move to home page
			}
		}else{
			toast(response.obj.code)
		}
	}

    return (
        <div className='main-su'>
            <div className='part-1 '>
              <h2>Create Account</h2>
                  <form className='login-form' onSubmit={(e) => handleSubmitForm(e)}>
				  	  	<input name='username' className='inp-text' placeholder='Enter username'type={'text'}  />
                      	<input name='email' className='inp-text'  placeholder='Enter email'type={"email"} />
                      	<input name='password' minLength={8} className='inp-text' placeholder='Enter password'type={'password'}/>
					  	<input name='cnfPassword' minLength={8} className='inp-text' placeholder='Confirm password'type={'password'}  />
					  	<button className='btn'>
                          	<p>Create account</p>
                          	<ClipLoader color={'blue'} loading={isLoading} css={css} size={10} />
                      	</button>
                  </form>
				  <div id='directive'>
					<p>Already have an account?</p>
					<p onClick={() => navigate("/login")} >Login</p>
				</div>
              </div>
            <div className='part-2'>
				<div className='part-divider'></div>
				<div className='main-part-2'>
					<Carousel  showArrows={false} showStatus={false} showIndicators={false} centerMode={false} showThumbs={false} infiniteLoop={true} autoPlay={true} className='carousel'>
						<img alt='' src={img1} />
						<img alt='' src={img2} />
						<img alt='' src={img3} />
					</Carousel>
				</div>
				
            </div>
			<ToastContainer position='bottom-right'/>
        </div>
    )
}

export default SignUpScreen