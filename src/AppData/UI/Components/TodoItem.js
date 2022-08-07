import React from "react";
import './ComponentStyles/todoitem.css';
import { MdOutlineFavoriteBorder, MdOutlineFavorite, MdEdit, MdDeleteForever } from "react-icons/md";
import { ImCross, ImCheckmark } from 'react-icons/im';
import { IoIosArrowBack } from "react-icons/io";
const TodoItem = ({title, desc, isFavourite, isDone}) => {

    const test = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
    PageMaker including versions of Lorem Ipsum.`

    return(
        <div className="todo-item-main">
            <div className={!isDone ? "todo-outline-undone": "todo-outline-done"}>
                <div className="todo-box" >
                    <div id="todo-item-title-div">
                        {/* this h3 needs to be here so as not to disturb the rest of the layout */}
                        <h3 id="todo-title">{}</h3>
                        <span id="arrow-icon">
                            <MdOutlineFavoriteBorder size={20} color={'red'}/>
                        </span>
                        <span id="arrow-icon">
                            <ImCheckmark size={20} color={'green'}/>
                        </span>
                        <span id="arrow-icon">
                            <MdDeleteForever size={20} color={'black'}/>
                        </span>
                    </div>
                    <p id="todo-desc">{title.length > 67 ? title.substring(0, 67) +"..." : title }</p>
                    <div id="edit-btn">
                        <MdEdit color="black" size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;