import React, { useState } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import { Tabs } from 'antd';
import { MdApps } from "react-icons/md";
import { FaMicroblog } from "react-icons/fa";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const { TabPane } = Tabs;

export default function AppsPage() {
    document.title = "Apps | Shlok Zanwar"
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [appCards, ] = useState(
        [
            ...require("./Apps.json").filter(card => ((card.type === "App" || card.type === "Game") && card.hidden !== true)),
            {
                "id": 999,
                "title": "Blogs",
                "description": "Blogs Page ( Old Blogs for some of the apps )",
                "url": "/blogs",
                "type": "Blog",
            },
        ]
    );


    const cardType = type => {
        if (type === "Blog") {
            return <div className="card-type green-border">{type}</div>;
        } else if (type === "App") {
            return <div className="card-type blue-border">{type}</div>;
        } else if (type === "Game") {
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

    return (
        <div id="apps">
            <Helmet>
                <style>
                {/* {`            
                    body {
                        text-align: center;
                        background-image: linear-gradient(
                            to right,
                            rgba(48, 16, 255, 1) 0%,
                            rgb(206, 116, 74) 21%,
                            rgb(219, 74, 74) 50%,
                            rgb(207, 61, 200) 79%,
                            rgba(48, 16, 255, 1) 100%
                        );
                    }
                `} */}
                </style>
            </Helmet>

        <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column" >
            {appCards.map((card, index) => {
                const cardRender = (
                    <div key={card.id} className="cards-box">
                        <div className="cards-info">
                            <div className="cards-title">{card.title}</div>
                            <div className="cards-description">{card.description}</div>
                        </div>
                        <div className="card-bottom-bar">
                            {card.date && <div className="card-date ">{card.date}</div>}
                            {cardType(card.type)}
                        </div>
                    </div>
                )
                return card.urlTarget === "_blank" ? (
                    <a href={card.url} key={card.id} target="_blank" rel="noopener noreferrer">
                        {cardRender}
                    </a>
                ) : (
                    <Link 
                        to={card.url} 
                        key={card.id} 
                    >   
                        {cardRender}
                    </Link>
                )
            })}
        </Masonry>
        </div>
    );
}
