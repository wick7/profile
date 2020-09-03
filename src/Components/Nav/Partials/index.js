import styled from 'styled-components'

const NavigationSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 58px;
`
const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
`
const Logo = styled.div`
  width: 75px;
  height: 100%;
  background-color: rgba(219,112,147,0.5);
`

const Navigation = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  margin-right: 75px;
`

const NavItems = styled.div`
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

export default { NavigationSection, NavigationContainer, Logo, Navigation, NavItems, NavLink };