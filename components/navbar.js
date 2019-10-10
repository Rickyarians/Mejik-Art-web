import React from 'react'
import { PageHeader, Avatar, Row, Col, Icon, Input, Menu, Dropdown, Button } from 'antd'
import Link from 'next/link'
import './../public/assets/styles/navbar.less'


const { Search } = Input;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);


function Navbar(props) {






  return (

    <Row style={styles.header}>
      <Col xs={24} sm={24} md={10} lg={10} xl={10}>

        <Link>
          <a className="card-btn-navbar">
            <Icon type="home" theme="outlined" style={{ margin: '0.5rem', color: '#fff', fontSize: '1rem' }} />
          </a>
        </Link>


        <Dropdown overlay={menu} trigger={['click']}>
          <a className="card-btn-navbar">
            <Icon type="project" theme="outlined" style={{ margin: '0.5rem', color: '#fff', fontSize: '1rem' }} />
          </a>
        </Dropdown>
        <div style={{ display: 'inline-block' }}>
          <Search
            placeholder=""
            onSearch={value => console.log(value)}
            className="form-search"
            style={{ backgroundColor: 'transparent' }}
          />
        </div>
      </Col>
      <Col xs={24} sm={24} md={4} lg={4} xl={4} style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
        <img src="/img/mejikart-logo.svg" width="100" height="30" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
      </Col>
      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <div style={{ float: 'right' }}>

          <Dropdown overlay={menu} trigger={['click']}>
            <a className="card-btn-navbar">
              <Icon type="plus" theme="outlined" style={{ margin: '0.5rem', color: '#fff', fontSize: '1rem' }} />
            </a>
          </Dropdown>

          <Dropdown overlay={menu} trigger={['click']}>
            <a className="card-btn-navbar">
              <Icon type="info-circle" theme="outlined" style={{ margin: '0.5rem', color: '#fff', fontSize: '1rem' }} />
            </a>
          </Dropdown>

          <Dropdown overlay={menu} trigger={['click']}>
            <a className="card-btn-navbar">
              <Icon type="bell" theme="outlined" style={{ margin: '0.5rem', color: '#fff', fontSize: '1rem' }} />
            </a>
          </Dropdown>
          
          <Avatar style={styles.avatar} src={props.avatar} shape="circle" height="20" width="20" />
        </div>
      </Col>
    </Row>

  )
}

const styles = {
  header: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: '#8854D0  ',
    width: '100%',
    height: 40,
    padding: 3,
    lineHeight: 0
  },
  leftSideHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 40 / 2,
    resizeMode: 'contain',
    float: 'right'
  }
}

export default Navbar
