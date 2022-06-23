import React, {useState} from "react";
import Modal from 'react-modal'
import AddTodoButton from "../Components/AddTodoButton";
import ModalBox from "../Components/ModalBox";
import '../Styles/alltodos.css'

const AllTodoScreen = () => {

    const[addTodoPopup, setAddTodoPopup] = useState(false);

    return(
        <div className="all-todos-main">
            <h1>Hello</h1>
            <AddTodoButton openAddTodoPopup={() => setAddTodoPopup(true)}/>
            <ModalBox isOpen={addTodoPopup}/>
        </div>
    )
}

export default AllTodoScreen