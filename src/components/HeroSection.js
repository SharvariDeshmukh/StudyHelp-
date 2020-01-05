import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function HeroSection({img,  heroclass}) {
    return (
       <BackgroundImage
            className={heroclass}
            fluid={img}
        >
            
       </BackgroundImage>

    )
}
