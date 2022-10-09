import { Button, Input, Table, TimePicker } from 'antd';
import React, { useEffect, useState } from 'react'
import moment from 'moment';

export default function TCChart({timeChart, rallyStartTime, tcChart, setTcChart, isRallyStarted,
    currIndexReached, setRallyStartTime, setTimeChart, rallyChart, setRallyChart

}) {
    const [currDistance, setCurrDistance] = useState(0);
    const [timePicker, setTimePicker] = useState(moment());

    const columns = [
        {
            title: 'Distance',
            dataIndex: 'distance',
        },
        {
            title: 'Reaced At',
            dataIndex: 'reachedAt',
            render: (text, record) => {
                return (
                    <div>
                        {moment(text).format('hh : mm : ss a')}
                    </div>
                )
            }
        },
        {
            title: 'Should Have Reached At',
            dataIndex: 'shouldHaveReachedAt',
            render: (text, record) => {
                return (
                    <div>
                        {moment(text).format('hh : mm : ss a')}
                    </div>
                )
            }
        },
        {
            title: 'Time Diff',
            dataIndex: 'timeDiff',
            render: (text, record) => {
                return (
                    <div>
                        {text > 0 ? text + ' sec early' : Math.abs(text) + ' sec late'}
                    </div>
                )
            }
        },
        {
            title: 'Penalty',
            dataIndex: 'penalty',
        },
        {
            title: 'Remove',
            render: (text, record) => {
                return (
                    <div>
                        <Button
                            onClick={() => {
                                const newTcChart = [...tcChart];
                                newTcChart.splice(record.index, 1);
                                setTcChart(newTcChart);
                            }}
                        >
                            Remove
                        </Button>
                    </div>
                )
            },
            width: '100px'
        }
    ];

    const addNewTC = () => {
        try {
            
            var i = 0, calcTime;
            while( currDistance > timeChart[i].to) {
                i ++;
            }
    
            if(i === 0){
                calcTime = rallyStartTime;
            }
            else{
                calcTime = timeChart[i-1].idealReachTime;
            }
    
            var idealTcReachTime = moment(calcTime).add( ((currDistance - timeChart[i].from) * 3600) / timeChart[i].idealSpeed, 'seconds' ).format();
            // var currReachedTime = moment().format();
            var currReachedTime = moment(timePicker).format();
            var timeDiff = moment(idealTcReachTime).diff(moment(currReachedTime), 'seconds');
    
            var penalty = 0;
            // If reach early then add penalty else 2 * penalty
            if(timeDiff > 0){
                penalty = timeDiff * 2;
            }
            else{
                penalty = timeDiff * -1;
            }
    
            var newTcChart = [...tcChart];
            newTcChart.push({
                distance: currDistance,
                reachedAt: currReachedTime,
                shouldHaveReachedAt: idealTcReachTime,
                timeDiff: timeDiff,
                penalty: penalty
            });
            setTcChart(newTcChart);

            var newTimeChart = [...timeChart];
            console.log(currIndexReached)
            for(var j = 0; j < timeChart.length; j++){
                newTimeChart[j].idealReachTime = timeDiff >= 0 ?
                    moment(timeChart[j].idealReachTime).subtract(timeDiff, 'seconds').format() :
                    moment(timeChart[j].idealReachTime).add(timeDiff*-1, 'seconds').format();
                }
                setTimeChart(newTimeChart);
                
            var newRallyChart = [...rallyChart];
            for(var j = currIndexReached + 1; j < rallyChart.length; j++){
                newRallyChart[j].idealReachTime = timeDiff >= 0 ?
                    moment(rallyChart[j].idealReachTime).subtract(timeDiff, 'seconds').format() :
                    moment(rallyChart[j].idealReachTime).add(timeDiff*-1, 'seconds').format();  
            }
            setRallyChart(newRallyChart);

            setRallyStartTime(timeDiff >= 0 ?
                moment(rallyStartTime).subtract(timeDiff, 'seconds').format() :
                moment(rallyStartTime).add(timeDiff*-1, 'seconds').format()
            );

        } catch (error) {
            console.log(error);
            alert("Error");
        }

    }

    useEffect(() => {
        console.log("Rally Start Time", rallyStartTime)
    }, [rallyStartTime])

    useEffect(() => {
        console.log("Time Chart", timeChart)
    }, [timeChart])

    useEffect(() => {
        console.log("Rally Chart", rallyChart)
    }, [rallyChart])
            

    return (
        <div>
            <div style={{display: 'inline-flex', alignItems: 'flex-end'}}>

                <div className="form-label-outer-div-antd">
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
                </div>
                <div className="form-label-outer-div-antd">
                    <div className="form-label-div-antd" >
                        <span className="form-label-span-antd" >
                            Time
                        </span>
                    </div>
                    <TimePicker
                        style={{width: '150px'}}
                        value={timePicker}
                        onChange={(time, timeString) => setTimePicker(time)}
                        allowClear={false}
                    />
                </div>

                <Button onClick={addNewTC} style={{marginBottom: '2px'}} disabled={!isRallyStarted}>
                    Add New TC
                </Button>
            </div>
            <Table columns={columns} dataSource={tcChart} pagination={false} size="small" />
            <div style={{ fontSize: '30px' }} >
                Total Penalty : {tcChart.reduce((acc, curr) => acc + curr.penalty, 0)}
            </div>
        </div>
    )
}
