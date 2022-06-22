import React from "react";
import '../Components/ComponentStyles/textinput.css'

import { GoPerson as Icon } from 'react-icons/go'

const TextInput = ({ label, placeholder,  firstIcon, secondIcon, getText}) => {

    return(
        <div id="text-input-main">
            <input id="inp" placeholder={placeholder} onChange={(e) => getText(e.target.value)} />
        </div>
    )
}

export default TextInput;