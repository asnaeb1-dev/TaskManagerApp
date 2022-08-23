import React from 'react'

import AppIcon from '../../../app-icon.png'

const TitleBarLoginScreen = () => {
  return (
    <div className='w-full h-16  flex flex-row items-center px-5'>
        <img src={AppIcon} className='w-10 h-10 sm:w-8 sm:h-8 ' />
        <h1 className='text-xl sm:text-sm mx-2 font-bold '>Notes App</h1>
    </div>
  )
}

export default TitleBarLoginScreen