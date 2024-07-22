import { useContext } from 'react';
import { Typography, Row, Col, Carousel, Image, Card, Avatar, Space } from 'antd';
import { SearchOutlined, StarOutlined } from '@ant-design/icons';

import { LangContext } from '../../App';

const contentStyle = {  margin: 0,  height: '100px',  color: '#fff',  lineHeight: '160px',  textAlign: 'center',  background: '#364d79',};




export default function Home() {
  const {lng, setLng} = useContext(LangContext);
  const S = window.STR[lng];
  

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
    <Row align={'center'}>
      <Typography.Title level={1}>{S.title1}</Typography.Title>
    </Row>
    <Row>
    <Image width={'100%'} src="https://www.worldatlas.com/upload/d5/07/71/shutterstock-1082372951.jpg" />
      </Row>
      <Row >
        <Col>
          <Typography.Title level={2}>{S.text1}</Typography.Title>
          <Typography.Title level={5}>{S.text2}</Typography.Title>
        </Col>
      </Row>
    

    <Row gutter={16}>
    <Col span={8}>
     <Card hoverable style={{ width: 240 }} 
      cover={<Image 
        alt='Hikers sitting on a pillbox on the edge of a cliff with view of blue ocean and houses below' 
        src="https://wpcdn.us-east-1.vip.tn-cloud.net/www.hawaiimagazine.com/content/uploads/2020/12/Oahu_Pillbox_MikeKaras_web1285horizontal.jpg" />}
      actions={[
        <Space>Easy</Space>,
        <Space>1hr</Space>,
        <Space><StarOutlined />4</Space>,
      ]}
      >
      <Card.Meta title='Lanikai Pillbox' />
    </Card>
    </Col>
    <Col span={8}>
    <Card hoverable style={{ width: 240 }} 
      cover={<Image 
        alt='Waterfall pouring into pond against a mossy rock wall' 
        src="https://a.cdn-hotels.com/gdcs/production77/d1134/afbd6f7d-37e6-4630-be62-462e7fbc34df.jpg" />}
      actions={[
        <Space>Moderate</Space>,
        <Space>2hr</Space>,
        <Space><StarOutlined />4</Space>,
      ]}
      >
      <Card.Meta title='Manoa Falls' />
    </Card>
    </Col>
    <Col span={8}>
    <Card hoverable style={{ width: 240 }} 
      cover={<Image 
        alt='View of wooden steps with hikers going downwards with city and ocean in the background' 
        src="https://www.journeyera.com/wp-content/uploads/2016/05/DSC02440-scaled.jpg" />}
      actions={[
        <Space>Hard</Space>,
        <Space>1hr</Space>,
        <Space><StarOutlined />3</Space>,
      ]}
      >
      <Card.Meta title='Koko Head Stairs' />
    </Card>


    </Col>
  </Row>

      </>
  )
}