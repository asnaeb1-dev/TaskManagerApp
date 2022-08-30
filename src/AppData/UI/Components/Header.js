import React, { useState } from "react";

import { BsSearch } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import {FaAngleRight} from 'react-icons/fa'

const Header = ({title, type, openModal, getSearchText}) => {

    return(
        <div className="p-4 w-full flex flex-row justify-between">
            <h1 className="font-bold text-2xl lg:text-3xl">{type === 1 ? "Todos": "Favourites"}</h1>
            <form className="w-1/2 mx-5 flex flex-row items-center border-2 border-blue-400 pl-4 pr-1 h-11 rounded-lg" onSubmit={e =>(e.preventDefault(), getSearchText(e.target.searchbox.value))}>
                <BsSearch size={15} color={'rgb(96 165 250)'} />
                <input name="searchbox" className="h-9 border-0 m-0 ml-2 p-0" type={'text'} placeholder={ type === 1? 'Search todos...': "Search favourites..." }/>
                <button className="h-9 w-10 bg-transparent flex items-center border-0 justify-center  hover:border-2">
                    <FaAngleRight size={18} color={'rgb(96 165 250)'} />
                </button>
            </form>
            <div>
                <button className="flex flex-row px-3 m-0 items-center" onClick={() => openModal()}>
                    <IoIosAdd size={30} color={'white'} />
                    <h4 className="hidden lg:block">{type === 1? "Add todo" : "Add favourite"}</h4>        
                </button>
            </div>
            
        </div>
    )
}

export default Header;