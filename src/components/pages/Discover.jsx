
import { useState, useContext } from 'react';
import { Card, Space, Avatar, Col, Row, Typography, Drawer, Button, Form, Select, Image} from 'antd';
import { SearchOutlined, StarOutlined } from '@ant-design/icons';
import { LangContext } from '../../App';
const { Meta } = Card;

export default function Discover() {
  const {lng, setLng} = useContext(LangContext);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState({ difficulty: '', rating: '', location: '', duration: '' });
  const [form] = Form.useForm();

  const S = window.STR[lng];
  const data = window.DAT;

  const showDrawer = () => { setOpen(true); };
  const onClose = () => { setOpen(false); };

  const onFilter = (e) => {
    // console.log('onsubmit: ', e);
    setFilter(e);
    setOpen(false);
  };

  const resetFilter = () => {
    setFilter({ difficulty: '', rating: '', location: '', duration: '' });
    setOpen(false);
    form.resetFields();
  };

  // Get Filtered Feed
  const feedList = Object.values(data).filter((d) => {
    // console.log(filter.difficulty, d.difficulty);
    if(filter.difficulty && filter.difficulty != d.difficulty) { return false;}
    if(filter.rating && filter.rating != d.rating) { return false;}
    // if(filter.location && filter.location != d.location) { return false;}
    if(filter.duration && filter.duration != d.duration) { return false;}
    return true;
  } );

  // Get Hike List
  const hikeList = Array.from(new Set(Object.values(data).map((d) => d.description )));
  // Get Difficulty
  const diffList = Array.from(new Set(Object.values(data).map((d) => d.difficulty )));
  // Get Duration
  const durList = Array.from(new Set(Object.values(data).map((d) => d.duration )));

  return (
    <>
    <Space>
      <Button type="primary" onClick={showDrawer} icon={<SearchOutlined />}>{S.search}</Button>
      {(filter.difficulty || filter.rating || filter.location || filter.duration) ? <Button onClick={resetFilter}>Clear Filters</Button> : null}
    </Space>


      <Row type="flex" align="center">
        <Col align="center">
          <Typography.Title level={1}>{S.disc}</Typography.Title>
          <Typography.Title level={5}>{S.title2}</Typography.Title>
        </Col>
      </Row>

      <Row gutter={[16,16]}>
        {feedList.map((d) =>
          <Col key={d.key} span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<Image alt={d.alt} src={d.src} />}
              actions={[
                <Space>{d.difficulty}</Space>,
                <Space>{d.duration}</Space>,
                <Space><StarOutlined />{d.rating}</Space>,
              ]}
              >
              <Meta
              title={d.description}
               //description={d.content}
               />
            </Card>
          </Col>
        )}
      </Row>

      <Drawer
        title="Filter Hikes"
        width={300}
        onClose={onClose}
        open={open}
        styles={{body: {paddingBottom: 80,},}}
        extra={
          <Space>
            <Button onClick={resetFilter}>Reset</Button>
            {/* <Button onClick={onClose} type="primary">Search</Button> */}
          </Space>
        }
      >
        <Form form={form} onFinish={onFilter} layout="vertical" hideRequiredMark>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="difficulty"
                label="Difficulty"
                rules={[{required: false, message: 'Please select hike difficulty',},]}
              >
                <Select placeholder="Please select hike difficulty">
                {diffList.map((d) => <Select.Option key={d} value={d}>{d}</Select.Option>)}
                </Select>
              </Form.Item>
            </Col>
            </Row>
            <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="rating"
                label="Star Rating"
                rules={[{required: false, message: 'Please choose star rating', },]}
              >
                <Select placeholder="Please choose star rating">
                  <Select.Option value="1">1</Select.Option>
                  <Select.Option value="2">2</Select.Option>
                  <Select.Option value="3">3</Select.Option>
                  <Select.Option value="4">4</Select.Option>
                  <Select.Option value="5">5</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            {/* <Col span={12}>
              <Form.Item
                name="location"
                label="Location"
                rules={[{required: false, message: 'Please choose location',},]}
              >
                <Select placeholder="Please choose location">
                {hikeList.map((d) => <Select.Option key={d} value={d}>{d}</Select.Option>)}
                </Select>
              </Form.Item>
            </Col> */}
            <Col span={24}>
              <Form.Item
                name="duration"
                label="Duration"
                rules={[{required: false, message: 'Please choose duration',},]}
              >
                <Select placeholder="Please choose duration" value={filter.duration}>
                {durList.map((d) => <Select.Option key={d} value={d}>{d}</Select.Option>)}
                </Select>
              </Form.Item>
            </Col>
            {/* <Col span={12}><Form.Item name="dateTime" label="Date" rules={[{required: true, message: 'Please choose hike date',},]}><DatePicker.RangePicker style={{width: '100%',}} getPopupContainer={(trigger) => trigger.parentElement}/></Form.Item></Col> */}
            {/* <Col span={12}><Form.Item name="duration" label="Duration" rules={[{required: true, message: 'Enter name of specific hike',},]}><Input.TextArea rows={1} placeholder="Search for specific hike" /></Form.Item></Col> */}
          </Row>
          <Row>
            <Form.Item>
              <Button type="primary" htmlType="submit">Search</Button>
            </Form.Item>
          </Row>

        </Form>
      </Drawer>
      </>

  )
}