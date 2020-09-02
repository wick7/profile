
import React from 'react'

//Partials
import Content from './Partials/';

//Components
import Text from '../../Components/Text';

const { Head, ImageContainer, Image } = Content;

const Header = () => {
    return (
        <Head>
            <Text />
            <ImageContainer>
                <Image src="http://cw-photo-repo.s3-website-us-west-1.amazonaws.com/photos/header1.jpg" alt="photo" />
            </ImageContainer>
        </Head>
    )
}

export default Header