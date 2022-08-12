import React from "react";

import './ComponentStyles/header.css';
import { BsSearch } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";

const Header = ({title, type, openModal}) => {
    return(
        <div className="header-main">
            <h1 style={{flex: 1, display: 'flex', justifyContent: 'flex-start', marginLeft: '20px'}}>{type === 1 ? "Todos": "Favourites"}</h1>
            <div className="search-bar">
                <BsSearch size={20} color={'black'} />
                <input id="search-inpt" type={'text'} placeholder={ type === 1? 'Search todos...': "Search favourites..." } onChange={e => console.log(e.target.value) } />
            </div>
            <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                <div id="add-todo-bttn" onClick={() => openModal()}>
                    <IoIosAdd size={30} color={'white'} />
                    <h4>{type === 1? "Add todo" : "Add favourite"}</h4>
                </div>
            </div>
            
        </div>
    )
}

export default Header;