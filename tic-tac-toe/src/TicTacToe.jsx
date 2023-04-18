import { Board } from './components/Board';
import { Square } from './components/Square';
import { WinnerModal } from './components/WinnerModal';
import { useTicTacToe } from './hooks/useTicTacToe';
import { TURNS } from './types';


const TicTacToe = () => {

  const {
    board, 
    winner, 
    turn, 
    updateBoard, 
    resetGame 
  } = useTicTacToe();

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <Board 
        board={ board }
        updateBoard={ updateBoard }
      />
      <section className='turn'>
          <Square isSelected={ turn === TURNS.X }>{TURNS.X}</Square>
          <Square isSelected={ turn === TURNS.O }>{TURNS.O}</Square>
      </section>
      {
        (winner !== null) &&
        <WinnerModal 
          winner={ winner }
          resetGame={ resetGame }
        />
      }

    </main>    
  )
}

export default TicTacToe
