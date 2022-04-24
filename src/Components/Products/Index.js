import React from 'react'
import { Link } from 'react-router-dom';

import {
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElement"

const Products = ({ heading, data, route, clickHandler }) => {
  
  return (
    <ProductsContainer style={{ textDecoration: "none" }}>
      <ProductsHeading style={{ textDecoration: "none" }}>{heading}</ProductsHeading>

      <ProductsWrapper>
        {data.map((product) => {
          return (
            <ProductCard key={product.id}>
                <Link to={`${route}/${product.id}`}style={{ textDecoration: 'none', color:'white' }}>
                <ProductImg src={product.img} alt={product.alt} />
                <ProductInfo>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductDesc>{product.desc}</ProductDesc>
                    <ProductPrice>₹ {product.price}</ProductPrice>
                </ProductInfo>
                </Link>
                <ProductButton onClick={clickHandler}>Add To Cart</ProductButton>
              </ProductCard>)})}
    </ProductsWrapper>
    </ProductsContainer>
  )
}

export default Products