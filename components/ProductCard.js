import { Card, Col, Row, Avatar } from 'antd';
import { Button, ButtonGroup } from 'react-bootstrap';
const { Meta } = Card;
import { message } from 'antd';
import Router from 'next/router'
const ProductCard = () => {
    const Open_Tracking = () => {
        // message.success('กดควบคุมด้วยมือ')
        Router.push('/Hand_Tracking')
    }
    return (
        <div className="constrain">
            <div className="d-flex justify-content-center">
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <img
                                        alt="Product"
                                        src="https://i.pinimg.com/originals/55/3b/0d/553b0de49370de088934eff4805d5d84.gif"
                                    />
                                }
                            >
                                <Meta
                                    avatar={<Avatar src="https://i.pinimg.com/originals/d4/e3/33/d4e333328888139ecf7385f23360dbd7.gif" />}
                                    title="สินค้าใหม่"
                                    description="deep learning คือ ซอฟแวร์คอมพิวเตอร์ที่่เลียนแบบการทำงานของระบบโครงข่ายประสาท"
                                />
                                <div className="d-flex justify-content-center">
                                    <div className="btn">
                                        <ButtonGroup>
                                            <Button onClick={() => message.success('กดซื้อ')}>ซื้อ</Button>
                                            <Button onClick={Open_Tracking}>ควบคุมด้วยมือ</Button>
                                            <Button onClick={() => message.success('กดตั้งค่า')}>ตั้งค่า</Button>
                                        </ButtonGroup>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <img
                                        alt="Product"
                                        src="https://i.pinimg.com/originals/55/3b/0d/553b0de49370de088934eff4805d5d84.gif"
                                    />
                                }
                            >
                                <Meta
                                    avatar={<Avatar src="https://i.pinimg.com/originals/d4/e3/33/d4e333328888139ecf7385f23360dbd7.gif" />}
                                    title="สินค้าใหม่"
                                    description="deep learning คือ ซอฟแวร์คอมพิวเตอร์ที่่เลียนแบบการทำงานของระบบโครงข่ายประสาท"
                                />
                                <div className="d-flex justify-content-center">
                                    <div className="btn">
                                        <ButtonGroup>
                                            <Button onClick={() => message.success('กดซื้อ')}>ซื้อ</Button>
                                            <Button onClick={() => message.success('กดควบคุมด้วยมือ')}>ควบคุมด้วยมือ</Button>
                                            <Button onClick={() => message.success('กดตั้งค่า')}>ตั้งค่า</Button>
                                        </ButtonGroup>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <img
                                        alt="Product"
                                        src="https://i.pinimg.com/originals/55/3b/0d/553b0de49370de088934eff4805d5d84.gif"
                                    />
                                }
                            >
                                <Meta
                                    avatar={<Avatar src="https://i.pinimg.com/originals/d4/e3/33/d4e333328888139ecf7385f23360dbd7.gif" />}
                                    title="สินค้าใหม่"
                                    description="deep learning คือ ซอฟแวร์คอมพิวเตอร์ที่่เลียนแบบการทำงานของระบบโครงข่ายประสาท"
                                />
                                <div className="d-flex justify-content-center">
                                    <div className="btn">
                                        <ButtonGroup>
                                            <Button onClick={() => message.success('กดซื้อ')}>ซื้อ</Button>
                                            <Button onClick={() => message.success('กดควบคุมด้วยมือ')}>ควบคุมด้วยมือ</Button>
                                            <Button onClick={() => message.success('กดตั้งค่า')}>ตั้งค่า</Button>
                                        </ButtonGroup>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            <style jsx>{`
            .constrain{
                margin-top:30px;
            }
            .btn{
                margin-top:20px;
            }
            `}</style>
        </div>
    )
}
export default ProductCard;