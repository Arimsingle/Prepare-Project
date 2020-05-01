import { useState } from 'react';
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
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Nav_Layout = () => {
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
                                    <span>หน้าหลัก</span>
                                </div>

                            </Menu.Item>
                            <Menu.Item key="2">
                                <div style={{ display: "flex" }} onClick={() => Router.push('/ProductList')}>
                                    <span className="nav-logo"> <ShoppingCartOutlined /></span>
                                    <span>บริการ</span>
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
                                    <span>เกี่ยวกับ</span>
                                </div>
                            </Menu.Item>
                            <Menu.Item key="10">
                                <div style={{ display: "flex" }}>
                                    <span className="nav-logo"><SendOutlined /></span>
                                    <span>ติดต่อ</span>
                                </div>
                            </Menu.Item>
                            <Menu.Item key="11">
                                <div style={{ display: "flex" }}>
                                    <span className="nav-logo"> <UserOutlined onClick={() => Router.push('/Register')} /></span>
                                    <span onClick={() => Router.push('/Register')}>เข้าสู่ระบบ</span>
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
                                Home Page
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
export default Nav_Layout;