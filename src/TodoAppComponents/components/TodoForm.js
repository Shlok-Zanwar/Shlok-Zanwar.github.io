import React, { useState, useEffect, useRef } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);
    const availableClasses = [
        "todo-row blue", 
        "todo-row orange", 
        "todo-row pink", 
        "todo-row purple",
        "todo-row red",
        "todo-row green"
    ];
    const colorNames = [
        "Blue",
        "Orange",
        "Pink",
        "Purple",
        "Red",
        "Green"
    ]
    const [classSelector, setClassSelector] = useState(props.edit.class + " color-select-div");
    const [selectColor, setSelectColor] = useState(false);

    useEffect(() => {
        if(window.innerWidth >= 1350){
            inputRef.current.focus()
        }
    })


    const handleChange = e => {
        setInput(e.target.value);
    };


    const handleSubmit = e => {
        e.preventDefault();

        if(props.edit.id){
            props.onSubmit({
                id: Math.floor(Math.random() * 100000),
                text: input,
                list: props.edit.list,
                class: classSelector.slice(0, -17)
            });
        }
        else{
            props.onSubmit({
                id: Math.floor(Math.random() * 100000),
                text: input,
                list: "todo",
                class: availableClasses[Math.floor(Math.random() * availableClasses.length)]
            });
        }

        setInput('');

    };

    
    const handleRightClick = (e) => {
        e.preventDefault();
        setSelectColor(true);
    }


    const nextClassColor = e => {
        const classesUsed = e.target.className.split(" ");
        setClassSelector(availableClasses[(availableClasses.indexOf((classesUsed[0] + " " + classesUsed[1])) + 1) % availableClasses.length ] + " color-select-div");
    }


    var colorSelector = <div className={classSelector} onClick={(e) => nextClassColor(e)} onContextMenu={(e) => handleRightClick(e)}>
                            {colorNames[availableClasses.indexOf(classSelector.slice(0, -17))]}
                        </div>


    if(selectColor){
        colorSelector = availableClasses.map((className, index) => {
            return(
                <div className={className + " color-select-div"} key={colorNames[index]} onClick={(e) => {setClassSelector(e.target.className); setSelectColor(false)}} >
                    {colorNames[index]}
                </div>
            )
        })
    }

    

    return (
        <form className="todo-form" style={{display: 'flex', paddingRight: '10px', paddingLeft: '10px'}} onSubmit={handleSubmit}>
        {props.edit.id ? (
            <div onClick={() => {setSelectColor(false);}}>
                <div className="edit-form" style={{display: 'inline-flex', width: '100%'}}>
                    <TextArea 
                        autoSize
                        type="text" 
                        placeholder="Update your todo" 
                        value={input}
                        // className="todo-input"
                        onChange={handleChange}
                        ref={inputRef}
                        style={{
                            padding: "14px 32px 14px 16px",
                            borderRadius: "4px 0 0 4px",
                            border: "2px solid #5d0cff",
                            outline: "none",
                            width: "80%",
                            background: "transparent",
                            color: "#fff"
                        }}
                    />
                    <button className="todo-button edit" style={{flex: '1', minWidth: '90px'}}>Update</button>
                </div>
                {colorSelector}
            </div>
            ) : (
            <>
                <TextArea 
                    autoSize
                    type="text" 
                    placeholder="Add a todo" 
                    value={input}
                    style={{
                        padding: "14px 32px 14px 16px",
                        borderRadius: "4px 0 0 4px",
                        border: "2px solid #5d0cff",
                        outline: "none",
                        // width: "80%",
                        background: "transparent",
                        color: "#fff"
                    }}
                    // className="todo-input"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className="todo-button" style={{flex: '1', minWidth: '90px'}}>Add Todo</button>
            </>
        )}
            
        </form>
    )
}

export default TodoForm
