import React, {useState} from "react";
import Modal from 'react-modal'
import Header from "../Components/Header";
import ModalBox from "../Components/ModalBox";
import TodoItem from "../Components/TodoItem";
import '../Styles/alltodos.css'

//import svg
import nodataimg from './../../../nodata.svg';

const AllTodoScreen = () => {

    const[addTodoPopup, setAddTodoPopup] = useState(false);
    const[isUploadingTodo, setIsUploadingTodo] = useState(false);
    const[todoList, setTodoList] = useState([1, 1, 1, 1]);

    const getTodo = (todo) => {
        console.log(todo);
        //do it only after things are done 
        setIsUploadingTodo(true)
        //mimic upload
        setTimeout(() => {
            setAddTodoPopup(false)
            setIsUploadingTodo(false)
        }, 5000)
    }
    
    //this is the UI for when there is nothing to display
    const emptyBox = () => {
        const emptyBoxStyle = {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            opacity: '0.6'
        }

        const imgBox = {
            width:'30%',
            height: '30%',
        }

        return(
            <div style={emptyBoxStyle}>
                <img style={imgBox} src={nodataimg} alt='No data!' />
                <h3>No todos here</h3>
            </div>
        )
    }

    return(
        <div className="all-todos-main">
            <Header title={"Todos"} type={2}/>
            {
                todoList.length !== 0 ? 
                    <div className="main-box">
                    {
                        todoList.map(item => {
                            return <TodoItem isDone={false} title={"Water the lawn and do stuff and then get food for the family for dinner"} />
                        })
                    }
                    </div>:
                    emptyBox()
            }
            
            <ModalBox 
                isUploadingTodo={isUploadingTodo} 
                getTodo={(todo) => getTodo(todo)} 
                dismiss={() => setAddTodoPopup(false)}
                isOpen={addTodoPopup}/>
        </div>
    )
}

export default AllTodoScreen