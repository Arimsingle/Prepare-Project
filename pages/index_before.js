import { useEffect } from "react"
import Main_topbar from "../layout/Main_topbar"
import { Empty } from 'antd';
import { Typography } from 'antd';
import { Menu, Carousel, Card, Row, Col, Rate } from 'antd'
import Front_cover from "../components/Front_cover";
import Back_cover from "../components/ฺBack_cover";
const { Title } = Typography;
const Index = () => {
    useEffect(() => {
    })

    return (
        <div>
            <div>
                <div>
                    <Main_topbar />
                    <Title></Title>
                    <Front_cover />
                    <Front_cover />
                    <Front_cover />
                    <Title></Title>
                    <Back_cover/>
                    <Title></Title>
                    <Empty />
                    <div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
            .site-card-border-less-wrapper {
                box-shadow: 0 0 0.3cm rgba(0,0,0,0.15);
                display:flex;
                width:550px;
            }

            `}</style>
            <style jsx>{`
            .text-p{
                display:flex;
                
            }
            .text-c{
                display:flex;
                flex-direction:column;
            }
            `}</style>
        </div>
    )
}
export default Index;