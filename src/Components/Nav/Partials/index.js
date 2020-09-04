import styled from 'styled-components'
import { Link } from 'react-scroll'

const NavigationSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 58px;
  background-color: black;
`
const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;

  @media screen and (max-width: 975px) {
    display: none;
}
`
const Logo = styled.div`
  width: 75px;
  height: 100%;
  background-color: rgba(219,112,147,0.5);
  z-index: 500;
`

const LogoBackGround = styled.div`
  width: auto;
  height: 100%;
  background-color: white;
`

const Navigation = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  margin-right: 75px;

  & > .active {
    background-color: rgba(219,112,147,0.5);
  }
`

const NavItems = styled(Link)`
  color: white;
  height: 100%;
  width: 100px;
  background-color: black;
  border: 1px solid rgba(219,112,147,0.5);
  display: flex;
  flex-direction: row;
  vertical-align: center;
  cursor: pointer;
  transition: .6s ease-in-out;

  &:hover ${this} {
   background-color:  rgba(219,112,147,0.5);
  }
`

const NavLink = styled.div`
  color: white;
  height: auto;
  width: auto;
  margin: auto;
`

export default { NavigationSection, NavigationContainer, Logo, LogoBackGround, Navigation, NavItems, NavLink };