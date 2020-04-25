import { Button, Form } from 'react-bootstrap';
import { UserOutlined, MailOutlined, KeyOutlined } from '@ant-design/icons';
import Topbar from '../src/layout/Topbar'
import Router from 'next/router'
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { usersActions } from '../src/redux/user/action'
import { formActions } from '../src/redux/form/action'
import { useState, useEffect } from 'react';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};

import Link from 'next/link'
const Register = () => {
    const actionsUser = bindActionCreators(usersActions, useDispatch());
    const actionsForm = bindActionCreators(formActions, useDispatch());
    const form = useSelector(state => state.form)
    const users = useSelector(state => state.users)
    useEffect(() => {
        console.log(actionsUser)
        console.log(actionsForm)
    }, [])
    const SHOW = () => {
        console.log(form)
    }
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <div className="position">
                <Link href='/'>
                    <a className='link'>HOME</a>
                </Link>
            </div>
            <div>
                <div className="second-body">
                    <div className="d-flex justify-content-center">
                        <div className="card">
                            <div className="box">
                                <div className="content-between">
                                    <div className="flex-start">
                                        <div className="card-link">
                                            <Topbar />
                                        </div>
                                    </div>
                                    <div className="form">
                                        <Form>
                                            <Form.Group>
                                                <Form.Label><UserOutlined /> Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Name" onChange={e => actionsForm.onChangeName({ ...form, Name: e.target.value })} />
                                                <Form.Label><UserOutlined /> Last-Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Last Name" onChange={e => actionsForm.onChangeLastname({ ...form, Last_name: e.target.value })} />
                                                <Form.Label><UserOutlined />AGE</Form.Label>
                                                <Form.Control type="number" placeholder="Enter Age" onChange={e => actionsForm.onChangeAge({ ...form, Last_name: e.target.value })} />
                                                <Form.Group controlId="formBasicEmail"></Form.Group>
                                                <Form.Label><UserOutlined />IDNAME</Form.Label>
                                                <Form.Control type="text" placeholder="Enter IDNAME" onChange={e => actionsForm.onChangeID({ ...form, Last_name: e.target.value })} />
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label><MailOutlined className="logo-svg" /> Email address</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter Email" onChange={e => actionsForm.onChangeEmail({ ...form, Email: e.target.value })} />
                                                </Form.Group>
                                                <div className="pass">
                                                    <Form.Group controlId="formBasicPassword">
                                                        <Form.Label><KeyOutlined /> Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Enter Password" onChange={e => actionsForm.onChangePassword({ ...form, Password: e.target.value })} />
                                                        <Form.Label><KeyOutlined /> Re-Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Enter Re Password" onChange={e => actionsForm.onChangePassword({ ...form, Re_Password: e.target.value })} />
                                                    </Form.Group>
                                                </div>
                                            </Form.Group>
                                            <Button variant="primary" onClick={SHOW}>SIGN UP</Button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                body {
                margin: 0;
                }
            `}</style>
            <style jsx>{`
            .content-box{
                display:flex;
                align-items:center;
                justify-content:center;
            }
            .second-body{
                display:flex;
                align-items:center;
                justify-content:center;
            }
            .flex-start{
                margin-bottom:100px;
                display:flex;
                justify-content: space-around;
            }
            .card{
                height: 580px;
                margin-top: auto;
                margin-bottom: auto;
                width: 500px;
                display:flex;
                align-content: center;
                align-items:center;
                justify-content: center;
                border-radius: 15px;
                box-shadow: 0 0 0.3cm rgba(0,0,0,0.15);
            }
            .card-link{
                display:flex;
                align-content: center;
                align-items:center;
                justify-content: center;
                border-radius: 15px;
                box-shadow: 0 0 0.1cm rgba(0,0,0,0.20);
            }
            .position{
                text-align:center;
            }
            .form{
                margin-top:-50px;;
            }
            .box{
                width:300px;
            }
            .pass{
                margin-top:-15px;
            }
            `}</style> 
        </div>
    )
}
export default Register;