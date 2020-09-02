import React from 'react';
import "antd/dist/antd.css";
import { Layout } from 'antd';
import { Affix } from 'antd';

//Sections
import Intro from './Sections/Header';
import About from './Sections/About/';
import Portfolio from './Sections/Portfolio/';
import Contact from './Sections/Contact/';


const { Header, Footer, Content } = Layout;


const App = () => {
  return (
    <Layout>
      <Affix>
        <Header>
        </Header>
      </Affix>
      <Content>
        <Intro />
        <About />
        <Portfolio />
        <Contact />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
