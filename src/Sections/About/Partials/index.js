import styled from 'styled-components'

const ImageContainer = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
`

const Image = styled.img`
    width: 100%;
    height: 60%;
`

const Text = styled.div`
  font-size: 16px;


  @media screen and (max-width: 975px) {
    font-size: 14px;
}

  @media screen and (max-width: 375px) {
    font-size: 10px;
}
`

const Wrapper = styled.div`
    width: 100%;
    padding: 100px 10%;

    @media screen and (max-width: 975px) {
    padding: 0;
}
`
const Section = styled.div`
    
    width: 100%;
    padding: 25px;
    background-color: white;
`

export default { ImageContainer, Image, Text, Wrapper, Section };