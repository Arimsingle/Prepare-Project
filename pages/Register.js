import { Form, Input, Select, InputNumber, Card, Tabs } from 'antd';
import { UnlockTwoTone, MailTwoTone, IdcardTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Upload, Button } from 'antd';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { usersActions } from '../src/redux/user/action'
import { formActions } from '../src/redux/form/action'
import { useState, useEffect } from 'react';
import Router from 'next/router'
const { Option } = Select;
const { TabPane } = Tabs;
const Register = () => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    const fileList = [
        {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-2',
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ];

    const props = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        listType: 'picture',
        defaultFileList: [...fileList],
    };
    const actionsUser = bindActionCreators(usersActions, useDispatch());
    const actionsForm = bindActionCreators(formActions, useDispatch());
    const form = useSelector(state => state.form)
    const users = useSelector(state => state.users)
    console.log(form)
    console.log(users)
    useEffect(() => {
    }, [])
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
                                                    <Form.Item
                                                        name="name"
                                                        rules={[{ required: true, message: 'Please input your Username!' }]}>
                                                        <Input prefix={<div className="logo-username"><IdcardTwoTone /></div>} placeholder="Name" onChange={(e) => actionsForm.onChangeName({ ...form, name: e.target.value })} />
                                                    </Form.Item>
                                                    <Form.Item
                                                        name="surname"
                                                        rules={[{ required: true, message: 'Please input your Username!' }]}>
                                                        <Input prefix={<div className="logo-username"><IdcardTwoTone /></div>} placeholder="Surname" onChange={(e) => actionsForm.onChangeSurname({ ...form, surname: e.target.value })} />
                                                    </Form.Item>
                                                    <Form.Item name={['email']} rules={[{ type: 'email' }]}>
                                                        <Input prefix={<div className="logo-username"><MailTwoTone /></div>} placeholder="Email" onChange={(e) => actionsForm.onChangeEmail({ ...form, email: e.target.value })} />
                                                    </Form.Item>
                                                    <Form.Item
                                                        name="user"
                                                        rules={[{ required: true }]}>
                                                        <Input prefix={<div className="logo-username"><SmileTwoTone /></div>} placeholder="Username" onChange={(e) => actionsForm.onChangeUsername({ ...form, user: e.target.value })} />
                                                    </Form.Item>
                                                    <Form.Item
                                                        name="Password"
                                                        rules={[{ required: true, message: 'Please input your Password!' }]}>
                                                        <Input prefix={<div className="logo-username"><UnlockTwoTone /></div>} type="password" placeholder="Password" onChange={(e) => actionsForm.onChangePassword({ ...form, password: e.target.value })} />
                                                    </Form.Item>
                                                    <Form.Item
                                                        name="Password2"
                                                        rules={[{ required: true, message: 'Please input your Password!' }]}>
                                                        <Input prefix={<div className="logo-username"><UnlockTwoTone /></div>} type="password" placeholder="Password" onChange={(e) => actionsForm.onChangeRePassword({ ...form, repassword: e.target.value })} />
                                                    </Form.Item>
                                                    <Form.Item
                                                        name="number"
                                                        rules={[{ required: true, message: 'Please input your Number!' }]}>
                                                        <InputNumber placeholder="Age" onChange={onChange} />
                                                    </Form.Item>
                                                    <Form.Item
                                                        name={['gender']}
                                                        noStyle
                                                        rules={[{ required: true, message: 'Province is required' }]}>
                                                        <Select placeholder="Gender">
                                                            <Option value="Male" onClick={e => actionsForm.onChangeMale({ ...form, male: e.target.value })}>Male</Option>
                                                            <Option value="Female" onClick={e => actionsForm.onChangeFemale({ ...form, female: e.target.value })}>Female</Option>
                                                        </Select>
                                                    </Form.Item>
                                                    <Form.Item>
                                                        <div className="d-flex justify-content-between">
                                                            <Button type="primary" htmlType="submit" className="mt-3">
                                                                SIGN UP
                                                            </Button>
                                                            <Button type="primary" className="mt-3" onClick={()=>Router.push('/Sign_in')}>
                                                                LOGIN PAGE
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
                                            <p style={{ color: "#8c8c8c" }}>Upload your face more than 12 pictuer</p>
                                        </div>
                                        <div>
                                            <Upload {...props}>
                                            </Upload>
                                            <br />
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <Button type="primary" htmlType="submit" className="mt-3">
                                                TRAIN
                                            </Button>
                                            <Button type="primary" className="mt-3" onClick={()=>Router.push('/Sign_in')}>
                                                LOGIN PAGE
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
export default Register;