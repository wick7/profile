import React from 'react'

//Partials
import NavLayout from './Partials/'

const { NavigationSection, NavigationContainer, Logo, Navigation, NavItems, NavLink } = NavLayout;

const Nav = () => {
  return (
    <NavigationSection>
      <Logo />
      <NavigationContainer>
        <Navigation>
          <NavItems><NavLink>About</NavLink></NavItems>
          <NavItems><NavLink>Portfolio</NavLink></NavItems>
          <NavItems><NavLink>Contact</NavLink></NavItems>
        </Navigation>
      </NavigationContainer>
    </NavigationSection>
  )
}

export default Nav;