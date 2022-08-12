import React from "react";
import '../Styles/userprofilescreen.css'

import userimg from '../../../icons8-user-80.png';

import {AiFillEdit} from 'react-icons/ai'

const UserProfileScreen = () => {
    return(
        <div className="user-profile-main">
            <div className="user-profile-box">
                <div id="basic-user-info">
                    <img id="user-dp" src={userimg}/>
                    <h3>Abhigyan Raha</h3>
                </div>
                <div id="other-info">
                    
                </div>
            </div>
        </div>
    )
}

export default UserProfileScreen;