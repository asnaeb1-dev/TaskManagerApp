import React from "react";
import './ComponentStyles/todoitem.css';
import { MdOutlineFavoriteBorder, MdOutlineFavorite, MdEdit, MdDeleteForever } from "react-icons/md";
import { ImCross, ImCheckmark } from 'react-icons/im';
import { BsExclamation } from "react-icons/bs";

const TodoItem = ({title, desc, isFavourite, isUrgent, isDone}) => {
    return(
        <div className="todo-item-main">
            <div className={!isDone ? "todo-outline-undone": "todo-outline-done"}>
                <div className="todo-box" >
                    <div id="todo-item-title-div">
                        {/* this h3 needs to be here so as not to disturb the rest of the layout */}
                        <span id="arrow-icon">
                            <MdOutlineFavoriteBorder size={20} color={'red'}/>
                        </span>
                        <span id="arrow-icon">
                            <ImCheckmark size={20} color={'green'}/>
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
        </div>
    )
}

export default TodoItem;