import React from 'react';
import { Button } from '../ButtonElement';
import {
    InfoContainer,
    InfoRow,
    InfoWrapper,
    SubTitle,
    Heading,
    BtnWrap,
    ImgWrap,
    Column1,
    Column2,
    TopLine,
    Img,
    TextWrapper
} from './infoElements';
const InfoSection = ({ lightBg, id, topLine, headLine, lightText, darkText, description, buttonLabel, img, imgStart, primary, dark2, dark, alt }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                <BtnWrap>
                                    <Button
                                        to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1: 0}
                                        dark2={dark2 ? 1 : 0}
                                        >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
