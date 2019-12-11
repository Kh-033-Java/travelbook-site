import React from 'react'
import TravelBook2 from '../icons/travelBook2.svg'
import ImageFadeIn from 'react-image-fade-in'


function Logo () {
        return (
            <ImageFadeIn height={278} opacityTransition={5} src={TravelBook2} />
        )
}
export default Logo;