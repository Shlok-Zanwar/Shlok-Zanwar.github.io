import React from "react";
import { Helmet } from "react-helmet";
import { HiOutlineCode } from "react-icons/hi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";
import { SiCss3, SiFastapi, SiFirebase, SiFlask, SiHeroku, SiHtml5, SiJavascript, SiJson, SiMysql, SiPython, SiReact, SiRedux } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { DiSqllite } from "react-icons/di";
// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Collapse } from 'antd';
const { Panel } = Collapse;


const ProjectImagesDashboard = ({refId, isRightAligned=false}) => {
    const [collapseKeys, setCollapseKeys] = React.useState([]);
    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    return (
        <TimelineItem id={refId}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" >
                <span className="timeline-item-date">
                    Continuous Development <br /> Industry Project
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{background: '#EE1D62'}}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
                <div className="timeline-content-div">
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")}>
                        <span className="timeline-title-text">Images Dashboard</span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            Images Dashboard is cctv image capture and audit platform with integration
                            of ai to detect common objects.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            I developed this from scratch during my internship at Integrated active monitoring Pvt Ltd (
                            <a href="https://smartiam.in/" target="_blank">IAM</a>)
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            This Software application save .... hrs of worktime per day ...... and resulted in .....
                        </span>
                    </div>
                    <Collapse ghost activeKey={collapseKeys} onChange={handleKeysChange} >
                        <Panel 
                            key="1" 
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("1") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Objective</i>&nbsp; {collapseKeys.includes("1") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{padding: '0px'}}
                            className="custom-collapse-panel"
                        >
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Needs to be Completed
                                </span>
                            </div>
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Needs to be Completed
                                </span>
                            </div>
                        </Panel>
                        <Panel 
                            key="2" 
                            header={
                                <div className="timeline-description-div">
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("2") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Key Modeules</i>&nbsp; {collapseKeys.includes("2") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{padding: '0px'}}
                            className="custom-collapse-panel"
                        >
                            <ul className="timeline-list-ul">
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Ticket Manangement System.........
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Image comparison.........
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Advanced state management .......
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Handling of xyz datapoints.....
                                    </span>
                                </li>
                            </ul>
                        </Panel>
                        <Panel 
                            key="3" 
                            header={
                                <div className="timeline-description-div">
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("3") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Learning / Outcomes</i>&nbsp; {collapseKeys.includes("3") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{padding: '0px'}}
                            className="custom-collapse-panel"
                        >
                            <ul className="timeline-list-ul">
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Learning ...
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Learning ...
                                    </span>
                                </li>
                            </ul>
                        </Panel>
                    </Collapse>
                    <div className="timeline-description-div" style={{marginTop: '10px'}}>
                        <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                            <span style={{minWidth: '80px', display: 'block'}}>Tech Stack:</span> 
                            <div>
                                <span className="timeline-chip">
                                    <SiReact className="timeline-tech-icon" /> 
                                    React
                                </span>
                                <span className="timeline-chip">
                                    <GrMysql className="timeline-tech-icon" /> 
                                    MySQL
                                </span>
                                <span className="timeline-chip">
                                    <SiRedux className="timeline-tech-icon" /> 
                                    Redux
                                </span>
                                <span className="timeline-chip">
                                    <SiFastapi className="timeline-tech-icon" /> 
                                    FastAPI
                                </span>
                            </div>
                        </span>
                    </div>
                    {/* <div className={"timeline-description-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
                        <a className="btn btn-gradient-border btn-glow" href="https://code-rooms.github.io/#/about_us" target="_blank">
                            About
                        </a>
                    </div> */}
                </div>
            </TimelineContent>
        </TimelineItem>
    )
}

const ProjectCodeRooms = ({refId, isRightAligned=false}) => {
    const [collapseKeys, setCollapseKeys] = React.useState([]);
    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    return (
        <TimelineItem id={refId}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" >
                <span className="timeline-item-date">
                    Oct 2021
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{background: '#EE1D62'}}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
                <div className="timeline-content-div">
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")}>
                        <span className="timeline-title-text">Code Rooms</span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            Code rooms is a learning management system where teachers can seamlessly create rooms,
                            assignments and assess assignments. Students can easily submit assigned assignments.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            It is deployed and is currently being used and loved by teachers and students at 
                            <a href="https://www.viit.ac.in/" target="_blank"> VIIT</a>.
                        </span>
                    </div>
                    <Collapse ghost activeKey={collapseKeys} onChange={handleKeysChange} >
                        <Panel 
                            key="1" 
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("1") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Objective</i>&nbsp; {collapseKeys.includes("1") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{padding: '0px'}}
                            className="custom-collapse-panel"
                        >
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Traditional submission system platforms (Google Classroom, OnlineGDB, etc.) lacked good User Interface and User Experience.
                                </span>
                            </div>
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Teachers had to open every submission in a new tab to view it which costed a lot of time and clicks.
                                </span>
                            </div>
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Also for assessment of code files in classroom, teachers had to copy the code by 
                                    themselves and paste it in their own editor for evaluation, whereas there was no way to submit files directly in the OnlineGBD.
                                </span>
                            </div>
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    These problems led to the creation of Code Rooms.
                                </span>
                            </div>
                        </Panel>
                        <Panel 
                            key="2" 
                            header={
                                <div className="timeline-description-div">
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("2") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Key Features</i>&nbsp; {collapseKeys.includes("2") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{padding: '0px'}}
                            className="custom-collapse-panel"
                        >
                            <ul className="timeline-list-ul">
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Classrooms with features like waiting room authority and visibility on the go with one click.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Automated evaluation of test cases.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Code-Editor with syntax highlighting, code-completion and code-execution.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        File type questions let you upload the file with a preview before submitting.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Submissions of any type of question can be assessed easily in every question with a code 
                                        editor with submitted code or a preview of the file submitted right on the screen with download option.
                                    </span>
                                </li>
                            </ul>
                        </Panel>
                        <Panel 
                            key="3" 
                            header={
                                <div className="timeline-description-div">
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("3") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Learning / Outcomes</i>&nbsp; {collapseKeys.includes("3") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{padding: '0px'}}
                            className="custom-collapse-panel"
                        >
                            <ul className="timeline-list-ul">
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Integration of complex UI components such as Code-Editor, File-Previewer with split screen pane view keeping good UI in consideration.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Implementation of Database User Hierarchy and SQL Queries having complex JOIN operations.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Overall deployment / hosting process of the application and making a app production ready.
                                    </span>
                                </li>
                            </ul>
                        </Panel>
                    </Collapse>
                    <div className="timeline-description-div" style={{marginTop: '10px'}}>
                        <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                            <span style={{minWidth: '80px', display: 'block'}}>Tech Stack:</span> 
                            <div>
                                <span className="timeline-chip">
                                    <SiFastapi className="timeline-tech-icon" /> 
                                    FastAPI
                                </span>
                                <span className="timeline-chip">
                                    <SiReact className="timeline-tech-icon" /> 
                                    React
                                </span>
                                <span className="timeline-chip">
                                    <GrMysql className="timeline-tech-icon" /> 
                                    MySQL
                                </span>
                                <span className="timeline-chip">
                                    <SiRedux className="timeline-tech-icon" /> 
                                    Redux
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className={"timeline-description-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
                        <a className="btn btn-gradient-border btn-glow" href="https://code-rooms.github.io/#/about_us" target="_blank">
                            About
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://code-rooms.github.io/#/about_us" target="_blank">
                            Code Rooms
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://github.com/Code-rooms" target="_blank">
                            Github
                        </a>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    )
}

const ProjectDockForms = ({refId, isRightAligned=true}) => {
    const [collapseKeys, setCollapseKeys] = React.useState([]);
    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    return (
        <TimelineItem id={refId}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
                <span className="timeline-item-date">
                    June 2020
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator color="red">
                <TimelineConnector />
                <TimelineDot style={{ background: "#EE1D62" }}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
                <div className="timeline-content-div">
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")}>
                        <span className="timeline-title-text">Dock Forms</span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            A form application for mainly school/college related applications such as conducting tests, surveys
                            etc.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            This was my first project in Web domain and it was a good learning experience.
                        </span>
                    </div>
                    <Collapse ghost activeKey={collapseKeys} onChange={handleKeysChange}>
                        <Panel
                            key="1"
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("1") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Objective</i> {collapseKeys.includes("1") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{ padding: "0px" }}
                            className="custom-collapse-panel"
                        >
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Learning about the basic concepts of Web Development and its frameworks.
                                </span>
                            </div>
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Lockdown had just begun and all college submissions shifted to GoogleForms. So, I started working on this project to build a competitve form application.
                                </span>
                            </div>
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Google forms is a general purpose form builder, but colleges needed some features / customizations to make it more user friendly.
                                </span>
                            </div>
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    So i decided to make a form-builder which followed a classroom based Hierarchy which would help teachers to manage the access of forms to students.
                                </span>
                            </div>
                        </Panel>
                        <Panel
                            key="2"
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("2") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Key Features</i> {collapseKeys.includes("2") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{ padding: "0px" }}
                            className="custom-collapse-panel"
                        >
                            <ul className="timeline-list-ul">
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Rooms :- Create a group of students and assign them to a room (like classroom).
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Form builder with 4 types of questions :- mcq (without ans), mcq(survey type), range type, text type.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Rooms can then be assigned to the forms to restrict the visibility of the forms to the users in the room.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Traditional features such as :- Limit to 1 response per user, Accepting responses.
                                    </span>
                                </li>
                                
                            </ul>
                        </Panel>
                        <Panel
                            key="3"
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("3") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Achievements</i> {collapseKeys.includes("3") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{ padding: "0px" }}
                            className="custom-collapse-panel"
                        >
                            <ul className="timeline-list-ul">
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Understanding the concepts of javascript and DOM.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Implementation of JSON based file system to tackle problems that were not possible with SQL.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Learning about conditional rendering of different types and styles of elements based on JSON data.
                                    </span>
                                </li>
                                
                            </ul>
                        </Panel>
                    </Collapse>
                    <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                        <span className="timeline-description-text" style={{ display: "inline-flex", alignItems: "center" }}>
                            <span style={{ minWidth: "80px", display: "block" }}>Tech/Learn Stack:</span>
                            <div>
                                
                                <span className="timeline-chip">
                                    <SiPython className="timeline-tech-icon" />
                                    Python
                                </span>
                                <span className="timeline-chip">
                                    <SiFlask className="timeline-tech-icon" />
                                    Flask
                                </span>
                                <span className="timeline-chip">
                                    <SiJavascript className="timeline-tech-icon" />
                                    Javascript
                                </span>
                                <span className="timeline-chip">
                                    <GrMysql className="timeline-tech-icon" />
                                    MySql
                                </span>
                                <span className="timeline-chip">
                                    <SiJson className="timeline-tech-icon" />
                                    JSON
                                </span>
                                <span className="timeline-chip">
                                    <SiHtml5 className="timeline-tech-icon" />
                                    Html
                                </span>
                                <span className="timeline-chip">
                                    <SiCss3 className="timeline-tech-icon" />
                                    Css
                                </span>
                                <span className="timeline-chip">
                                    <SiJavascript className="timeline-tech-icon" />
                                    DOM
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className={"timeline-description-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
                        <a className="btn btn-gradient-border btn-glow" href="https://shlok-zanwar.github.io/blogs/dock-forms" target="_blank">
                            Blog
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://github.com/Shlok-Zanwar/Dock-Forms" target="_blank">
                            Github
                        </a>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    );
}

const ProjectMathsyra = ({refId, isRightAligned=true}) => {
    const [collapseKeys, setCollapseKeys] = React.useState([]);
    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    return (
        <TimelineItem id={refId}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
                <span className="timeline-item-date">
                    April 2021
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator color="red">
                <TimelineConnector />
                <TimelineDot style={{ background: "#EE1D62" }}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
                <div className="timeline-content-div">
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")}>
                        <span className="timeline-title-text">Mathsyra</span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            Mathsyra is a web application for students to learn the concepts of mathematics in an 
                            innovative way with Indian cultural themed UI and quizzes.
                        </span>
                    </div>
                    <Collapse ghost activeKey={collapseKeys} onChange={handleKeysChange}>
                        <Panel
                            key="1"
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("1") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Objective</i> {collapseKeys.includes("1") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{ padding: "0px" }}
                            className="custom-collapse-panel"
                        >
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    This project was created for Toycathon 2021.
                                </span>
                            </div>
                        </Panel>
                        <Panel
                            key="2"
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("2") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Key Features</i> {collapseKeys.includes("2") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{ padding: "0px" }}
                            className="custom-collapse-panel"
                        >
                            <ul className="timeline-list-ul">
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Well Designed Interface and User Experience
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Perfectly categorized modules and quizzes.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Interactive Blogs related to vedic maths to Understand the concepts and applications.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Quiz after every module to test your knowledge.
                                    </span>
                                </li>
                                
                            </ul>
                        </Panel>
                        <Panel
                            key="3"
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("3") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Achievements</i> {collapseKeys.includes("3") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{ padding: "0px" }}
                            className="custom-collapse-panel"
                        >
                            <ul className="timeline-list-ul">
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Finalist in Toycathon 2021.
                                    </span>
                                </li>
                            </ul>
                        </Panel>
                    </Collapse>
                    <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                        <span className="timeline-description-text" style={{ display: "inline-flex", alignItems: "center" }}>
                            <span style={{ minWidth: "80px", display: "block" }}>Tech/Learn Stack:</span>
                            <div>
                                <span className="timeline-chip">
                                    <SiFastapi className="timeline-tech-icon" /> 
                                    FastAPI
                                </span>
                                <span className="timeline-chip">
                                    <SiReact className="timeline-tech-icon" /> 
                                    React
                                </span>
                                <span className="timeline-chip">
                                    <DiSqllite className="timeline-tech-icon" /> 
                                    SQL lite
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className={"timeline-description-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
                        <a className="btn btn-gradient-border btn-glow" href="https://github.com/Shlok-Zanwar/Mathsyra-Client" target="_blank">
                            Github
                        </a>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    );
}

const ProjectHotelManagement = ( {refId, isRightAligned=false} ) => {
    const [collapseKeys, setCollapseKeys] = React.useState([]);
    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    return (
        <TimelineItem id={refId}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
                <span className="timeline-item-date">
                    Nov 2020
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator color="red">
                <TimelineConnector />
                <TimelineDot style={{ background: "#EE1D62" }}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
                <div className="timeline-content-div">
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} >
                        <span className="timeline-title-text">Hotel Management</span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            A basic and well-designed terminal interface for restaurant inventory and billing system.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            Self created JSON-file-based database management system which suits the particular usecase and provides a high data integrity and speed.
                        </span>
                    </div>
                    <Collapse ghost activeKey={collapseKeys} onChange={handleKeysChange}>
                        <Panel
                            key="1"
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("1") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Objective</i> {collapseKeys.includes("1") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{ padding: "0px" }}
                            className="custom-collapse-panel"
                        >
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Learnign the concepts of terminal interface and Object-Oriented Programming.
                                </span>
                            </div>
                        </Panel>
                        <Panel
                            key="2"
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("2") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Key Features</i> {collapseKeys.includes("2") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{ padding: "0px" }}
                            className="custom-collapse-panel"
                        >
                            <ul className="timeline-list-ul">
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Well designed tabulated interface.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Admin class features include checking the billing / sales data for a particular date, modifying / updating menu, placing orders etc.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Employees can only take orders, view current orders, view the menu, view the inventory etc.
                                    </span>
                                </li>
                            </ul>
                        </Panel>
                        <Panel
                            key="3"
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("3") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Achievements</i> {collapseKeys.includes("3") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{ padding: "0px" }}
                            className="custom-collapse-panel"
                        >
                            <ul className="timeline-list-ul">
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Understanding the concepts Object-Oriented Programming and the use of JSON-file-based database.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Handon with Tabulate library Python.
                                    </span>
                                </li>
                            </ul>
                        </Panel>
                    </Collapse>
                    <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                        <span className="timeline-description-text" style={{ display: "inline-flex", alignItems: "center" }}>
                            <span style={{ minWidth: "80px", display: "block" }}>Tech/Learn Stack:</span>
                            <div>
                                
                                <span className="timeline-chip">
                                    <SiPython className="timeline-tech-icon" />
                                    Python
                                </span>
                                <span className="timeline-chip">
                                    <SiJson className="timeline-tech-icon" />
                                    JSON
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
                        <a className="btn btn-gradient-border btn-glow" href="https://shlok-zanwar.github.io/blogs/hotel-management" target="_blank">
                            Blog
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://github.com/Shlok-Zanwar/Hotel-Management-Terminal" target="_blank">
                            Github
                        </a>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    );
}

const ProjectTodoApp = ( {refId, isRightAligned=false} ) => {
    const [collapseKeys, setCollapseKeys] = React.useState([]);
    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    return (
        <TimelineItem id={refId}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
                <span className="timeline-item-date">
                    Jan 2021
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator color="red">
                <TimelineConnector />
                <TimelineDot style={{ background: "#EE1D62" }}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
                <div className="timeline-content-div">
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} >
                        <span className="timeline-title-text">Todo App</span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            A well designed todo app with useful advanced features. 
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            One of the first projects to learn ReactJs, React-Router, browser tools like Chrome DevTools, and deployment.
                        </span>
                    </div>
                    <Collapse ghost activeKey={collapseKeys} onChange={handleKeysChange}>
                        <Panel
                            key="1"
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("1") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Key Features</i> {collapseKeys.includes("1") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{ padding: "0px" }}
                            className="custom-collapse-panel"
                        >
                            <ul className="timeline-list-ul">
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        The app uses local-storage for storing details so that all the todos are retained when page reopens / reloads.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Drag and Drop your todo's to the reorder / change their order.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Customize color to categorize your todos.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        The three columns help in managing your work better. Especially when you do a big project and have multiple 
                                        functions to be done at a time the 'doing' tab helps you in keeping reference to all your work and you 
                                        can also track all the features you have done in the ‘done’ tab.
                                    </span>
                                </li>
                            </ul>
                        </Panel>
                    </Collapse>
                    <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                        <span className="timeline-description-text" style={{ display: "inline-flex", alignItems: "center" }}>
                            <span style={{ minWidth: "80px", display: "block" }}>Tech/Learn Stack:</span>
                            <div>
                                
                                <span className="timeline-chip">
                                    <SiReact className="timeline-tech-icon" />
                                    React
                                </span>
                                <span className="timeline-chip">
                                    <SiHtml5 className="timeline-tech-icon" />
                                    HTML
                                </span>
                                <span className="timeline-chip">
                                    <SiCss3 className="timeline-tech-icon" />
                                    CSS
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
                        <a className="btn btn-gradient-border btn-glow" href="https://shlok-zanwar.github.io/todo-app" target="_blank">
                            App
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://shlok-zanwar.github.io/blogs/todo-app" target="_blank">
                            Blog
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://github.com/Shlok-Zanwar/Shlok-Zanwar.github.io/tree/main/src/TodoAppComponents" target="_blank">
                            Github
                        </a>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    );
}

const ProjectMnistModel = ( {refId, isRightAligned=false} ) => {
    const [collapseKeys, setCollapseKeys] = React.useState([]);
    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    return (
        <TimelineItem id={refId}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
                <span className="timeline-item-date">
                    Dec 2021
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator color="red">
                <TimelineConnector />
                <TimelineDot style={{ background: "#EE1D62" }}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
                <div className="timeline-content-div">
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} >
                        <span className="timeline-title-text">Mnist Model</span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            Application that detects the handwritten digits drawn on a canvas
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            This project was created with the intention of learning Machine Learning, Model deployment on heroku and FastAPI. 
                        </span>
                    </div>
                    <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                        <span className="timeline-description-text" style={{ display: "inline-flex", alignItems: "center" }}>
                            <span style={{ minWidth: "80px", display: "block" }}>Tech/Learn Stack:</span>
                            <div>
                                
                                <span className="timeline-chip">
                                    <SiReact className="timeline-tech-icon" />
                                    React
                                </span>
                                <span className="timeline-chip">
                                    <SiFastapi className="timeline-tech-icon" />
                                    FastAPI
                                </span>
                                <span className="timeline-chip">
                                    <GiBrain className="timeline-tech-icon" />
                                    Machine Learning
                                </span>
                                <span className="timeline-chip">
                                    <SiHeroku className="timeline-tech-icon" />
                                    Heroku
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
                        <a className="btn btn-gradient-border btn-glow" href="https://github.com/Shlok-Zanwar/DS-SCE" target="_blank">
                            Github
                        </a>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    );
}

const ProjectTerminalQuiz = ( {refId, isRightAligned=false} ) => {
    const [collapseKeys, setCollapseKeys] = React.useState([]);
    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    return (
        <TimelineItem id={refId}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
                <span className="timeline-item-date">
                    April 2020
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator color="red">
                <TimelineConnector />
                <TimelineDot style={{ background: "#EE1D62" }}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
                <div className="timeline-content-div">
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} >
                        <span className="timeline-title-text">Terminal Quiz</span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            A level-up-quiz application for the terminal.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            The difficulty of question depends on the number of correctly answered questions.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            Also has a interface to generate an custom level-up-quiz for the terminal as a python file, and the responses stores in a text file. 
                        </span>
                    </div>
                    <Collapse ghost activeKey={collapseKeys} onChange={handleKeysChange}>
                        <Panel
                            key="1"
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("1") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Objective</i> {collapseKeys.includes("1") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{ padding: "0px" }}
                            className="custom-collapse-panel"
                        >
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Learning about file-open and file-write in Python.
                                </span>
                            </div>
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Understand and implement complex logic for level-based and random question generation.
                                </span>
                            </div>
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Overall, first major project to create an application of real use-case.
                                </span>
                            </div>
                        </Panel>
                        <Panel
                            key="2"
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("2") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Inplementation</i> {collapseKeys.includes("2") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{ padding: "0px" }}
                            className="custom-collapse-panel"
                        >
                            <ul className="timeline-list-ul">
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        A python script that uses intelligence to generate a quiz template in the form executable python code.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        User can respond to a GK quiz, view leaderboard etc OR generate a custom quiz.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Custom Quiz also supports level based quiz.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        On successful creation of a custom quiz, the program generates a python script which any respondent can run to respond to the quiz.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        The responses of custom quizes are stored in a text file wiht the same name as of the quiz file. 
                                    </span>
                                </li>
                            </ul>
                        </Panel>
                    </Collapse>
                    <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                        <span className="timeline-description-text" style={{ display: "inline-flex", alignItems: "center" }}>
                            <span style={{ minWidth: "80px", display: "block" }}>Tech/Learn Stack:</span>
                            <div>
                                
                                <span className="timeline-chip">
                                    <SiPython className="timeline-tech-icon" />
                                    Python
                                </span>
                                <span className="timeline-chip">
                                    <AiOutlineFileAdd className="timeline-tech-icon" />
                                    File handling
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
                        <a className="btn btn-gradient-border btn-glow" href="https://github.com/Shlok-Zanwar/Terminal-Quiz" target="_blank">
                            Github
                        </a>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    );
}

const ProjectPastebin = ( {refId, isRightAligned=false} ) => {
    const [collapseKeys, setCollapseKeys] = React.useState([]);
    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    return (
        <TimelineItem id={refId}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
                <span className="timeline-item-date">
                    Feb 2020
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator color="red">
                <TimelineConnector />
                <TimelineDot style={{ background: "#EE1D62" }}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
                <div className="timeline-content-div">
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} >
                        <span className="timeline-title-text">Paste Bin</span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            A Pastebin application to share text data quickly, directly from the browser between users without any authentication.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span>
                            I implemented this project to learn about the use of React Hooks, and Firebase.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            Users can create a URL for them and then share it with others. Henceforth, anyone can access and share data directly from the browser.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            Very useful for sharing code-snippets / temporary data.
                        </span>
                    </div>
                    
                    <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                        <span className="timeline-description-text" style={{ display: "inline-flex", alignItems: "center" }}>
                            <span style={{ minWidth: "80px", display: "block" }}>Tech/Learn Stack:</span>
                            <div>
                                
                                <span className="timeline-chip">
                                    <SiReact className="timeline-tech-icon" />
                                    React
                                </span>
                                <span className="timeline-chip">
                                    <SiFirebase className="timeline-tech-icon" />
                                    Firebase
                                </span>
                                <span className="timeline-chip">
                                    <SiHtml5 className="timeline-tech-icon" />
                                    Html
                                </span>
                                <span className="timeline-chip">
                                    <SiCss3 className="timeline-tech-icon" />
                                    Css
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
                        <a className="btn btn-gradient-border btn-glow" href="https://github.com/Shlok-Zanwar/Pastebin-React" target="_blank">
                            Github
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://shlok-zanwar.github.io/pastebin" target="_blank">
                            Pastebin
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://shlok-zanwar.github.io/canvas" target="_blank">
                            Drawbin
                        </a>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    );
}

