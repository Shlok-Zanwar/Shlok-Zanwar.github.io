import React, { useEffect } from 'react'
import HomeCards from './HomeCards'

function Home() {
    
    document.title = "Home | Shlok Zanwar"
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    

    return (
        <div>
            <HomeCards />
        </div>
    )
}

export default Home
