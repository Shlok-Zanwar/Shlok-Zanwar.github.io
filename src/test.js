const ProjectCodeRooms = ({refId, isRightAligned=false}) => {
    const [collapseKeys, setCollapseKeys] = React.useState(["1"]);
    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    return (
        <TimelineItem id={refId}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" >
                <span className="timeline-item-date">
                    Oct 2021
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{background: '#EE1D62'}}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
                <div className="timeline-content-div">
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")}>
                        <span className="timeline-title-text">Code Rooms</span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            Code rooms is a learning management system where teachers can seamlessly create rooms,
                            assignments and assess assignments. Students can easily submit assigned assignments.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            It is deployed and is currently being used and loved by teachers and students at 
                            <a href="https://www.viit.ac.in/" target="_blank"> VIIT</a>.
                        </span>
                    </div>
                    <Collapse ghost activeKey={collapseKeys} onChange={handleKeysChange} >
                        <Panel 
                            key="1" 
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("1") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Objective</i>&nbsp; {collapseKeys.includes("1") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{padding: '0px'}}
                            className="custom-collapse-panel"
                        >
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Traditional submission system platforms (Google Classroom, OnlineGDB, etc.) lacked good User Interface and User Experience.
                                </span>
                            </div>
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Teachers had to open every submission in a new tab to view it which costed a lot of time and clicks.
                                </span>
                            </div>
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Also for assessment of code files in classroom, teachers had to copy the code by 
                                    themselves and paste it in their own editor for evaluation, whereas there was no way to submit files directly in the OnlineGBD.
                                </span>
                            </div>
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    These problems led to the creation of Code Rooms.
                                </span>
                            </div>
                        </Panel>
                        <Panel 
                            key="2" 
                            header={
                                <div className="timeline-description-div">
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("2") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Key Features</i>&nbsp; {collapseKeys.includes("2") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{padding: '0px'}}
                            className="custom-collapse-panel"
                        >
                            <ul className="timeline-list-ul">
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Classrooms with features like waiting room authority and visibility on the go with one click.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Automated evaluation of test cases.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Code-Editor with syntax highlighting, code-completion and code-execution.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        File type questions let you upload the file with a preview before submitting.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Submissions of any type of question can be assessed easily in every question with a code 
                                        editor with submitted code or a preview of the file submitted right on the screen with download option.
                                    </span>
                                </li>
                            </ul>
                        </Panel>
                        <Panel 
                            key="3" 
                            header={
                                <div className="timeline-description-div">
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("3") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Learning / Outcomes</i>&nbsp; {collapseKeys.includes("3") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{padding: '0px'}}
                            className="custom-collapse-panel"
                        >
                            <ul className="timeline-list-ul">
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Integration of complex UI components such as Code-Editor, File-Previewer with split screen pane view keeping good UI in consideration.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Implementation of Database User Hierarchy and SQL Queries having complex JOIN operations.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Overall deployment / hosting process of the application and making a app production ready.
                                    </span>
                                </li>
                            </ul>
                        </Panel>
                    </Collapse>
                    <div className="timeline-description-div" style={{marginTop: '10px'}}>
                        <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                            <span style={{minWidth: '80px', display: 'block'}}>Tech Stack:</span> 
                            <div>
                                <span className="timeline-chip">
                                    <SiFastapi className="timeline-tech-icon" /> 
                                    FastAPI
                                </span>
                                <span className="timeline-chip">
                                    <SiReact className="timeline-tech-icon" /> 
                                    React
                                </span>
                                <span className="timeline-chip">
                                    <GrMysql className="timeline-tech-icon" /> 
                                    MySQL
                                </span>
                                <span className="timeline-chip">
                                    <SiRedux className="timeline-tech-icon" /> 
                                    Redux
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className={"timeline-description-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
                        <a className="btn btn-gradient-border btn-glow" href="https://code-rooms.github.io/#/about_us" target="_blank">
                            About
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://code-rooms.github.io/#/about_us" target="_blank">
                            Code Rooms
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://github.com/Code-rooms" target="_blank">
                            Github
                        </a>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    )
}


const ProjectTodoApp = ( {refId, isRightAligned=false} ) => {
    const [collapseKeys, setCollapseKeys] = React.useState([]);
    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    return (
        <TimelineItem id={refId}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
                <span className="timeline-item-date">
                    Jan 2021
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator color="red">
                <TimelineConnector />
                <TimelineDot style={{ background: "#EE1D62" }}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
                <div className="timeline-content-div">
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} >
                        <span className="timeline-title-text">Todo App</span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            A well designed todo app with useful advanced features. 
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            One of the first projects to learn ReactJs, React-Router, browser tools like Chrome DevTools, and deployment.
                        </span>
                    </div>
                    <Collapse ghost activeKey={collapseKeys} onChange={handleKeysChange}>
                        <Panel
                            key="1"
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("1") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Key Features</i> {collapseKeys.includes("1") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{ padding: "0px" }}
                            className="custom-collapse-panel"
                        >
                            <ul className="timeline-list-ul">
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        The app uses local-storage for storing details so that all the todos are retained when page reopens / reloads.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Drag and Drop your todo's to the reorder / change their order.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Customize color to categorize your todos.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        The three columns help in managing your work better. Especially when you do a big project and have multiple 
                                        functions to be done at a time the 'doing' tab helps you in keeping reference to all your work and you 
                                        can also track all the features you have done in the ‘done’ tab.
                                    </span>
                                </li>
                            </ul>
                        </Panel>
                    </Collapse>
                    <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                        <span className="timeline-description-text" style={{ display: "inline-flex", alignItems: "center" }}>
                            <span style={{ minWidth: "80px", display: "block" }}>Tech/Learn Stack:</span>
                            <div>
                                
                                <span className="timeline-chip">
                                    <SiReact className="timeline-tech-icon" />
                                    React
                                </span>
                                <span className="timeline-chip">
                                    <SiHtml5 className="timeline-tech-icon" />
                                    HTML
                                </span>
                                <span className="timeline-chip">
                                    <SiCss3 className="timeline-tech-icon" />
                                    CSS
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
                        <a className="btn btn-gradient-border btn-glow" href="https://shlok-zanwar.github.io/todo-app" target="_blank">
                            App
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://shlok-zanwar.github.io/blogs/todo-app" target="_blank">
                            Blog
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://github.com/Shlok-Zanwar/Shlok-Zanwar.github.io/tree/main/src/TodoAppComponents" target="_blank">
                            Github
                        </a>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    );
}


const ProjectMnistModel = ( {refId, isRightAligned=false} ) => {
    const [collapseKeys, setCollapseKeys] = React.useState([]);
    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    return (
        <TimelineItem id={refId}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
                <span className="timeline-item-date">
                    Dec 2021
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator color="red">
                <TimelineConnector />
                <TimelineDot style={{ background: "#EE1D62" }}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
                <div className="timeline-content-div">
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} >
                        <span className="timeline-title-text">Mnist Model</span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            Application that detects the handwritten digits drawn on a canvas
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            This project was created with the intention of learning Machine Learning, Model deployment on heroku and FastAPI. 
                        </span>
                    </div>
                    <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                        <span className="timeline-description-text" style={{ display: "inline-flex", alignItems: "center" }}>
                            <span style={{ minWidth: "80px", display: "block" }}>Tech/Learn Stack:</span>
                            <div>
                                
                                <span className="timeline-chip">
                                    <SiReact className="timeline-tech-icon" />
                                    React
                                </span>
                                <span className="timeline-chip">
                                    <SiFastapi className="timeline-tech-icon" />
                                    FastAPI
                                </span>
                                <span className="timeline-chip">
                                    <GiBrain className="timeline-tech-icon" />
                                    Machine Learning
                                </span>
                                <span className="timeline-chip">
                                    <SiHeroku className="timeline-tech-icon" />
                                    Heroku
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
                        <a className="btn btn-gradient-border btn-glow" href="https://github.com/Shlok-Zanwar/DS-SCE" target="_blank">
                            Github
                        </a>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    );
}

