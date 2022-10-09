import { Button } from 'antd'
import React from 'react'
import * as FileSaver from "file-saver";
import * as Excel from "exceljs";
import moment from 'moment';

const blobType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

export default function ExportToExcel({rallyChart, tcChart}) {

    const hanldeExportToExcel = () => {
        try {
            const workbook = new Excel.Workbook();
            const ws = workbook.addWorksheet('Rally Chart', {
                pageSetup: {
                    horizontalCentered: true,
                    verticalCentered: true,
                },
            });

            ws.columns = [
                { header: 'From', key: 'from', width: 10 },
                { header: 'To', key: 'to', width: 10 },
                { header: 'Ideal Speed', key: 'idealSpeed', width: 30 },
                { header: 'Ideal Reach Time', key: 'idealReachTime', width: 30 },
                { header: 'Reached Time', key: 'reachedTime', width: 30 },
            ];


            rallyChart.forEach(oneRow => {
                ws.addRow({
                    from: oneRow.from,
                    to: oneRow.to,
                    idealSpeed: oneRow.idealSpeed,
                    idealReachTime: moment(oneRow.idealReachTime).format('hh : mm : ss a'),
                    reachedTime: oneRow.reached 
                    ? 
                    moment(oneRow.reached).format('hh : mm : ss a') + ' (' + 
                        (oneRow.timeDiff > 0 ? oneRow.timeDiff + ' sec early' : oneRow.timeDiff*-1  + ' sec late.' )
                    + ' )'  
                    : 
                    "",
                });
            });

            const ws2 = workbook.addWorksheet('TC Chart', {
                pageSetup: {
                    horizontalCentered: true,
                    verticalCentered: true,
                },
            });

            ws2.columns = [
                { header: 'Distance', key: 'distance', width: 10 },
                { header: 'Reached At', key: 'reachedAt', width: 30 },
                { header: "Should Have Reached At", key: 'shouldHaveReachedAt', width: 30 },
                { header: 'Time Diff', key: 'timeDiff', width: 30 },
                { header: 'Penalty', key: 'penalty', width: 10 },
            ];

            tcChart.forEach(oneRow => {
                ws2.addRow({
                    distance: oneRow.distance,
                    reachedAt: moment(oneRow.reachedAt).format('hh : mm : ss a'),
                    shouldHaveReachedAt: moment(oneRow.shouldHaveReachedAt).format('hh : mm : ss a'),
                    timeDiff: oneRow.timeDiff > 0 ? oneRow.timeDiff + ' sec early' : oneRow.timeDiff*-1 + ' sec late',
                    penalty: oneRow.penalty,
                });
            });
            
            ws2.addRow({
                distance: "",
                reachedAt: "",
                shouldHaveReachedAt: "",
                timeDiff: "",
                penalty: "",
            });
            // Add sum of penalty on the last line
            ws2.addRow({
                distance: "",
                reachedAt: "",
                shouldHaveReachedAt: "",
                timeDiff: "",
                penalty: tcChart.reduce((acc, cur) => acc + cur.penalty, 0),
            });

            

            workbook.xlsx.writeBuffer().then(data => {
                const blob = new Blob([data], { type: blobType });
                FileSaver.saveAs(
                    blob,
                    "TSD_Rally_Export.xlsx"
                );
                // FileSaver.saveAs(blob, "export.xlsx");

            });
        } catch (error) {
            alert("Error while exporting data to excel");
        }

    }

    return (
        <Button onClick={hanldeExportToExcel}>
            Export to Excel
        </Button>  
    )
}
