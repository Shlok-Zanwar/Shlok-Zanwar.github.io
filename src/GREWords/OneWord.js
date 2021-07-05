import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { GrFormDown, GrFormUp } from "react-icons/gr";
import WordDetails from './WordDetails';

export default function OneWord({word, index}) {
    const [isOpen, setIsOpen] = useState(false);
    const [overflow, setOverflow] = useState("auto");

    const availableColors = [
        "blue", 
        "orange", 
        "pink", 
        "purple",
        "red",
        "green"
    ];

    useEffect(() => {
        if(!isOpen){
            setOverflow("hidden");
            return;
        }

        setTimeout(() => {
            setOverflow( isOpen ? "auto" : "hidden" )
        }, 500);
    }, [isOpen])

    return (
        <div className="accordion-outer">
            <div 
                className={isOpen ? "accordion-heading " + availableColors[index%6] : "accordion-heading accordion-closed " + availableColors[index%6]} 
                onClick={() => {setIsOpen(!isOpen)}}
            >
                <div>
                    {word.word}
                </div>
                <div className="icons">
                    {   
                        isOpen ? (
                            <GrFormUp className='edit-icon' style={{color: '#fff'}}/> 
                            ) : ( 
                            <GrFormDown className='edit-icon'/>
                        )
                    }
                </div>
            </div>

            <div  
                className={isOpen ? "accordion-data full-height " + availableColors[index%6] + "-border-accordion" : "accordion-data " } 
                style={{overflow: overflow}}
            >
                <WordDetails 
                    word={word} 
                    index={index} 
                    availableColors={availableColors} 
                />
            </div>
        </div>
    )
}
