import { Button, Form } from 'react-bootstrap';
import { UserOutlined, MailOutlined, KeyOutlined } from '@ant-design/icons';
import Topbar from '../src/layout/Topbar'
import Router from 'next/router'
import { useState, useEffect } from 'react';
import Link from 'next/link'
const Sign_in = () => {
    useEffect(() => {
    }, [])
    return (
        <div>
            <div className="position">
                <Link href='/'>
                    <a className='link'>HOME</a>
                </Link>
            </div>
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
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label><MailOutlined /> Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter Email" />
                                            </Form.Group>
                                            <div className="pass">
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label><KeyOutlined /> Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Enter Password" />
                                                </Form.Group>
                                            </div>
                                        </Form.Group>
                                        <Button variant="primary" type="submit">SIGN IN</Button>
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
                }
            `}</style>
            <style jsx>{`
            .second-body{
                display:flex;
                align-items:center;
                justify-content:center;
            }
            .position{
                text-align:center;
            }
            .flex-start{
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
                margin-top:0px;
            }
            .form{
                margin-top:54px;
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
export default Sign_in;