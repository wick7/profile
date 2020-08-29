
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    padding: 25px;
    border-top: 1px solid black;
    background-color: ${props => props.bgColor};
`

const Section = ({ bgColor }) => {
    return (
        <Container bgColor={bgColor}></Container>
    )
}

export default Section