import React from 'react'
import './ComponentStyles/addtodomodalui.css'
import { Checkbox } from 'semantic-ui-react'

const AddTodoModalUI = () => {
    return (
        <div className='add-todo-modal-ui'>
            <h3>Add new task</h3>
            <form className='add-todo-form'>
                <input className='inp-text' type={'text'} minLength={8} maxLength={50} placeholder='Enter task title' />
                <textarea className='textarea' minLength={8} maxLength={500} placeholder='Enter a task description... '></textarea>
            </form>

        </div>
    )
}

export default AddTodoModalUI
