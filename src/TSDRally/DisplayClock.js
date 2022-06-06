import React, { useState } from 'react'
import moment from 'moment';
import useInterval from './useInterval';

export default function DisplayClock() {
    const [time, setTime] = useState(moment());

    useInterval(() => {
        setTime(moment());
    }, 1000);

    return (
        <div 
            style={{
                color: 'red',
                position: 'fixed',
                bottom: '20px',
                left: '20px',
                background: 'white',
                zIndex: '1000',
                fontSize: '50px',
                borderRadius: '10px',
                border: '4px solid red'
            }} 
        >
            {time.format('hh:mm:ss')}
        </div>
    )
}
