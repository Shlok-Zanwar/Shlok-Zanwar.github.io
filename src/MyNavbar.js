import React from 'react'
import { Link } from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap"
import { SiHackerrank, SiGithub, SiInstagram, SiLinkedin, SiGmail, SiCodechef, SiTwitter } from "react-icons/si";
import { Tooltip } from 'antd'


function MyNavbar() {

    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="navbar-color" variant="dark" sticky="top">

            <Navbar.Brand href="https://shlok-zanwar.github.io/" >
                Shlok Zanwar
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/todo-app">
                            To-Do App
                    </Nav.Link>
                    <Nav.Link href="https://github.com/Shlok-Zanwar" >
                            About
                    </Nav.Link>
                </Nav>
                
                <Nav>
                    <Tooltip title='Github' placement='bottom' arrow>
                        <Nav.Link href="https://github.com/Shlok-Zanwar" className="navbar-icons">
                                <SiGithub />
                        </Nav.Link>
                    </Tooltip>
                    <Tooltip title='Linkedin' placement='bottom' arrow>
                        <Nav.Link href="https://www.linkedin.com/in/shlok-zanwar-0124961ba/" className="navbar-icons">
                                <SiLinkedin />
                        </Nav.Link>
                    </Tooltip>
                    <Tooltip title='shlokzanwar14@gmail.com' placement='bottom' arrow interactive>
                        <Nav.Link href="mailto:shlokzanwar14@gmail.com" className="navbar-icons">
                                <SiGmail />
                        </Nav.Link>
                    </Tooltip>
                    <Tooltip title='Hackerrank' placement='bottom' arrow>
                        <Nav.Link href="https://www.hackerrank.com/shlok_21910163" className="navbar-icons">
                                <SiHackerrank />
                        </Nav.Link>
                    </Tooltip>
                    <Tooltip title='CodeChef' placement='bottom' arrow>
                        <Nav.Link href="https://www.codechef.com/users/shlok_zanwar" className="navbar-icons">
                                <SiCodechef />
                        </Nav.Link>
                    </Tooltip>
                    <Tooltip title='Instagram' placement='bottom' arrow>
                        <Nav.Link href="https://www.instagram.com/shlok__zanwar/" className="navbar-icons">
                                <SiInstagram />
                        </Nav.Link>
                    </Tooltip>
                    <Tooltip title='Twitter' placement='bottom' arrow>
                        <Nav.Link href="https://www.twitter.com/zanwar_shlok/" className="navbar-icons">
                                <SiTwitter />
                        </Nav.Link>
                    </Tooltip>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default MyNavbar