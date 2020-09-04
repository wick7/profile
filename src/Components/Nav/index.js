import React from 'react';
import LightBulb from '../../Assets/lightbulb.svg'

//Components
import Image from '../Image.js'

//Partials
import NavLayout from './Partials/'

const { NavigationSection, NavigationContainer, Logo, LogoBackGround, Navigation, NavItems, NavLink } = NavLayout;

const Nav = () => {

  return (
    <NavigationSection>
      <LogoBackGround>
        <Logo><Image src={LightBulb} /></Logo>
      </LogoBackGround>
      <NavigationContainer>
        <Navigation>
          <NavItems activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}><NavLink>About</NavLink></NavItems>
          <NavItems activeClass="active" to="portfolio" spy={true} smooth={true} offset={-50} duration={500}><NavLink>Portfolio</NavLink></NavItems>
          <NavItems activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}><NavLink>Contact</NavLink></NavItems>
        </Navigation>
      </NavigationContainer>
    </NavigationSection>
  )
}

export default Nav;