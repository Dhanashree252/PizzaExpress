import React from 'react'

import {HeroContainer, HeroContent, HeroItem, HeroH1, HeroP, Herobtn} from './HeroElements'

const Hero = () => {
  
  return (
    <HeroContainer>
        <HeroContent>
            <HeroItem>
                <HeroH1>Tastiest Pizza Ever</HeroH1>
                <HeroP>With fresh ingredients always</HeroP>
                <Herobtn>Place Order</Herobtn>
            </HeroItem>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero