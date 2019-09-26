import React from 'react';
import '@lottiefiles/lottie-player';
import AnimarionForm from "./AnimarionForm";
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="App">
      <Header>header</Header>
      <Layout>
        <Content>
          <Row gutter={8}  >
            <Col span={18} >
              <lottie-player
                autoplay
                controls
                loop
                mode="normal"
                style={{width: "100%"}}
              >
              </lottie-player>
            </Col>
            <Col span={6} className="AnimarionForm" ><AnimarionForm /></Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