const ProjectTerminalQuiz = ( {refId, isRightAligned=false} ) => {
    const [collapseKeys, setCollapseKeys] = React.useState([]);
    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    return (
        <TimelineItem id={refId}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
                <span className="timeline-item-date">
                    April 2020
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator color="red">
                <TimelineConnector />
                <TimelineDot style={{ background: "#EE1D62" }}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
                <div className="timeline-content-div">
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} >
                        <span className="timeline-title-text">Terminal Quiz</span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            A level-up-quiz application for the terminal.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            The difficulty of question depends on the number of correctly answered questions.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            Also has a interface to generate an custom level-up-quiz for the terminal as a python file, and the responses stores in a text file. 
                        </span>
                    </div>
                    <Collapse ghost activeKey={collapseKeys} onChange={handleKeysChange}>
                        <Panel
                            key="1"
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("1") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Objective</i> {collapseKeys.includes("1") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{ padding: "0px" }}
                            className="custom-collapse-panel"
                        >
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Learning about file-open and file-write in Python.
                                </span>
                            </div>
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Understand and implement complex logic for level-based and random question generation.
                                </span>
                            </div>
                            <div className="timeline-list-ul">
                                <span className="timeline-description-text" >
                                    Overall, first major project to create an application of real use-case.
                                </span>
                            </div>
                        </Panel>
                        <Panel
                            key="2"
                            header={
                                <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                                    <span className="timeline-description-text" style={{display: 'inline-flex', alignItems: 'center'}}>
                                        {collapseKeys.includes("2") ? <MdKeyboardArrowDown className="timeline-tech-icon" /> : <MdKeyboardArrowRight className="timeline-tech-icon" /> }
                                        <i>Inplementation</i> {collapseKeys.includes("2") ? " : " : " ...."}
                                    </span>
                                </div>
                            }
                            showArrow={false}
                            style={{ padding: "0px" }}
                            className="custom-collapse-panel"
                        >
                            <ul className="timeline-list-ul">
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        A python script that uses intelligence to generate a quiz template in the form executable python code.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        User can respond to a GK quiz, view leaderboard etc OR generate a custom quiz.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        Custom Quiz also supports level based quiz.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        On successful creation of a custom quiz, the program generates a python script which any respondent can run to respond to the quiz.
                                    </span>
                                </li>
                                <li className="timeline-list-item-li">
                                    <span className="timeline-list-item-text">
                                        The responses of custom quizes are stored in a text file wiht the same name as of the quiz file. 
                                    </span>
                                </li>
                            </ul>
                        </Panel>
                    </Collapse>
                    <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                        <span className="timeline-description-text" style={{ display: "inline-flex", alignItems: "center" }}>
                            <span style={{ minWidth: "80px", display: "block" }}>Tech/Learn Stack:</span>
                            <div>
                                
                                <span className="timeline-chip">
                                    <SiPython className="timeline-tech-icon" />
                                    Python
                                </span>
                                <span className="timeline-chip">
                                    <AiOutlineFileAdd className="timeline-tech-icon" />
                                    File handling
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
                        <a className="btn btn-gradient-border btn-glow" href="https://github.com/Shlok-Zanwar/Terminal-Quiz" target="_blank">
                            Github
                        </a>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    );
}

