import React from 'react';
import '@lottiefiles/lottie-player';
import AnimarionForm from "./AnimarionForm";
import { Layout, PageHeader, Row, Col } from 'antd';
import './App.css';

const { Content } = Layout;

function App() {

  
  const refreshAnimation = (payload) => {
    const player = document.querySelector('lottie-player');

    player.load(payload);
  };


  return (
    <Layout className="App">
      <PageHeader className="HeaderBar" title="Lottie Viewer" subTitle="Play Lottie animations exported with Bodymovin using wild cards." />
      <Layout>
        <Content>
          <Row gutter={8}  >
            <Col span={16} style={{maxHeight: "80vh"}}>
              <lottie-player
                autoplay
                controls
                loop
                mode="normal"
              >
              </lottie-player>
            </Col>
            <Col span={8} className="AnimarionForm" >
              <AnimarionForm onLoadAnimation={refreshAnimation} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
