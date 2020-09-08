import styled from 'styled-components'


const TitleWrapper = styled.div`
    position: relative;
    top: -8px;  
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 48px;
    color: rgba(219,112,147,0.5);
    @media screen and (max-width: 975px) {
    font-size: 32px;
}
`

const Image = styled.img`
    width: 100%;
    height: auto;
    padding: 0;
    cursor: pointer;
`

const Wrapper = styled.div`
    width: 100%;
    padding: 35px 20%;

    @media screen and (max-width: 975px) {
    padding: 35px 0;
}
`
const Section = styled.div`
    height: 100vh;
    width: 100%;
    padding: 25px;
    background-color: white;
    display: flex;
    align-items: center;
    margin: auto;

    @media screen and (max-width: 975px) {
    padding: 35px 0;
    height: auto;
}
`

export default { TitleWrapper, Image, Wrapper, Section };