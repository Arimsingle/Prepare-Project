import { Nav } from 'react-bootstrap';
import { useState } from 'react';
import Link from 'next/link'
const Topbar = () => {
    return (
        <div>
            <div>
                <div className="column">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/Register"><Link href="/Register"><a className="link-text">SIGN UP</a></Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Register"><Link href="/Sign_in"><a className="link-text">SIGN IN</a></Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Register"><Link href="/Face_id"><a className="link-text">FACE ID</a></Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
            <style jsx>{`
                .link-text{
                    text-decoration: none;
                }
                .column{
                    display:flex;
                }
            `}</style>
        </div>
    );

}
export default Topbar;