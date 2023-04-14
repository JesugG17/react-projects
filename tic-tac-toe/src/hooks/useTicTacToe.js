import { useState } from "react";

const TURNS = {
    X: 'x',
    O: 'o'
};
  
const WINNING_COMOBS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


export const useTicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(TURNS.X);
    const [winner, setWinner] = useState(null);
  
    const updateBoard = (index) => {
      if (board[index] || winner) return;
  
      const newArray = [...board];
      newArray[index] = turn;
      setBoard(newArray);
  
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      const thereAreWinner = checkWinner(newArray);
      if (thereAreWinner) {
        setWinner(thereAreWinner);
        return;
      }
  
      setTurn(newTurn);
  
    }
  
    const checkWinner = (boardToCheck) => {
  
      for (const combo of WINNING_COMOBS) {
        const [a, b, c] = combo;
  
        if (
          boardToCheck[a] &&
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c]
        ) {
          return boardToCheck[a];
        }
  
      }
  
      return null;
    }
  
    const resetGame = () => {
      setBoard(Array(9).fill(null));
      setWinner(null);
      setTurn(TURNS.X);
    }

    return {
        board, 
        turn, 
        winner,
        updateBoard,
        resetGame
    }
  
}
