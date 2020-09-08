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