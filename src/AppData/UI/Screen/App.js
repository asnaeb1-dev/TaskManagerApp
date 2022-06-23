import React from 'react'
import TitleBar from '../Components/TitleBar'

import '../Styles/App.css'
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import { Routes, Route, Link } from "react-router-dom";
import HomeScreen from './HomeScreen'


const App = () => {
  	return (
    	<div className='App'>
			{/* <TitleBar/> */}
			<HomeScreen/>
			{/* <Routes>
				<Route path='/login' element={<LoginScreen/>} />
				<Route path="/signup" element={<SignUpScreen/>}/>
			</Routes> */}
    	</div>
  	)
}

export default App

