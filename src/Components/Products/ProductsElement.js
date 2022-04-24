import styled from 'styled-components'
import PizzaBg1 from "../../images/PizzaBg1.jpg"

export const ProductsContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw-1300px)/2);
    background: #150f0f;
    color: #fff;
    position:relative;
    top:80vh;
    
`

export const ProductsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 3rem;
    padding-top:20px;
`
export const ProductsWrapper = styled.div`

    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    color:white;
    
`
export const ProductCard = styled.div`
    // margin: auto;
    margin: 10px 2rem;
    line-height: 2;
    width: 330px;
    height: 680px;
    position:relative;
    padding: 10px 5px 10px 10px;
    border: 2px solid rgb(50, 50, 50);
    background: url(${PizzaBg1});
    border-radius: 10px;
    display:flex;
    justify-content:center;
`
export const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    width: 300px;
    box-shadow: 8px 8px #fdc500;
    border-radius: 10px;
`
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`
export const ProductTitle = styled.h2`
    font-weight: 400;
    fint-size: 1.5rem;
`
export const ProductDesc = styled.p`
    font-size: 12px;
    margin-bottom: 1rem;
    text-decoration: none!important;
`
export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`
export const ProductButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2 ease-out;
    position:absolute;
    bottom: 10px;
    border-radius: 40px;


    &:hover{
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`