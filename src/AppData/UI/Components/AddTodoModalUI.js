import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners';
import { ImCross, ImCheckmark } from 'react-icons/im'
import Switch from 'react-switch';

import { css } from "@emotion/react";

import { ToastContainer, toast } from 'react-toastify';

const AddTodoModalUI = ({ addTodo, isUploadingTodo, dismiss }) => {

    const colors = ['#f4c268', '#f4946f', '#ad8cf2', '#02caf2', '#d9e587', '#f74f4f', '#77dc7e', '#ffc0cb', '#89b7f7'];
    const[letterCount, setLetterCount] = useState(60)
    const[currentColor, setCurrentColor] = useState(0);
    
    const[switchStatus, setSwitchStatus] = useState({
        favSwitch: false,
        urgentSwitch: false,
        isDoneSwitch: false
    })

    const handleTodoDataSubmit = (e) => {
        e.preventDefault();
        const user = {
            title: e.target.todotitle.value.toLowerCase(),
            description: e.target.tododesc.value.toLowerCase(),
            completionStatus: switchStatus.isDoneSwitch,
            startDate: e.target.startdate.value,
            endDate: e.target.enddate.value,
            color: colors[currentColor],
            isFavourite: switchStatus.favSwitch,
            isUrgent: switchStatus.urgentSwitch
        }
        addTodo(user)
    }

    return (
        <div className='w-full h-full flex flex-col bg-zinc-100 p-4 '>
            <div className='flex flex-row items-center px-3'>
                <h1 className='text-2xl sm:text-xl flex-1'>Add task</h1>
                <span onClick={() => dismiss()}>
                    <ImCross size={15} color={'rgb(96, 165, 260)'} />
                </span>
            </div>
            <form className='w-full h-full py-3 px-3 flex flex-col' onSubmit={e => handleTodoDataSubmit(e) }>
                <div className='flex flex-row items-center my-4'>
                    <input disabled={isUploadingTodo} name='todotitle' placeholder='Title' className='w-1/2 m-0' maxLength={60}  onChange={(e) => setLetterCount(60 - e.target.value.length)} />
                    <p className='text-blue-400 mx-4'>{letterCount}</p>
                </div>
                <div className='w-1/2 h-10 grid my-2  sm:grid-cols-3 lg:grid-cols-7 gap-1' onClick={e => setCurrentColor(Number(e.target.id))}>
                    <div id='0' className='bg-[#f4c268] w-6 h-6 rounded-3xl mx-2 flex justify-center items-center'> {currentColor === 0? <ImCheckmark size={10} color={'black'} /> : null} </div>
                    <div id='1' className='bg-[#f4946f] w-6 h-6 rounded-3xl mx-2 flex justify-center items-center'> {currentColor === 1? <ImCheckmark size={10} color={'black'} /> : null} </div>
                    <div id='2' className='bg-[#ad8cf2] w-6 h-6 rounded-3xl mx-2 flex justify-center items-center'> {currentColor === 2? <ImCheckmark size={10} color={'black'} /> : null} </div>
                    <div id='3' className='bg-[#02caf2] w-6 h-6 rounded-3xl mx-2 flex justify-center items-center'> {currentColor === 3? <ImCheckmark size={10} color={'black'} /> : null} </div>
                    <div id='4' className='bg-[#d9e587] w-6 h-6 rounded-3xl mx-2 flex justify-center items-center'> {currentColor === 4? <ImCheckmark size={10} color={'black'} /> : null} </div>
                    <div id='5' className='bg-[#ffc0cb] w-6 h-6 rounded-3xl mx-2 flex justify-center items-center'> {currentColor === 5? <ImCheckmark size={10} color={'black'} /> : null} </div>
                    <div id='6' className='bg-[#89b7f7] w-6 h-6 rounded-3xl mx-2 flex justify-center items-center'> {currentColor === 6? <ImCheckmark size={10} color={'black'} /> : null} </div>
                </div>
                <div className='w-full flex flex-row'>
                    <div className='flex-1 flex flex-row items-center justify-center'>
                        <p>Completed</p>
                        <Switch className='mx-2' disabled={isUploadingTodo} checked={switchStatus.isDoneSwitch} onChange={() => setSwitchStatus({...switchStatus, isDoneSwitch: !switchStatus.isDoneSwitch})} />
                    </div>
                    <div className='flex-1 flex flex-row items-center justify-center'>
                        <p>Urgent</p>
                        <Switch checked={switchStatus.urgentSwitch} onChange={() => setSwitchStatus({...switchStatus, urgentSwitch: !switchStatus.urgentSwitch})} className='mx-2' disabled={isUploadingTodo} />
                    </div>                   
                    <div className='flex-1 flex flex-row items-center justify-center'>
                        <p>Favourite</p>
                        <Switch className='mx-2' checked={switchStatus.favSwitch} onChange={() => setSwitchStatus({...switchStatus, favSwitch: !switchStatus.favSwitch})}  disabled={isUploadingTodo} />
                    </div>                
                </div>
                <div className='flex flex-row my-4'>
                    <input disabled={isUploadingTodo} name='startdate' type={'date'} placeholder='From date' className='my-0 mr-2'/>
                    <input disabled={isUploadingTodo} name='enddate' type={'date'} placeholder='From date' className='my-0'/>
                </div>
                <textarea disabled={isUploadingTodo} name='tododesc' className='w-full min-h-[30%] resize-none p-2' placeholder='Description'></textarea>
                <div className='w-full my-4 px-4 flex bg-blue-400 flex-row items-center justify-center border-2 border-blue-400 h-11 rounded-md hover:bg-transparent'>
                    <button disabled={isUploadingTodo} className='bg-transparent border-0'>Add task</button>
                    <ClipLoader color={'red'} loading={isUploadingTodo} css={css} size={20} />
                </div>
            </form>
        </div>
    )
}

export default AddTodoModalUI;
