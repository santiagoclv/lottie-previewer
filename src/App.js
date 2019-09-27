import React from 'react';
import '@lottiefiles/lottie-player';
import AnimarionForm from "./AnimarionForm";
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import './App.css';

const { Header, Content } = Layout;

function App() {

  const refreshAnimation = (payload) => {
    const player = document.querySelector('lottie-player');
    player.load(payload);
  };


  return (
    <Layout className="App">
      <Header>header</Header>
      <Layout>
        <Content>
          <Row gutter={8}  >
            <Col span={16} >
              <lottie-player
                autoplay
                controls
                loop
                mode="normal"
              >
              </lottie-player>
            </Col>
            <Col span={8} className="AnimarionForm" ><AnimarionForm onLoadAnimation={refreshAnimation} /></Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
