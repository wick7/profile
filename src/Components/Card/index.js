import React from 'react';

//Partials
import Layout from './Partials/'

const { Container, Title, Underline, Body, Link } = Layout;


const Card = ({ title, description, link }) => {
    return (
        <Container>
            <Title>
                {title}
                <Underline />
            </Title>
            <Body>{description}
            </Body>
            <a href={link} target={'_blank'} rel="noopener noreferrer"><Link>View Project</Link></a>
        </Container>
    )
}

export default Card
