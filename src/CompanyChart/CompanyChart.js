import React, { useState } from "react";
import { useEffect } from "react";
import Tree from "react-d3-tree";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./CompanyChart.css";
const myTreeData = [
    {
        name: "John Doe",
        attributes: {
            title: "CEO",
        },
        children: [
            {
                name: "Jane Smith",
                attributes: {
                    title: "CTO",
                },
                children: [
                    {
                        name: "Bob Johnson",
                        attributes: {
                            title: "Lead Developer",
                        },
                        children: [
                            {
                                name: "Alice Williams",
                                attributes: {
                                    title: "Developer",
                                },
                            },
                            {
                                name: "Mike Brown",
                                attributes: {
                                    title: "Developer",
                                },
                            },
                        ],
                    },
                    {
                        name: "Lisa Davis",
                        attributes: {
                            title: "UX Designer",
                        },
                    },
                ],
            },
            {
                name: "Mark Wilson",
                attributes: {
                    title: "CFO",
                },
                children: [
                    {
                        name: "Karen Lee",
                        attributes: {
                            title: "Accountant",
                        },
                    },
                ],
            },
        ],
    },
];

// const myNodeRenderer = ({ nodeDatum, toggleNode }) => {
//     return (
//         <g onClick={toggleNode}>
//             <circle r={10} />
//             <text x={-20} y={20}>
//                 {nodeDatum.name}
//             </text>
//             <text x={-20} y={40}>
//                 {nodeDatum.attributes.title}
//             </text>
//         </g>
//     );
// };

// const myNodeRenderer = ({ nodeDatum, toggleNode, ...props }) => {
//     const width = 140;
//     const height = 70;
//     const cornerRadius = 10;
//     const borderWidth = 2;
//     const borderColor = '#aaa';
//     const backgroundColor = '#f7f7f7';
//     const textColor = '#333';
  
//     const titleStyle = {
//       fontWeight: 'bold',
//       fontSize: '16px',
//       marginBottom: '8px',
//     };
  
//     return (
//       <g onClick={toggleNode}>
//         <rect x={-width / 2} y={-height / 2} width={width} height={height} rx={cornerRadius} ry={cornerRadius} fill={backgroundColor} stroke={borderColor} strokeWidth={borderWidth} />
//         <text style={titleStyle} x={-width / 2 + 10} y={-height / 2 + 20}>
//           {nodeDatum.name}
//         </text>
//         <text x={-width / 2 + 10} y={-height / 2 + 40} fill={textColor}>
//           {nodeDatum.attributes.title}
//         </text>

