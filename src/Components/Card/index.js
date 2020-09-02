import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
     color:white;
  padding: 20px;
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
     margin: 40px 0px;
}
`

const Title = styled.div`
    width: auto;    
  font-size: 1.5rem;
  font-weight: 800;
`
const Underline = styled.div`
   width: 75%;
   border-bottom: 1px solid #DB7093;
`

const Body = styled.div`
    padding: 10px 3px;
    font-size: 16px;

     @media screen and (max-width: 975px) {
    font-size: 14px;
}

  @media screen and (max-width: 375px) {
    font-size: 10px;
}
`

const Link = styled.div`
    text-align: center;
`

const Card = ({ title, description, link }) => {

    return (
        <Container>
            <Title>
                {title}
                <Underline />
            </Title>
            <Body>{description}</Body>
            <Link><a href={link}>View Project</a></Link>
        </Container>
    )
}

export default Card
