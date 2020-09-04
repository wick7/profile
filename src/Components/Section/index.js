
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 200px 0;
    border-top: 1px solid black;
    background-color: ${props => props.bgColor};

    @media screen and (max-width: 975px) {
     padding: 50px 0;
     height: 100%;
}
`

const Section = ({ bgColor, children }) => {
    return (
        <Container bgColor={bgColor}>{children}</Container>
    )
}

export default Section