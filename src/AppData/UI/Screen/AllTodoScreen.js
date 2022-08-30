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

import { APP_COLOR, INCONCLUSIVE_ERROR, UPLOAD_CONFIRMATION } from "../../Data/Utility/Strings";
import { BounceLoader } from "react-spinners";
import EditorModalUI from "../Components/EditorModalUI";


const AllTodoScreen = () => {

    const[addTodoPopup, setAddTodoPopup] = useState(false);
    const[isUploadingTodo, setIsUploadingTodo] = useState(false);
    const[todoList, setTodoList] = useState([1,1,1,1]);
    const[loadingTodos, setLoadingTodos] = useState(false);
    const[editModalOpen, setEditModalOpen] = useState(false);

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
            toast(INCONCLUSIVE_ERROR)
        }else{
            //toast
            toast(UPLOAD_CONFIRMATION);
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
        return(
            <div className="w-full h-full flex justify-center items-center flex-col">
                <img className="w-1/3 h-1/3 opacity-50" src={nodataimg} alt='No data!' />
                <h3 className="my-4 text-zinc-500">No todos here</h3>
            </div>
        )
    }

    const handleTodoItemClick= (task) => {
        if(task === "edit"){
            setEditModalOpen(true);
        }
    }

    //this is the UI which shows the grid
    const todoGrid = () => {
        return (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-4 auto-rows-fr">
                {
                    todoList.map((todoItem, index) => {
                        return <TodoItem 
                                    key={index}
                                    index={index}
                                    title={todoItem.title}
                                    desc={todoItem.description}
                                    isDone={todoItem.completionStatus}
                                    isUrgent={todoItem.isUrgent}
                                    isFavourite={todoItem.isFavourite}
                                    startDate={todoItem.startDate}
                                    endDate={todoItem.endDate}
                                    handleClick={task => handleTodoItemClick(task)}
                                    cardColor={todoItem.color}/>
                    })
                }
            </div>  
        )
    }

    //loader UI
    const loaderUI = () => {
        return(
            <div className="w-full h-full flex justify-center items-center flex-col">
                <BounceLoader color={APP_COLOR} loading={loadingTodos}/>
                <p className="my-2">Loading</p>
            </div>
        )
    }
    useEffect(() => {
        // setLoadingTodos(true);
        // const currentUser = getCurrentUser();
        // (async (id) => {
        //     const userDetails = await getAllUserDetails(id);
        //     if(!userDetails.error){
        //         const data = userDetails.response.data();
        //         // console.log(data);
        //         setTodoList(data.todos);
        //     }else{
        //         console.log("Failed to get items!");
        //     }
        //     setLoadingTodos(false);
        // })
        // (currentUser.uid)
    }, [])

    const triggerSearch = (text) => {
        const searchList = todoList.filter(todoItem => todoItem.title.includes(text));
        console.log(searchList);
        setTodoList(searchList);
    }

    return (
        <div className="w-full h-full overflow-hidden">
            <Header 
                title={"Todos"} 
                type={1} 
                openModal={() => setAddTodoPopup(true)} 
                getSearchText={text => triggerSearch(text)} />
                <div className="w-full sm:h-[85%] md:h-[87%] lg:h-[90%] overflow-y-auto">
                    {
                        loadingTodos ? loaderUI() : (todoList.length !== 0 ? todoGrid() : emptyBox())
                    }
                </div>
                
            <ModalBox 
                isUploadingTodo={isUploadingTodo} 
                getTodo={(todo) => getTodo(todo)} 
                
                dismiss={() => setAddTodoPopup(false)}
                isOpen={addTodoPopup}/>
            
            <EditorModalUI
                isOpen={editModalOpen}
                dismiss={() => setEditModalOpen(false)}
            />
            <ToastContainer position='bottom-right'/>
        </div>
    )
}

export default AllTodoScreen