import React, { useEffect, useState } from "react";

import userimg from '../../../icons8-user-80.png';

import {AiFillEdit} from 'react-icons/ai'
import { RiLogoutCircleRLine } from "react-icons/ri";

import { APP_COLOR } from "../../Data/Utility/Strings";
import { getAllUserDetails, getCurrentUser, logoutUser } from "../../Data/API/firebaseLogin";

import { useNavigate } from "react-router-dom";

const UserProfileScreen = () => {

    const navigate = useNavigate();
    const[userDetails, setUserDetails] = useState({
        username: "Default",
        email: "temp@default.com",
        creationDate: "20th july, 2022",
        todoCount: 0
    });

    //function helps in signing out user
    const signoutUser = async () => {
        const res = await logoutUser();
        if(res.error){
            console.log(res.response);
        }else{
            navigate("/")
        }
    }

    // useEffect(() => {
    //     const userInfo = getCurrentUser();
    //     (async(id) => {
    //         const res = await getAllUserDetails(id);
    //         if(res.error){
    //             console.log(res.response);
    //         }else{
    //             const details = res.response.data();
    //             setUserDetails({
    //                 username: details.username,
    //                 email: details.email,
    //                 creationDate: details.creationDate,
    //                 todoCount: details.todos.length
    //             })
    //         }
    //     })
    //     (userInfo.uid)
    //     console.log(userInfo);
    //     setUserDetails(userInfo);
    // },[])

    return(
        <div className="w-full h-full flex justify-center">
            <div className="w-2/3 h-full  flex flex-col border-2 px-10">
                <div className="flex flex-row h-[30%]  items-center ">
                    <div className="rounded-full shadow-lg border-2 border-blue-400 p-5 hover:shadow-2xl">
                        <img src={userimg} alt=""/>

                    </div>
                    <div className="w-1/2 flex flex-col mx-10">
                        <p className="text-blue-400 text-2xl font-bold mb-2">{userDetails.username}</p>
                        <p>{userDetails.email}</p>
                        <p>{userDetails.creationDate}</p>
                        <p>Todo count: {userDetails.todoCount}</p>
                    </div>
                </div>
                <div className="w-full grid grid-cols-3">
                    <div onClick={() => signoutUser()} className='w-full '>
                        <p>Logout user</p>
                        <RiLogoutCircleRLine color={APP_COLOR} size={20}/>
                    </div>
                    <div onClick={() => signoutUser()}>
                        <p>Logout user</p>
                        <RiLogoutCircleRLine color={APP_COLOR} size={20}/>
                    </div>
                    <div onClick={() => signoutUser()}>
                        <p>Logout user</p>
                        <RiLogoutCircleRLine color={APP_COLOR} size={20}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileScreen;