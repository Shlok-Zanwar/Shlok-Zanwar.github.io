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
                <div className="card-type green-card-type">
                    {type}
                </div>
            )
        }
        else if(type === "App"){
            return (
                <div className="card-type blue-card-type">
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
                {cardType(card.type)}
            </div>
        </Link>
    )
}

export default HomeCards
