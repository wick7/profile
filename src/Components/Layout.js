
import React from 'react'
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;


const Page = ({ header, content, footer }) => {
    return (
        <Layout>
            <Header>{header}</Header>
            <Content>{content}</Content>
            <Footer>{footer}</Footer>
        </Layout>
    )
}

export default Page