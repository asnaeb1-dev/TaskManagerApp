import React, {useState} from "react";
import Modal from 'react-modal'
import AddTodoButton from "../Components/AddTodoButton";
import ModalBox from "../Components/ModalBox";
import TodoList from "../Components/TodoList";
import '../Styles/alltodos.css'

const AllTodoScreen = () => {

    const[addTodoPopup, setAddTodoPopup] = useState(false);
    const[isUploadingTodo, setIsUploadingTodo] = useState(false)

    const getTodo = (todo) => {
        console.log(todo);
        //do it only after things are done 
        setIsUploadingTodo(true)
        setTimeout(() => {
            setAddTodoPopup(false)
            setIsUploadingTodo(false)
        }, 5000)
    }
    
    return(
        <div className="all-todos-main">
            <div className="head">
                <h1>Todos</h1>
            </div>
            <div className="main-box">
                <div className="left-part">
                    <TodoList />
                </div>
                <div className="right-part">

                </div>
            </div>
            
            <AddTodoButton openAddTodoPopup={() => setAddTodoPopup(true)}/>
            <ModalBox isUploadingTodo={isUploadingTodo} getTodo={(todo) => getTodo(todo)} isOpen={addTodoPopup}/>
        </div>
    )
}

export default AllTodoScreen