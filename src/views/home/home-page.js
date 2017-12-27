import React, { Component } from 'react';
import { Row, Col, Menu } from 'antd';

import { sidebarSchema } from '../../utils/schema';
import HomeList from './home-list';

const topics = [
  {
    reply_count: 30,
    visit_count: 400,
    author: {
      loginname: 'Fq',
      avatar_url: 'https://avatars0.githubusercontent.com/u/7286498?v=4&s=120'
    },
    create_at: '2017-12-11',
    title: '首届蚂蚁金服体验科技大会'
  },
  {
    reply_count: 30,
    visit_count: 400,
    author: {
      loginname: 'Fq',
      avatar_url: 'https://avatars0.githubusercontent.com/u/7286498?v=4&s=120'
    },
    create_at: '2017-12-11',
    title: '首届蚂蚁金服体验科技大会'
  },
  {
    reply_count: 30,
    visit_count: 400,
    author: {
      loginname: 'Fq',
      avatar_url: 'https://avatars0.githubusercontent.com/u/7286498?v=4&s=120'
    },
    create_at: '2017-12-11',
    title: '首届蚂蚁金服体验科技大会'
  }
];

class homePage extends Component {

  render() {
    const sidebarItems = Object.keys(sidebarSchema).map((key) => (
      <Menu.Item key={key}>{sidebarSchema[key]}</Menu.Item>
    ));

    return (
      <div className="container">
        <Row>
          {/* --左侧侧边栏--- */}
          <Col xxl={4} xl={5} lg={5} md={6} xs={0} sm={0}>
            <Menu mode="inline" className="pc-sidebar">
              {sidebarItems}
            </Menu>
          </Col>
          <Col xxl={0} xl={0} lg={0} md={0} xs={24} sm={24}>
            <Menu mode="horizontal" className="mb-sidebar">
              {sidebarItems}
            </Menu>
          </Col>

          {/* --右侧文章--- */}
          <HomeList topics={topics} />
        </Row>
      </div>
    );
  }
};


export default homePage;