import React, { useEffect, useState } from 'react'
import {Button} from 'antd'
import RallyChart from './RallyChart';
import TimeChart from './TimeChart';
import moment from 'moment';
import CheckTime from './CheckTime';
import DisplayClock from '../TSDRally/DisplayClock';
import TCChart from './TCChart';
import ExportToExcel from '../TSDRally/ExportToExcel';

export default function TSDRally2() {
    const [timeChart, setTimeChart] = useState([]);
    const [rallyChart, setRallyChart] = useState([]);
    const [tcChart, setTcChart] = useState([]);

    const saveAndCreateChart = () => {
        // Create a new chart of 0.5 km range difference and add time from timechart to that km
        var newRallyChart = [];
        var j = 0, speed;
        for (var i = 0; i < timeChart[timeChart.length - 1].to; i += 0.5) {
            if(i < timeChart[j].to) {
                speed = timeChart[j].idealSpeed;
            } else {
                j++;
                speed = timeChart[j].idealSpeed;
            }
            newRallyChart.push({
                from: i,
                to: i + 0.5,
                idealSpeed: speed,
                index: newRallyChart.length,
                idealReachTime: "00:00:00T00:00:00",
                isReached: false,
                reachedTime: "00:00:00T00:00:00",
            });
        }
        setRallyChart(newRallyChart);

        console.log(timeChart);
        console.log(newRallyChart);

    }

    useEffect(() => {
        const unloadCallback = (event) => {
          event.preventDefault();
          event.returnValue = "";
          return "";
        };
      
        window.addEventListener("beforeunload", unloadCallback);
        return () => window.removeEventListener("beforeunload", unloadCallback);
    }, []);
      

    const [isRallyStarted, setIsRallyStarted] = useState(false);
    const [rallyStartTime, setRallyStartTime] = useState();
    const [currIndexReached, setCurrIndexReached] = useState(-1);
    const [currReachedTime, setCurrReachedTime] = useState();

    const startRally = () => {
        var a = window.confirm("Are you sure you want to start the rally?");
        if (!a) {
            return;
        }
        setIsRallyStarted(true);

        // Take the current time from moment and set it as rally start time
        setRallyStartTime(moment().format());


        var newTimeChart = [...timeChart];
        newTimeChart[0].idealReachTime = moment().add( ((newTimeChart[0].to - newTimeChart[0].from) * 3600) / newTimeChart[0].idealSpeed, 'seconds' ).format();
        for(i = 1; i < timeChart.length; i++) {
            newTimeChart[i].idealReachTime = moment( newTimeChart[i-1].idealReachTime ).add( ((newTimeChart[i].to - newTimeChart[i].from) * 3600) / newTimeChart[i].idealSpeed, 'seconds' ).format();
        }
        setTimeChart(newTimeChart);


        
        var newRallyChart = [...rallyChart];

        var i = 0, calcTime = moment().format(), currTimeChartIndex = 0;
        for(i = 0; i < rallyChart.length; i++) {
            if(rallyChart[i].from >= timeChart[currTimeChartIndex].to) {
                calcTime = moment(timeChart[currTimeChartIndex].idealReachTime).format();
                currTimeChartIndex++;
            }
            newRallyChart[i].idealReachTime = moment(calcTime).add( ((rallyChart[i].to - newTimeChart[currTimeChartIndex].from ) * 3600) / rallyChart[i].idealSpeed, 'seconds' ).format();
            newRallyChart[i].reached = false;
        }
        setRallyChart(newRallyChart);
        setCurrIndexReached(-1);

        setTcChart([]);

        // var i;
        // newRallyChart[0].idealReachTime = moment().add( ((newRallyChart[0].to - newRallyChart[0].from) * 3600) / newRallyChart[0].idealSpeed, 'seconds' ).format();
        // newRallyChart[0].reached = false;
        // for(i = 1; i < rallyChart.length; i++) {
        //     newRallyChart[i].idealReachTime = moment( newRallyChart[i-1].idealReachTime ).add( ((newRallyChart[i].to - newRallyChart[i].from) * 3600) / newRallyChart[i].idealSpeed, 'seconds' ).format();
        //     newRallyChart[i].reached = false;
        // }
        // setCurrIndexReached(-1);
        // setRallyChart(newRallyChart);
        
        // alert("hii");



    }

    const [speedShouldBe, setSpeedShouldBe] = useState(0);

    useEffect(() => {
        if(currIndexReached === -1 || currIndexReached === rallyChart.length - 1) {
            return;
        }

        const distanceToTravel = rallyChart[currIndexReached + 1].to - rallyChart[currIndexReached + 1].from;
        const timeToTravel = moment(rallyChart[currIndexReached + 1].idealReachTime).diff(moment(currReachedTime), 'seconds');
        const speed = distanceToTravel * 3600 / timeToTravel;
        setSpeedShouldBe(speed);  
    }, [currIndexReached, currReachedTime]);

    // console.log('TimeChart: ', timeChart);
    // console.log('RallyChart: ', rallyChart);
    // console.log('TCChart: ', tcChart);

    return (
        <div className='tsd-main-outer-div'>
            <h3 style={{color: "#fff"}}>App 2</h3>
            <div>
                <TimeChart 
                    timeChart={timeChart}
                    setTimeChart={setTimeChart}
                    saveAndCreateChart={saveAndCreateChart}
                    isRallyStarted={isRallyStarted}
                />
            </div>
            <Button onClick={startRally} style={{marginTop: '10px'}}>
                Start Rally
            </Button>
            <div style={{marginTop: '60px'}}>
                <CheckTime 
                    timeChart={timeChart}
                    rallyStartTime={rallyStartTime}
                    isRallyStarted={isRallyStarted}
                />
            </div>
            <div style={{marginTop: '10px'}}>

                {/* {rallyStartTime} */}
                <DisplayClock />
                <div 
                    style={{
                        color: 'red',
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        background: 'white',
                        zIndex: '1000',
                        fontSize: '50px',
                        borderRadius: '10px',
                        border: '4px solid red'
                    }} 
                >
                    Maintain : {Number((speedShouldBe).toFixed(2)) > 0 ? Number((speedShouldBe).toFixed(2)) + " km/hr" : 'Fast'}
                </div>


                
                <RallyChart
                    rallyChart={rallyChart}
                    setRallyChart={setRallyChart}

                    isRallyStarted={isRallyStarted}
                    currIndexReached={currIndexReached}
                    setCurrIndexReached={setCurrIndexReached}
                    currReachedTime={currReachedTime}
                    setCurrReachedTime={setCurrReachedTime}
                />
            </div>
            <div style={{marginTop: '40px'}}>
                <TCChart
                    timeChart={timeChart}
                    rallyStartTime={rallyStartTime}
                    tcChart={tcChart}
                    setTcChart={setTcChart}
                    isRallyStarted={isRallyStarted}

                    rallyChart={rallyChart}
                    setRallyChart={setRallyChart}
                    setRallyStartTime={setRallyStartTime}
                    setTimeChart={setTimeChart}
                    currIndexReached={currIndexReached}
                />
            </div>
            <div style={{marginTop: '40px'}}>
                <ExportToExcel 
                    rallyChart={rallyChart}
                    tcChart={tcChart}
                />
            </div>
        </div>
    )
}
