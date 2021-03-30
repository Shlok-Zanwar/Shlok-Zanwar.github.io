import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-css'

function HomeCards() {
    const [cards] = useState(require('./CardDetails.json'))

    // const handleClickCards = (url) =>{
    //     window.location.href = 
    // }

    const cardType = (type) => {
        if(type === "Blog"){
            return (
                <div className="card-type green-border">
                    {type}
                </div>
            )
        }
        else if(type === "App"){
            return (
                <div className="card-type blue-border">
                    {type}
                </div>
            )
        }
    }

    const breakpoints = {
        default: 5,
        1600: 4,
        1250: 3,
        940: 2,
        700: 1
    };

    return ( 
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            { cards.map(card =>
            <Link to={card.url} key={card.id}>
                <div key={card.id} className="cards-box">
                    <div className="cards-info">
                        <div className="cards-title">
                            {card.title}
                        </div>
                        <div className="cards-description">
                            {card.description}
                        </div>
                    </div>
                    <div className="card-bottom-bar">
                        <div className="card-date ">
                            {card.date}
                        </div>
                        {cardType(card.type)}               
                    </div>
                </div>
            </Link>
            )}
        </Masonry>
    )
}

export default HomeCards
