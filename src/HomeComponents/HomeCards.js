import React, { useState } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import { Tabs } from 'antd';
import { MdApps } from "react-icons/md";
import { FaMicroblog } from "react-icons/fa";

const { TabPane } = Tabs;

function HomeCards() {
    const [appCards, ] = useState(require("./CardDetails.json").filter(card => card.type === "App"));
    const [blogCards, ] = useState(require("./CardDetails.json").filter(card => card.type === "Blog"));

    

    const cardType = type => {
        if (type === "Blog") {
            return <div className="card-type green-border">{type}</div>;
        } else if (type === "App") {
            return <div className="card-type blue-border">{type}</div>;
        } else if (type === "Model") {
            return <div className="card-type yellow-border">{type}</div>;
        }
    };

    const breakpoints = {
        default: 5,
        1600: 4,
        1250: 3,
        940: 2,
        700: 1,
    };

    const linkType = (card, component) => {
        if (card.fullLink) {
            return (
                <a href={card.url} target="_blank" key={card.url}>
                    {component}
                </a>
            );
        } else {
            return (
                <Link to={card.url} key={card.id}>
                    {component}
                </Link>
            );
        }
    };

    return (
        <>
        <Tabs centered defaultActiveKey="1" tabBarStyle={{background: 'var(--black)', paddingBottom: '10px', borderBottom: "2.5px solid rgba(17, 122, 255, 1)"}}>
            <TabPane 
                tab={
                    <span style={{fontSize: 22, display: 'flex', alignItems: 'center'}}>
                        <MdApps />
                        <span style={{ marginLeft: '5px', color: '#fff' }}>
                            Apps
                        </span>
                    </span>
                }
                key="1"
            >
                <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {appCards.map(card => (
                        <>
                            {linkType(
                                card,
                                <div key={card.id} className="cards-box">
                                    <div className="cards-info">
                                        <div className="cards-title">{card.title}</div>
                                        <div className="cards-description">{card.description}</div>
                                    </div>
                                    <div className="card-bottom-bar">
                                        <div className="card-date ">{card.date}</div>
                                        {cardType(card.type)}
                                    </div>
                                </div>
                            )}
                        </>
                    ))}
                </Masonry>
            </TabPane>
            <TabPane 
                tab={
                    <span style={{fontSize: 22, display: 'flex', alignItems: 'center'}}>
                        <FaMicroblog/>
                        <span style={{ marginLeft: '5px', color: '#fff' }}>
                            Blogs
                        </span>
                    </span>
                }
                key="2"
            >
                <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {blogCards.map(card => (
                        <>
                            {linkType(
                                card,
                                <div key={card.id} className="cards-box">
                                    <div className="cards-info">
                                        <div className="cards-title">{card.title}</div>
                                        <div className="cards-description">{card.description}</div>
                                    </div>
                                    <div className="card-bottom-bar">
                                        <div className="card-date ">{card.date}</div>
                                        {cardType(card.type)}
                                    </div>
                                </div>
                            )}
                        </>
                    ))}
                </Masonry>
            </TabPane>
        </Tabs>
        </>
    );
}

export default HomeCards;
