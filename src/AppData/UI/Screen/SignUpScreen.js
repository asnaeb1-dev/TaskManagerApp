import React, { useState } from 'react'

// import '../Styles/signupscreen.css'
//loader-css-lib
import { ClipLoader } from 'react-spinners'
import { css } from "@emotion/react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createUserAccount, saveUserToDB } from '../../Data/API/firebaseLogin'

import { useNavigate } from 'react-router-dom'
import { INCONCLUSIVE_ERROR } from '../../Data/Utility/Strings';
import TitleBarLoginScreen from '../Components/TitleBarLoginScreen';

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
			signUpUser(email, password, username)
		}
	}


	const signUpUser = async (email, password, username) => {
		const response = await createUserAccount(email, password)
		if(!response.error){
			const user = response.obj
			// console.log(user);
			if(!user.emailVerified){
				(async() => {
					const response = await saveUserToDB({ email, username, todos:[], creationDate: Date.now(), displayPicture: ''  }, user.uid );
					if(response.error){
						toast(INCONCLUSIVE_ERROR)
						console.log(response.response);
					}else{
						// move to login page
						navigate("/", { state: { isSignUpSuccessful: true } })
					}
				})()
			}else{
				//login user directly and move to home page
			}
		}else{
			toast(response.obj.code)
		}
	}

    return (
		<div className='w-full h-screen flex flex-col'>
			<TitleBarLoginScreen/>
			<div className='h-screen grid md:grid-cols-2 sm:grid-cols-1'>
				<div className='w-full  flex flex-col items-center justify-center'>
				<h2 className='text-3xl sm:text-2xl font-bold'>Create Account</h2>
					<form className='w-2/3' onSubmit={(e) => handleSubmitForm(e)}>
							<input name='username' placeholder='Enter username'type={'text'}  />
							<input name='email' placeholder='Enter email'type={"email"} />
							<input name='password' minLength={8} placeholder='Enter password'type={'password'}/>
							<input name='cnfPassword' minLength={8} placeholder='Confirm password'type={'password'}  />
							<button>
								<p>Create account</p>
								<ClipLoader color={'blue'} loading={isLoading} css={css} size={10} />
							</button>
					</form>
					<div className='flex flex-row my-4'>
						<p>Already have an account?</p>
						<p className='text-blue-400 mx-2 font-bold' onClick={() => navigate("/")} >Login</p>
					</div>
				</div>
				<div className='part-2'>
				</div>
        	</div>
		</div>
    )
}

export default SignUpScreen