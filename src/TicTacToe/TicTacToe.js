import React, { useEffect, useState } from 'react'
import "./tictactoeCss.css"
import LineTo from 'react-lineto'
import { Select, Modal, Button } from 'antd';
import SemipolarLoading from 'react-loadingg/lib/SemipolarLoading';
import ConfettiExplosion from '@reonomy/react-confetti-explosion';

const { Option } = Select;


export default function TicTacToe() {
    const [gameType, setGameType] = useState("PVC") // PVP or PVC
    const [turn, setTurn] = useState("P1");
    const [noOfTurns, setNoOfTurns] = useState(0);
    const [board, setBoard] = useState( Array(9).fill({data: null}) );

    const [gameStatus, setGameStatus] = useState(null);
    const [line, setLine] = useState([["block_0", "block_2"], ["left center", "right center"]]);

    const [isExploding, setIsExploding] = useState(false);


    const checkWinner = () => {
        if(noOfTurns === 9) {
            setGameStatus("Draw");
        }
        setLine([["", ""], ["", ""]]);

        let winner = null;
        let line = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        let linePosition = [
            ["left", "right"],
            ["left", "right"],
            ["left", "right"],
            ["top", "bottom"],
            ["top", "bottom"],
            ["top", "bottom"],
            ["top left", "bottom right"],
            ["top right", "bottom left"],
        ];
        for(let i = 0; i < line.length; i++){
            let [a,b,c] = line[i];
            if(board[a].data === board[b].data && board[b].data === board[c].data && board[a].data !== null){
                winner = board[a].data;
                setLine([ [`block_${a}`, `block_${c}`], linePosition[i] ]);
                break;
            }
        }
        if(winner !== null){
            setGameStatus((turn === "P2" ? "Player 1" : (gameType === "PVC" ? "Computer" : "Player 2")) + " won!");
            setIsExploding(true);
        }   
    }

    useEffect(() => {
        checkWinner();
    }, [board]);

    useEffect(() => {
        if(gameType === "PVC" && turn === "P2" && noOfTurns < 9){
            setTimeout(() => {
                getComputerMove();
            }, 200);
        }
        checkWinner();
    }, [turn]);

    const getComputerMove = () => {
        let move = null;

        let line = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
      
        // Check if computer can win
        for(let i = 0; i < line.length; i++){
            let [a,b,c] = line[i];
            if(board[a].data === null && board[b].data === "O" && board[c].data === "O"){
                move = a;
                break;
            }
            if(board[a].data === "O" && board[b].data === null && board[c].data === "O"){
                move = b;
                break;
            }
            if(board[a].data === "O" && board[b].data === "O" && board[c].data === null){
                move = c;
                break;
            }
        }
      
        // Check if player can win
        if(move === null){
            for(let i = 0; i < line.length; i++){
                let [a,b,c] = line[i];
                if(board[a].data === null && board[b].data === "X" && board[c].data === "X"){
                    move = a;
                    break;
                }
                if(board[a].data === "X" && board[b].data === null && board[c].data === "X"){
                    move = b;
                    break;
                }
                if(board[a].data === "X" && board[b].data === "X" && board[c].data === null){
                    move = c;
                    break;
                }
            }
        }
      
        // Check if center is empty
        if(move === null){
            if(board[4].data === null){
                move = 4;
            }
        }
      
        // Check if corners are empty
        if(move === null){
            if(board[0].data === null){
                move = 0;
            }
            if(board[2].data === null){
                move = 2;
            }
            if(board[6].data === null){
                move = 6;
            }
            if(board[8].data === null){
                move = 8;
            }
        }
        
        // Check if sides are empty
        if(move === null){
            if(board[1].data === null){
                move = 1;
            }
            if(board[3].data === null){
                move = 3;
            }
            if(board[5].data === null){
                move = 5;
            }
            if(board[7].data === null){
                move = 7;
            }
        }
      
        // Randomly select a block
        if(move === null){
            let random = Math.floor(Math.random() * 9);
            while(board[random].data !== null){
                random = Math.floor(Math.random() * 9);
            }
            move = random;
        }
      
        setTurn("P1");
        setNoOfTurns(noOfTurns + 1);
        setBoard(board.map((block, index) => {
            if(index === move){
                return {data: "O"};
            }
            return block;
        }));
      }

    const handleCellClick = (index) => {
        if(gameStatus !== null){
            return;
        }

        if(board[index].data === null){
            let newBoard = [...board];
            newBoard[index] = {data: turn === "P1" ? "X" : "O"};
            setNoOfTurns(noOfTurns + 1);
            setTurn(turn === "P1" ? "P2" : "P1");
            setBoard(newBoard);
        }
        

    }

    function handleGameTypeChange(value) {
        setGameType(value);
    }

    const resetAll = () => {
        setIsExploding(false);
        setBoard( Array(9).fill({data: null}) );
        setNoOfTurns(0);
        setTurn("P1");
        setGameStatus(null);
    }

    return (
        <div className="main-blog-div">
            <Modal centered visible={turn === "P2" && gameType === "PVC" && gameStatus === null } footer={null} bodyStyle={{ padding: "0px" }} closable={false}>
                <SemipolarLoading size="large" color="rgba(255, 84, 17, 1)" />
            </Modal>
            {isExploding && <ConfettiExplosion />}
            <h1 className="todo-heading">
                Tic Tac Toe
            </h1>

            <div className="blog-para">
                A game of Tic Tac Toe where you can never win against the computer.
            </div>

            {/* <Form.Item label="Category"> */}
                <Select defaultValue="PVC" disabled={noOfTurns > 0} style={{ width: 220 }} onChange={handleGameTypeChange}>
                    <Option value="PVP">Player Vs Player</Option>
                    <Option value="PVC">Player Vs Computer</Option>
                </Select>
                <Button type="primary" onClick={resetAll} style={{ marginLeft: '10px' }} >Reset</Button>
            {/* </Form.Item> */}

            {gameStatus !== null ?
             <h1 className="game-status" style={{fontSize: '25px', color: "rgba(255, 84, 17, 1)"}} >{gameStatus}</h1>
             : <h1 className="game-status">{turn === "P1" ? "Player 1" : (gameType === "PVC" ? "Computer" : "Player 2")}'s turn</h1>
             }

            <div className="ttt-grid-outer">
                <div className="ttt-grid-inner" >
                    <div 
                        className="ttt-grid-cell block_0" 
                        onClick={() => {handleCellClick(0)}} 
                        dataPlaceholder={noOfTurns%2 === 0 ? "X" : "O"}
                    >
                        {board[0].data}
                    </div>
                    <div 
                        className="ttt-grid-cell block_1" 
                        onClick={() => {handleCellClick(1)}} 
                        dataPlaceholder={noOfTurns%2 === 0 ? "X" : "O"}
                    >
                        {board[1].data}
                    </div>
                    <div 
                        className="ttt-grid-cell block_2" 
                        onClick={() => {handleCellClick(2)}} 
                        dataPlaceholder={noOfTurns%2 === 0 ? "X" : "O"}
                    >
                        {board[2].data}
                    </div>
                </div>
                <div className="ttt-grid-inner">
                    <div 
                        className="ttt-grid-cell block_3" 
                        onClick={() => {handleCellClick(3)}} 
                        dataPlaceholder={noOfTurns%2 === 0 ? "X" : "O"}
                    >
                        {board[3].data}
                    </div>
                    <div 
                        className="ttt-grid-cell block_4" 
                        onClick={() => {handleCellClick(4)}} 
                        dataPlaceholder={noOfTurns%2 === 0 ? "X" : "O"}
                    >
                        {board[4].data}
                    </div>
                    <div 
                        className="ttt-grid-cell block_5" 
                        onClick={() => {handleCellClick(5)}} 
                        dataPlaceholder={noOfTurns%2 === 0 ? "X" : "O"}
                    >
                        {board[5].data}
                    </div>
                </div>
                <div className="ttt-grid-inner">
                    <div 
                        className="ttt-grid-cell block_6" 
                        onClick={() => {handleCellClick(6)}} 
                        dataPlaceholder={noOfTurns%2 === 0 ? "X" : "O"}
                    >
                        {board[6].data}
                    </div>
                    <div 
                        className="ttt-grid-cell block_7" 
                        onClick={() => {handleCellClick(7)}} 
                        dataPlaceholder={noOfTurns%2 === 0 ? "X" : "O"}
                    >
                        {board[7].data}
                    </div>
                    <div 
                        className="ttt-grid-cell block_8" 
                        onClick={() => {handleCellClick(8)}} 
                        dataPlaceholder={noOfTurns%2 === 0 ? "X" : "O"}
                    >
                        {board[8].data}
                    </div>
                </div>
            </div>

            {gameStatus !== null ? (
                <LineTo
                    from={line[0][0]}
                    to={line[0][1]}
                    zIndex={1000}
                    borderColor="rgba(255, 84, 17, 1)" 
                    borderWidth={3} 
                    fromAnchor={line[1][0]}
                    toAnchor={line[1][1]}
                />
            ) : (<></>)}
            
        </div>
    )
}
