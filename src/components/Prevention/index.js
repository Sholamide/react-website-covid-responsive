import React from 'react'
import {
    PreventionContainer,
    PreventionWrapper,
    PreventionCard,
    PreventionIcon,
    PreventionH1,
    PreventionH2,
    PreventionP
} from './PreventionElements';
import Icon1 from '../../images/mask.svg';
import Icon2 from '../../images/social-distance.svg';
import Icon3 from '../../images/wash-hands.svg';


const Prevention = () => {
    return (
        <PreventionContainer id='prevention'>
            <PreventionH1>
                Preventions
            </PreventionH1>
            <PreventionWrapper>
                <PreventionCard>
                    <PreventionIcon src={Icon1} />
                    <PreventionH2>Wear a Mask</PreventionH2>
                    <PreventionP>Make it a natural part of being around other people to wear a mask.</PreventionP>
                </PreventionCard>
                <PreventionCard>
                    <PreventionIcon src={Icon2} />
                    <PreventionH2>Social Distancing</PreventionH2>
                    <PreventionP>To decrease the risk of infection as they cough, sneeze or chat, maintain at least a 1-metre gap between yourself and others.</PreventionP>
                </PreventionCard>
                <PreventionCard>
                    <PreventionIcon src={Icon3} />
                    <PreventionH2>Good Hygiene</PreventionH2>
                    <PreventionP>Clean your hands regularly and thoroughly with an alcohol-based hand or wash them with soap and water.</PreventionP>
                </PreventionCard>
            </PreventionWrapper>
        </PreventionContainer>
    )
}

export default Prevention
