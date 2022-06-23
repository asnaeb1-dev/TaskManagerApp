import React, { useState } from 'react'
import './ComponentStyles/addtodobutton.css'

import { BiPlus } from 'react-icons/bi'

const AddTodoButton = ( { openAddTodoPopup } ) => {
    return (
        <button onClick={() => openAddTodoPopup()} id='add-todo-main'>
            <BiPlus size={20} />
            <p>Add todo</p>
        </button>
    )
}

export default AddTodoButton
