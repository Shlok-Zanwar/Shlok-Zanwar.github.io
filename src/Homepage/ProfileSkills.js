import React from 'react'
import { SiCplusplus, SiCss3, SiFastapi, SiFirebase, SiFlask, SiGit, SiHeroku, SiHtml5, SiJavascript, SiJson, SiMailchimp, SiMysql, SiPython, SiReact, SiRedux, SiWhatsapp } from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { AiOutlineSolution, AiOutlineTeam } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";
import useIsInViewport from '../Functions/useIsInViewport';
import { useEffect } from 'react';



export default function ProfileSkills() {

    const ref = React.useRef(null);
    // const isInViewport = useIsInViewport(ref);
    // useEffect(() => {
    //     if (isInViewport && window.location.hash !== `#skills`) {
    //         // setCollapseKeys(defaultExpanded);
    //         // push the #id to the url
    //         // replace
    //         window.history.replaceState(null, null, `#skills`);
    //     }
    // }, [isInViewport]);

    const skills = [
        { name: 'React', icon: <SiReact className="profile-tech-icon" /> },
        { name: 'Redux', icon: <SiRedux className="profile-tech-icon" /> },
        { name: 'FastAPI', icon: <SiFastapi className="profile-tech-icon" /> },
        { name: 'SQL', icon: <GrMysql className="profile-tech-icon" /> },
        { name: 'Python', icon: <SiPython className="profile-tech-icon" /> },
        { name: 'Machine Learning', icon: <GiBrain className="profile-tech-icon" /> },
        { name: 'Javascript', icon: <SiJavascript className="profile-tech-icon" /> },
        { name: 'C++', icon: <SiCplusplus className="profile-tech-icon" /> },
        { name: 'Html', icon: <SiHtml5 className="profile-tech-icon" /> },
        { name: 'Css', icon: <SiCss3 className="profile-tech-icon" /> },
        { name: 'Git', icon: <SiGit className="profile-tech-icon" /> },
        { name: 'Teamwork', icon: <AiOutlineTeam className="profile-tech-icon" /> },
        { name: 'Problem Solving', icon: <AiOutlineSolution className="profile-tech-icon" /> },
    ]

    return (
        <div style={{marginTop: '60px', textAlign: 'center'}} id="skills" ref={ref} data-aos="fade-up" data-aos-once="true">
            <div className="profile-title-div" style={{textAlign: 'center', lineHeight: '1'}} >
                <span className='profile-subtitle-text' style={{fontSize: '35px'}}>
                    Skills
                </span>
            </div>
            <div className="profile-title-div" style={{textAlign: 'center'}} >
                <span className="profile-description-div" style={{marginTop: "0px", fontSize: '15px'}}>
                    I can say i’m quite good at
                </span>
            </div>
            <div style={{marginTop: '14px', maxWidth: '500px', display: 'inline-flex'}}>
            <div>

                {skills.map((skill, index) => {
                    return (
                        <span className="profile-skills-chip" key={index} 
                            data-aos="fade-up" data-aos-delay={index * 100 + 100} data-aos-once="true" data-aos-anchor="#skills" 
                        >
                            {skill.icon}
                            {skill.name}
                        </span>
                    )
                }
                )}
                </div>
            </div>
        </div>
    )
}
