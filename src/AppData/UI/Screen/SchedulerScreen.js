import React, { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import Header from "../Components/Header";
import TodoItem from "../Components/TodoItem";

import '../Styles/schedulerscreen.css'
// import 'react-calendar/dist/Calendar.css';
const SchedulerScreen = () => {

    const[currentDate, setCurrentDate] = useState();
    const[todoList, setTodoList] = useState([1])

    useEffect(() => {
        console.log(Date.now());
    })

    return(
        <div className="scheduler-screen-main">
            <Header title={"Calender"} type={'3'}  />
            <div className="scheduler-screen-box">
                <div className="scheduler-screen-left-half">
                    <Calendar
                        onChange={value => console.log(value) }
                        calendarType="US"/>
                </div>
                <div className="scheduler-screen-right-half">
                    <div className="todo-based-on-date">
                        {
                            todoList.map(item => {
                                return <TodoItem/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchedulerScreen;