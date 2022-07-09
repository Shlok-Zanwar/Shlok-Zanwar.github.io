import React, { useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import ProjectTimeline from './ProjectTimeline'
import { init } from "ityped";
import { SiCplusplus, SiCss3, SiFastapi, SiFirebase, SiFlask, SiGit, SiHeroku, SiHtml5, SiJavascript, SiJson, SiMailchimp, SiMysql, SiPython, SiReact, SiRedux, SiWhatsapp } from "react-icons/si";
import { GrMysql } from 'react-icons/gr';
import { AiOutlineLinkedin, AiOutlineSolution, AiOutlineTeam } from 'react-icons/ai';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import "./ProjectTimelineCss.css";
import { Tooltip } from 'antd';
import { GiBrain } from "react-icons/gi";



export default function Intro() {
    const textRef = useRef();

    const isMobile = window.matchMedia("only screen and (max-width: 800px)").matches;
    useEffect(() => {
        init(textRef.current, {
            // showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            // strings: ["Quick learner, Proactive, Problem Solver.", "Full Stack Developer."],
            strings: (isMobile 
                ? ["Quick learner.", "Proactive.", "Problem Solver.", "Full Stack Developer."]
                : ["Quick learner, Proactive, Problem Solver.", "Full Stack Developer."]),
        });
        // const anchor = document.querySelector('#p_coderooms')
        // anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        if(isMobile){ 
            document.getElementsByTagName('meta')['viewport'].content='width= 800;';
        }
        else{
            document.getElementsByTagName('meta')['viewport'].content='width=device-width, initial-scale=1';
        }
    }, []);

    useEffect(() => {
		// chekin if the device is mobile and if so turning on desktop mode


	}, []);

    return (
        <div>
            <Helmet>
                <style>
                    {`            
                    body {
                        text-align: center;
                        background-color: #161a2b;
                        background-image: none;
                    }

                    ::selection {
                        background: rgba(0, 0, 0, 0.489);
                    }
                `}
                </style>
            </Helmet>
            <div style={{display: 'inline-flex', flexDirection: 'column', padding: '15px'}}>
                <div className='profile-outer-div'>
                    <div style={{
                        minWidth: '350px', textAlign: 'left'}}
                    >
                        <div className="profile-title-div" >
                            <span style={{fontSize: '35px'}} className="profile-title-text">Hey there, I'm</span>
                        </div>
                        <div className="profile-title-div" style={{lineHeight: '1'}}>
                            <span className="profile-title-text">Shlok Zanwar</span>
                        </div>
                        <div className="profile-title-div" >
                            <span className='profile-subtitle-text' ref={textRef}></span>
                        </div>
                        <div className="profile-description-div" style={{marginTop: '20px'}}>
                            <span className="profile-description-text">
                                I am a student, currently studying at Vishwakarma Institute of Information Technology, pune (B-Tech 2023).
                            </span>
                        </div>
                        <div className="profile-description-div">
                            <span className="profile-description-text">
                                I am interested in Development and always ready to contribute to a 
                                project that could help solve a problem.
                            </span>
                        </div>
                        <div className="profile-description-div">
                            <span className="profile-description-text">
                                I am proficient in ReactJS, FastAPI, MySQL, Data Structures and more.
                            </span>
                        </div>
                        <div className="profile-description-div" style={{marginTop: '20px', display: 'inline-flex'}}>
                            {/* <a href="/Shlok_Zanwar.pdf" target='_blank' className="profile-link-btn profile-btn-gradient-border">
                                Resume
                            </a> */}
                            <Tooltip title="+91-9657867002" placement='bottom' >
                                <a href="https://wa.me/919657867002" target='_blank' className="profile-link-btn profile-btn-gradient-border" style={{marginLeft: '0px'}}>
                                    <BsWhatsapp/>
                                </a>
                            </Tooltip>
                            <Tooltip title="shlokzanwar14@gmail.com" placement='bottom' >
                                <a href="mailto:shlokzanwar14@gmail.com" target='_blank' className="profile-link-btn profile-btn-gradient-border" style={{marginLeft: '0px'}}>
                                    <FiMail />
                                </a>
                            </Tooltip>
                            <Tooltip title="Linkedin" placement='bottom' >
                                <a href="https://www.linkedin.com/in/shlok-zanwar/" target='_blank' className="profile-link-btn profile-btn-gradient-border" style={{marginLeft: '0px'}}>
                                    <FiLinkedin/>
                                </a>
                            </Tooltip>
                        </div>
                    </div>
                    <div>
                        <img 
                            src="https://avatars.githubusercontent.com/u/63449205?v=4" 
                            alt="Shlok Zanwar" 
                            className='proflie-photo-img ' 
                        />
                    </div>
                </div>
                <div style={{marginTop: '60px', textAlign: 'center'}} >
                    <div className="profile-title-div" style={{textAlign: 'center', lineHeight: '1'}} >
                        <span className='profile-subtitle-text' style={{fontSize: '35px'}}>
                            Skills
                        </span>
                    </div>
                    <div className="profile-title-div" style={{textAlign: 'center'}} >
                        <span className="profile-description-text" style={{marginTop: "0px", fontSize: '15px'}}>
                            I can say i’m quite good at
                        </span>
                    </div>
                    <div style={{marginTop: '14px', maxWidth: '500px', display: 'inline-flex'}}>
                        <div>
                            <span className="profile-skills-chip">
                                <SiReact className="profile-tech-icon" /> 
                                React
                            </span>
                            <span className="profile-skills-chip">
                                <SiRedux className="profile-tech-icon" /> 
                                Redux
                            </span>
                            <span className="profile-skills-chip">
                                <SiFastapi className="profile-tech-icon" /> 
                                FastAPI
                            </span>
                            <span className="profile-skills-chip">
                                <GrMysql className="profile-tech-icon" /> 
                                SQL
                            </span>
                            <span className="profile-skills-chip">
                                <SiPython className="profile-tech-icon" /> 
                                Python
                            </span>
                            <span className="profile-skills-chip">
                                <GiBrain className="profile-tech-icon" /> 
                                Machine Learning
                            </span>
                            <span className="profile-skills-chip">
                                <SiJavascript className="profile-tech-icon" /> 
                                Javascript
                            </span>
                            <span className="profile-skills-chip">
                                <SiCplusplus className="profile-tech-icon" /> 
                                C++
                            </span>
                            <span className="profile-skills-chip">
                                <SiHtml5 className="profile-tech-icon" /> 
                                Html
                            </span>
                            <span className="profile-skills-chip">
                                <SiCss3 className="profile-tech-icon" /> 
                                Css
                            </span>
                            <span className="profile-skills-chip">
                                <SiGit className="profile-tech-icon" /> 
                                Git
                            </span>
                            <span className="profile-skills-chip">
                                <AiOutlineTeam className="profile-tech-icon" /> 
                                Teamwork
                            </span>
                            <span className="profile-skills-chip">
                                <AiOutlineSolution className="profile-tech-icon" /> 
                                Problem Solving
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop: '80px', textAlign: 'center'}} >
                <div className="profile-title-div" style={{textAlign: 'center', lineHeight: '1'}} >
                    <span className='profile-subtitle-text' style={{fontSize: '35px'}}>
                        Projects
                    </span>
                </div>
                <div className="profile-title-div" style={{textAlign: 'center'}} >
                    <span className="profile-description-text" style={{marginTop: "0px", fontSize: '15px'}}>
                        My projects ordered by complexity
                    </span>
                </div>
                <ProjectTimeline />
            </div>
        </div>
    )
}
