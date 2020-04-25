import { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    CarOutlined,
    ShoppingCartOutlined,
    SolutionOutlined,
    SendOutlined,
    UserOutlined,
    ProfileOutlined,
    HomeOutlined
} from '@ant-design/icons';
import Router from 'next/router'
import Sign_in from './Sign_in'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Index = () => {
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
                                <HomeOutlined />
                                <span>HOME</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <ShoppingCartOutlined />
                                <span>SERVICE</span>
                            </Menu.Item>
                            <SubMenu key="sub1" title={<span><CarOutlined /><span>CARS</span></span>}>
                                <Menu.Item key="3">TOYOTA</Menu.Item>
                                <Menu.Item key="4">MAZDA</Menu.Item>
                                <Menu.Item key="5">BMW</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><ProfileOutlined /><span>PROMOTION</span></span>}>
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <SolutionOutlined />
                                <span>ABOUT</span>
                            </Menu.Item>
                            <Menu.Item key="10">
                                <SendOutlined />
                                <span>CONTACT</span>
                            </Menu.Item>
                            <Menu.Item key="11">
                                <UserOutlined onClick={() => Router.push('/Register')} />
                                <span onClick={() => Router.push('/Register')}>LOGIN</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                Bill is a cat.
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
            `}</style>
        </div>
    )
}
export default Index;