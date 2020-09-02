import styled from 'styled-components'

const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 25px;
    border-bottom: 1px solid white;
    background-color: white;

    @media only screen and (max-width: 830px) {
        flex-direction: column;
    }
`

const ImageContainer = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
`

const Image = styled.img`
    width: 500px;
    height: 500px;

    @media only screen and (max-width: 1000px) {
        padding-top: 25px;
        width: 400px;
        height: 400px;
    }   

`

export default { Head, ImageContainer, Image };