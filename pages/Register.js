import { Button, Form } from 'react-bootstrap';
import { UserOutlined, MailOutlined, KeyOutlined } from '@ant-design/icons';
import Topbar from '../layout/Topbar'
import Router from 'next/router'
import { useState, useEffect } from 'react';
import Link from 'next/link'
const Register = () => {
    useEffect(() => {
        Router.push('/Register')
    }, [])
    const [form, setForm] = useState({
        Name: '',
        Last_name: '',
        Email: '',
        Password: '',
        Re_Password: ''
    })
    const SHOW = (e) => {
        console.log(form)
    }
    return (
        <div>
            <Link href='/'>
                <a className='link'>HOME</a>
            </Link>
            <div>
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
                                            <Form.Control type="username" placeholder="Enter Name" onChange={e => setForm({ ...form, Name: e.target.value })} />
                                            <Form.Label><UserOutlined /> Last-Name</Form.Label>
                                            <Form.Control type="username" placeholder="Enter Last Name" onChange={e => setForm({ ...form, Last_name: e.target.value })} />
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label><MailOutlined className="logo-svg" /> Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter Email" onChange={e => setForm({ ...form, Email: e.target.value })} />
                                            </Form.Group>
                                            <div className="pass">
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label><KeyOutlined /> Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Enter Password" onChange={e => setForm({ ...form, Password: e.target.value })} />
                                                    <Form.Label><KeyOutlined /> Re-Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Enter Re Password" onChange={e => setForm({ ...form, Re_Password: e.target.value })} />
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
            <style jsx global>{`
                body {
                margin: 0;
                display:flex;
                align-items:center;
                justify-content:center;
                }
            `}</style>
            <style jsx>{`
            .content-box{
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