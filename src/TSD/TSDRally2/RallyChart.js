import { Table, Button, Input } from 'antd'
import React, { useState } from 'react'
import moment from 'moment';

export default function RallyChart({ rallyChart, setRallyChart, isRallyStarted, currIndexReached, setCurrIndexReached, currReachedTime, setCurrReachedTime }) {
    var columns = [
        {
            title: 'From',
            dataIndex: 'from',
            // width: '130px',
        },
        {
            title: 'To',
            dataIndex: 'to',
            // width: '130px',
        },
        {
            title: 'Ideal Speed',
            dataIndex: 'idealSpeed',
            // width: '130px',
        },
        {
            title: 'Ideal reach time',
            dataIndex: 'idealReachTime',
            render: (text, record) => {
                return (
                    <div>
                        {moment(text).format('hh : mm : ss a')}
                    </div>
                )
            }
        },
        {
            title: 'Reached ?',
            render: (text, record) => {
                return (
                    <div>
                        {record.reached ? 
                            moment(record.reached).format('hh : mm : ss a') + ' (' + 
                                (record.timeDiff > 0 ? record.timeDiff + ' sec early' : record.timeDiff*-1  + ' sec late.' )
                            + ' )' 
                            :
                            <Button 
                                onClick={() => {
                                    const newRallyChart = [...rallyChart];
                                    newRallyChart[record.index].reached = moment().format();
                                    newRallyChart[record.index].timeDiff = moment(newRallyChart[record.index].idealReachTime).diff(moment(), 'seconds');
                                    setRallyChart(newRallyChart);
                                    setCurrIndexReached(record.index);
                                    setCurrReachedTime(moment().format());
                                }} 
                                // disabled={record.index > currIndexReached + 1 && isRallyStarted === false}
                                disabled={isRallyStarted ? record.index > currIndexReached + 1 : true }
                            >
                                Reach
                            </Button>
                         }
                    </div>
                )
            }
                
        }
    ];

    return (
        <div>
            <Table
                rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
                columns={columns}
                dataSource={rallyChart}
                pagination={false}
                scroll={{ y: 300 }}
                size="small"
            />
        </div>
    )
}
