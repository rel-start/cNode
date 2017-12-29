import React from 'react'
import { Col, List, Tag, Avatar, Pagination } from 'antd'

import { sidebarSchema } from '../../utils/schema'

function homeList({ topics, loading, pageChange, currentPage, pageSize, pageLen }) {
  return (
    <Col xxl={20} xl={19} lg={19} md={18} xs={24} sm={24} className="home-content">
      <List
        itemLayout="horizontal"
        dataSource={topics}
        loading={loading}
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
                  <Tag color={item.top ? 'magenta' : item.good ? 'purple' : 'blue'}>{item.top ? '置顶' : item.good ? '精华' : sidebarSchema[item.tab] ? sidebarSchema[item.tab] : '其他'}</Tag>
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
        pageSize={pageSize}
        current={currentPage}
        total={pageLen}
        onChange={pageChange}
      />
    </Col>
  );
}


export default homeList;