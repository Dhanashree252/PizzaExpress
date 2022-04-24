import React from 'react'
import {Nav, NavLink, NavIcon, Bars} from './Navbar'
import Cart from "../../images/shopping_cart.ico"


const Index = ({toggle, count}) => {
  return (
    <>
        <Nav>
          <NavLink to="/">Pizza Express</NavLink>
          <div>
          <p><img src={Cart} alt="cart" style={{width:"40px", position:"relative", top:"15px", right:"12vh"}}/><p style={{color:"red", position:"absolute", top:"0px", fontSize:"2rem", right:"15vh"}}>{count}</p></p> 
          <NavIcon onClick={toggle}>
              <Bars/>
          </NavIcon>
          </div>
        </Nav>
    </>
  )
}

export default Index