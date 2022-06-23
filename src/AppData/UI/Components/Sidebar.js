import React,{ useState } from "react";

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import { AiOutlineRight, AiOutlineLeft  } from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { FcTodoList, FcOvertime } from 'react-icons/fc'
import AppIcon from '../../../app-icon.png'
import UserIcon from '../../../usericon.png'


const Sidebar = ({ getItemId }) => {
    return(
        <ProSidebar  collapsed={true}>
                <SidebarHeader>
                    <div className='header-content'>
                        <div className='title-bar'>
                            <img src={AppIcon} width='30px' height='30px' />
                            <h3>.</h3>
                        </div>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    {/* Handle sidebar open/close */}
                    <Menu iconShape='square'>
                        <MenuItem onClick={() => getItemId(1)} icon={ <FcTodoList size={20}/> } >All todos</MenuItem>
                        <MenuItem onClick={() => getItemId(2)} icon={ <MdOutlineFavoriteBorder color='red' size={20}/> } >Favorite todos</MenuItem>
                        <MenuItem onClick={() => getItemId(3)} icon={ <FcOvertime size={20}/> } > Schedule </MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <div className='footer-content'>
                        <img id='user-profile-picture' src={UserIcon} alt='dp' />
                    </div>
                </SidebarFooter>
            </ProSidebar>
    )
}

export default Sidebar