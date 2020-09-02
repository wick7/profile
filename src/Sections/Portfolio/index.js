import React from 'react';
import PORTFOLIO_DATA from './data.js';
import { Row, Col, Divider } from 'antd';
import styled from 'styled-components'

//Partials
import Wrapper from './Partials/Wrapper';

//Components
import Section from './../../Components/Section/';
import Card from './../../Components/Card/';

const Filler = styled.div`
    background-color: green;
    padding: 10px 0;
`

const Portfolio = () => {
    return (
        <Section bgColor={'black'}>
            <Section bgColor={'black'}>
                <Wrapper>
                    {PORTFOLIO_DATA.map(item => {
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
        </Section>
    )
}

export default Portfolio