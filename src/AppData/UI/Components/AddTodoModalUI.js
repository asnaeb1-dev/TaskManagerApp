import React, { useState } from 'react'
import './ComponentStyles/addtodomodalui.css'
import { Checkbox } from 'semantic-ui-react'
import { ClipLoader } from 'react-spinners';
import { css } from "@emotion/react";
import { ImCross, ImPlus } from 'react-icons/im'
import Switch from 'react-switch';
import Calendar from 'react-calendar';


const AddTodoModalUI = ({ addTodo, isUploadingTodo, dismiss }) => {

    const colors = ['#f4c268', '#f4946f', '#ad8cf2', '#02caf2', '#d9e587', '#f74f4f', '#77dc7e', 'pink', '#89b7f7'];
    const[letterCount, setLetterCount] = useState(60)
    const[currentColor, setCurrentColor] = useState(0);
    const[isChecked, setChecked] = useState(false);
    
    const handleTodoDataSubmit = (e) => {
        e.preventDefault();
        const user = {
            title: e.target.todotitle.value,
            description: e.target.tododesc.value,
            completionStatus: isChecked,
            startDate: "",
            endDate: "",
            color: colors[currentColor]
        }
        addTodo(user)
    }

    return (
        <div className='w-full h-full flex flex-col bg-zinc-100 p-4 '>
            <div className='flex flex-row items-center px-3'>
                <h1 className='text-2xl sm:text-xl flex-1'>Add task</h1>
                <span>
                    <ImCross size={15} color={'rgb(96, 165, 260)'} />
                </span>
            </div>
            <form className='w-full px-3 flex flex-col'>
                <div className='flex flex-row items-center my-4'>
                    <input placeholder='Title' className='w-1/2 m-0' maxLength={60}  onChange={(e) => setLetterCount(60 - e.target.value.length)} />
                    <p className='text-blue-400 mx-4'>{letterCount}</p>
                    <Switch disabled={isUploadingTodo} checked={isChecked} onChange={() => setChecked(!isChecked)} />
                </div>
                <div className='w-full h-10 flex flex-row my-2'>
                    <div className='bg-[#f4c268] w-6 h-6 rounded-3xl mx-2'></div>
                    <div className='bg-[#f4946f] w-6 h-6 rounded-3xl mx-2'></div>
                    <div className='bg-[#ad8cf2] w-6 h-6 rounded-3xl mx-2'></div>
                    <div className='bg-[#02caf2] w-6 h-6 rounded-3xl mx-2'></div>
                    <div className='bg-[#d9e587] w-6 h-6 rounded-3xl mx-2'></div>
                    <div className='bg-[pink] w-6 h-6 rounded-3xl mx-2'></div>
                    <div className='bg-[#89b7f7] w-6 h-6 rounded-3xl mx-2'></div>
                </div>
                <div className='flex flex-row my-4'>
                    <input type={'date'} placeholder='From date' className='my-0'/>
                    <input type={'date'} placeholder='From date' className='my-0'/>
                </div>
                <textarea className='w-full max-h-[30%]'></textarea>

            </form>
        </div>
    )
}

export default AddTodoModalUI;
