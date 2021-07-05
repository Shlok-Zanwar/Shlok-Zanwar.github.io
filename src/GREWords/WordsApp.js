import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import MapWords from './MapWords';
import './WordsCss.css'

export default function WordsApp() {
    // const [words, setWords] = useState(require('./Words.json'));
    const [words, setWords] = useState(localStorage.getItem("greWords") ? JSON.parse(localStorage.getItem("greWords")) : [] );

    useEffect(() => {
        setWords(JSON.parse(localStorage.getItem("greWords")));
    }, [localStorage.greWords])

    return (
        <div className="words-outer-div">
            <div className="blog-title">
                Words
            </div>
            <MapWords words={words} />
        </div>
    )
}

