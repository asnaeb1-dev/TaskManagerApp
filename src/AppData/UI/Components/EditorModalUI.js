import React from 'react'
import Modal from 'react-modal'

import { ImCross, ImCheckmark } from 'react-icons/im'
import { APP_COLOR } from '../../Data/Utility/Strings'

const EditorModalUI = ({isOpen = false, dismiss, todo, index}) => {

    //modal custom style
    const customStyle =  {
        content:{
            borderRadius: '20px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '40vw',
            height: '75vh',
            background: 'white',
            padding: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }
    }

    return (
        <Modal ariaHideApp={false} style={customStyle} isOpen={isOpen} >
            <div className='w-full h-full bg-zinc-100 p-6 flex flex-col'>
                <div className='flex flex-row items-center'>
                    <h1 className='flex-1 md:text-lg lg:text-2xl'>Edit todo</h1>
                    <ImCross onClick={() => dismiss()} color={APP_COLOR} />
                </div>
                <form className=''>
                    <p>Hello</p>
                </form>
            </div>
        </Modal>
    )
}

export default EditorModalUI