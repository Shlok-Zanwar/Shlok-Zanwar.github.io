import React, { useEffect, useState } from 'react'
import Grid from './Grid';
import { useSnackbar } from 'notistack';
import { Tooltip } from '@material-ui/core';
import { FaCode }from 'react-icons/fa'
import { HiOutlineRefresh }from 'react-icons/hi'

function MaxHeap() {
    const [binaryTree, setBinaryTree] = useState([
        [0],
        [0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);
    const [height, setHeight] = useState(0);
    const [grid, setGrid] = useState([]);
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const [search, setSearch] = useState(-2);

    
    useEffect(() => {
        makeVisualTree();
    }, [binaryTree])

    
    const makeVisualTree = () => {
        var i, j, k;
        var myList = [];

        for(i = 0; i < height; i ++){
            // var noOfElements = Math.pow(2, i);
            var noOfZerosInMiddle = Math.pow(2, height-i) - 1;
            var tempList = [];
            for(j = 0; j < binaryTree[i].length; j ++){
                tempList.push(binaryTree[i][j]);
                if(j < binaryTree[i].length - 1){
                    for(k = 0; k < noOfZerosInMiddle; k++ ){
                        tempList.push(0);
                    }
                }
            }
            myList.push(tempList);
        }
        setGrid(myList)
    }


    const myInsertPosition = (newTree, data, myRow, myColumn) => {
        var temp;
        while (myRow !== 0){
            var myParentRow = myRow - 1, myParentCol = Math.floor(myColumn/2);
            if(newTree[myParentRow][myParentCol] >= data ){
                break;
            }

            temp = newTree[myParentRow][myParentCol];
            newTree[myParentRow][myParentCol] = newTree[myRow][myColumn];
            newTree[myRow][myColumn] = temp;

            myRow = myParentRow;
            myColumn = myParentCol;
        }
        return newTree;
    }


    const insertToTree = (data) => {
        var newTree = [...binaryTree];
        data = parseInt(data);

        var i, j=0;
        for(i = 0; i <= height && i <= 6; i++){
            for(j = 0; j < newTree[i].length; j++){

                if(newTree[i][j] === 0){
                    newTree[i][j] = data;
                    newTree = myInsertPosition(newTree, data, i, j);

                    setBinaryTree(newTree);
                    setHeight(i + 1);
                    enqueueSnackbar(data + " added to binary search tree.", {
                        variant: 'success',
                    });
                    return;
                }
            }
        }

        enqueueSnackbar("Maximum height reaced :(", {
            variant: 'error',
        });

    }



    const myDeletePosition = (newTree) => {
        var row = 0, col = 0, greaterCol, temp;
        while(true){
            if(newTree[row + 1][col*2 ] >= newTree[row + 1][col*2 + 1] ){
                greaterCol = col * 2;
            }
            else{
                greaterCol = (col * 2) + 1;
            }

            if(newTree[row][col] < newTree[row + 1][greaterCol] ){
                temp = newTree[row][col];
                newTree[row][col] = newTree[row + 1][greaterCol];
                newTree[row + 1][greaterCol] = temp;

                row = row + 1;
                col = greaterCol;
            }
            else{
                break;
            }

        }
        return newTree;
    }


    const deleteFromTree = () => {
        var i, j;
        var newTree = [...binaryTree];
        for(i = 0; i < height  && i < 6; i ++){
            if(newTree[i][0] === 0){
                break;
            }
        }
        i = i - 1;
       
        if(i !== -1){
            for(j = 0; j < newTree[i].length; j ++){
                if(newTree[i][j] === 0){
                    break;
                }
            }

            j = j - 1;
            newTree[0][0] = newTree[i][j];
            newTree[i][j] = 0;

            newTree = myDeletePosition(newTree);
            setBinaryTree(newTree);
            enqueueSnackbar("Deleted root node successfully.", {
                variant: 'success',
            });
            return;
        }

        enqueueSnackbar("Nothing to delete", {
            variant: 'error',
        });
    }


    const searchInTree = (data) => {
        data = parseInt(data);
        var i, j;
        // var newTree = [...binaryTree];
        for(i = 0; i < height  && i <= 6; i ++){
            for(j = 0; j < binaryTree[i].length; j ++){
                if(binaryTree[i][j] === data){
                    enqueueSnackbar(data + " found. Highlighted in green.", {
                        variant: 'success',
                    });
                    return;
                }
            }
        }

        setSearch(-2);
        enqueueSnackbar(data + " not found !!", {
            variant: 'error',
        });
    }


    const clearTree = () => {
        var newTree = [
            [0],
            [0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        if(height > 0 || grid.length > 0){
            // console.log("doing");
            setBinaryTree(newTree);
            setGrid([]);
            setHeight(0);
        }
        enqueueSnackbar("Binary Tree Cleared.", {
            variant: 'success',
        });
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        var operation = e.target.value;

        if(operation === "ClearSearch"){
            setSearch(-2);
            setInput('');
            setLoading(true);
            return
        }

        if(operation === "ClearTree"){
            clearTree();
            setSearch(-2);
            setInput('');
            setLoading(true);
            return
        }

        if(operation === "Delete"){
            deleteFromTree();
            setLoading(true);
            return;
        }

        if(input ===  '' || input <= 0){
            enqueueSnackbar("Invalid input !!", {
                variant: 'error',
            });
            setInput('');
            return;
        }
        // return;
        if(operation === "Insert"){
            insertToTree(input);
            setInput('');
            setLoading(true);
        }
        else if(operation === "Search"){
            setSearch(parseInt(input));
            searchInTree(input);
            setInput('');
            setLoading(true);
        }
        
    }


    const handleChange = e => {
        setInput(e.target.value);
    };


    return (
        <div className="main-outer-div">
            <div className="form-div">
                <button className="function-button" style={{marginRight:"40px"}} >Max Heap</button>
                <input 
                    id="input_box"
                    type="number" 
                    placeholder="Data" 
                    value={input}
                    className="operation-input"
                    onChange={handleChange}
                />
                <button onClick={handleSubmit} className="operation-button" value="Insert" >Insert</button>
                <button onClick={handleSubmit} className="operation-button" value="Search" >Search</button>
                <button onClick={handleSubmit} className="operation-button" style={{marginLeft:"40px"}}  value="Delete" >Delete Root</button>
                

                <button 
                    onClick={handleSubmit} 
                    className="function-button" 
                    style={{marginLeft:"40px"}} 
                    value="ClearSearch" >
                        Clear Search
                </button>
                <button 
                    onClick={handleSubmit} 
                    className="function-button" 
                    value="ClearTree" >
                        Clear Tree
                </button>
                <Tooltip title='Source Code' placement='bottom' arrow>
                    <span>
                        <button onClick={() => {window.location.href = "https://github.com/Shlok-Zanwar/Heap-Visualization"}} className="function-button">
                            <FaCode style={{fontSize:"21px"}} />
                        </button>
                    </span>
                </Tooltip>
                <Tooltip title='Refresh lines' placement='bottom' arrow>
                    <span>
                        <button onClick={() => {setLoading(true)}} className="function-button">
                            <HiOutlineRefresh style={{fontSize:"21px"}}  />
                        </button>
                    </span>
                </Tooltip>

            </div>
            <Grid grid={grid} loading={loading} setLoading={setLoading} search={search} />
        </div>
    )
}

export default MaxHeap
