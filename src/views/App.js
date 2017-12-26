import React, { Component } from 'react';
import { Row, Col, Menu, Dropdown, Icon, Button, Avatar } from 'antd';

const loginMenu = (
  <Dropdown
    overlay={
      <Menu>
        <Menu.Item style={{ height: 40, lineHeight: '40px', textAlign: 'center', padding: '0 30px' }}>发布话题</Menu.Item>
        <Menu.Item style={{ height: 40, lineHeight: '40px', textAlign: 'center', padding: '0 30px' }}>用户中心</Menu.Item>
        <Menu.Item style={{ height: 40, lineHeight: '40px', textAlign: 'center', padding: '0 30px' }}>退出登录</Menu.Item>
      </Menu>
    }
    placement="bottomCenter"
  >
    <div style={{ display: 'flex' }}>
      <Avatar size="small" icon="user" />
      <p style={{ margin: '0 10px' }}>Yan</p>
    </div>
  </Dropdown>
);

const screenMenu = (
  <Menu>
    <Menu.Item style={{ height: 40, lineHeight: '40px', textAlign: 'center', padding: '0 20px' }}><Icon type="home" style={{ marginRight: 5 }} />主页</Menu.Item>
    <Menu.Item style={{ height: 40, lineHeight: '40px', textAlign: 'center', padding: '0 20px' }}><Icon type="book" style={{ marginRight: 5 }} />教程</Menu.Item>
    <Menu.Item style={{ height: 40, lineHeight: '40px', textAlign: 'center', padding: '0 20px' }}><Icon type="info-circle-o" style={{ marginRight: 5 }} />关于</Menu.Item>
    <Menu.Divider />
    <Menu.Item style={{ height: 40, lineHeight: '40px', textAlign: 'center', padding: '0 20px' }}>
      {loginMenu}
      {/* <Icon type="user" style={{ marginRight: 5 }} />登录 */}
    </Menu.Item>
    {/* <Menu.Item style={{ height: 40, lineHeight: '40px', textAlign: 'center', padding: '0 20px' }}><Icon type="flag" style={{ marginRight: 5 }} />注册</Menu.Item> */}
  </Menu>
);

class App extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <header
          style={{
            height: 64,
            boxShadow: '0 2px 8px #f0f1f2',
            position: 'relative',
          }}
        >
          <Row style={{ height: '100%' }}>
            <Col xxl={4} xl={5} lg={5} md={6} xs={24} sm={24}>
              <h1
                style={{
                  lineHeight: '64px',
                  textAlign: 'center',
                  cursot: 'pointer',
                  margin: 0,
                }}
              >CNode</h1>
            </Col>

            <Col xxl={20} xl={19} lg={19} md={18} xs={0} sm={0} style={{ height: '100%', paddingRight: '10vw' }}>
              <div style={{ float: 'left', width: 0, height: 56, marginTop: 4, marginRight: 10, borderLeft: '1px solid rgb(233,233,233)' }}></div>
              <Menu
                mode="horizontal"
                selectable={false}
                style={{ lineHeight: '64px', float: 'left' }}
              >
                <Menu.Item><Icon type="home" />主页</Menu.Item>
                <Menu.Item><Icon type="book" />教程</Menu.Item>
                <Menu.Item><Icon type="info-circle-o" />关于</Menu.Item>
              </Menu>
              <div style={{ float: 'right', height: '100%', display: 'flex', alignItems: 'center' }}>
                {/* <div>
                  <Button style={{marginRight: 6}}><Icon type="user" />登录</Button>
                  <Button><Icon type="flag" />注册</Button>
                </div> */}

                {loginMenu}
              </div>
            </Col>
          </Row>
          <Row style={{ position: 'absolute', right: 30, top: 16 }}>
            <Col xxl={0} xl={0} md={0} lg={0} xs={24} sm={24}>
              <Dropdown overlay={screenMenu} placement="bottomCenter">
                <Button><Icon type="bars" style={{ fontSize: 16 }} /></Button>
              </Dropdown>
            </Col>
          </Row>
        </header>

        {/* ----------------- */}
        <div style={{ paddingBottom: 40 }}>
          <Row>
            {/* --左侧侧边栏--- */}
            <Col xxl={4} xl={5} lg={5} md={6} xs={0} sm={0}>
              <Menu mode="inline" style={{ lineHeight: '64px', border: 'none', textAlign: 'center' }}>
                <Menu.Item>全部</Menu.Item>
                <Menu.Item>精华</Menu.Item>
                <Menu.Item>分享</Menu.Item>
                <Menu.Item>问答</Menu.Item>
                <Menu.Item>招聘</Menu.Item>
                <Menu.Item>测试</Menu.Item>
              </Menu>
            </Col>
            <Col xxl={0} xl={0} lg={0} md={0} xs={24} sm={24}>
              <Menu mode="horizontal"
              >
                <Menu.Item>全部</Menu.Item>
                <Menu.Item>精华</Menu.Item>
                <Menu.Item>分享</Menu.Item>
                <Menu.Item>问答</Menu.Item>
                <Menu.Item>招聘</Menu.Item>
                <Menu.Item>测试</Menu.Item>
              </Menu>
            </Col>

            {/* --右侧文章--- */}
            <Col xxl={20} xl={19} lg={19} md={18} xs={24} sm={24}></Col>
          </Row>
        </div>

        {/* ----------------- */}
        <footer></footer>
      </div>
    );
  }
};


export default App;