const ProjectPastebin = ( {refId, isRightAligned=false} ) => {
    const [collapseKeys, setCollapseKeys] = React.useState([]);
    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    return (
        <TimelineItem id={refId}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
                <span className="timeline-item-date">
                    Feb 2020
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator color="red">
                <TimelineConnector />
                <TimelineDot style={{ background: "#EE1D62" }}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
                <div className="timeline-content-div">
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} >
                        <span className="timeline-title-text">Paste Bin</span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            A Pastebin application to share text data quickly, directly from the browser between users without any authentication.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span>
                            I implemented this project to learn about the use of React Hooks, and Firebase.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            Users can create a URL for them and then share it with others. Henceforth, anyone can access and share data directly from the browser.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            Very useful for sharing code-snippets / temporary data.
                        </span>
                    </div>
                    
                    <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                        <span className="timeline-description-text" style={{ display: "inline-flex", alignItems: "center" }}>
                            <span style={{ minWidth: "80px", display: "block" }}>Tech/Learn Stack:</span>
                            <div>
                                
                                <span className="timeline-chip">
                                    <SiReact className="timeline-tech-icon" />
                                    React
                                </span>
                                <span className="timeline-chip">
                                    <SiFirebase className="timeline-tech-icon" />
                                    Firebase
                                </span>
                                <span className="timeline-chip">
                                    <SiHtml5 className="timeline-tech-icon" />
                                    Html
                                </span>
                                <span className="timeline-chip">
                                    <SiCss3 className="timeline-tech-icon" />
                                    Css
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
                        <a className="btn btn-gradient-border btn-glow" href="https://github.com/Shlok-Zanwar/Pastebin-React" target="_blank">
                            Github
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://shlok-zanwar.github.io/pastebin" target="_blank">
                            Pastebin
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://shlok-zanwar.github.io/canvas" target="_blank">
                            Drawbin
                        </a>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    );
}

