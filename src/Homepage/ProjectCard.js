import React from "react";
import { Helmet } from "react-helmet";
import { HiOutlineCode } from "react-icons/hi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";
import { SiCss3, SiFastapi, SiFirebase, SiFlask, SiHeroku, SiHtml5, SiJavascript, SiJson, SiMongodb, SiMysql, SiPython, SiReact, SiRedux } from "react-icons/si";
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
import useIsInViewport from "../Functions/useIsInViewport";
import { useEffect } from "react";
const { Panel } = Collapse;


/*
    Format of data:

    {
        title: "Project Title",
        oppositeContent: <div>Opposite Content</div>, || "Opposite Content",
        id: "project_id",
        items: [
            {
                type: "text",
                content: <div>Description Content</div>, || "Description Content",
            },
            {
                type: "list",
                content: [
                    "List Item 1",          || <div>List Item 1</div>,
                    "List Item 2",          || <div>List Item 2</div>,
                    "List Item 3",          || <div>List Item 3</div>,
                ]
            },
            {
                type: chips,
                title: "Chips Title",
                content: [
                    {
                        text: "Chip 1",
                        icon: <div>Icon</div>,
                    }
                    {...}
                ]
            },
            {
                type: "links",
                content: [
                    {
                        text: "Button 1",
                        href: "https://google.com",
                        target: "_blank",
                        icon: <div>Icon</div>,
                        onClick: () => {}
                    }
                    {...}
                ]
            },
            {
                type: "collapse",
                title: "Collapsible Title",
                key: "collapsible_key",
                items: [
                    // It can be any of the above types
                ]
            },
        }
    }

*/

// const ProjectCodeRooms = ({refId, isRightAligned=false}) => {
//     const [collapseKeys, setCollapseKeys] = React.useState(["1"]);
//     const handleKeysChange = (keys) => {
//         setCollapseKeys(keys);
//     }

//     return (
//         <TimelineItem id={refId}>
//             <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" >
//                 <span className="timeline-item-date">
//                     Oct 2021
//                 </span>
//             </TimelineOppositeContent>
//             <TimelineSeparator>
//                 <TimelineConnector />
//                 <TimelineDot style={{background: '#EE1D62'}}>
//                     {/* <HiOutlineCode /> */}
//                 </TimelineDot>
//                 <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
//                 <div className="timeline-content-div">
//                     <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")}>
//                         <span className="timeline-title-text">Code Rooms</span>
//                     </div>
//                     <div className="timeline-description-div">
//                         <span className="timeline-description-text">
//                             Code rooms is a learning management system where teachers can seamlessly create rooms,
//                             assignments and assess assignments. Students can easily submit assigned assignments.
//                         </span>
//                     </div>
//                     <div className="timeline-description-div">
//                         <span className="timeline-description-text">
//                             It is deployed and is currently being used and loved by teachers and students at 
//                             <a href="https://www.viit.ac.in/" target="_blank"> VIIT</a>.
//                         </span>
//                     </div>
//                     <Collapse ghost activeKey={collapseKeys} onChange={handleKeysChange} >
//                         <Panel 
//                             key="1" 
//                             header={
//                                 <div className="timeline-description-div" style={{ marginTop: "10px" }}>
//                                     <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
//                                         {collapseKeys.includes("1") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
//                                         <i>Objective</i>&nbsp; {collapseKeys.includes("1") ? " : " : " ...."}
//                                     </span>
//                                 </div>
//                             }
//                             showArrow={false}
//                             style={{padding: '0px'}}
//                             className="custom-collapse-panel"
//                         >
//                             <div className="timeline-list-ul">
//                                 <span className="timeline-description-text" >
//                                     Traditional submission system platforms (Google Classroom, OnlineGDB, etc.) lacked good User Interface and User Experience.
//                                 </span>
//                             </div>
//                             <div className="timeline-list-ul">
//                                 <span className="timeline-description-text" >
//                                     Teachers had to open every submission in a new tab to view it which costed a lot of time and clicks.
//                                 </span>
//                             </div>
//                             <div className="timeline-list-ul">
//                                 <span className="timeline-description-text" >
//                                     Also for assessment of code files in classroom, teachers had to copy the code by 
//                                     themselves and paste it in their own editor for evaluation, whereas there was no way to submit files directly in the OnlineGBD.
//                                 </span>
//                             </div>
//                             <div className="timeline-list-ul">
//                                 <span className="timeline-description-text" >
//                                     These problems led to the creation of Code Rooms.
//                                 </span>
//                             </div>
//                         </Panel>
//                     </Collapse>
//                     <Collapse ghost activeKey={collapseKeys} onChange={handleKeysChange} >
                        
//                         <Panel 
//                             key="2" 
//                             header={
//                                 <div className="timeline-description-div">
//                                     <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
//                                         {collapseKeys.includes("2") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
//                                         <i>Key Features</i>&nbsp; {collapseKeys.includes("2") ? " : " : " ...."}
//                                     </span>
//                                 </div>
//                             }
//                             showArrow={false}
//                             style={{padding: '0px'}}
//                             className="custom-collapse-panel"
//                         >
//                             <ul className="timeline-list-ul">
//                                 <li className="timeline-list-item-li">
//                                     <span className="timeline-list-item-text">
//                                         Classrooms with features like waiting room authority and visibility on the go with one click.
//                                     </span>
//                                 </li>
//                                 <li className="timeline-list-item-li">
//                                     <span className="timeline-list-item-text">
//                                         Automated evaluation of test cases.
//                                     </span>
//                                 </li>
//                                 <li className="timeline-list-item-li">
//                                     <span className="timeline-list-item-text">
//                                         Code-Editor with syntax highlighting, code-completion and code-execution.
//                                     </span>
//                                 </li>
//                                 <li className="timeline-list-item-li">
//                                     <span className="timeline-list-item-text">
//                                         File type questions let you upload the file with a preview before submitting.
//                                     </span>
//                                 </li>
//                                 <li className="timeline-list-item-li">
//                                     <span className="timeline-list-item-text">
//                                         Submissions of any type of question can be assessed easily in every question with a code 
//                                         editor with submitted code or a preview of the file submitted right on the screen with download option.
//                                     </span>
//                                 </li>
//                             </ul>
//                         </Panel>
                        
//                     </Collapse>
//                     <Collapse ghost activeKey={collapseKeys} onChange={handleKeysChange} >
                        
//                         <Panel 
//                             key="3" 
//                             header={
//                                 <div className="timeline-description-div">
//                                     <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
//                                         {collapseKeys.includes("3") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
//                                         <i>Learning / Outcomes</i>&nbsp; {collapseKeys.includes("3") ? " : " : " ...."}
//                                     </span>
//                                 </div>
//                             }
//                             showArrow={false}
//                             style={{padding: '0px'}}
//                             className="custom-collapse-panel"
//                         >
//                             <ul className="timeline-list-ul">
//                                 <li className="timeline-list-item-li">
//                                     <span className="timeline-list-item-text">
//                                         Integration of complex UI components such as Code-Editor, File-Previewer with split screen pane view keeping good UI in consideration.
//                                     </span>
//                                 </li>
//                                 <li className="timeline-list-item-li">
//                                     <span className="timeline-list-item-text">
//                                         Implementation of Database User Hierarchy and SQL Queries having complex JOIN operations.
//                                     </span>
//                                 </li>
//                                 <li className="timeline-list-item-li">
//                                     <span className="timeline-list-item-text">
//                                         Overall deployment / hosting process of the application and making a app production ready.
//                                     </span>
//                                 </li>
//                             </ul>
//                         </Panel>
//                     </Collapse>
//                     <div className="timeline-description-div" style={{marginTop: '10px'}}>
//                         <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
//                             <span style={{minWidth: '80px', display: 'block'}}>Tech Stack:</span> 
//                             <div>
//                                 <span className="timeline-chip">
//                                     <SiFastapi className="timeline-tech-icon" /> 
//                                     FastAPI
//                                 </span>
//                                 <span className="timeline-chip">
//                                     <SiReact className="timeline-tech-icon" /> 
//                                     React
//                                 </span>
//                                 <span className="timeline-chip">
//                                     <GrMysql className="timeline-tech-icon" /> 
//                                     MySQL
//                                 </span>
//                                 <span className="timeline-chip">
//                                     <SiRedux className="timeline-tech-icon" /> 
//                                     Redux
//                                 </span>
//                             </div>
//                         </span>
//                     </div>
//                     <div className={"timeline-description-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
//                         <a className="btn btn-gradient-border btn-glow" href="https://code-rooms.github.io/#/about_us" target="_blank">
//                             About
//                         </a>
//                         <a className="btn btn-gradient-border btn-glow" href="https://code-rooms.github.io/#/about_us" target="_blank">
//                             Code Rooms
//                         </a>
//                         <a className="btn btn-gradient-border btn-glow" href="https://github.com/Code-rooms" target="_blank">
//                             Github
//                         </a>
//                     </div>
//                 </div>
//             </TimelineContent>
//         </TimelineItem>
//     )
// }

// Copy the content from above details.

// Above is the old code for the ProjectCard component
// Convert it into the new data-driven component

export default function ProjectCard({data={}, id=data?.id, align="left", defaultExpanded=[], aosAnimation="zoom-out"}) {
    const [collapseKeys, setCollapseKeys] = React.useState(defaultExpanded);
    const ref = React.useRef(null);
    // const isInViewport = useIsInViewport(ref);
    // useEffect(() => {
    //     if (isInViewport && window.location.hash !== `#${id}`) {
    //         // setCollapseKeys(defaultExpanded);
    //         // push the #id to the url
    //         // replace
    //         window.history.replaceState(null, null, `#${id}`);
    //     }
    // }, [isInViewport]);


    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    const textItem = (item) => (
        <div className="timeline-description-div">
            <span className="timeline-description-text">
                {item.content}
            </span>
        </div>
    )

    const listItems = (item) => (
        <ul className="timeline-list-ul">
            {item.content.map((listItem, index) => (
                <li className="timeline-list-item-li" key={index}>
                    <span className="timeline-list-item-text">
                        {listItem}
                    </span>
                </li>
            ))}
        </ul>
    )

    const chipsItem = (item) => (
        <div className="timeline-description-div" style={{marginTop: '10px'}}>
            <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                <span style={{minWidth: '80px', display: 'block'}}>{item.title}:</span>
                <div>
                    {item.content.map((chip, index) => (
                        <span className="timeline-chip" key={index} data-aos="fade-left" data-aos-delay={index * 50} data-aos-once="true">
                            {chip.icon}
                            {chip.text}
                        </span>
                    ))}
                </div>
            </span>
        </div>
    )

    const linksItem = (item) => (
        <div className={"timeline-description-div " + (align === "right" ? "timeline-align-right" : "")} style={{ marginTop: "10px" }} 
            data-aos="fade-up" data-aos-delay={0} data-aos-once="true" data-aos-anchor={`#${id}`}
            >
            {item.content.map((link, index) => (
                <a className="btn btn-gradient-border btn-glow" href={link.link} target={link.target || "_blank"} key={index}>
                    {link.text}
                </a>
            ))}
        </div>
    )

    const collapseItem = (item) => (
        <Collapse
            key={item.id}
            onChange={handleKeysChange}
            activeKey={collapseKeys}
            ghost
            expandIconPosition="right"
        >
            <Panel 
                key={item.id}
                header={
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            {collapseKeys.includes(item.id) ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                            <i>{item.title}</i> &nbsp; {collapseKeys.includes(item.id) ? " : " : " ...."}
                        </span>
                    </div>
                }
                showArrow={false}
                style={{padding: '0px'}}
                className="custom-collapse-panel"
            >
                {renderData(item.items)}
            </Panel>
        </Collapse>
    )


    const renderData = (d) => {
        return d.map((item, index) => {
            switch(item.type) {
                case "text": return textItem(item);
                case "list": return listItems(item);
                case "chips": return chipsItem(item);
                case "links": return linksItem(item);
                case "collapse": return collapseItem(item);
                default: return null;
            }
        })
    }


    return (
        <TimelineItem key={id} id={id} ref={ref} >
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" >
                <span className="timeline-item-date" data-aos={`fade-${align === "right" ? "left" : "right"}`} data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
                    {data.oppositeContent}
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{background: '#EE1D62'}}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            {/* style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}} */}
            <TimelineContent sx={{ py: "12px", px: 2 }} style={{display: 'inline-flex', justifyContent: align === "right" ? "right" : "" }}>
                <div className="timeline-content-div" data-aos={aosAnimation} data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
                    <div 
                        className={"timeline-title-div" + (align === "right" && "timeline-align-right") } 
                        id={id} 
                        style={{cursor: 'pointer'}}
                        onClick={() => {window.history.replaceState(null, null, `#${id}`);}}
                    >
                        <span className="timeline-title-text"> {data.title} </span>
                    </div>

                    {renderData(data.items)}
                </div>
            </TimelineContent>
        </TimelineItem>
    )
}
