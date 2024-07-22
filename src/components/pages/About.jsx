import { Typography, Row, Col, Card, Image } from 'antd';

export default function About() {
  return (

<>

<Row type="flex" align="center">
    <Col align="center">
      <Typography.Title style={{}} level={1}>About Us</Typography.Title>
    </Col>
    </Row>

    <Row >
      <Col span={12} style={{paddingRight: '50px'}}>
      <div>
      <Typography.Title level={2}>Welcome to TrekTalk!</Typography.Title>
      <Typography.Paragraph>
      We are a passionate team committed to bringing the hiking community together. Our goal is to make the world a better place through technology, and we believe that connecting people with nature is a powerful way to achieve this. Integrity, collaboration, and customer focus drive everything we do, fostering a community where everyone feels welcome and inspired to explore the great outdoors.
      </Typography.Paragraph>

      <Typography.Title level={3}>What We Do</Typography.Title>
      <Typography.Paragraph>
      TrekTalk is a community hiking platform designed for hiking enthusiasts to discover new trails and share their experiences on a social media feed. Our website connects users with experts and locals who post recommendations, helping everyone find the perfect hike. Whether you're a seasoned hiker or just starting out, TrekTalk is your go-to resource for all things hiking.
      </Typography.Paragraph>

      <Typography.Title level={3}>Our Mission</Typography.Title>
      <Typography.Paragraph>
      Community and Commitment TrekTalk is more than just a platform; it's a community. We encourage collaboration and support among our users. Participate in discussions and make new friends who share your passion for hiking. We are dedicated to continuously improving our platform to better serve our users, ensuring we remain true to our mission of making the world a better place through technology. Thank you for being a part of TrekTalk. Let's explore the world, one trail at a time!
      </Typography.Paragraph>

    </div>
      </Col>
      <Col span={12}>
      <Image width={'100%'} src="https://cdn.eatlivetraveldrink.com/wp-content/uploads/2019/07/maui-waterfalls-Waimoku-Falls-1.jpg" />
      </Col>
    </Row>







 





  </>
  )
}