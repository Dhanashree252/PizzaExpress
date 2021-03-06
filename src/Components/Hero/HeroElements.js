import pizzabg from '../../images/pizza-bg1.jpg'
import styled from 'styled-components'


export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)),
    url(${pizzabg});
    height:100vh;
    background-position: center;
    background-size: cover;
    position:absolute;
    top:0;
    z-index:-1;
`

export const HeroContent = styled.div`
    height:100vh;
    max-height: 100%;
    width: 100vw;
    padding: 0rem cal((100vw-1300px)/2)
`

export const HeroItem = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    media screen and (max-width: 650px){
        width: 100%;
    }
`

export const HeroH1 = styled.h1`
    font-size:  clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 0 5px #e9ba23;
    letter-spacing: 3px;
    word-wrap: break-word
`

export const HeroP = styled.p`
    font-size:  clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
`

export const Herobtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    boder: none;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;
    border-radius: 40px;

    &:hover{
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000
    }
`