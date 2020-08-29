import React from 'react';
import "antd/dist/antd.css";
import Nav from './Components/Nav';
import Card from './Components/Card/';
import Intro from './Components/Header/';
import { Layout } from 'antd';
import styled from 'styled-components'
import { Affix } from 'antd';
import Text from './Components/Text/';
import Section from './Components/Section/'


const { Header, Footer, Sider, Content } = Layout;

const BodyContent = styled.div`
  padding: 50px 20px;
  background-color: white;
  width: 100%;
  height: 500px;
`

function App() {
  return (
    <Layout>
      <Affix>
        <Header>
        </Header>
      </Affix>
      <Content>
        <Intro />
        <Section bgColor={'black'} />
        <Section bgColor={'#C4C4C4'} />

        <BodyContent>
        </BodyContent>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
