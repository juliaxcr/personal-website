import React from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Julia Crooijmans</HeroH1>
                <HeroP>
                    Software Engineer, NYC
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
