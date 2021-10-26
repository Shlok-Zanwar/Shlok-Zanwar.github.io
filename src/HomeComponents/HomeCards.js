import React, { useState } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";

function HomeCards() {
    const [cards] = useState(require("./CardDetails.json"));

    // const handleClickCards = (url) =>{
    //     window.location.href =
    // }

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
        <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            {cards.map(card => (
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
    );
}

export default HomeCards;
