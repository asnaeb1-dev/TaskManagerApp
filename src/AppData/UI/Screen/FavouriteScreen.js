import React, {useEffect} from "react";
import { useState } from "react";
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

const FavouriteScreen = () => {

    const[favouriteList, setFavouriteList] = useState([]);
    const[loading, setLoading] = useState(false);
    
    //ui displayed when there are no items
    const emptyBox = () => {
        return(
            <div className="w-full h-full flex justify-center items-center flex-col">
                <img className="w-1/3 h-1/3 opacity-50" src={nodataimg} alt='No data!' />
                <h3 className="my-4 text-zinc-500">No todos here</h3>
            </div>
        )
    }

    //a grid consisting of todos
    const todoGrid = () => {
        return (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-4 auto-rows-fr">
                {
                    favouriteList.map((todoItem, index) => {
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
                                    // handleClick={(task, index) => handleTodoItemClick(task, index)}
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
                <BounceLoader color={APP_COLOR} loading={loading}/>
                <p className="my-2">Loading</p>
            </div>
        )
    }

    useEffect(() => {
        setLoading(true)
        const user = getCurrentUser();
        (async(id) => {
            const userDetails = await getAllUserDetails(id);
            if(userDetails.error){
                console.log(userDetails.response);
            }else{
                const data = userDetails.response.data();
                const todoList = data.todos.filter(item => item.isFavourite);
                setFavouriteList(todoList);
            }
            setLoading(false)
        })
        (user.uid)
    },[])

    return(
        <div className="w-full h-full overflow-hidden">
            <Header type={2} />
            <div className="w-full sm:h-[85%] md:h-[87%] lg:h-[90%] overflow-y-auto">
                {
                   loading ? loaderUI() : (favouriteList.length !== 0 ? todoGrid() : emptyBox())
                }
            </div>
        </div>
    )
}

export default FavouriteScreen;