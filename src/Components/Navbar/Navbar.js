import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {GiFullPizza} from 'react-icons/gi'

export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  font-weight: 700;
  z-index:100;
  display:flex;
  justify-content:space-around;
  width:100%;
  
`
export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  display:flex;
  justify-content:space-around;
  margin:auto;

  @media screen and (max-width: 400px){
    position: absolute;
    top: 10px;
    left: 25px;
  }
`

export const NavIcon = styled.div`
  display :flex;
  justify-content:space-evenly;
  align-item:center;
  position: absolute;
  top: 0px;
  right: 10px;
  cursor: pointer;
  color: #fff;
  `

  export const Bars = styled(GiFullPizza)`
    font-size: 2rem;
    position:absolute;
    right:20px;
    top:20px;
    padding:2px;
    margin:0 auto;
  `

