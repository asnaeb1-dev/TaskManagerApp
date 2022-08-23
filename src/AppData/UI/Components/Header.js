import React, { useState } from "react";

import { BsSearch } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";

const Header = ({title, type, openModal}) => {

    const[sizeOffSet, setSizeOffSet] = useState(true)

    return(
        <div className="p-4 w-full flex flex-row justify-between">
            <h1 className="font-bold text-2xl lg:text-3xl">{type === 1 ? "Todos": "Favourites"}</h1>
            <div className="w-1/2 mx-5 flex flex-row items-center border-2 border-blue-400 px-4 h-11 rounded-lg">
                <input className="h-9 border-0 m-0 p-0" type={'text'} placeholder={ type === 1? 'Search todos...': "Search favourites..." } onChange={e => console.log(e.target.value) } />
                <BsSearch size={20} color={'rgb(96 165 250)'} />
            </div>
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