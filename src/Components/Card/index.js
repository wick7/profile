import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    position: relative;
    color:white;
    margin: 0 20px;
    width: 100%;
    background-color: #403940;
    border: 1px solid #DB7093;
    box-shadow: 13px 6px 23px 4px rgba(219,112,147,0.5);
    transition: 0.5s ease-in-out;

&:hover ${this} {
    transform: translateY(-20px);
  }
 @media screen and (max-width: 975px) {
     margin: 40px 20px;
}
`

const Title = styled.div`
    width: auto;    
    font-size: 1.5rem;
    font-weight: 800;
    padding: 20px;
`
const Underline = styled.div`
    width: 75%;
    border-bottom: 1px solid rgba(219,112,147,0.5);
    padding: 0 20px;
`

const Body = styled.div`
    font-size: 16px;
    padding: 0 20px 40px 20px;

     @media screen and (max-width: 975px) {
    font-size: 14px;
}

  @media screen and (max-width: 375px) {
    font-size: 10px;
}
`

const Link = styled.div`
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 650px 0 10px 0;
`

const Card = ({ title, description, link }) => {
    return (
        <Container>
            <Title>
                {title}
                <Underline />
            </Title>
            <Body>{description}

            </Body>
            <Link><a href={link} target={'_blank'} rel="noopener noreferrer">View Project</a></Link>
        </Container>
    )
}

export default Card
