import React, {useState, useEffect} from "react";
import { getAllUserDetails, getCurrentUser, saveTodoItemToDB } from "../../Data/API/firebaseLogin";
import Header from "../Components/Header";
import ModalBox from "../Components/ModalBox";
import TodoItem from "../Components/TodoItem";

//import svg
import nodataimg from './../../../nodata.svg';

//toast dependency
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AllTodoScreen = () => {

    const[addTodoPopup, setAddTodoPopup] = useState(false);
    const[isUploadingTodo, setIsUploadingTodo] = useState(false);
    const[todoList, setTodoList] = useState([]);

    const getTodo = (todo) => {
        // console.log(todo);
        //do it only after things are done 
        //mimic upload
        setIsUploadingTodo(true)
        const tempTodoList = todoList;
        tempTodoList.push(todo);
        pushTodoToDB(tempTodoList);
    }

    //function to push data to db.
    const pushTodoToDB = async (todoList ) => {
        const response = await saveTodoItemToDB(todoList, getCurrentUser().uid);
        if(response.error){
            console.log(response.response);
        }else{
            //reload from the db
            const currentUser = getCurrentUser();
            (async (id) => {
                const userDetails = await getAllUserDetails(id);
                if(!userDetails.error){
                    const data = userDetails.response.data();
                    // console.log(data);
                    setTodoList(data.todos);
                }else{
                    console.log("Failed to get items!");
                }
            })
            (currentUser.uid)
        }
        setAddTodoPopup(false)
        setIsUploadingTodo(false)

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

    useEffect(() => {
        const currentUser = getCurrentUser();
        (async (id) => {
            const userDetails = await getAllUserDetails(id);
            if(!userDetails.error){
                const data = userDetails.response.data();
                // console.log(data);
                setTodoList(data.todos);
            }else{
                console.log("Failed to get items!");
            }
        })
        (currentUser.uid)
    }, [])

    return (
        <div className="w-full h-screen">
            <Header title={"Todos"} type={1} openModal={() => setAddTodoPopup(true)} />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-4">
                {
                    todoList.map((todoItem, index) => {
                        return <TodoItem 
                                    key={index}
                                    title={todoItem.title}
                                    desc={todoItem.description}
                                    isDone={todoItem.completionStatus}
                                    isUrgent={todoItem.isUrgent}
                                    isFavourite={todoItem.isFavourite}
                                    startDate={todoItem.startDate}
                                    endDate={todoItem.endDate}
                                    cardColor={todoItem.color}/>
                    })
                }
            </div>  
            <ModalBox 
                isUploadingTodo={isUploadingTodo} 
                getTodo={(todo) => getTodo(todo)} 
                dismiss={() => setAddTodoPopup(false)}
                isOpen={addTodoPopup}/>
            <ToastContainer position='bottom-right'/>
        </div>
    )
}

export default AllTodoScreen