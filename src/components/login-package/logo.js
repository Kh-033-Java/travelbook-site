import React, { Component } from 'react'
import TravelBook2 from '../icons/travelBook2.svg'
import ImageFadeIn from 'react-image-fade-in'


function Logo () {
        return (
            <ImageFadeIn height={300} opacityTransition={5} src={TravelBook2} />
        )
}
export default Logo;