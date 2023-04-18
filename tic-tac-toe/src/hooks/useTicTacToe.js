import { useState } from 'react';
import confetti from 'canvas-confetti';
import { TURNS, WINNING_COMOBS } from '../types';

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
        confetti();
        setWinner(thereAreWinner);
        return;
      } else if (isDraw(newArray)) {
        setWinner(false);
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

    const isDraw = (newBoard) => {
        return newBoard.every(square => square !== null);
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
