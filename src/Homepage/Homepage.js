import React, { useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet'
// import ProjectTimeline from './ProjectTimeline'
import { init } from "ityped";
import { SiCplusplus, SiCss3, SiFastapi, SiFirebase, SiFlask, SiGit, SiHeroku, SiHtml5, SiJavascript, SiJson, SiMailchimp, SiMysql, SiPython, SiReact, SiRedux, SiWhatsapp } from "react-icons/si";
import { GrMysql } from 'react-icons/gr';
import { AiOutlineLinkedin, AiOutlineSolution, AiOutlineTeam } from 'react-icons/ai';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import { Tooltip } from 'antd';
import { GiBrain } from "react-icons/gi";
import ProfileIntro from './ProfileIntro';
import ProfileSkills from './ProfileSkills';
import ProfileProjects from './ProfileProjects';

export default function Homepage() {
    const isMobile = window.matchMedia("only screen and (max-width: 800px)").matches;

    useEffect(() => {
        // This is for the viewport
        // If its a mobile device, then set the viewport to 800px
        setTimeout(() => {
            
            if(window.location.hash){
                const anchor = document.querySelector(window.location.hash)
                if(anchor){
                    console.log(anchor)
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
            }
        }, 200);
        // console.log(window.location.hash)

        if(isMobile){ 
            document.getElementsByTagName('meta')['viewport'].content='width=800;';
        }
        else{
            document.getElementsByTagName('meta')['viewport'].content='width=device-width, initial-scale=1';
        }
    }, []);

    return (
        <div style={{padding: "10px 0px 500px 0px"}} >
            <ProfileIntro isMobile={isMobile} />
            <ProfileSkills />
            <ProfileProjects />
        </div>
    )
}
