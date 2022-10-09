import React, { useEffect, useState } from 'react'
import Grid from './Grid';
import { useSnackbar } from 'notistack';
import { Tooltip } from 'antd';
import { FaCode }from 'react-icons/fa'
import { HiOutlineRefresh }from 'react-icons/hi'


function MaxHeap() {
    const [binaryTree, setBinaryTree] = useState(localStorage.getItem("maxHeap") ? JSON.parse(localStorage.getItem("maxHeap")) : [])
    const [grid, setGrid] = useState([]);
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const [search, setSearch] = useState(-2);


    useEffect(() => {
        makeVisualTree();
        localStorage.setItem("maxHeap", JSON.stringify(binaryTree));
    }, [binaryTree])


    const makeVisualTree = () => {
        var i, j, k;
        var myList = [];
        const height = parseInt(Math.log2(binaryTree.length)) + 1;

        for(i = 0; i < height; i ++){
            var noOfZerosInMiddle = Math.pow(2, height-i) - 1;
            var tempList = [];

            for(j = 0; j < Math.pow(2, i); j ++){
                var myIndex = Math.pow(2, i) - 1 + j;
                if(myIndex < binaryTree.length){
                    tempList.push(binaryTree[myIndex]);
                }
                else{
                    tempList.push(0)
                }

                if(j !== Math.pow(2, i) - 1){
                    for(k = 0; k < noOfZerosInMiddle; k++ ){
                        tempList.push(0);
                    }
                }
            }
            myList.push(tempList);
        }
        setGrid(myList)
    }


    const insertToTree = (data) => {
        var newTree = [...binaryTree];
        var i = newTree.length, myParent, temp;
        newTree.push(data);

        while(i !== 0){
            myParent = parseInt((i-1)/2);
            if(newTree[i] > newTree[myParent]){
                temp = newTree[i];
                newTree[i] = newTree[myParent];
                newTree[myParent] = temp;
                i = myParent;
            }
            else{
                break;
            }
        }

        setBinaryTree(newTree);
        enqueueSnackbar(data + " added to binary search tree.", {
            variant: 'success',
        });
        return;
    }


    const deleteFromTree = () => {
        if(binaryTree.length === 0){
            enqueueSnackbar("Nothing to delete", {
                variant: 'error',
            });
            return;
        }

        var newTree = [...binaryTree];
        var newHead = newTree.pop(), i = 0, temp;

        if(newTree.length > 0){
            newTree[i] = newHead;
            var leftChild, rightChild

            while(true){
                leftChild = i*2 + 1;
                rightChild = i*2 + 2;

                if(leftChild >= newTree.length){
                    break;
                }
                else if(rightChild >= newTree.length){
                    if(newTree[leftChild] > newTree[i]){
                        temp = newTree[i];
                        newTree[i] = newTree[leftChild];
                        newTree[leftChild] = temp;
                    }
                    break;
                }
                else{
                    if(newTree[leftChild] >= newTree[rightChild]){
                        if(newTree[leftChild] > newTree[i]){
                            temp = newTree[i];
                            newTree[i] = newTree[leftChild];
                            newTree[leftChild] = temp;

                            i = leftChild;
                        }
                        else{
                            break;
                        }
                    }
                    else{
                        if(newTree[rightChild] > newTree[i]){
                            temp = newTree[i];
                            newTree[i] = newTree[rightChild];
                            newTree[rightChild] = temp;

                            i = rightChild;
                        }
                        else{
                            break;
                        }
                    }
                }
            }
        }

        setBinaryTree(newTree);
        enqueueSnackbar("Deleted root node successfully.", {
            variant: 'success',
        });
        return;
    }


    const searchInTree = (data) => {
        var i;
        for(i = 0; i < binaryTree.length; i ++){
            if(binaryTree[i] === data){
                setSearch(data);
                enqueueSnackbar(data + " found. Highlighted in green.", {
                    variant: 'success',
                });
                return;
            }
        }

        enqueueSnackbar(data + " not found !!", {
            variant: 'error',
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
            setBinaryTree([]);
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
            insertToTree(parseInt(input));
            setInput('');
            setLoading(true);
        }
        else if(operation === "Search"){
            searchInTree(parseInt(input));
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
                <Tooltip title='Refresh lines' placement='bottom' arrow>
                    <span>
                        <button onClick={() => {setLoading(true)}} className="function-button">
                            <HiOutlineRefresh style={{fontSize:"21px"}}  />
                        </button>
                    </span>
                </Tooltip>
                <Tooltip title='Source Code' placement='bottom' arrow>
                    <span>
                        <button onClick={() => {window.location.href = "https://github.com/Shlok-Zanwar/Heap-Visualization"}} className="function-button">
                            <FaCode style={{fontSize:"21px"}} />
                        </button>
                    </span>
                </Tooltip>
                

            </div>
            <Grid grid={grid} loading={loading} setLoading={setLoading} search={search} />
        </div>
    )
}

export default MaxHeap
