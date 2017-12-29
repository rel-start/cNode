import React, { Component } from 'react'
import { Row, Col, Menu } from 'antd'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { sidebarSchema } from '../../utils/schema'
import HomeList from './home-list'

import { getTopicList } from '../../redux/home-page.reducer'

@connect(
  state => state.homePageReducer,
  { getTopicList }
)
class homePage extends Component {
  state = {
    initTab: 'all',
    currentPage: 1,
    pageSize: 10,
    pageLen: 500,
  }

  componentDidMount() {
    this.props.getTopicList(this.getQueryData());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      this.props.getTopicList(this.getQueryData(nextProps.location.search));
    }
  }

  getQueryData = (search) => {
    const { initTab, currentPage, pageSize } = this.state;
    const s = search || this.props.location.search;
    const q = s ? queryString.parse(s) : {};

    return {
      tab: q.tab || initTab,
      page: parseInt(q.page, 10) || currentPage,
      limit: pageSize,
    }
  }

  // 页码点击
  pageChange = (page, pageSize) => {
    const {tabKey, history} = this.props;

    history.push({
      pathname: '/index',
      search: `?tab=${tabKey}&page=${page}`,
    });
  }

  // 侧边栏菜单点击
  menuClick = (e) => {

    this.props.history.push({
      pathname: '/index',
      search: `?tab=${e.key}`,
    });
  }

  render() {
    const { topics, loading, tabKey, currentPage } = this.props;


    const sidebarItems = Object.keys(sidebarSchema).map((key) => (
      <Menu.Item key={key}>{sidebarSchema[key]}</Menu.Item>
    ));

    return (
      <div className="container">
        <Row>
          {/* --左侧侧边栏--- */}
          <Col xxl={4} xl={5} lg={5} md={6} xs={0} sm={0}>
            <Menu
              mode="inline"
              className="pc-sidebar"
              selectedKeys={[tabKey]}
              onClick={this.menuClick}
            >
              {sidebarItems}
            </Menu>
          </Col>
          <Col xxl={0} xl={0} lg={0} md={0} xs={24} sm={24}>
            <Menu
              mode="horizontal"
              className="mb-sidebar"
              selectedKeys={[tabKey]}
              onClick={this.menuClick}
            >
              {sidebarItems}
            </Menu>
          </Col>

          {/* --右侧文章--- */}
          <HomeList
            topics={topics}
            loading={loading}
            currentPage={currentPage}
            pageSize={this.state.pageSize}
            pageLen={this.state.pageLen}
            pageChange={this.pageChange}
          />
        </Row>
      </div>
    );
  }
};


export default homePage;