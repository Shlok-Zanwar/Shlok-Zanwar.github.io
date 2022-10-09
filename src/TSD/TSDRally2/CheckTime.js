import { Button, Input } from 'antd';
import React, { useState } from 'react';
import moment from 'moment';
import useInterval from '../TSDRally/useInterval';

export default function CheckTime({timeChart, rallyStartTime, isRallyStarted}) {
    const [currDistance, setCurrDistance] = useState(0);
    const [ans, setAns] = useState(0);

    
    
    const checkTimeValid = () => {
        // var timeDiffInSeconds = moment().diff(moment(rallyStartTime), 'seconds');
        try {
            var i = 0, calcTime;

            while( moment().diff(moment( timeChart[i].idealReachTime ), 'seconds') > 0 ) {
                i ++;
            }

            if(i === 0){
                calcTime = rallyStartTime;
            }
            else{
                calcTime = timeChart[i-1].idealReachTime;
            }
            
            
            var timeDiffInSeconds = moment().diff(moment(calcTime), 'seconds');
            
            var shouldBeAt = (timeChart[i].idealSpeed * timeDiffInSeconds / 3600) + timeChart[i].from;
            // console.log("sss", shouldBeAt);
            setAns(shouldBeAt);
            
            // var dist = currDistance - timeChart[i].from;
            // // calculate the time currDistance is late or early
            
            
            // var timeDiff = moment(calcTime).add( ((dist * 3600) / timeChart[i].idealSpeed), 'seconds' ).format();
            // console.log(timeDiff);
        } catch (error) {
            setAns(0)
        }
        
    }
    
    useInterval(() => {
        checkTimeValid();
    }, 2000);

    return (
        <div style={{display: 'inline-flex'}}>
            {/* <div className="form-label-outer-div-antd">
                <div className="form-label-div-antd" >
                    <span className="form-label-span-antd" >
                        Distance
                    </span>
                </div>
                <Input
                    style={{width: '150px'}}
                    placeholder="Distance"
                    value={currDistance}
                    onChange={(e) => setCurrDistance(e.target.value)}
                />
            </div> */}
            {/* <Button onClick={checkTimeValid} disabled={!isRallyStarted}>
                Check
            </Button> */}
            <div style={{fontSize: '20px', marginLeft: '20px'}}>
                You should currently be at <span className='blink_me'>{Number(ans.toFixed(2))}</span> Kms.
            </div>
        </div>
    )
}
