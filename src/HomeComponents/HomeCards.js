import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

    return cards.map(card =>
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
    )
}

export default HomeCards
