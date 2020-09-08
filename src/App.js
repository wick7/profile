import React from 'react';
import "antd/dist/antd.css";
import { Layout } from 'antd';
import { Affix } from 'antd';
import { Element } from 'react-scroll'


//Components
import Nav from './Components/Nav';

//Sections
import Header from './Sections/Header';
import About from './Sections/About/';
import Portfolio from './Sections/Portfolio/';
import Contact from './Sections/Contact/';
import FooterContent from './Sections/FooterContent/';


const { Footer, Content } = Layout;

const App = () => {

  return (
    <Layout >
      <Affix>
        <Nav />
      </Affix>
      <Content>
        <Header />
        <Element name="about"><About /></Element>
        <Element name="portfolio"><Portfolio /></Element>
        <Element name="contact"><Contact /></Element>
      </Content>
      <Footer><FooterContent /></Footer>
    </Layout>
  );
}

export default App;
