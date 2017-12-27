import React from 'react';
import { Col, List, Tag, Avatar, Pagination } from 'antd';

function homeList({ topics, changePage = () => { }, current = 1, pageSize = 30, total = 500 }) {
  return (
    <Col xxl={20} xl={19} lg={19} md={18} xs={24} sm={24} className="home-content">
      <List
        itemLayout="horizontal"
        dataSource={topics}
        renderItem={item => (
          <List.Item
            actions={
              [
                <span style={{ marginLeft: 35 }}>回复:{item.reply_count}</span>,
                <span>访问:{item.visit_count}</span>
              ]
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.author.avatar_url} />}
              title={
                <div>
                  <Tag color={'magenta'}>{'分享'}</Tag>
                  <a href="https://ant.design">{item.title}</a>
                </div>
              }
              description={<span>{item.author.loginname} 发表于: {item.create_at}</span>}
            />
          </List.Item>
        )}
      />

      <Pagination
        style={{ marginTop: 20 }}
        size="small"
        showQuickJumper
        pageSize={30}
        current={1}
        total={500}
        onChange={changePage}
      />
    </Col>
  );
}


export default homeList;