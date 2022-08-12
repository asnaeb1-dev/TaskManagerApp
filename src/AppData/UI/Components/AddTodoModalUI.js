import React, { useState } from 'react'
import './ComponentStyles/addtodomodalui.css'
import { Checkbox } from 'semantic-ui-react'
import { ClipLoader } from 'react-spinners';
import { css } from "@emotion/react";
import { ImCross, ImPlus } from 'react-icons/im'
import Switch from 'react-switch';

const AddTodoModalUI = ({ addTodo, isUploadingTodo, dismiss }) => {

    const colors = ['#f4c268', '#f4946f', '#ad8cf2', '#02caf2', '#d9e587', '#f74f4f', '#77dc7e', 'pink', '#89b7f7'];
    const[currentColor, setCurrentColor] = useState(0);
    const[isChecked, setChecked] = useState(false);
    //these are the styles 
    const getItemStyle = (color) => {
        return  {width: '25px', 
                height:'25px',
                marginLeft: '10px',
                marginRight: '10px',
                backgroundColor: color,
                borderRadius: '100%' };
    }
    
    const getItemStyleSelected = (color) => {
        return {width: '30px', 
                height:'30px',
                marginLeft: '10px',
                marginRight: '10px',
                backgroundColor: color,
                boxShadow: '1px 3px 18px #888888',
                borderRadius: '100%' };
    }

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
        <div className='todo-modal'>
            <div id='todo-modal-title-div'>
                <h3 style={{margin: '0px', flex: 1}}>Add Todo</h3>
                <div id='dismiss-btn' onClick={() => dismiss()}>
                    <ImCross size={18} color={'black'} />
                </div>
            </div>
            <div className='color-chooser'>
                {
                    colors.map((item, index) => {
                        return <div onClick={() => setCurrentColor(index)} id='item-index' key={index} style={currentColor === index ? getItemStyleSelected(item) : getItemStyle(item)} ></div>
                    })
                }
            </div>
            <form className='todo-form' onSubmit={e => handleTodoDataSubmit(e)}>
                <div id='title-text-div'>
                    <input disabled={isUploadingTodo} type={'text'} name='todotitle' id='title-inp' placeholder='Enter title...'  />
                    <label style={{flex: 1, justifyContent: 'flex-end', display:'flex', alignItems:'center'}}>
                        <p style={{marginRight: '10px', fontSize: '13px'}}>{isChecked? 'Completed' : "Incomplete"}</p>
                        <Switch  disabled={isUploadingTodo} checked={isChecked} onChange={() => setChecked(!isChecked)} />
                    </label>
                </div>
                <div id='desc-div'>
                    <textarea disabled={isUploadingTodo} name='tododesc' placeholder='Enter description...' id='desc-inp'></textarea>
                </div>
                <div id='time-limit-div-todo-box'>
                    <div className='from-date-div'>
                        <p>22nd November, 2021</p>
                    </div>
                    <p>-</p>
                    <div className='from-date-div'>
                        <p>30th November, 2021</p>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection:'row', justifyContent: 'flex-end' }}>
                    <button disabled={isUploadingTodo} id='submit-todo-btn'>
                        {
                            !isUploadingTodo?
                                <ImPlus size={15} color={'black'} />:
                                <ClipLoader color={'black'} loading={isUploadingTodo} css={css} size={15} />
                        }
                    </button>
                </div>
            </form>
            
        </div>
    )
}

export default AddTodoModalUI;