const ProjectBinaryTreeVisualization = ( {refId, isRightAligned=true} ) => {
    const [collapseKeys, setCollapseKeys] = React.useState([]);
    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    return (
        <TimelineItem id={refId}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
                <span className="timeline-item-date">
                    March 2021
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator color="red">
                <TimelineConnector />
                <TimelineDot style={{ background: "#EE1D62" }}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
                <div className="timeline-content-div">
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} >
                        <span className="timeline-title-text">Binary Tree Visualization</span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            An application to visualize insertion, deletion, search and structure of nodes in a binary search tree and Heap.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            The nodes and edges of binary tree are highlighted to depict the path of comparisons that took place to insert/search a node.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            This could be by students to understand the working of Binary search tree / Heap.
                        </span>
                    </div>
                    <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                        <span className="timeline-description-text" style={{ display: "inline-flex", alignItems: "center" }}>
                            <span style={{ minWidth: "80px", display: "block" }}>Tech/Learn Stack:</span>
                            <div>
                                
                                <span className="timeline-chip">
                                    <SiReact className="timeline-tech-icon" />
                                    React
                                </span>
                                <span className="timeline-chip">
                                    <SiHtml5 className="timeline-tech-icon" />
                                    Html
                                </span>
                                <span className="timeline-chip">
                                    <SiCss3 className="timeline-tech-icon" />
                                    Css
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
                        <a className="btn btn-gradient-border btn-glow" href="https://github.com/Shlok-Zanwar/Binary-Tree-Visualization" target="_blank">
                            Github
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://shlok-zanwar.github.io/max-heap-visualization" target="_blank">
                            Heap
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://shlok-zanwar.github.io/bst-visualization" target="_blank">
                            Binary Search Tree
                        </a>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    );
}