//       </g>
//     );
//   };

  const myNodeRenderer = ({ nodeDatum, toggleNode, ...props }) => {
    const height = 200;
    const width = 344;
    const cornerRadius = 6;
    const borderWidth = 2;
    const borderColor = '#d9d9d9';
    const backgroundColor = '#fff';
    const shadowColor = '#aaa';
    const textColor = '#333';
  
    const titleStyle = {
      fontWeight: 'bold',
      fontSize: '16px',
      marginBottom: '8px',
    };
    console.log(nodeDatum);
  
    return (
        // foreign object should align with the center of the node
        <foreignObject x={-width / 2} y={-height / 2} width={width} height={height}
            style={{ overflow: 'visible', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
        {/* <div
            onClick={toggleNode}
            style={{
            position: 'relative',
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: `${cornerRadius}px`,
            backgroundColor: backgroundColor,
            border: `${borderWidth}px solid ${borderColor}`,
            boxShadow: `0px 0px 3px ${shadowColor}`,
            transition: 'all 0.2s ease-in-out',
            }}
        >
            <div style={{ margin: '10px' }}>
            <div style={titleStyle}>{nodeDatum.name}</div>
            <div>{nodeDatum.attributes.title}</div>
            </div>
        </div> */}
            <div class="card" onClick={toggleNode} has-children={nodeDatum.children}>
                {/* If nodeDatum.children then add prop has children */}
                <div class="card-info" >
                    {/* Write a css class if the has-clidren is true and hovered then opacity 1 else 0 */}
                    {
                    }
                    
                    {/* <div class="img"> */}
                        {/* <img src="https://i.imgur.com/1Q9Z4Zm.jpg" alt="profile" class="img" /> */}
                    {/* </div> */}

                    

                    <span>
                        <img
                            src="https://avatars.githubusercontent.com/u/63449205?v=4"
                            alt="Shlok Zanwar"
                            className="org-char-img"
                            // style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                        />
                        <span className="org-char-img" style={{borderRadius: '7px', fontSize: '14px', marginTop: '6px', }}
                            // OnClick alert the name and the click shount propagate to the parent
                            onClick={(e) => {
                                e.stopPropagation();
                                alert(
                                    "Name: " + nodeDatum.name
                                    + "\nEmail: " + nodeDatum.attributes.email
                                    + "\n\nJD: " + nodeDatum.attributes.jd
                                );
                            }}
                        >
                            More
                        </span>
                    </span>
                    {/* align top */}
                    <span style={{display: "flex", flexDirection: "column", width: '100%'}}>
                        <span style={{marginBottom: "5px"}}>
                            {nodeDatum.name}
                        </span>
                        <span className="job-title">
                            {nodeDatum.attributes.title} 
                            <br />
                            {nodeDatum.attributes.department} 
                        </span>
                    </span>
                                        {/* If has childre then show down icon in position absolute top right */}
                                        {
                                            nodeDatum?.children?.length ? 
                                            <div style={{position: 'absolute', top: '0', right: '10px', padding: '5px'}}>
                                                <MdKeyboardArrowDown style={{fontSize: "30px", fontWeight: 'bolder'}} />
                                            </div> : <></>
                                        }


                    {/* <p class="title">Magic Card</p> */}
                </div>
            </div>
        </foreignObject>
    );
  };
  
  

const CompanyChart = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        const jsonDataRead = require('./Data.json');
        // Convert the data into the required format
        const jsonData = jsonDataRead.map((item) => {
            return {
                name: item.Name,
                id: item["Employee code"],
                reportingTo: item["Reporting to_Employee ID"],
                attributes: {
                    title: item.Designation,
                    department: item.Department,
                    expertise: item["Expertise (Skill)"],
                    email: item["Email address"],
                    age: item.Age,
                    education: item["Education (qualification)"],
                    experience: item["Work Experience in Cian HealthCare Ltd."],
                    reportingTo: item["reporting to"],
                    jd: item["Job Description"],
                },
                children: [],
            };
        });
        // console.log(jsonData);
        // console.log(jsonDataRead);

        // Create a map of the data
        const map = new Map();
        jsonData.forEach((item) => {
            map.set(item.id, item);
        }
        );

        // console.log(map);

        // Create the tree
        jsonData.forEach((item) => {
            const parent = map.get(item.reportingTo);
            if (parent) {
                parent.children.push(item);
            }
        });

        console.log(jsonData);

        // Filter the data
        const filteredData = jsonData.filter((item) => {
            return item.id === 100;
        });

        console.log(filteredData);
        // Print all jd

        jsonData.forEach((item) => {
            console.log(item.name + " : " + item.jd);
        });

        // Set the data
        setData(filteredData);
        setLoading(false);


    }, []);

    return !loading && (
        <div id="treeWrapper" style={{ width: "100%", height: "90vh", borderBottom: "5px solid black" }}>
            <Tree
                data={data}
                // initialDepth={1}
                pathFunc="step"
                orientation="vertical"
                nodeSize={{ x: 410, y: 320 }}
                // nodeSvgShape={{ shape: "circle", shapeProps: { r: 10 } }}
                // nodeLabelComponent={{ render: myNodeRenderer, foreignObjectWrapper: { y: 20 } }}
                renderCustomNodeElement={myNodeRenderer}

                // renderCustomNodeElement={(rd3tProps) =>
                //     renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
                //     }
            
                enableLegacyTransitions={true}
                // zoomable={true}
                // zoom={{ min: 0.1, max: 2 }}
                scaleExtent={{ min: 0.1, max: 2 }}
            />
        </div>
    );
};

export default CompanyChart;
