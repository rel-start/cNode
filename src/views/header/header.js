import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Menu, Dropdown, Icon, Button, Avatar } from 'antd';
import { navbarSchema } from '../../utils/schema';
import './header.scss';

const loginMenu = (
  <Dropdown
    overlay={
      <Menu className="header-user-drapdown">
        <Menu.Item>发布话题</Menu.Item>
        <Menu.Item>用户中心</Menu.Item>
        <Menu.Item>退出登录</Menu.Item>
      </Menu>
    }
    placement="bottomCenter"
  >
    <div className="header-user-info">
      <Avatar size="small" icon="user" />
      <p className="header-user-name">Yan</p>
    </div>
  </Dropdown>
);

// 移动端导航菜单
const screenMenu = (
  <Menu className="header-user-drapdown" style={{ minWidth: 150 }}>
    {
      Object.keys(navbarSchema).map((key) => (
        <Menu.Item key={key}><Icon type={key} className="mr5" />{navbarSchema[key]}</Menu.Item>
      ))
    }
    <Menu.Divider />
    <Menu.Item>
      {/* <Icon type="user" className="mr5" />登录 */}
      {loginMenu}
    </Menu.Item>
    {/* <Menu.Item><Icon type="flag" className="mr5" />注册</Menu.Item> */}
  </Menu>
);

class Header extends Component {

  render() {
    return (
      <header className="header">
        <Row className="full-height">
          <Col xxl={4} xl={5} lg={5} md={6} xs={24} sm={24}>
            <h1 className="header-logo">Me</h1>
          </Col>

          {/* PC端导航菜单 */}
          <Col xxl={20} xl={19} lg={19} md={18} xs={0} sm={0} className="pc-header-right">
            <div className="header-logo-line"></div>
            <Menu
              mode="horizontal"
              selectable={false}
              className="navbar"
            >
              {
                Object.keys(navbarSchema).map((key) => (
                  <Menu.Item key={key}>
                    <Link to={`/${key}`}>
                      <Icon type={key} className="mr5" />{navbarSchema[key]}
                    </Link>
                  </Menu.Item>
                ))
              }
            </Menu>
            <div className="header-user-warp">
              {/* 用户登录、注册 */}
              <div>
                <Button style={{ marginRight: 6 }}><Icon type="user" />登录</Button>
                <Button><Icon type="flag" />注册</Button>
              </div>

              {/* 用户头像 */}
              {/* {loginMenu} */}
            </div>
          </Col>
        </Row>
        <Row className="mb-header-right">
          <Col xxl={0} xl={0} lg={0} md={0} xs={24} sm={24}>
            <Dropdown overlay={screenMenu} placement="bottomCenter">
              <Button><Icon type="bars" style={{ fontSize: 16 }} /></Button>
            </Dropdown>
          </Col>
        </Row>
      </header>
    );
  }
};



export default Header;