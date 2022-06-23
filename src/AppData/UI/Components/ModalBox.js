import React from 'react'
import AppIcon from '../../../app-icon.png'
import Modal from 'react-modal'


import './ComponentStyles/modalbox.css'
import AddTodoModalUI from './AddTodoModalUI'

const ModalBox = ({isOpen}) => {

    const customStyle =  {
        content:{
            border: '2px solid black',
            borderRadius: '0px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '50vw',
            height: '60vh',
            background: 'rgba(0,0,0,0.05)',
            padding: '0px'
        }
    }

    return (
        <Modal style={customStyle} isOpen={isOpen} >
            <AddTodoModalUI/>
        </Modal>
    )
}

export default ModalBox
