import { useState, useEffect } from 'react';
import * as faceapi from 'face-api.js';
import { Form, Input, Select, InputNumber, Card, Tabs } from 'antd';
import { UnlockTwoTone, MailTwoTone, IdcardTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Upload, Button } from 'antd';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { usersActions } from '../src/redux/user/action'
import { formActions } from '../src/redux/form/action'
import Router from 'next/router'
const { Option } = Select;
const { TabPane } = Tabs;
const Sign_in = () => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    const [name, setName] = useState('');
    async function Webcam() {
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri('/static/models'),
            faceapi.nets.faceLandmark68Net.loadFromUri('/static/models'),
            faceapi.nets.faceRecognitionNet.loadFromUri('/static/models'),
            faceapi.nets.ssdMobilenetv1.loadFromUri('/static/models'),
        ]).then(startVideo)
        const video = document.getElementById('video')
        function startVideo() {
            navigator.getUserMedia(
                { video: {} },
                stream => video.srcObject = stream,
                err => console.error(err)
            )
        }
        video.addEventListener('play', () => {
            const canvas = faceapi.createCanvasFromMedia(video)
            document.body.append(canvas)
            const displaySize = { width: video.width, height: video.height }
            faceapi.matchDimensions(canvas, displaySize)

            let labeledFaceDescriptors
            (async () => {
                labeledFaceDescriptors = await loadLabeledImages()
            })()

            setInterval(async () => {
                const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors()
                console.log(detections)
                const resizedDetections = faceapi.resizeResults(detections, displaySize)
                canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
                if (labeledFaceDescriptors) {
                    const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6)
                    const results = resizedDetections.map(data => faceMatcher.findBestMatch(data.descriptor))
                    results.forEach((result, i) => {
                        const box = resizedDetections[i].detection.box
                        setName(result.toString())
                        //const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })
                        //drawBox.draw(canvas)
                    })
                }

            }, 100)
        })
        function loadLabeledImages() {
            const labels = ['Arim', 'Ai','Ai2']
            return Promise.all(
                labels.map(async label => {
                    const descriptions = []
                    for (let i = 1; i <= 7; i++) {
                        const img = await faceapi.fetchImage(`/static/images/${label}/${i}.jpg`)
                        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
                        descriptions.push(detections.descriptor)
                    }
                    return new faceapi.LabeledFaceDescriptors(label, descriptions)
                })
            )
        }
    }
    // const actionsUser = bindActionCreators(usersActions, useDispatch());
    const actionsForm = bindActionCreators(formActions, useDispatch());
    const form = useSelector(state => state.form)
    const users = useSelector(state => state.users)
    const onChange = (value) => {
        actionsForm.onChangeAge(value);
    }
    return (
        <div>
            <div>
                <div className="mt-5">
                    <div className="d-flex justify-content-center">
                        <Card style={{ width: 800 }}>
                            <Tabs>
                                <TabPane tab="EMAIL" key="1">
                                    <div className="pr-5 pl-5">
                                        <div className="pr-5 pl-5">
                                            <div className="pr-5 pl-5">
                                                <div className="mb-4">
                                                    <h5 style={{ color: "#8c8c8c" }}>Email-Password</h5>
                                                </div>
                                                <Form
                                                    name="normal_login"
                                                    className="login-form"
                                                    initialValues={{ remember: true }}
                                                    onFinish={onFinish}>
                                                    <Form.Item name={['email']} rules={[{ type: 'email' }]}>
                                                        <Input prefix={<div className="logo-username"><MailTwoTone /></div>} placeholder="Email" onChange={(e) => actionsForm.onChangeEmail({ ...form, email: e.target.value })} />
                                                    </Form.Item>
                                                    <Form.Item
                                                        name="Password"
                                                        rules={[{ required: true, message: 'Please input your Password!' }]}>
                                                        <Input prefix={<div className="logo-username"><UnlockTwoTone /></div>} type="password" placeholder="Password" onChange={(e) => actionsForm.onChangePassword({ ...form, password: e.target.value })} />
                                                    </Form.Item>
                                                    <Form.Item>
                                                        <div className="d-flex justify-content-between">
                                                            <Button type="primary" htmlType="submit" className="mt-3">
                                                                LOGIN
                                                            </Button>
                                                            <Button type="primary" className="mt-3" onClick={() => Router.push('/Register')}>
                                                                REGISTER PAGE
                                                            </Button>
                                                        </div>
                                                    </Form.Item>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="FACE" key="2">
                                    <div>
                                        <div className="mb-4">
                                            <h5 style={{ color: "#8c8c8c" }}>Face-Scan</h5>
                                            <p style={{ color: "#8c8c8c" }}>LOGIN WITH YOUR FACE</p>
                                        </div>
                                        <div>
                                            <div>
                                                <Button type="primary" onClick={Webcam}>Webcam</Button>
                                                <video id="video" height="500px" width="500px" autoPlay muted />
                                                <h1>User : {name}</h1>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <Button type="primary" htmlType="submit" className="mt-3">
                                                LOGIN
                                            </Button>
                                            <Button type="primary" className="mt-3" onClick={() => Router.push('/Register')}>
                                                REGISTER PAGE
                                            </Button>
                                        </div>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </Card>
                    </div>
                </div>
                <style jsx>{`
                    .logo-username{
                    margin-bottom:5px;
                    }
            `}</style>
            </div>
        </div>
    );
};
export default Sign_in;