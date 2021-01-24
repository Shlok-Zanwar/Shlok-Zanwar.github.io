import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function HomeCards() {
    const [cards] = useState(require('./CardDetails.json'))

    // const handleClickCards = (url) =>{
    //     window.location.href = 
    // }

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
            </div>
        </Link>
    )
}

export default HomeCards
