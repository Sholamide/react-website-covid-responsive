import React, { useState } from 'react'
import {
    HeroContainer,
    ArrowForward,
    ArrowRight,
    HeroBtnWrapper,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBg,
    VideoBg
} from './HeroElements';
import Video from '../../videos/covidclip.mp4';
import { Button } from '../ButtonElement';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>COVID-19 OVERVIEW</HeroH1>
                <HeroP>Stay updated with the latest corona virus statistics and be one step ahead.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover}
                        onMouseLeave={onHover}>What's Covid-19{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
