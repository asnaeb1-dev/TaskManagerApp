import React, { useEffect, useState } from 'react'

import '../Styles/homescreen.css'
import 'react-pro-sidebar/dist/css/styles.css';
import Sidebar from '../Components/Sidebar';
import AllTodoScreen from './AllTodoScreen';
import FavouriteScreen from './FavouriteScreen';
import SchedulerScreen from './SchedulerScreen';

const HomeScreen = () => {

    const [currentScreen, setCurrentScreen] = useState(0)

    //change the screen based upon the id
    const changeScreen = () => {
        switch(currentScreen){
            case 1: return <AllTodoScreen/>;
            case 2: return <FavouriteScreen/>;
            case 3: return <SchedulerScreen/>;
            default: return <AllTodoScreen/>;
        }
    }

    return (
        <div className='home-main'>
            <Sidebar getItemId={(id) =>  setCurrentScreen(id)} />
            {changeScreen()}
            
        </div>
    )
}

export default HomeScreen
