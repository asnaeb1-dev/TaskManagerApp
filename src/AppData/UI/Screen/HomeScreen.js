import React, { useState } from 'react'

import '../Styles/homescreen.css'
import 'react-pro-sidebar/dist/css/styles.css';
import Sidebar from '../Components/Sidebar';
import AllTodoScreen from './AllTodoScreen';

const HomeScreen = () => {

    const [currentScreen, setCurrentScreen] = useState()

    return (
        <div className='home-main'>
            <Sidebar getItemId={(id) =>  setCurrentScreen(id)} />
            <AllTodoScreen/>
        </div>
    )
}

export default HomeScreen
