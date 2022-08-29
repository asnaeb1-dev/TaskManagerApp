import React from "react";
import { MdOutlineFavoriteBorder, MdEdit, MdDeleteForever } from "react-icons/md";
import { ImCross, ImCheckmark } from 'react-icons/im';
import { BsExclamation } from "react-icons/bs";

const TodoItem = ({title = "Lorem ipsum is a great way to do stuff!", 
                    desc = "", 
                    isFavourite = false, 
                    isUrgent = false, 
                    isDone = false, 
                    startDate ="",
                    endDate="",
                    cardColor = '#f4946f'}) => {


    return(
        <div className="w-full h-full bg-red-700 rounded-tr-3xl rounded-b-3xl" >
                <div className="w-full h-full rounded-3xl bg-purple-400 p-4 flex flex-col">
                    {/* control console */}
                    <div className="w-full  flex flex-row items-center bg-violet-800">

                        <span className="mr-2">
                            {
                                isDone?
                                <ImCheckmark size={20} color={'green'}/>:
                                <ImCross size={15} color={'red'}/>
                            }
                        </span>

                        {
                            isFavourite?
                                <span className="mx-2">
                                    <MdOutlineFavoriteBorder size={20} color={'red'}/>
                                </span>:null
                        }
                        
                        <span  className="mx-2">
                            <MdDeleteForever size={20} color={'black'}/>
                        </span>
                        {
                            isUrgent?
                                <span  className="mx-2">
                                    <BsExclamation size={28} color={'red'}/>
                                </span>:null
                        }
                       
                    </div>
                    <p className="w-full font-bold text-lg md:text-2xl lg:text-3xl h-1/2 flex-1 bg-red-300">{title.length > 70 ? title.substring(0, 69) +"..." : title }</p>
                    <div className="flex flex-row items-center justify-between bg-blue-700">
                        <div>
                            <p>6/6/22 - 7/6/22</p>
                        </div>
                        <div style={{flex: 0.3}}></div>
                        <span>
                            <MdEdit color="black" size={20} />
                        </span>
                    </div>
                </div>
        </div>
    )
}

export default TodoItem;