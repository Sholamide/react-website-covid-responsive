import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMediaWrap,
    SocialMedia,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';



const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> Advice for the public</FooterLinkTitle>
                                <FooterLink to='/'>Mythbusters</FooterLink>
                                <FooterLink to='/'>How to use Masks</FooterLink>
                                <FooterLink to='/'>Videos</FooterLink>
                                <FooterLink to='/'>Advocacy</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle> Media Resources</FooterLinkTitle>
                                <FooterLink to='/'>Press briefings</FooterLink>
                                <FooterLink to='/'>News</FooterLink>
                                <FooterLink to='/'>Science in 5</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> Technical Guidance</FooterLinkTitle>
                                <FooterLink to='/'>Case Management</FooterLink>
                                <FooterLink to='/'>National Laboratories</FooterLink>
                                <FooterLink to='/'>Humanitarian operations</FooterLink>
                                <FooterLink to='/'>Infection prevention and control</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle> Social Media</FooterLinkTitle>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>Facebook</FooterLink>
                                <FooterLink to='/'>Youtube</FooterLink>
                                <FooterLink to='/'>Twitter</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>Covid Situation
                            </SocialLogo>
                            <WebsiteRights>Covid Situation © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                                <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink><SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink><SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink><SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
