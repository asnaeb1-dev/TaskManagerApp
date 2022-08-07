import React, { useState } from 'react'
import './ComponentStyles/addtodomodalui.css'
import { Checkbox } from 'semantic-ui-react'
import { ClipLoader } from 'react-spinners'
import { ImCross } from 'react-icons/im'

const AddTodoModalUI = ({ addTodo, isUploadingTodo, dismiss }) => {


    const[checked, setChecked] = useState(false)
    const submitTodo = (e) => {
        e.preventDefault();

        const todotitle = e.target.tasktitle.value
        const tododesc = e.target.taskdesc.value
        const isTodoDone = e.target.isTaskDone.value

        addTodo({ todotitle, tododesc, isTodoDone })

    }

    return (
        <div className='add-todo-modal-ui'>
            <div className='modal-title-box'>
                <h3>Add new task</h3>
                <span onClick={() => dismiss()} id='cross-icon'><ImCross size={15} color={'black'} /></span>
            </div>
            <form onSubmit={(e) => submitTodo(e)} className='add-todo-form'>
                <input name='tasktitle' className='inp-text' type={'text'} minLength={8} maxLength={50} placeholder='Enter task title' />
                <textarea name='taskdesc' spellCheck={true} className='textarea' minLength={8} maxLength={500} placeholder='Enter a task description... '></textarea>
                <div className='is-done-task-div'>
                    <p>Completion status </p>
                    <label class="switch">
                        <input onChange={(e) => setChecked(e.target.checked)} checked={checked} name='isTaskDone' type="checkbox"/>
                        <span className="slider"></span>
                    </label>
                    <p>{checked ? "Done": "Undone"}</p>                    
                </div>
                <button className='newbtn' disabled = {isUploadingTodo}>
                    <p>{isUploadingTodo ? "Adding task..." : "Add task"}</p>
                    <ClipLoader color={'blue'} loading={isUploadingTodo} size={10} />
                </button>
            </form>
        </div>
    )
}

export default AddTodoModalUI
