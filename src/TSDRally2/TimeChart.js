import { Table, Button, Input } from 'antd'
import React, { useState } from 'react'

export default function TimeChart({timeChart, setTimeChart, saveAndCreateChart, isRallyStarted}) {
    const [addFrom, setAddFrom] = useState(0);
    const [addTo, setAddTo] = useState(0);
    const [addIdealSpeed, setAddIdealSpeed] = useState(0);
    const [isSaved, setIsSaved] = useState(false);

    const columns = [
        {
            title: 'From',
            dataIndex: 'from',
        },
        {
            title: 'To',
            dataIndex: 'to',
        },
        {
            title: 'Ideal Speed',
            dataIndex: 'idealSpeed',
        },
    ];

    const addNewTimeChartCol = () => {
        const newTimeChart = [...timeChart];
        newTimeChart.push({
            from: parseFloat(addFrom),
            to: parseFloat(addTo),
            idealSpeed: parseFloat(addIdealSpeed),
            index: timeChart.length,
        });
        setTimeChart(newTimeChart);
        setAddFrom(addTo);
        setAddTo(0);
        setAddIdealSpeed(0);
        // console.log(timeChart);
    }

    return (
        <div>
            <div style={{display: 'inline-flex', alignItems: 'flex-end'}}>
                <div className="form-label-outer-div-antd">
                    <div className="form-label-div-antd" >
                        <span className="form-label-span-antd" >
                            From
                        </span>
                    </div>
                    <Input
                        style={{width: '150px'}}
                        placeholder="From"
                        value={addFrom}
                        onChange={(e) => setAddFrom(e.target.value)}
                    />
                </div>
                <div className="form-label-outer-div-antd">
                    <div className="form-label-div-antd" >
                        <span className="form-label-span-antd" >
                            To
                        </span>
                    </div>
                    <Input
                        style={{width: '150px'}}
                        placeholder="To"
                        value={addTo}
                        onChange={(e) => setAddTo(e.target.value)}
                    />
                </div>
                <div className="form-label-outer-div-antd">
                    <div className="form-label-div-antd" >
                        <span className="form-label-span-antd" >
                            Speed
                        </span>
                    </div>
                    <Input
                        style={{width: '150px'}}
                        placeholder="Ideal Speed"
                        value={addIdealSpeed}
                        onChange={(e) => setAddIdealSpeed(e.target.value)}
                    />
                </div>
                <Button onClick={addNewTimeChartCol} style={{margin: '2px'}} disabled={isSaved} >
                    Add
                </Button>
            </div>
            <Table
                columns={columns}
                dataSource={timeChart}
                pagination={false}
                size="small"
            />
            <Button
                style={{marginTop: '10px'}}
                onClick={() => {
                        saveAndCreateChart();
                        setIsSaved(true);
                    }}
                    disabled={isRallyStarted}
            >
                Save and create Chart
            </Button>
        </div>
    )
}
