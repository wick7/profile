
import React from 'react'
import styled from 'styled-components'
import Text from '../Text';

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

const Image = styled.img`
    width: 500px;
    height: 500px;

    @media only screen and (max-width: 1000px) {
        padding-top: 25px;
        width: 400px;
        height: 400px;
    }   
`

const Header = () => {
    return (
        <Head>
            <Text></Text>
            <Image src="http://cw-photo-repo.s3-website-us-west-1.amazonaws.com/photos/header1.jpg" alt="Girl in a jacket" />
        </Head>
    )
}

export default Header