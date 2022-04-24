import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SidebarRoute, 
    SideBtnWrap,
    SideIcon,
} from "./SideBarElements"

import {FaPizzaSlice, FaIceCream} from 'react-icons/fa'
import {CgMenuBoxed} from 'react-icons/cg'
const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/"><SideIcon><FaPizzaSlice/>Pizzas</SideIcon></SidebarLink>
                <SidebarLink to="/"><SideIcon><FaIceCream/>Desserts</SideIcon></SidebarLink>
                <SidebarLink to="/"><SideIcon><CgMenuBoxed/>Full Menu</SideIcon></SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default SideBar