import React, { useEffect, useState } from 'react'

import 'react-pro-sidebar/dist/css/styles.css';
import { getCurrentUser } from '../../Data/API/firebaseLogin';
import Sidebar from '../Components/Sidebar';
import AllTodoScreen from './AllTodoScreen';
import FavouriteScreen from './FavouriteScreen';
import SchedulerScreen from './SchedulerScreen';
import UserProfileScreen from './UserProfileScreen';

const HomeScreen = () => {

    const [currentScreen, setCurrentScreen] = useState(0)

    //change the screen based upon the id
    const changeScreen = () => {
        switch(currentScreen){
            case 1: return <AllTodoScreen/>;
            case 2: return <FavouriteScreen/>;
            case 3: return <SchedulerScreen/>;
            case 4: return <UserProfileScreen/>;
            default: return <AllTodoScreen/>;
        }
    }

    return (
        <div className='flex flex-row h-screen w-full'>
            <Sidebar getItemId={id => setCurrentScreen(id)} />
            {changeScreen()}
        </div>
    )
}

export default HomeScreen
