import React, { useState } from 'react'
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import WordDetails from './WordDetails';
import { Chip } from '@material-ui/core';
import { useSnackbar } from 'notistack';


const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
        background: 'transparent'
    },
}));

export default function AddWord() {
    const [backdropOpen, setBackdropOpen] = useState(false);
    const classes = useStyles();
    const [word, setWord] = useState("");
    const [wordDetails, setWordDetails] = useState({
        "synonyms": [],
        "meanings": [],
        "examples": [],
        "tags": []
    });
    const [option, setOption] = useState("synonyms");
    const { enqueueSnackbar } = useSnackbar();

    const handleOptionChange = e => {
        setOption(e.target.value)
    }

    const removeItem = (name, value) => {
        var newField = [...wordDetails[name]].filter(values => values !== value);
        var newDetails = {...wordDetails};
        newDetails[name] = newField;
        setWordDetails(newDetails);
    }

    const copyToClipboard = (command) =>{
        var toCopy = command;

        var temp = document.createElement("textarea");
        var tempMsg = document.createTextNode(toCopy);
        temp.appendChild(tempMsg);

        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);

        var message = "Copied to clipboard.";
        enqueueSnackbar(message, {
            variant: 'success',
        })
    }

    const addWord = () => {
        var allWords = require("./Words.json");
        var newWords = [];

        // for(let word of wordDetails.synonyms){
            var myWord = {
                "word": wordDetails.synonyms[0],
                "synonyms": [...wordDetails.synonyms].filter(syn => syn !== wordDetails.synonyms[0]),
                "meanings": wordDetails.meanings,
                "examples": wordDetails.examples,
                "tags": wordDetails.tags
            }
            newWords.push(myWord);
        // }
        setWordDetails({
            "synonyms": [],
            "meanings": [],
            "examples": [],
            "tags": []
        })

        // copyToClipboard(JSON.stringify(allWords.concat(newWords)));
        localStorage.setItem("greWords", JSON.stringify(allWords.concat(newWords)));
    }

    const handleSubmit = () => {
        var newDetails = {...wordDetails};
        console.log(newDetails);
        newDetails[option].push(word);
        setWordDetails(newDetails); 
        setWord("");
    }

    return (
        <>
            <button
                className="todo-button"
                style={{
                    borderRadius: "8px",
                }}
                onClick={() => {
                    setBackdropOpen(true);
                }}
            >
                Add Word
            </button>
            <Backdrop
                className={classes.backdrop}
                open={backdropOpen}
            >
                <div className="add-words-div">
                    <div style={{display: 'inline-flex', marginTop: "10px", width: "100%" }} onSubmit={handleSubmit}>
                        <FormControl variant="outlined" style={{display: 'inline-flex', minWidth: '120px', marginRight: '10px'}}>
                            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                            <Select
                                value={option}
                                onChange={handleOptionChange}
                                label="Option"
                                style={{ color: "#fff" }}
                                className={classes.root}
                            >
                                <MenuItem value={"synonyms"}>Synonym</MenuItem>
                                <MenuItem value={"meanings"}>Meaning</MenuItem>
                                <MenuItem value={"examples"}>Example</MenuItem>
                                <MenuItem value={"tags"}>Tag</MenuItem>
                            </Select>
                        </FormControl>
                        <input
                            type="text"
                            placeholder="Filter"
                            value={word}
                            className="word-text-input"
                            style={{display: 'inline-flex', marginRight: '10px'}}
                            onChange={e => {
                                setWord(e.target.value);
                            }}
                        />
                        <button
                            className="todo-button"
                            style={{
                                borderRadius: "8px",
                            }}
                            onClick={() => {
                                handleSubmit()
                            }}
                        >
                            Add
                        </button>
                    </div>

                    <div className="add-word-details">
                        <div className="word-meaning">
                            <div style={{fontWeight: 'bolder'}} className={"pink-color" }>
                                Synonyms
                            </div>
                            <ul style={{position: 'relative'}}>
                            {
                                (wordDetails.synonyms).map(syn => (
                                    <li style={{position: 'relative', display: 'flex', margin: 'auto', justifyContent: 'space-between'}}>
                                        <div>{syn}</div>
                                        <div 
                                            onClick={() => {removeItem("synonyms", syn)}}
                                            style={{cursor: 'pointer'}}
                                        >
                                            X
                                        </div>
                                    </li>
                                ))
                            }
                            </ul>
                        </div>

                        <div className="word-meaning">
                            <div style={{fontWeight: 'bolder'}} className={ "pink-color" }>
                                Meanings
                            </div>
                            <ul style={{position: 'relative'}}>
                            {
                                (wordDetails.meanings).map(meaning => (
                                    <li style={{position: 'relative', display: 'flex', margin: 'auto', justifyContent: 'space-between'}}>
                                        <div>{meaning}</div>
                                        <div 
                                            onClick={() => {removeItem("meanings", meaning)}}
                                            style={{cursor: 'pointer'}}
                                        >
                                            X
                                        </div>
                                    </li>
                                ))
                            }
                            </ul>
                        </div>

                        <div className="word-meaning">
                            <div style={{fontWeight: 'bolder'}} className={"pink-color" }>
                                Examples
                            </div>
                            <ul style={{position: 'relative'}}>
                            {
                                (wordDetails.examples).map(example => (
                                    <li style={{position: 'relative', display: 'flex', margin: 'auto', justifyContent: 'space-between'}}>
                                        <div>{example}</div>
                                        <div 
                                            onClick={() => {removeItem("examples", example)}}
                                            style={{cursor: 'pointer'}}
                                        >
                                            X
                                        </div>
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                        
                        <div className="word-meaning" style={{paddingBottom: '10px'}}>
                            <div style={{fontWeight: 'bolder'}} className={"pink-color" }>
                                Tags
                            </div>
                            {
                                (wordDetails.tags).map(tag => (
                                    <Chip 
                                        color="secondary"
                                        label={tag}
                                        style={{cursor: 'pointer', margin: '5px'}}
                                        onDelete={() => {removeItem("tags", tag)}}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <button
                        className="todo-button"
                        style={{borderRadius: "8px", margin: '10px'}}
                        onClick={() => {addWord()}}
                    >
                        Add Word
                    </button>
                    <button
                        className="todo-button"
                        style={{borderRadius: "8px", margin: '10px'}}
                        onClick={() => {setBackdropOpen(false)}}
                    >
                        Close
                    </button>
                    
                </div>
                
            </Backdrop>
        </>
    );
}
