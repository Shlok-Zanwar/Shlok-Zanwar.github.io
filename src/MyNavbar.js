import React from 'react'
import { Link } from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap"
import { SiHackerrank, SiGithub, SiInstagram, SiLinkedin, SiGmail, SiCodechef, SiTwitter } from "react-icons/si";
import { Tooltip } from 'antd'
import { emailId, githubLink, linkedinLink, hackerrankLink, codechefLink, instagramLink, twitterLink } from './constants';


function MyNavbar() {

    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="my-navbar" variant="dark" sticky="top">

            <Navbar.Brand href="https://shlok-zanwar.github.io/" >
                Shlok Zanwar
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/apps" >
                        Apps
                    </Nav.Link>
                    <Nav.Link as={Link} target="_blank" to="/Shlok_Zanwar.pdf">
                        Resume
                    </Nav.Link>
                </Nav>
                
                <Nav>
                    <Tooltip title='Github' placement='bottom' arrow>
                        <Nav.Link href={githubLink} className="navbar-icons">
                                <SiGithub />
                        </Nav.Link>
                    </Tooltip>
                    <Tooltip title='Linkedin' placement='bottom' arrow>
                        <Nav.Link href={linkedinLink} className="navbar-icons">
                                <SiLinkedin />
                        </Nav.Link>
                    </Tooltip>
                    <Tooltip title='shlokzanwar14@gmail.com' placement='bottom' arrow interactive>
                        <Nav.Link href={`mailto:${emailId}`} className="navbar-icons">
                                <SiGmail />
                        </Nav.Link>
                    </Tooltip>
                    <Tooltip title='Hackerrank' placement='bottom' arrow>
                        <Nav.Link href={hackerrankLink} className="navbar-icons">
                                <SiHackerrank />
                        </Nav.Link>
                    </Tooltip>
                    <Tooltip title='CodeChef' placement='bottom' arrow>
                        <Nav.Link href={codechefLink} className="navbar-icons">
                                <SiCodechef />
                        </Nav.Link>
                    </Tooltip>
                    <Tooltip title='Instagram' placement='bottom' arrow>
                        <Nav.Link href={instagramLink} className="navbar-icons">
                                <SiInstagram />
                        </Nav.Link>
                    </Tooltip>
                    <Tooltip title='Twitter' placement='bottom' arrow>
                        <Nav.Link href={twitterLink} className="navbar-icons">
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