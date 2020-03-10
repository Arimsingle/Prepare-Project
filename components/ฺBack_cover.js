import { Descriptions } from 'antd'
const Back_cover = () => {
    return (
        <div>
            <div className="xxx">
                <div className="d-flex justify-content-around">
                    <div className="d-flex justify-content-around">
                        <Descriptions title="About My setf">
                            <Descriptions.Item label="UserName">Arim Cheberahim</Descriptions.Item>
                            <Descriptions.Item label="Student ID">6035512059</Descriptions.Item>
                            <Descriptions.Item label="Live">PSU PHUKET</Descriptions.Item>
                            <Descriptions.Item label="Remark">empty</Descriptions.Item>
                            <Descriptions.Item label="Address">
                            PSU PHUKET
                    </Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
            </div>
            <style jsx global>{`
            .xxx{
                margin-left:500px;
            }

            `}</style>
        </div>
    )
}
export default Back_cover;