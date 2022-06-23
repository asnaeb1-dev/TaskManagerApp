import React from 'react'

import './ComponentStyles/todolist.css'
import TodoItem from './TodoItem'

const TodoList = () => {

    const data = [
        {
            title: "Feed the dogs",
            desc:"Your recruiter, GeekyAnts India Pvt Ltd, has submitted your resume for GeekyAnts India Pvt Ltd.",
            isDone: false,
            importance: 1,
            isFavorite: false
        },{
            title: "Pick up groceries",
            desc:"Your recruiter, GeekyAnts India Pvt Ltd, has submitted your resume for GeekyAnts India Pvt Ltd.",
            isDone: true,
            importance: 2,
            isFavorite: true
        },{
            title: "Learn react js",
            desc:"Your recruiter, GeekyAnts India Pvt Ltd, has submitted your resume for GeekyAnts India Pvt Ltd.",
            isDone: false,
            importance: 3,
            isFavorite: false
        },{
            title: "Water the plants",
            desc:"Your recruiter, GeekyAnts India Pvt Ltd, has submitted your resume for GeekyAnts India Pvt Ltd.",
            isDone: true,
            importance: 1,
            isFavorite: true
        }
    ]

    return (
        <div className='todo-list'>
            {
                data.map(todo => {
                    return <TodoItem 
                                title={todo.title} 
                                desc={todo.desc}
                                isDone={todo.isDone}
                                importance={todo.importance}
                                isFavorite={todo.isFavorite}/>
                })
            }   
        </div>
    )
}

export default TodoList
