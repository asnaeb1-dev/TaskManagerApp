import React from 'react'
import TitleBar from '../Components/TitleBar'

import '../Styles/App.css'
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import { Routes, Route, Link } from "react-router-dom";
import HomeScreen from './HomeScreen'
import SchedulerScreen from './SchedulerScreen'
import TitleBarLoginScreen from '../Components/TitleBarLoginScreen'

const App = () => {
  	return (
    	<div className='App'>
			{/* <Routes>
				<Route path='/' element={<LoginScreen/>} />
				<Route path="/signup" element={<SignUpScreen/>}/>
				<Route path="/home" element={<HomeScreen />}/>
			</Routes> */}
			<HomeScreen />
    	</div>
  	)
}

export default App

