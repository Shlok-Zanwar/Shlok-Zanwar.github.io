import React from 'react'
import ProjectCard from './ProjectCard'
import { HiOutlineCode } from "react-icons/hi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";
import { SiCss3, SiFastapi, SiFirebase, SiFlask, SiHeroku, SiHtml5, SiJavascript, SiJson, SiMongodb, SiMysql, SiPython, SiReact, SiRedux } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiSqllite } from "react-icons/di";
import Timeline from '@mui/lab/Timeline';
import { binaryTreeGithubURL, bstVisulizationURL, coderoomsAboutUsURL, coderoomsGithubURL, dockFormsBlogURL, dockFormsGithubURL, drawbinURL, heapVisulizationURL, hotelManagementBlogURL, hotelManagementGithubURL, mathsyraBackendURL, mathsyraFrontendURL, mnistGithubURL, pastebinGithubURL, pastebinURL, terminalQuizGithubURL, todoAppAppURL, todoAppBlogURL, todoAppGithubURL } from '../constants';


export default function ProfileProjects() {
    const imagesDashboardData = {
        title: "Images Dashboard",
        id: "images-dashboard",
        oppositeContent: (<>Continuous Development <br /> Industry Project</>),
    
        items: [
            {
                type: "text",
                content: "Images Dashboard is cctv image capture and audit platform with integration of ai to detect common objects."
            },
            {
                type: "text",
                content: (
                    <>
                        I developed this during my internship at Integrated active monitoring Pvt Ltd (
                        <a href="https://smartiam.in/" target="_blank">IAM</a>)
                    </>
                ),
            },
            {
                type: "text",
                content: (<i>( Product related Blog, Video and other informational content to be added soon. )</i>)
            },
            {
                type: "collapse",
                title: "Roles / Responsibilities",
                id: "images-dashboard-roles",
                items: [
                    {
                        type: "list",
                        content: [
                            "Designing of the frontend code architecture (which includes setting up the project and donfiguring advanced state management and routing).",
                            "Development and maintainence of the codebase.",
                            "Ticketing software backend architecture and api integration",
                        ],
                    },
                ],
            },
            {
                type: "chips",
                title: "Tech Stack",
                content: [
                    { text: "React", icon: <SiReact className="timeline-tech-icon" /> },
                    { text: "Redux", icon: <SiRedux className="timeline-tech-icon" /> },
                    { text: "FastAPI", icon: <SiFastapi className="timeline-tech-icon" /> },
                    { text: "MySQL", icon: <GrMysql className="timeline-tech-icon" /> },
                    { text: "MongoDB", icon: <SiMongodb className="timeline-tech-icon" /> },
                ]
            },
        ]
    }

    const codeRoomsData = {
        title: "Code Rooms",
        id: "code-rooms",
        subtitle: "Online Coding Platform",
        oppositeContent: "Oct 2021",
    
        items: [
            {
                type: "text",
                content: "Code rooms is a learning management system where teachers can seamlessly create rooms, assignments and assess assignments. Students can easily submit assigned assignments."
            },
            {
                type: "text",
                content: (
                    <>
                        It is deployed and is currently being used and loved by teachers and students at 
                        <a href="https://www.viit.ac.in/" target="_blank"> VIIT</a>.
                    </>
                )
            },
            {
                type: "collapse",
                title: "Objective",
                id: "objective",
                items: [
                    {
                        type: "list",
                        // copy above
                        content: [
                            "Traditional submission system platforms (Google Classroom, OnlineGDB, etc.) lacked good User Interface and User Experience.",
                            "Teachers had to open every submission in a new tab to view it which costed a lot of time and clicks.",
                            "Also for assessment of code files in classroom, teachers had to copy the code by themselves and paste it in their own editor for evaluation, whereas there was no way to submit files directly in the OnlineGBD.",
                            "Code Rooms aims to solve all these problems by providing a simple and easy to use platform for teachers and students."
                        ]
                    }
                ]
            },
            {
                type: "collapse",
                title: "Key Features",
                id: "features",
                items: [
                    {
                        type: "list",
                        content: [
                            "Classrooms with features like waiting room authority and visibility on the go with one click.",
                            "Automated evaluation of test cases.",
                            "Code Editor with syntax highlighting and code completion.",
                            "File Previewer with split screen pane view.",
                            "Submissions of any type of question can be assessed easily in every question with a code editor with submitted code or a preview of the file submitted right on the screen with download option.",
                        ],
                    }
                ]
            },
            {
                type: "collapse",
                title: "Learning / Outcomes",
                id: "learning",
                items: [
                    {
                        type: "list",
                        content: [
                            "Integration of complex UI components such as Code-Editor, File-Previewer with split screen pane view keeping good UI in consideration.",
                            "Implementation of Database User Hierarchy and SQL Queries having complex JOIN operations.",
                            "Overall deployment / hosting process of the application and making a app production ready."
                        ]
                    }
                ]
            },
            {
                type: "chips",
                title: "Tech Stack",
                content: [
                    { text: "FastAPI", icon: <SiFastapi className="timeline-tech-icon" /> },
                    { text: "React", icon: <SiReact className="timeline-tech-icon" /> },
                    { text: "MySQL", icon: <GrMysql className="timeline-tech-icon" /> },
                    { text: "Redux", icon: <SiRedux className="timeline-tech-icon" /> },
                ]
            },
            {
                type: "links",
                content: [
                    { text: "About", link: coderoomsAboutUsURL },
                    { text: "Code Rooms", link: coderoomsAboutUsURL },
                    { text: "Github", link: coderoomsGithubURL },
                ]
            }
        ]
    }

    const dockFormsData = {
        title: "Dock Forms",
        id: "dock-forms",
        oppositeContent: "April 2021",
    
        items: [
            {
                type: "text",
                content: "A form application for mainly school/college related applications such as conducting tests, surveys etc.",
            },
            {
                type: "text",
                content: "This was my first project in Web domain and it was a good learning experience.",
            },
            {
                type: "collapse",
                title: "Objectives",
                id: "dock-forms-objectives",
                items: [
                    {
                        type: "list",
                        content: [
                            "Learning about the basic concepts of Web Development and its frameworks.",
                            "Lockdown had just begun and all college submissions shifted to GoogleForms. So, I started working on this project to build a competitve form application.",
                            "Google forms is a general purpose form builder, but colleges needed some features / customizations to make it more user friendly.",
                            "So i decided to make a form-builder which followed a classroom based Hierarchy which would help teachers to manage the access of forms to students.",
                        ],
                    },
                ],
            },
            {
                type: "collapse",
                title: "Key Features",
                id: "dock-forms-key-features",
                items: [
                    {
                        type: "list",
                        content: [
                            "Rooms :-  Create a group of students and assign them to a room (like classroom).",
                            "Form builder with 4 types of questions :- mcq (without ans), mcq(survey type), range type, text type.",
                            "Rooms can then be assigned to the forms to restrict the visibility of the forms to the users in the room.",
                            "Traditional features such as :- Limit to 1 response per user, Accepting responses.",
                        ],
                    },
                ],
            },
            {
                type: "collapse",
                title: "Achievements",
                id: "dock-forms-achievements",
                items: [
                    {
                        type: "list",
                        content: [
                            "Understanding the concepts of javascript and DOM.",
                            "Implementation of JSON based file system to tackle problems that were not possible with SQL.",
                            "Learning about conditional rendering of different types and styles of elements based on JSON data.",
                        ],
                    },
                ],
            },
            {
                type: "chips",
                title: "Tech/Learn Stack:",
                content: [
                    { text: "Python", icon: <SiPython className="timeline-tech-icon" /> },
                    { text: "Flask", icon: <SiFlask className="timeline-tech-icon" /> },
                    { text: "Javascript", icon: <SiJavascript className="timeline-tech-icon" /> },
                    { text: "MySql", icon: <GrMysql className="timeline-tech-icon" /> },
                    { text: "JSON", icon: <SiJson className="timeline-tech-icon" /> },
                    { text: "Html", icon: <SiHtml5 className="timeline-tech-icon" /> },
                    { text: "Css", icon: <SiCss3 className="timeline-tech-icon" /> },
                    { text: "DOM", icon: <SiJavascript className="timeline-tech-icon" /> },
                ],
            },
            {
                type: "links",
                content: [
                    { text: "Blog", link: dockFormsBlogURL },
                    { text: "Github", link: dockFormsGithubURL },
                ],
            },
        ],
    };
    
    const mathsyraData = {
        title: "Mathsyra",
        id: "mathsyra",
        oppositeContent: "April 2021",
    
        items: [
            {
                type: "text",
                content: "Mathsyra is a web application for students to learn the concepts of mathematics in an innovative way with Indian cultural themed UI and quizzes."
            },
            {
                type: "collapse",
                title: "Objective",
                id: "mathsyra-objective",
                items: [
                    {
                        type: "list",
                        content: [
                            "This project was created for Toycathon 2021."
                        ]
                    }
                ]
            },
            {
                type: "collapse",
                title: "Key Features",
                id: "mathsyra-key-features",
                items: [
                    {
                        type: "list",
                        content: [
                            "Well Designed Interface and User Experience",
                            "Perfectly categorized modules and quizzes.",
                            "Interactive Blogs related to vedic maths to Understand the concepts and applications.",
                            "Quiz after every module to test your knowledge."
                        ]
                    },
                ]
            },
            {
                type: "collapse",
                title: "Achievements",
                id: "mathsyra-achievements",
                items: [
                    {
                        type: "list",
                        content: [
                            "Finalist in Toycathon 2021."
                        ]
                    },
                ]
            },
            {
                type: "chips",
                title: "Tech/Learn Stack:",
                content: [
                    { text: "FastAPI", icon: <SiFastapi className="timeline-tech-icon" /> },
                    { text: "React", icon: <SiReact className="timeline-tech-icon" /> },
                    { text: "SQL lite", icon: <DiSqllite className="timeline-tech-icon" /> },
                ]
            },
            {
                type: "links",
                content: [
                    { text: "Frontend", link: mathsyraFrontendURL },
                    { text: "Backend", link: mathsyraBackendURL },
                ]
            }    
        ]
    }

    const hotelManagemantData = {
        title: "Hotel Management System",
        id: "hotel-management",
        oppositeContent: "Nov 2020",
    
        items: [
            {
                type: "text",
                content: "A basic and well-designed terminal interface for restaurant inventory and billing system."
            },
            {
                type: "text",
                content: "Self created JSON-file-based database management system which suits the particular usecase and provides a high data integrity and speed."
            },
            {
                type: "collapse",
                title: "Objective",
                id: "hotel-management-obj",
                items: [
                    {
                        type: "list",
                        content: [
                            "Learnign the concepts of terminal interface and Object-Oriented Programming."
                        ]
                    }
                ]
            },
            {
                type: "collapse",
                title: "Key Features",
                id: "hotel-management-features",
                items: [
                    {
                        type: "list",
                        content: [
                            "Well designed tabulated interface.",
                            "Admin class features include checking the billing / sales data for a particular date, modifying / updating menu, placing orders etc.",
                            "Employees can only take orders, view current orders, view the menu, view the inventory etc."
                        ]
                    }
                ]
            },
            {
                type: "collapse",
                title: "Achievements",
                id: "hotel-management-achieve",
                items: [
                    {
                        type: "list",
                        content: [
                            "Understanding the concepts Object-Oriented Programming and the use of JSON-file-based database.",
                            "Handson with Tabulate library Python."
                        ]
                    }
                ]
            },
            {
                type: "chips",
                title: "Tech/Learn Stack",
                content: [
                    { text: "Python", icon: <SiPython className="timeline-tech-icon" /> },
                    { text: "JSON", icon: <SiJson className="timeline-tech-icon" /> }
                ]
            },
            {
                type: "links",
                content: [
                    { text: "Blog", link: hotelManagementBlogURL },
                    { text: "Github", link: hotelManagementGithubURL },
                ]
            }
        ]
    }
    
    const todoAppData = {
        title: "Todo App",
        id: "todo-app",
        oppositeContent: "Jan 2021",
    
        items: [
            {
                type: "text",
                content: "A well designed todo app with useful advanced features."
            },
            {
                type: "text",
                content: "One of the first projects to learn ReactJs, React-Router, browser tools like Chrome DevTools, and deployment."
            },
            {
                type: "collapse",
                title: "Key Features",
                id: "todo-app-features",
                items: [
                    {
                        type: "list",
                        content: [
                            "The app uses local-storage for storing details so that all the todos are retained when page reopens / reloads.",
                            "Drag and Drop your todo's to the reorder / change their order.",
                            "Customize color to categorize your todos.",
                            "The three columns help in managing your work better. Especially when you do a big project and have multiple functions to be done at a time the 'doing' tab helps you in keeping reference to all your work and you can also track all the features you have done in the ‘done’ tab."
                        ]
                    },
                ]
            },
            {
                type: "chips",
                title: "Tech Stack",
                content: [
                    { text: "React", icon: <SiReact className="timeline-tech-icon" /> },
                    { text: "HTML", icon: <SiHtml5 className="timeline-tech-icon" /> },
                    { text: "CSS", icon: <SiCss3 className="timeline-tech-icon" /> },
                ]
            },
            {
                type: "links",
                content: [
                    { text: "App", link: todoAppAppURL },
                    { text: "Blog", link: todoAppBlogURL },
                    { text: "Github", link: todoAppGithubURL },
                ]
            }
        ]
    }

    const mnistData = {
        title: "MNIST Digit Recognition",
        id: "mnist",
        oppositeContent: "Dec 2021",

        items: [
            {
                type: "text",
                content: "Application to recognize handwritten digits using MNIST dataset."
            },
            {
                type: "text",
                content: "This project was created with the intention of learning Machine Learning, Model deployment on heroku and FastAPI.",
            },
            {
                type: "chips",
                title: "Tech/Learn Stack",
                content: [
                    { text: "FastAPI", icon: <SiFastapi className="timeline-tech-icon" /> },
                    { text: "Python", icon: <SiPython className="timeline-tech-icon" /> },
                    { text: "Fast API", icon: <SiFastapi className="timeline-tech-icon" /> },
                    { text: "Machine Learning", icon: <GiBrain className="timeline-tech-icon" /> },
                    { text: "Heroku", icon: <SiHeroku className="timeline-tech-icon" /> },
                ]
            },
            {
                type: "links",
                content: [
                    { text: "Github", link: mnistGithubURL },
                ]
            }
        ]
    }

    const terminalQuizData = {
        title: "Terminal Quiz",
        id: "terminal-quiz",
        oppositeContent: "April 2020",

        items: [
            {
                type: "text",
                content: "A level-up-quiz application for the terminal.",
            },
            {
                type: "text",
                content: "The difficulty of question depends on the number of correctly answered questions.",
            },
            {
                type: "text",
                content: "Also has a interface to generate an custom level-up-quiz for the terminal as a python file, and the responses stores in a text file.",
            },
            {
                type: "collapse",
                title: "Objectives",
                id: "terminal-quiz-objectives",
                items: [
                    {
                        type: "list",
                        content: [
                            "Learning about file-open and file-write in Python.",
                            "Understand and implement complex logic for level-based and random question generation.",
                            "Overall, first major project to create an application of real use-case.",
                        ]
                    }
                ]
            },
            {
                type: "collapse",
                title: "Implementation",
                id: "terminal-quiz-implementation",
                items: [
                    {
                        type: "list",
                        content: [
                            "A python script that uses intelligence to generate a quiz template in the form executable python code.",
                            "User can respond to a GK quiz, view leaderboard etc OR generate a custom quiz.",
                            "Custom Quiz also supports level based quiz.",
                            "On successful creation of a custom quiz, the program generates a python script which any respondent can run to respond to the quiz.",
                            "The responses of custom quizes are stored in a text file wiht the same name as of the quiz file.",
                        ]
                    }
                ]
            },
            {
                type: "chips",
                title: "Tech/Learn Stack",
                content: [
                    { text: "Python", icon: <SiPython className="timeline-tech-icon" /> },
                    { text: "File Handling", icon: <SiPython className="timeline-tech-icon" /> },
                ]
            },
            {
                type: "links",
                content: [
                    { text: "Github", link: terminalQuizGithubURL },
                ]
            }
        ]
    }

    const pastebinData = {
        title: "Paste Bin",
        id: "pastebin",
        oppositeContent: "Feb 2020",
    
        items: [
            {
                type: "text",
                content: "A Pastebin application to share text data quickly, directly from the browser between users without any authentication.",
            },
            {
                type: "text",
                content: "I implemented this project to learn about the use of React Hooks, and Firebase.",
            },
            {
                type: "text",
                content: "Users can create a URL for them and then share it with others. Henceforth, anyone can access and share data directly from the browser.",
            },
            {
                type: "text",
                content: "Very useful for sharing code-snippets / temporary data.",
            },
            {
                type: "chips",
                title: "Tech/Learn Stack",
                content: [
                    { text: "React", icon: <SiReact className="timeline-tech-icon" /> },
                    { text: "Firebase", icon: <SiFirebase className="timeline-tech-icon" /> },
                    { text: "Html", icon: <SiHtml5 className="timeline-tech-icon" /> },
                    { text: "CSS", icon: <SiCss3 className="timeline-tech-icon" /> },
                ]
            },
            {
                type: "links",
                content: [
                    { text: "Pastebin", link: pastebinURL },
                    { text: "Drawbin", link: drawbinURL },
                    { text: "Github", link: pastebinGithubURL },
                ]
            }
        ]
    }
        
    const binaryTreeData = {
        title: "Binary Tree Visualizer",
        id: "binary-tree",
        oppositeContent: "March 2021",

        items: [
            {
                type: "text",
                content: "An application to visualize insertion, deletion, search and structure of nodes in a binary search tree and Heap.",
            },
            {
                type: "text",
                content: "The nodes and edges of binary tree are highlighted to depict the path of comparisons that took place to insert/search a node.",
            },
            {
                type: "text",
                content: "This could be by students to understand the working of Binary search tree / Heap.",
            },
            {
                type: "chips",
                title: "Tech/Learn Stack",
                content: [
                    { text: "React", icon: <SiReact className="timeline-tech-icon" /> },
                    { text: "Html", icon: <SiHtml5 className="timeline-tech-icon" /> },
                    { text: "CSS", icon: <SiCss3 className="timeline-tech-icon" /> },
                ]
            },
            {
                type: "links",
                content: [
                    { text: "Github", link: binaryTreeGithubURL },
                    { text: "Heap", link: heapVisulizationURL },
                    { text: "Binary Search Tree", link: bstVisulizationURL },
                ]
            }
        ]
    }


    const projects = [
        imagesDashboardData,
        dockFormsData,
        codeRoomsData,
        mathsyraData,
        hotelManagemantData,
        todoAppData,
        mnistData,
        terminalQuizData,
        pastebinData,
        binaryTreeData,
    ]

    return (
        <div style={{marginTop: '80px', textAlign: 'center'}} data-aos="fade-up" data-aos-once="true" >
            <div className="profile-title-div" style={{textAlign: 'center', lineHeight: '1'}} >
                <span className='profile-subtitle-text' style={{fontSize: '35px'}}>
                    Projects
                </span>
            </div>
            <div className="profile-title-div" style={{textAlign: 'center'}} >
                <span className="profile-description-div" style={{marginTop: "0px", fontSize: '15px'}}>
                    My projects ordered by complexity
                </span>
            </div>
            <Timeline position="alternate">
                <div style={{aliginItems: 'center'}}>
                    <div style={{ display: 'inline-block', borderBottom: '2px solid #fff', minWidth: '400px'}}></div>    
                </div>

                {
                    projects.map((project, index) => {
                        return (
                            <ProjectCard data={project} align={index % 2 === 0 ? "left" : "right"} />
                        )
                    })
                }

            </Timeline>

        </div>
    )
}