export default function ProjectTimeline() {

    return (
        <div>
            <Timeline position="alternate">
                
                <div style={{aliginItems: 'center'}}>
                    <div style={{ display: 'inline-block', borderBottom: '2px solid #fff', minWidth: '400px'}}></div>    
                </div>
                <ProjectImagesDashboard isRightAligned={false} refId="p_imaged_dashboard" />
                <ProjectCodeRooms isRightAligned={true} refId="p_coderooms" />
                <ProjectBinaryTreeVisualization isRightAligned={false} />
                <ProjectDockForms isRightAligned={true} />
                <ProjectPastebin isRightAligned={false} />
                <ProjectMnistModel isRightAligned={true} />
                <ProjectMathsyra isRightAligned={false} />
                <ProjectTodoApp isRightAligned={true} />
                <ProjectHotelManagement isRightAligned={false} />
                <ProjectTerminalQuiz isRightAligned={true} />
                
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                        
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}



// export interface VerticalTimelineProps {
//     animate?: boolean | undefined;
//     children?: React.ReactNode;
//     className?: string | undefined;
//     layout?: '1-column' | '1-column-left' | '1-column-right' | '2-columns' | undefined;
//     lineColor?: string | undefined;
// }
// export interface VerticalTimelineElementProps {
//     children?: React.ReactNode;
//     id?: string | undefined;
//     className?: string | undefined;
//     date?: string | undefined;
//     dateClassName?: string | undefined;
//     iconClassName?: string | undefined;
//     iconOnClick?: (() => void) | undefined;
//     iconStyle?: React.CSSProperties | undefined;
//     icon?: React.ReactNode | undefined;
//     intersectionObserverProps?: any;
//     onTimelineElementClick?: (() => void) | undefined;
//     position?: string | undefined;
//     style?: React.CSSProperties | undefined;
//     textClassName?: string | undefined;
//     contentStyle?: React.CSSProperties | undefined;
//     contentArrowStyle?: React.CSSProperties | undefined;
//     visible?: boolean | undefined;
// }

// <VerticalTimeline lineColor="linear-gradient(to bottom, #30CFD0, #c43ad6)">
//     <VerticalTimelineElement
//         // className="vertical-timeline-element--work"
//         contentStyle={{ background: "transparent", color: "#fff", border: "none" }}
//         contentArrowStyle={{ display: "none" }}
//         // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
//         date={<span style={{ background: "lightblue" }}>"2011 - present"</span>}
//         iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff", height: "40px", width: "40px", marginLeft: "-20px" }}
//         position="left"
//         icon={<SiGithub />}
//     >
//         <div style={{ textAlign: "right" }}>
//             <span className="timeline-title">Code Rooms</span>
//         </div>
//         <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//         <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
//     </VerticalTimelineElement>
//     <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         contentStyle={{ background: "transparent", color: "#fff" }}
//         contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
//         date={<span style={{ background: "lightblue" }}>"2011 - present"</span>}
//         iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         icon={<SiGithub />}
//     >
//         <h3 className="vertical-timeline-element-title">Creative Director</h3>
//         <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//         <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
//     </VerticalTimelineElement>
//     <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         date="2010 - 2011"
//         iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         // icon={<WorkIcon />}
//     >
//         <h3 className="vertical-timeline-element-title">Art Director</h3>
//         <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//         <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
//     </VerticalTimelineElement>
//     <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         date="2008 - 2010"
//         iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         // icon={<WorkIcon />}
//     >
//         <h3 className="vertical-timeline-element-title">Web Designer</h3>
//         <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
//         <p>User Experience, Visual Design</p>
//     </VerticalTimelineElement>
//     <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         date="2006 - 2008"
//         iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         // icon={<WorkIcon />}
//     >
//         <h3 className="vertical-timeline-element-title">Web Designer</h3>
//         <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//         <p>User Experience, Visual Design</p>
//     </VerticalTimelineElement>
//     <VerticalTimelineElement
//         className="vertical-timeline-element--education"
//         date="April 2013"
//         iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//         // icon={<SchoolIcon />}
//     >
//         <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
//         <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
//         <p>Strategy, Social Media</p>
//     </VerticalTimelineElement>
//     <VerticalTimelineElement
//         className="vertical-timeline-element--education"
//         date="November 2012"
//         iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//         // icon={<SchoolIcon />}
//     >
//         <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
//         <h4 className="vertical-timeline-element-subtitle">Certification</h4>
//         <p>Creative Direction, User Experience, Visual Design</p>
//     </VerticalTimelineElement>
//     <VerticalTimelineElement
//         className="vertical-timeline-element--education"
//         date="2002 - 2006"
//         iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//         // icon={<SchoolIcon />}
//     >
//         <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
//         <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
//         <p>Creative Direction, Visual Design</p>
//     </VerticalTimelineElement>
//     <VerticalTimelineElement
//         iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
//         // icon={<StarIcon />}
//     />
// </VerticalTimeline>;
