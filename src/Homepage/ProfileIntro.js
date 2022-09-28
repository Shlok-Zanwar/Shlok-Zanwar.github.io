import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import { SiCplusplus, SiCss3, SiFastapi, SiFirebase, SiFlask, SiGit, SiHeroku, SiHtml5, SiJavascript, SiJson, SiMailchimp, SiMysql, SiPython, SiReact, SiRedux, SiWhatsapp } from "react-icons/si";
import { GrMysql } from 'react-icons/gr';
import { AiOutlineLinkedin, AiOutlineSolution, AiOutlineTeam } from 'react-icons/ai';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import { Tooltip } from 'antd';
import { GiBrain } from "react-icons/gi";
import { emailId, whatsappNumber } from "../constants";
import useIsInViewport from "../Functions/useIsInViewport";



export default function ProfileIntro({isMobile}) {
    const textRef = useRef();

    const ref = React.useRef(null);
    // const isInViewport = useIsInViewport(ref);
    // useEffect(() => {
    //     if (isInViewport && window.location.hash !== `#`) {
    //         // setCollapseKeys(defaultExpanded);
    //         // push the #id to the url
    //         // replace
    //         window.history.replaceState(null, null, `#`);
    //     }
    // }, [isInViewport]);


    useEffect(() => {
        // This is for the typing animation
        if(textRef.current){
            init(textRef.current, {
                showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                strings: (isMobile 
                    ? ["Quick learner.", "Proactive.", "Problem Solver.", "Full Stack Developer."]
                    : ["Quick learner, Proactive, Problem Solver.", "Full Stack Developer."]),
            });
        }         
    }, [textRef])

    console.log(process.env)

    return (
        <div className="profile-outer-div" ref={ref} >
            <div style={{ minWidth: "350px", textAlign: "left" }} data-aos="fade-up-right" >
                <div style={{ fontSize: "35px" }} className="profile-title-text">
                    Hey there, I'm
                </div>
                <div className="profile-title-text" style={{lineHeight: '1'}} >Shlok Zanwar</div>
                <div><span className="profile-subtitle-text" ref={textRef}></span></div>
                <div className="profile-description-div" style={{ marginTop: "20px" }}>
                    I am a student, currently studying at Vishwakarma Institute of Information Technology, pune (B-Tech 2023).
                </div>
                <div className="profile-description-div">
                        I am interested in Development and always ready to contribute to a project that could help solve a
                        problem.
                </div>
                <div className="profile-description-div">
                        I am proficient in ReactJS, FastAPI, MySQL, Data Structures and more.
                </div>
                <div className="profile-description-div" style={{ marginTop: "20px", display: "inline-flex" }}>
                    <div data-aos="fade-left" data-aos-delay="100">
                        <Tooltip title={`+91-${whatsappNumber}`} placement="bottom">
                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                className="profile-link-btn profile-btn-gradient-border"
                                style={{ marginLeft: "0px" }}
                            >
                                <BsWhatsapp />
                            </a>
                        </Tooltip>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200">
                        <Tooltip title={emailId} placement="bottom">
                            <a
                                href={`mailto:${emailId}`}
                                target="_blank"
                                className="profile-link-btn profile-btn-gradient-border"
                                style={{ marginLeft: "0px" }}
                            >
                                <FiMail />
                            </a>
                        </Tooltip>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="300">
                        <Tooltip title="Linkedin" placement="bottom">
                            <a
                                href="https://www.linkedin.com/in/shlok-zanwar/"
                                target="_blank"
                                className="profile-link-btn profile-btn-gradient-border"
                                style={{ marginLeft: "0px" }}
                            >
                                <FiLinkedin />
                            </a>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up-left">
                <img
                    src="https://avatars.githubusercontent.com/u/63449205?v=4"
                    alt="Shlok Zanwar"
                    className="proflie-photo-img "
                />
            </div>
        </div>
    );
}
