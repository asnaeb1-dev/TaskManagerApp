import React from "react";
import { MdFavorite, MdEdit, MdDeleteForever } from "react-icons/md";
import { ImCross, ImCheckmark } from 'react-icons/im';
import { BsExclamation, BsCalendar3 } from "react-icons/bs";

const TodoItem = ({title = "Lorem ipsum is a great way to do stuff!", 
                    desc = "", 
                    index = -1,
                    isFavourite = false, 
                    isUrgent = false, 
                    isDone = false, 
                    startDate ="",
                    endDate="",
                    handleClick,
                    cardColor = '#f4946f'}) => {


    const processDate = (startDate, endDate) => {
        if(endDate === "" || startDate === "") return "N/A";
        const start = startDate.split("-");
        const end = endDate.split("-");

        const newStartDate = `${start[2]}/${start[1]}/${start[0].substring(2, 4)}`;
        const newEndDate = `${end[2]}/${end[1]}/${end[0].substring(2, 4)}`;
        return newStartDate +" - "+ newEndDate;
    }

    //return the style
    const getStyle = (color) => {
        switch (color){
            case '#f4946f':
                return "w-full h-full bg-[#f4946f] rounded-3xl p-6 flex flex-col";
            case '#f4c268':
                return "w-full h-full bg-[#f4c268] rounded-3xl p-6 flex flex-col";
            case '#ad8cf2':
                return "w-full h-full bg-[#ad8cf2] rounded-3xl p-6 flex flex-col";
            case '#02caf2':
                return "w-full h-full bg-[#02caf2] rounded-3xl p-6 flex flex-col";
            case '#d9e587':
                return "w-full h-full bg-[#d9e587] rounded-3xl p-6 flex flex-col";
            case '#f74f4f':
                return "w-full h-full bg-[#f74f4f] rounded-3xl p-6 flex flex-col";
            case '#77dc7e':
                return "w-full h-full bg-[#77dc7e] rounded-3xl p-6 flex flex-col";
            case '#ffc0cb':
                return "w-full h-full bg-[#ffc0cb] rounded-3xl p-6 flex flex-col";
            case '#89b7f7':
                return "w-full h-full bg-[#89b7f7] rounded-3xl p-6 flex flex-col";
            default:
                return "w-full h-full bg-[#f4946f] rounded-3xl p-6 flex flex-col";
        }
    }

    return(
        <div className= {!isDone?  "w-full h-full bg-red-700 rounded-tr-3xl rounded-b-3xl shadow-lg hover:shadow-2xl" :  "w-full h-full rounded-tr-3xl rounded-b-3xl bg-green-600 shadow-lg hover:shadow-2xl"} >
                <div className={getStyle(cardColor)}>
                    {/* control console */}
                    <div className="w-full  flex flex-row items-center ">
                        <span className="mr-2 rounded-3xl bg-slate-50 p-1 bg-opacity-50 hover:bg-opacity-80">
                            {
                                isDone?
                                <ImCheckmark size={15} color={'green'}/>:
                                <ImCross size={15} color={'red'}/>
                            }
                        </span>

                        {
                            isFavourite?
                                <span className="mr-2 rounded-3xl bg-slate-50 p-1 bg-opacity-50 hover:bg-opacity-80">
                                    <MdFavorite size={15} color={'red'}/>
                                </span>:null
                        }
                        
                        <span onClick={() => handleClick("remove", index)}  className="mr-2 rounded-3xl bg-slate-50 p-1 bg-opacity-50 hover:bg-opacity-80">
                            <MdDeleteForever size={15} color={'black'}/>
                        </span>
                        {
                            isUrgent?
                                <span  className="mr-2 rounded-3xl bg-slate-50 p-0.5 bg-opacity-50 hover:bg-opacity-80">
                                    <BsExclamation size={20} color={'red'}/>
                                </span>:null
                        }
                       
                    </div>
                    <p className="w-full font-bold my-3 text-lg md:text-2xl lg:text-3xl flex-1 text-left break-words">{title.length > 70 ? title.substring(0, 69) +"..." : title }</p>
                    <div className="flex flex-row items-center justify-between mt-2">
                        <div className="bg-white rounded-3xl px-4 py-2 bg-opacity-50 flex flex-row items-center hover:bg-opacity-80">
                            <BsCalendar3 className='hidden md:block mr-3' size={15}/>
                            <p className="text-sm">{processDate(startDate, endDate)}</p>
                        </div>
                        <span onClick={e => handleClick("edit", index)} className="rounded-3xl bg-white bg-opacity-50 p-2 hover:bg-opacity-80">
                            <MdEdit color="black" size={20} />
                        </span>
                    </div>
                </div>
        </div>
    )
}

export default TodoItem;