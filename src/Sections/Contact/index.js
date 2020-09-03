
import React, { useState } from 'react'
import { Row, Col, Tooltip } from 'antd';
import LD from '../../Assets/ld.svg'
import GitHub from '../../Assets/github3.svg'
import Email from '../../Assets/email.svg'

//Partials
import styled from 'styled-components'
import Content from './Partials/'

//Components


const TitleWrapper = styled.div`
    position: relative;
    top: -8px;  
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 48px;
    color: rgba(219,112,147,0.5);
    @media screen and (max-width: 975px) {
    font-size: 32px;
}
`

const { ImageContainer, Image, Text, Wrapper, Section } = Content;


const Contact = () => {

    const [clipBoardCopyMessage, setClipBoardCopyMessage] = useState()

    const handleClipBoard = () => {
        navigator.clipboard.writeText('wickersham.craig@gmail.com')
        setClipBoardCopyMessage('Copied!')
    }

    const handleHover = () => {
        setClipBoardCopyMessage('Click to Copy Email')
    }

    return (
        <Section>
            <Wrapper>
                <Row gutter={[2, 2]}>
                    <Col span={6} offset={4}>
                        <Row>
                            <Col style={{ borderRight: '1px solid rgba(219,112,147,0.5)', borderBottom: '1px solid rgba(219,112,147,0.5)', textAlign: 'right' }} span={12}>
                                <Tooltip
                                    placement="top"
                                    title={clipBoardCopyMessage}
                                    mouseLeaveDelay={0.8}
                                >
                                    <Image src={Email} onClick={handleClipBoard} onMouseOver={handleHover} />
                                </Tooltip>
                            </Col>
                            <Col style={{ borderBottom: '1px solid rgba(219,112,147,0.5)', borderLeft: '1px solid rgba(219,112,147,0.5)' }} span={12}>
                                <a href={'https://github.com/wick7'} target={'_blank'} rel="noopener noreferrer">
                                    <Image src={GitHub} />
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ borderTop: '1px solid rgba(219,112,147,0.5)', borderRight: '1px solid rgba(219,112,147,0.5)', textAlign: 'right' }} span={12}>
                                <a href={'https://www.linkedin.com/in/wickershamcraig/'} target={'_blank'} rel="noopener noreferrer">
                                    <Image src={LD} />
                                </a>
                            </Col>
                            <Col style={{ borderLeft: '1px solid rgba(219,112,147,0.5)', borderTop: '1px solid rgba(219,112,147,0.5)' }} span={12}>
                                <Image src={'http://cw-photo-repo.s3-website-us-west-1.amazonaws.com/photos/header1.jpg'} />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8} offset={4} align="right">
                        <TitleWrapper>Contact</TitleWrapper>
                    </Col>
                </Row>
            </Wrapper>
        </Section>
    )
}

export default Contact