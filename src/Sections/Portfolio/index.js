import React from 'react';
import PORTFOLIO_DATA from './data.js';
import styled from 'styled-components'

//Partials
import Wrapper from './Partials/Wrapper';

//Components
import Section from './../../Components/Section/';
import Card from './../../Components/Card/';

const Title = styled.div`
    font-size: 4rem;
    color: white;
    font-weight: 800;
    margin: 0 20px;

    @media screen and (max-width: 975px) {
     margin: 40px 0px;
}
`

const Portfolio = () => {
    return (
        <Section bgColor={'black'}>
            <Wrapper><Title>Portfolio</Title></Wrapper>
            <Wrapper>
                {PORTFOLIO_DATA.map((item, i) => {
                    return (
                        <Card
                            title={item.title}
                            description={item.description}
                            link={item.link}
                        />
                    )
                })}

            </Wrapper>
        </Section>
    )
}

export default Portfolio