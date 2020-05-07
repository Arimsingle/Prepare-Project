import { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
    CarOutlined,
    ShoppingCartOutlined,
    SolutionOutlined,
    SendOutlined,
    UserOutlined,
    ProfileOutlined,
    HomeOutlined,
    ShoppingOutlined
} from '@ant-design/icons';
import Router from 'next/router'
import { Carousel } from 'react-bootstrap';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Index = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = () => {
        console.log(collapsed);
        setCollapsed(state => !state);
    };
    return (
        <div>
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                        <div className="d-flex justify-content-center"><img src="https://i.pinimg.com/originals/fb/3f/e7/fb3fe7a71631c34341ea4ccb98cf24b3.png" width="80px" /></div>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <div style={{ display: "flex" }}>
                                    <span className="nav-logo"><HomeOutlined /></span>
                                    {collapsed === false && <span>หน้าหลัก</span>}
                                </div>

                            </Menu.Item>
                            <Menu.Item key="2">
                                <div style={{ display: "flex" }} onClick={() => Router.push('/ProductList')}>
                                    <span className="nav-logo"> <ShoppingCartOutlined /></span>
                                    {collapsed === false && <span>บริการ</span>}
                                </div>
                            </Menu.Item>
                            <SubMenu key="sub1" title={<div style={{ display: "flex" }}><span className="nav-logo"><CarOutlined /><span>รถ</span></span></div>}>
                                <Menu.Item key="3">TOYOTA</Menu.Item>
                                <Menu.Item key="4">MAZDA</Menu.Item>
                                <Menu.Item key="5">BMW</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><ProfileOutlined /><span>โปรโมชั่น</span></span>}>
                                <Menu.Item key="6">New Years</Menu.Item>
                                <Menu.Item key="8">Birth Day</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <div style={{ display: "flex" }}>
                                    <span className="nav-logo"><SolutionOutlined /></span>
                                    {collapsed === false && <span>เกี่ยวกับ</span>}
                                </div>
                            </Menu.Item>
                            <Menu.Item key="10">
                                <div style={{ display: "flex" }}>
                                    <span className="nav-logo"><SendOutlined /></span>
                                    {collapsed === false && <span>ติดต่อ</span>}
                                </div>
                            </Menu.Item>
                            <Menu.Item key="11">
                                <div style={{ display: "flex" }}>
                                    <span className="nav-logo"> <UserOutlined onClick={() => Router.push('/Register')} /></span>
                                    {collapsed === false && <span onClick={() => Router.push('/Register')}>เข้าสู่ระบบ</span>}
                                </div>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <div className="d-flex justify-content-end">
                                    <Breadcrumb.Item>Digital</Breadcrumb.Item>
                                    <Breadcrumb.Item>Arima Kousie</Breadcrumb.Item>
                                    <span className="shop-margin"><ShoppingOutlined /></span>
                                </div>
                            </Breadcrumb>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                <div>
                                    <Carousel activeIndex={index} onSelect={handleSelect}>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="https://wallpaperaccess.com/full/1246177.jpg"
                                                alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                <h3>First slide label</h3>
                                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="https://wallpaperaccess.com/full/1246177.jpg"
                                                alt="Second slide"
                                                width="500px"
                                            />
                                            <Carousel.Caption>
                                                <h3>Second slide label</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="https://wallpaperaccess.com/full/1246177.jpg"
                                                alt="Second slide"
                                            />
                                            <Carousel.Caption>
                                                <h3>Third slide label</h3>
                                                <p>
                                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                                </p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>ARIMA DEVERLOPER</Footer>
                    </Layout>
                </Layout>
            </div>
            <style jsx>{`
            #components-layout-demo-side{
                height: 32px;
                background: rgba(255, 255, 255, 0.2);
                margin: 16px;
            }
            .site-layout-background {
                background: #fff;
            }
            .site-layout{
                background: #fff;
            }
            .test{
                padding:0px;
            }
            .shop-margin{
                margin-top:-3px;
            }
            .nav-logo{
                margin-right:10px;
                margin-top:-3px;
            }
            `}</style>
        </div>
    )
}
export default Index;