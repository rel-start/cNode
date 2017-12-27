import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Row className="footer">
          <Col span={24} className="footer-copy">
            CNode Project - Created By React | Copyright © Yan
          <br />
            网站备案编号: ICP 吉证 17-008864
        </Col>
        </Row>
      </footer>
    );
  }
};


export default Footer;