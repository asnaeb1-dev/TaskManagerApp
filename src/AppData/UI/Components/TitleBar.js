import React from 'react'
import AppIcon from '../../../app-icon.png'

import './ComponentStyles/titlebar.css'

const TitleBar = () => {
  return (
    <div className='title-bar'>
        <img src={AppIcon} width='30px' height='30px' />
        <h3>Todo List App</h3>
    </div>
  )
}

export default TitleBar
