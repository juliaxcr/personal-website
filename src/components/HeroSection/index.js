import React from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroH1, HeroP } from './HeroElements'
// import Video from '../../videos/video.mp4'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
            </HeroBg>
            <HeroContent>
                <HeroH1>Julia Crooijmans</HeroH1>
                <HeroP>
                    Software Engineer, New York City
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
