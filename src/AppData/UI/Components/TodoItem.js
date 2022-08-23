import React, { useLayoutEffect } from "react";
import './ComponentStyles/todoitem.css';
import { MdOutlineFavoriteBorder, MdOutlineFavorite, MdEdit, MdDeleteForever } from "react-icons/md";
import { ImCross, ImCheckmark } from 'react-icons/im';
import { BsExclamation } from "react-icons/bs";

import Calendar from "react-calendar";

const TodoItem = ({title = "Lorem ipsum is a great way to do stuff!", 
                    desc = "", 
                    isFavourite = false, 
                    isUrgent = false, 
                    isDone = false, 
                    cardColor = '#f4946f'}) => {

    const boxStyle = { width: '100%', padding: '20px', borderRadius: '30px', background:cardColor }

    return(
        <div className="todo-item-main">
                <div style={boxStyle}  >
                    <div id="todo-item-title-div">
                        {
                            isFavourite?
                                <span id="arrow-icon">
                                    <MdOutlineFavoriteBorder size={20} color={'red'}/>
                                </span>:null
                        }
                        
                        <span id="arrow-icon">
                            {
                                isDone?
                                <ImCheckmark size={20} color={'green'}/>:
                                <ImCross size={15} color={'red'}/>
                            }
                        </span>
                        <span id="arrow-icon">
                            <MdDeleteForever size={20} color={'black'}/>
                        </span>
                        {
                            isUrgent?
                                <span id="arrow-icon">
                                    <BsExclamation size={28} color={'red'}/>
                                </span>:null
                        }
                       
                    </div>
                    <div id="todo-desc">{title.length > 70 ? title.substring(0, 69) +"..." : title }</div>
                    <div id="bottom-bar-todoitem">
                        <div id="time-limit-div">
                            <p id="date-todo">6/6/22 - 7/6/22</p>
                        </div>
                        <div style={{flex: 0.3}}></div>
                        <span id="edit-btn">
                            <MdEdit color="black" size={20} />
                        </span>
                    </div>
                </div>
        </div>
    )
}

export default TodoItem;