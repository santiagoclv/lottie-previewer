import React from 'react';
import '@lottiefiles/lottie-player';
import AnimarionForm from "./AnimarionForm";
import { Layout, Typography } from 'antd';
import { Row, Col } from 'antd';
import './App.css';


const { Title } = Typography;
const { Content, Header } = Layout;

function App() {

  const refreshAnimation = (payload) => {
    const player = document.querySelector('lottie-player');
    player.load(payload);
  };


  return (
    <Layout className="App">
      <Header>
        <Title >Lottie Viewer</Title>
        <Title level={4}>Play Lottie animations exported with Bodymovin using wild cards.</Title>
      </Header>
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
