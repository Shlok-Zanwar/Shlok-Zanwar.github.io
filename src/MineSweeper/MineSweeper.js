import React, { useEffect, useState } from 'react'
import { BsFillFlagFill } from 'react-icons/bs'
import { Select, Button } from 'antd';
import ConfettiExplosion from '@reonomy/react-confetti-explosion';
const { Option } = Select;


export default function MineSweeper() {
    const [gameSettings, setGameSettings] = useState({
        rows: 10,
        cols: 10,
        mines: 10,
    });
    const [gameState, setGameState] = useState({
        gameOver: false,
        gameWon: false,
    });
    const [cellsOpen, setCellsOpen] = useState(0);
    const [flags, setFlags] = useState(0);

    const [board, setBoard] = useState([]);    // board is an array of arrays
    // const exampleCell = {
    //     isMine: false,
    //     neighborMines: 0,
    //     isRevealed: false,
    //     isFlagged: false,
    // }

    const createMines = (board) => {
        var minesAdded = 0;
        while (minesAdded < gameSettings.mines) {
            var row = Math.floor(Math.random() * gameSettings.rows);
            var col = Math.floor(Math.random() * gameSettings.cols);
            if (!board[row][col].isMine) {
                board[row][col].isMine = true;
                minesAdded++;
            }
        }
        
        return getNeighborMinesCount(board);
    }

    const getNeighborMinesCount = (board) => {
        for (var row = 0; row < gameSettings.rows; row++) {
            for (var col = 0; col < gameSettings.cols; col++) {
                if (!board[row][col].isMine) {
                    var neighborMines = 0;
                    if(row > 0 && col > 0 && board[row - 1][col - 1].isMine) {
                        neighborMines++;
                    }
                    if(row > 0 && board[row - 1][col].isMine) {
                        neighborMines++;
                    }
                    if(row > 0 && col < gameSettings.cols - 1 && board[row - 1][col + 1].isMine) {
                        neighborMines++;
                    }
                    if(col > 0 && board[row][col - 1].isMine) {
                        neighborMines++;
                    }
                    if(col < gameSettings.cols - 1 && board[row][col + 1].isMine) {
                        neighborMines++;
                    }
                    if(row < gameSettings.rows - 1 && col > 0 && board[row + 1][col - 1].isMine) {
                        neighborMines++;
                    }
                    if(row < gameSettings.rows - 1 && board[row + 1][col].isMine) {
                        neighborMines++;
                    }
                    if(row < gameSettings.rows - 1 && col < gameSettings.cols - 1 && board[row + 1][col + 1].isMine) {
                        neighborMines++;
                    }
                    board[row][col].neighborMines = neighborMines;
                }
            }
        }
        return board;
    }

    const createBoard = () => {
        var newBoard = [];
        for (var i = 0; i < gameSettings.rows; i++) {
            newBoard.push([]);
            for (var j = 0; j < gameSettings.cols; j++) {
                newBoard[i].push({
                    isMine: false,
                    neighborMines: 0,
                    isRevealed: false,
                    isFlagged: false,
                });
            }
        }

        return createMines(newBoard);
    }
    
    const createGame = () => {
        setBoard(createBoard());
        setCellsOpen(0);
        setFlags(0);
        setGameState({
            gameOver: false,
            gameWon: false,
        });
    }

    const handelGameOver = () => {
        var newBoard = [...board];
        for (var row = 0; row < gameSettings.rows; row++) {
            for (var col = 0; col < gameSettings.cols; col++) {
                if (board[row][col].isMine) {
                    newBoard[row][col].isRevealed = true;
                }
            }
        }
        setBoard(newBoard);
        setGameState({
            gameOver: true,
            gameWon: false,
        });
        alert("Game Over");
    }

    useEffect(() => {
        createGame();
    }, [gameSettings]);
    
    useEffect(() => {
        if (cellsOpen === gameSettings.rows * gameSettings.cols - gameSettings.mines) {
            setGameState({
                gameOver: false,
                gameWon: true,
            });
        }
    }, [cellsOpen]);

    const handleLeftClick = (e, row, col) => {
        e.preventDefault();


        if(board[row][col].isRevealed || board[row][col].isFlagged || gameState.gameOver || gameState.gameWon) {
            return;
        }

        if(board[row][col].isMine) {
            handelGameOver();
            return;
        } 
        else {
            var newBoard = [...board];
            newBoard[row][col].isRevealed = true;
            setBoard(newBoard);
            setCellsOpen(cellsOpen + 1);
            
        }
    }

    const handleRightClick = (e, row, col) => {
        e.preventDefault();

        if (gameState.gameOver || gameState.gameWon) {
            return;
        }

        if(board[row][col].isRevealed) {
            return;
        }

        var newBoard = [...board];
        if(board[row][col].isFlagged) {
            newBoard[row][col].isFlagged = false;
            setFlags(flags - 1);
        }
        else {
            if(flags === gameSettings.mines) {
                return;
            }
            newBoard[row][col].isFlagged = true;
            setFlags(flags + 1);
        }
        setBoard(newBoard);
    }

    const condionallyRenderCell = (cell) => {
        if(cell.isRevealed && cell.isMine){
            return <>💣</>
        }
        if(cell.isRevealed){
            return <>{cell.neighborMines}</>
        }
        if(cell.isFlagged){
            return <BsFillFlagFill style={{fontSize: '25px', color: 'red'}}/>
        }
    }

    const handleGameLvlChange = (value) => {
        if(value === 'Beginner') {
            setGameSettings({
                rows: 10,
                cols: 10,
                mines: 15,
            });
        }
        if(value === 'Intermediate') {
            setGameSettings({
                rows: 16,
                cols: 16,
                mines: 40,
            });
        }
        if(value === 'Expert') {
            setGameSettings({
                rows: 16,
                cols: 30,
                mines: 99,
            });
        }
    }


    return (
        <div className="my-info-outer-div" data-aos="fade-up" style={{maxWidth: '100%'}}>
            {gameState.gameWon && <ConfettiExplosion />}

            <div className="game-settings">
                <div className="my-info-heading">
                    Mine Sweeper
                </div>

                <div style={{margin: "20px"}}>
                    <BsFillFlagFill style={{fontSize: '25px', color: 'red'}}/>
                    <span style={{marginRight: '20px', fontSize: "20px", color: '#fff'}}>{gameSettings.mines - flags}</span>
                    <Select defaultValue="Beginner" disabled={cellsOpen} style={{ width: 220 }} onChange={handleGameLvlChange}>
                        <Option value="Beginner">Beginner</Option>
                        <Option value="Intermediate">Intermediate</Option>
                        {/* <Option value="Expert">Expert</Option> */}
                    </Select>
                    <Button type="primary" onClick={() => {createGame()}} style={{ marginLeft: '10px' }} >Reset</Button>
                </div>
            </div>

            <div>
                {
                    board.map((row, rowIndex) => {
                        return (
                            <div className="minesweeper-row" key={rowIndex}>
                                {row.map((cell, colIndex) => {
                                    return (
                                        <div 
                                            className={"minesweeper-cell minesweeper-cell-color-" + cell.neighborMines} 
                                            key={colIndex}
                                            onContextMenu={(e) => handleRightClick(e, rowIndex, colIndex)}
                                            onClick={(e) => handleLeftClick(e, rowIndex, colIndex)}
                                        >
                                            {condionallyRenderCell(cell)}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}