const ProjectBinaryTreeVisualization = ( {refId, isRightAligned=true} ) => {
    const [collapseKeys, setCollapseKeys] = React.useState([]);
    const handleKeysChange = (keys) => {
        setCollapseKeys(keys);
    }

    return (
        <TimelineItem id={refId}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
                <span className="timeline-item-date">
                    March 2021
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator color="red">
                <TimelineConnector />
                <TimelineDot style={{ background: "#EE1D62" }}>
                    {/* <HiOutlineCode /> */}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} style={isRightAligned ? { display: "inline-flex", justifyContent: "right" } : {}}>
                <div className="timeline-content-div">
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} >
                        <span className="timeline-title-text">Binary Tree Visualization</span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            An application to visualize insertion, deletion, search and structure of nodes in a binary search tree and Heap.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            The nodes and edges of binary tree are highlighted to depict the path of comparisons that took place to insert/search a node.
                        </span>
                    </div>
                    <div className="timeline-description-div">
                        <span className="timeline-description-text">
                            This could be by students to understand the working of Binary search tree / Heap.
                        </span>
                    </div>
                    <div className="timeline-description-div" style={{ marginTop: "10px" }}>
                        <span className="timeline-description-text" style={{ display: "inline-flex", alignItems: "center" }}>
                            <span style={{ minWidth: "80px", display: "block" }}>Tech/Learn Stack:</span>
                            <div>
                                
                                <span className="timeline-chip">
                                    <SiReact className="timeline-tech-icon" />
                                    React
                                </span>
                                <span className="timeline-chip">
                                    <SiHtml5 className="timeline-tech-icon" />
                                    Html
                                </span>
                                <span className="timeline-chip">
                                    <SiCss3 className="timeline-tech-icon" />
                                    Css
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className={"timeline-title-div " + (isRightAligned ? "timeline-align-right" : "")} style={{ marginTop: "10px" }}>
                        <a className="btn btn-gradient-border btn-glow" href="https://github.com/Shlok-Zanwar/Binary-Tree-Visualization" target="_blank">
                            Github
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://shlok-zanwar.github.io/max-heap-visualization" target="_blank">
                            Heap
                        </a>
                        <a className="btn btn-gradient-border btn-glow" href="https://shlok-zanwar.github.io/bst-visualization" target="_blank">
                            Binary Search Tree
                        </a>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    );
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
                { text: "About", link: "https://code-rooms.github.io/#/about_us" },
                { text: "Code Rooms", link: "https://code-rooms.github.io/#/about_us" },
                { text: "Github", link: "https://github.com/Code-rooms" },
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
            title: "Tech/Learn Stack",
            content: [
                { text: "React", icon: <SiReact className="timeline-tech-icon" /> },
                { text: "HTML", icon: <SiHtml5 className="timeline-tech-icon" /> },
                { text: "CSS", icon: <SiCss3 className="timeline-tech-icon" /> },
            ]
        },
        {
            type: "links",
            content: [
                { text: "App", link: "https://shlok-zanwar.github.io/todo-app" },
                { text: "Blog", link: "https://shlok-zanwar.github.io/blogs/todo-app" },
                { text: "Github", link: "https://github.com/Shlok-Zanwar/Shlok-Zanwar.github.io/tree/main/src/TodoAppComponents" },
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
                { text: "Github", link: "https://github.com/Shlok-Zanwar/DS-SCE" },
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
                { text: "Github", link: "https://github.com/Shlok-Zanwar/Terminal-Quiz" },
            ]
        }
    ]
}

// Texts
// A Pastebin application to share text data quickly, directly from the browser between users without any authentication.
// I implemented this project to learn about the use of React Hooks, and Firebase.
// Users can create a URL for them and then share it with others. Henceforth, anyone can access and share data directly from the browser.
// Very useful for sharing code-snippets / temporary data.

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
                { text: "Pastebin", link: "https://shlok-zanwar.github.io/pastebin" },
                { text: "Drawbin", link: "https://shlok-zanwar.github.io/canvas" },
                { text: "Github", link: "https://github.com/Shlok-Zanwar/Pastebin-React" },
            ]
        }
    ]
}

// An application to visualize insertion, deletion, search and structure of nodes in a binary search tree and Heap.
// The nodes and edges of binary tree are highlighted to depict the path of comparisons that took place to insert/search a node.
// This could be by students to understand the working of Binary search tree / Heap.

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
                { text: "Github", link: "https://github.com/Shlok-Zanwar/Binary-Tree-Visualization" },
                { text: "Heap", link: "https://shlok-zanwar.github.io/max-heap-visualization" },
                { text: "Binary Search Tree", link: "https://shlok-zanwar.github.io/bst-visualization" },





