import React from 'react';
import PORTFOLIO_DATA from './data.js';

//Partials
import Layout from './Partials/';

//Components
import Section from './../../Components/Section/';
import Card from './../../Components/Card/';

const { Wrapper, Title } = Layout;

const Portfolio = () => {
    return (
        <Section bgColor={'black'}>
            <Title>Portfolio</Title>
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