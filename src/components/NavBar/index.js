import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'
import {RiVirusLine} from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItems,
    NavLinks
} from './NavBarElements';

const NavBar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        (window.scrollY >= 80) ?
            setScrollNav(true) : setScrollNav(false)
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer><NavLogo to="/" onClick={toggleHome}>
                        <RiVirusLine />
                    Covid Situation
              </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItems>
                                <NavLinks to="about"
                                    smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                            </NavItems>
                            <NavItems>
                                <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Analytics</NavLinks>
                            </NavItems>
                            <NavItems>
                                <NavLinks to="prevention" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Prevention</NavLinks>
                            </NavItems>
                            <NavItems>
                                <NavLinks to="signup"  smooth={true} duration={500} spy={true} exact='true' offset={-80}>What is COVID-19</NavLinks>
                            </NavItems>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin">
                                Seeing Symptoms?
                        </NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar
