import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {GiFullPizza} from 'react-icons/gi'
// import FullPizza from "../../images/FullPizza.ico"
// import FullPizza from "../../images/FullPizza1.png"
// import FullPizza2 from "../../images/FullPizza1.png"
// import PizzaLinear from "../../images/PizzaLinear.png"

// position:relative;
export const Nav = styled.nav`

  // min-height:40vh;

  background: transparent;
  height: 100px;
  // display: flex;
  // justify-content: center;
  font-weight: 700;
  z-index:100;
  display:flex;
  justify-content:space-around;
  width:100%;
  
`
// export const NavLink = styled.div`
export const NavLink = styled(Link)`

  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  // position: absolute;
  display:flex;
  justify-content:space-around;
  // left:100px;
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
  // display: block;

  position: absolute;
  top: 0px;
  right: 10px;
  cursor: pointer;
  color: #fff;

  // p{
  //   // posiiton:absolute;
  //   margin:10px;
  //   // right:30px;
  // }
  // p{
  //   transform: translate(-175%, 100%);
  //   font-weight: bold;
  // }
  `

  export const Bars = styled(GiFullPizza)`
    font-size: 2rem;
    position:absolute;
    right:20px;
    top:20px;
    padding:2px;
    margin:0 auto;
    // transform: translate(-50%, -15%)
  `

//   // export const Bars = styled.div`
//   // background-image: url(${FullPizza2});
//   // z-index:100;
//   // height: 2rem;
//   // font-size: 2rem;
//   // //   transform: translate(-50%, -15%)

// `
//   // export const Bars = styled.div`
//   //   background-icon: url(${FullPizza});
//   //   color:white;
//   //   width: 2rem;
//   //   height: 5rem;
//   //   transform: translate(-50%, -15%);
//   //   // box-border: 50%;
//   //   // box-shadow: 10px 10px 8px black;
//   // `

//   // img.attrs({src:})
// //   import logo from 'public/images/logo.jpg';

// // /* ... */

// // const HeaderImg = styled.img.attrs({
// //   src: `${logo}`
// // })`
// // width: 50px;
// // height: 30px;
// // `;