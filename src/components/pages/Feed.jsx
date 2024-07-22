import React from 'react';
import { useState, useContext } from 'react';
import { Space, Avatar, List, Row, Col, Typography, Rate, Image, Button } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { LangContext } from '../../App';

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

export default function Feed() {
  const {lng, setLng} = useContext(LangContext);
  const S = window.STR[lng];
  const data = window.DAT;
  // console.log(data);
  return (
    <>
    <Row type="flex" align="center">
    <Col align="center">
      <Typography.Title style={{}} level={1}>{S.feed}</Typography.Title>
    </Col>
    </Row>
    <List
      itemLayout="vertical"
      size="large"
      // pagination={{onChange: (page) => {console.log(page);}, pageSize: 3}}
      pagination={false}
      dataSource={data}
      footer={<div></div>}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            <Space>{item.difficulty}</Space>
          ]}
          extra={<Image alt={item.alt} width={272} src={item.src} />}
        >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={<Space>{item.description} <Rate disabled defaultValue={item.rating??2}/></Space>}
        />
        {item.content}
      </List.Item>
    )}
  />

    </>

  )
}

