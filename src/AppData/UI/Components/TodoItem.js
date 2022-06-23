import React from 'react'
import './ComponentStyles/todoitem.css'

import { RiDeleteBinFill } from 'react-icons/ri'
import { BsHeartFill, BsHeart } from 'react-icons/bs'
import { MdModeEdit } from 'react-icons/md'

const TodoItem = ({ title, desc, isDone, isFavorite, importance }) => {

    const getColorByImportance = (imp) => {
        switch(imp){
            case 1:
                return 'importance-id-severe'
            case 2:
                return 'importance-id-moderate'
            case 3:
            default:
                return 'importance-id-casual'
        }
    }

    return (
        <div className='todo-item'>
            <div className={getColorByImportance(importance)}></div>
            <div className='todo-info'>
                <div id='title-bar'>
                    <h4>{title}</h4>
                </div>
                <div id='desc-box'>
                    <p>{desc}</p>
                </div>
                <div id='console-interact'>
                    <div id='left-half'></div>
                    <div id='right-half'>
                        <div className='item'>
                            <RiDeleteBinFill color={'black'} size={20}/>
                        </div>
                        <div className='item'>
                            {
                                isFavorite?<BsHeartFill color={'red'} size={20}/> : <BsHeart color={'red'} size={20}/>
                            }
                            
                        </div>
                        <div className='item'>
                            <MdModeEdit color={'black'} size={20}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem
