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
            expandIconPosition="end"
        >
            <Panel 
                key={item.id}
                header={
                    <div className="timeline-description-div" title={collapseKeys.includes(item.id) ? "Collapse" : "Expand"}>
                        <span className="timeline-description-text">
                            {collapseKeys.includes(item.id) ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                            <i>{item.title}</i> &nbsp; {collapseKeys.includes(item.id) ? " : " : " ...."}
                        </span>
                    </div>
                }
                showArrow={false}
                style={{padding: '0px'}}
                className="timeline-collapse-panel"
                
            >
                <div className="timeline-collapse-item-outer">
                    {renderData(item.items)}
                </div>
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
