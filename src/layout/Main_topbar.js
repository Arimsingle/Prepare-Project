import Link from 'next/link'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const Main_topbar = () => {
    const menu = (
        <Menu>
            <Menu.Item>
                <Link href='/'>
                    <a className='link'>หน้าหลัก</a>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href='/Sitting'>
                    <a className='link'>ตั้งค่าผู้ใช้</a>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href='/'>
                    <a className='link'>ออกจากระบบ</a>
                </Link>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className='container'>
            <div>
                <div className='topbar'>
                    <div className='logo-container'>
                        <Link href='/'>
                            <a className='link'>หน้าหลัก</a>
                        </Link>
                    </div>
                    <div className='menu-container'>
                        <div>
                            <Link href='/Products'>
                                <a className='link'>สินค้า</a>
                            </Link>
                        </div>
                        <div>
                            <Link href='/Action'>
                                <a className='link'>กล้อง อัฉาริยะ</a>
                            </Link>
                        </div>
                        <div>
                            <Link href='/Register'>
                                <a className='link'>สมัครสามชิก</a>
                            </Link>
                        </div>
                        <div className="logos">
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link">
                                    Arim Cheberahim <DownOutlined />
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <style jsx global>{`
                body {
                margin: 0;
                }
            `}</style>
            <style jsx>{`
                .topbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 50px;
                    padding: 0 30px;
                    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
                }
                .ant-avatar{
                    margin-left:100px;
                }
                .menu-container {
                    display: flex;
                }
                .menu-container div {
                    margin-left: 20px;
                }
                .link {
                    text-decoration: none;
                    color: black;
                }
                .link:hover{
                    color: #33b5e5;
                }
                .content {
                    display: flex;
                    flex-direction: column;
                }
                .logos{
                    display: flex;
                }
                .logo{
                    padding-left:30px;
                    color:#3498DB;
                }
            `}</style>
        </div>
    )
}
export default Main_topbar;