
import React from 'react'
import { Row, Col, Divider } from 'antd';
import AboutImg from '../../Assets/about.svg'

//Partials
import Content from './Partials/'

//Components


const { ImageContainer, Image, Text, Wrapper, Section } = Content;

const About = () => {
    return (
        <Section>
            <Wrapper>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <Divider>About Me</Divider>
                        <Text>Experienced React developer with a record for making designs come to life. Familiarity with integrating and creating REST APIs with React and Redux. Ability to work collaboratively with fellow developers and independently to deliver robust web applications and solutions.</Text>
                    </Col>
                </Row>
                <Row >
                    <Col span={12} offset={12}>
                        <ImageContainer>
                            <Image src={AboutImg} alt="photo" />
                        </ImageContainer>
                    </Col>
                </Row>
            </Wrapper>
        </Section>
    )
}

export default About