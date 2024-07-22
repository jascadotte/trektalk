import { useState, useContext } from 'react';
import { Button, Upload, Rate, Typography, Row, Col, Carousel, Image, Card, Avatar, Input, Slider, InputNumber, Select} from 'antd';
import { LangContext } from '../../App';
import { UploadOutlined } from '@ant-design/icons';

const fileList = [
  {
    uid: '0',
    name: 'hike2.png',
    status: 'uploading',
    percent: 80,
  },
  {
    uid: '-1',
    name: 'hike1.png',
    status: 'done',
    url: 'https://i.pinimg.com/originals/6f/1f/59/6f1f59cfd5d02b1c69e5880e9e139e5a.jpg',
    thumbUrl: 'https://i.pinimg.com/originals/6f/1f/59/6f1f59cfd5d02b1c69e5880e9e139e5a.jpg',
  },
];


const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1}
          max={5}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={5}
          style={{
            margin: '0 16px',
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

export default function Share() {
  const {lng, setLng} = useContext(LangContext);
  const S = window.STR[lng];

  return (
    <>
    <Row type="flex" align="center">
    <Col align="center">
      <Typography.Title level={1}>{S.share}</Typography.Title>
      <Typography.Title level={5}>{S.text3}</Typography.Title>
    </Col>
    </Row>
    <Row>
      <Col span={10}>
      <Upload
      action=""
      listType="picture"
      defaultFileList={[...fileList]}
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
        {/* <Image width={'90%'} src="https://i.pinimg.com/originals/6f/1f/59/6f1f59cfd5d02b1c69e5880e9e139e5a.jpg" /> */}
      </Col>
      <Col span={10} style={{paddingRight: '50px'}}>
      <Input.TextArea rows={12} placeholder='Enter caption here'> Caption </Input.TextArea>
      </Col>
      <Col span={4}>

      <Row>
      <Typography.Title level={5}>Hike Name</Typography.Title>
      </Row>
      <Row>

      <Input.TextArea rows={1} placeholder='Enter hike name'> Caption </Input.TextArea>
{/* 
      <Select
      width={'100%'}
        showSearch
        placeholder="Enter hike name"
        filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
        options={[{ value: '1', label: 'Review' }, { value: '2', label: 'Question' }, { value: '3', label: 'Recommendation' }, ]}
        /> */}
        </Row>
        <Row>
        <Typography.Title level={5}>Difficulty:</Typography.Title>
        </Row>
        <Row>
      <IntegerStep />
      </Row>
      <Row>
        <Typography.Title level={5}>Rating:</Typography.Title>
      </Row>
      <Row>
        <Rate />
      </Row>
      </Col>
    </Row>
    </>
  )
}