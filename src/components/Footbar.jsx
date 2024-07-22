import { useContext } from 'react';
import { Layout, Row, Col } from 'antd';
import { LangContext } from '../App';
const { Header, Content, Footer } = Layout;

export default function Footbar() {
  const {lng, setLng} = useContext(LangContext);
  const S = window.STR[lng];

  return (
    <Footer style={{backgroundColor:'#B0C7C3', }} >
      <Row gutter={16}>
        <Col span={8}>Trek Talk ©{new Date().getFullYear()}</Col>
        <Col span={8}></Col>
        <Col span={8}>{S.contact}</Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}></Col>
        <Col span={8}></Col>
        <Col span={8}>trektalk@mail.com</Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}></Col>
        <Col span={8}></Col>
        <Col span={8} >(123)-456-789</Col>
      </Row>
   </Footer>
  );
}

