import { Button, Form } from 'react-bootstrap';
import Topbar from '../src/layout/Topbar'
import { useState, useEffect } from 'react';
import Link from 'next/link'
const Face_id = () => {
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
                                        <Button variant="primary" type="submit" size="lg">Face Scan</Button>
                                    </Form>
                                </div>
                                <div className="d-flex justify-content-center">
                                    Status
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
            .position{
                text-align:center;
            }
            .second-body{
                display:flex;
                align-items:center;
                justify-content:center;
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
                display:flex;
                align-content: center;
                align-items:center;
                justify-content: center;
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
export default Face_id;