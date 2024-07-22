
import { useState, useContext } from 'react';
import { Card, Space, Avatar, Col, Row, Typography, Drawer, Button, Form, Select, Image, Input, Upload, Rate} from 'antd';
import { SearchOutlined, UploadOutlined } from '@ant-design/icons';
import { LangContext } from '../../App';
const { Meta } = Card;

export default function Discover() {
  const {lng, setLng} = useContext(LangContext);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState({ caption: '', difficulty: '', rating: '', location: '', duration: '' });

  const S = window.STR[lng];
  const data = window.DAT;

  const showDrawer = () => { setOpen(true); };
  const onClose = () => { setOpen(false); };

  const onFinish = (d) => {
    console.log('onfinishsubmit: ', d);
    setFilter(d);
    setOpen(false);

    const template = {
      href: '/',
      title: 'James',
      avatar: '/',
      description: d.location,
      duration: d.duration,
      difficulty: d.difficulty,
      rating: d.rating,
      content: d.caption,
      src: 'https://1.bp.blogspot.com/-qKduejDYggc/VV_tRHjUEaI/AAAAAAAAAYc/aRdAZE3-65g/s1600/IMG_2610.JPG',
      alt: 'Overlooking blue sandy bay with mountain ranges in the back and houses below'
    };
    // Add to the feed
    window.DAT.push(template);

  };

  const resetFilter = () => {
    setFilter({ caption: '', difficulty: '', rating: '', location: '', duration: '' });
    setOpen(false);
  };

  // Get Hike List
  const hikeList = Array.from(new Set(Object.values(data).map((d) => d.description )));
  // Get Difficulty
  const diffList = Array.from(new Set(Object.values(data).map((d) => d.difficulty )));
  // Get Duration
  const durList = Array.from(new Set(Object.values(data).map((d) => d.duration )));


  const IntegerStep = () => {
    const [inputValue, setInputValue] = useState(1);
    const onChange = (newValue) => {
      setInputValue(newValue);
    };

    return (
      <Row>
        <Col span={12}>
          <Slider min={1} max={5} onChange={onChange} value={typeof inputValue === 'number' ? inputValue : 0} />
        </Col>
        <Col span={4}>
          <InputNumber min={1} max={5} style={{margin: '0 16px',}} value={inputValue} onChange={onChange} />
        </Col>
      </Row>
    );
  };

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


  return (
    <>
    <Row type="flex" align="center">
    <Col align="center">
      <Typography.Title level={1}>{S.share}</Typography.Title>
      <Typography.Title level={5}>{S.text3}</Typography.Title>
    </Col>
    </Row>


      <Form onFinish={onFinish} layout="vertical" hideRequiredMark>
        <Row gutter={[16,16]}>
          <Col span={8}>
            <Row style={{paddingBottom: '13px'}}>{S.shr_fil}</Row>
            

            <Upload action="" listType="picture" defaultFileList={[...fileList]}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Col>

          <Col span={8}>
            <Form.Item name="caption" label="Caption" rules={[{required: false, message: 'Please enter your caption.',},]}>
              <Input.TextArea rows={8} />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item name="rating" label={S.shr_str} rules={[{required: false, message: 'Please choose star rating', },]}>
              <Select placeholder="Please choose star rating">
                <Select.Option value="1">1</Select.Option>
                <Select.Option value="2">2</Select.Option>
                <Select.Option value="3">3</Select.Option>
                <Select.Option value="4">4</Select.Option>
                <Select.Option value="5">5</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item name="difficulty" label={S.shr_dif} rules={[{required: false, message: 'Please select hike difficulty',},]}>
              <Select placeholder="Please select hike difficulty">
                {diffList.map((d) => <Select.Option key={d} value={d}>{d}</Select.Option>)}
              </Select>
            </Form.Item>

            <Form.Item name="location" label="Location" rules={[{required: false, message: 'Please choose location',},]}>
              <Select placeholder="Please choose location">
                {hikeList.map((d) => <Select.Option key={d} value={d}>{d}</Select.Option>)}
              </Select>
            </Form.Item>

            <Form.Item name="duration" label={S.shr_dur} rules={[{required: false, message: 'Please choose duration',},]}>
              <Select placeholder="Please choose duration" value={filter.duration}>
                {durList.map((d) => <Select.Option key={d} value={d}>{d}</Select.Option>)}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col style={{paddingTop: '10px'}}>
            <Form.Item>
              <Button type="primary" htmlType="submit">{S.submit}</Button>
            </Form.Item>
          </Col>
        </Row>

      </Form>
      </>
  )
}