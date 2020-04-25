import { Menu, Carousel, Card, Row, Col, Rate } from 'antd'
import { Typography } from 'antd';
const { Title } = Typography;
const Front_cover = () => {
    return (
        <div>
        <div className="d-flex justify-content-center">
            <div className="row">
                <div className="site-card-border-less-wrapper">
                    <Card title="How to use face ID" bordered={false} style={{ width: 550 }}>
                        <img src="/static/images/face.jpg" width="500px" />
                        <Title></Title>
                        <p>your iPhone or iPad, open the Settings app and select</p>
                        <p>Face ID & Passcode. Enter your passcode when prompted.</p>
                        <p>Face ID's settings allow you to enable or disable the feature</p>
                        <p>as well as add an alternate face</p>
                        <p>(for when you give someone else access to your phone, for example)</p>
                    </Card>
                </div>
                <div className="site-card-border-less-wrapper">
                    <Card title="How to use face ID" bordered={false} style={{ width: 550 }}>
                        <img src="/static/images/face.jpg" width="500px" />
                        <br></br>
                        <Title></Title>
                        <p>your iPhone or iPad, open the Settings app and select</p>
                        <p>Face ID & Passcode. Enter your passcode when prompted.</p>
                        <p>Face ID's settings allow you to enable or disable the feature</p>
                        <p>as well as add an alternate face</p>
                        <p>(for when you give someone else access to your phone, for example)</p>
                    </Card>
                </div>
                <div className="site-card-border-less-wrapper">
                    <Card title="How to use face ID" bordered={false} style={{ width: 550 }}>
                        <img src="/static/images/face.jpg" width="500px" />
                        <br></br>
                        <Title></Title>
                        <p>your iPhone or iPad, open the Settings app and select</p>
                        <p>Face ID & Passcode. Enter your passcode when prompted.</p>
                        <p>Face ID's settings allow you to enable or disable the feature</p>
                        <p>as well as add an alternate face</p>
                        <p>(for when you give someone else access to your phone, for example)</p>
                    </Card>
                </div>
                </div>
            </div>
            <style jsx global>{`
            .site-card-border-less-wrapper {
                box-shadow: 0 0 0.3cm rgba(0,0,0,0.15);
                display:flex;
                width:550px;
            }
            .row{
                display:flex;
            }
            `}</style>
        </div>
    )
}
export default Front_cover;