import React from 'react'
import AppIcon from '../../../app-icon.png'
import Modal from 'react-modal'


import './ComponentStyles/modalbox.css'
import AddTodoModalUI from './AddTodoModalUI'
import EditorModalUI from './EditorModalUI'

const ModalBox = ({isOpen, getTodo, isUploadingTodo, dismiss}) => {

    const customStyle =  {
        content:{
            borderRadius: '20px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '40vw',
            height: '75vh',
            background: 'white',
            padding: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }
    }

    return (
        <Modal ariaHideApp={false} style={customStyle} isOpen={isOpen} >
                <AddTodoModalUI
                    dismiss={dismiss}
                    isUploadingTodo={ isUploadingTodo } 
                    addTodo={(todoObject) => getTodo(todoObject)}/>
                <EditorModalUI/>
        </Modal>
    )
}

export default ModalBox
