import { Square } from './components/Square';
import { useTicTacToe } from './hooks/useTicTacToe';


const App = () => {

  const {
    board, 
    updateBoard, 
    turn, 
    resetGame, 
    winner 
  } = useTicTacToe();

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
          {
            board.map((_, index) => {
              return (
                <Square 
                  key={index} 
                  index={index}
                  updateBoard={updateBoard}
                >
                  {board[index]}
                </Square>
              )
            })
          }
      </section>
      <section className='turn'>
          <Square isSelected={ turn === 'x' }>{'x'}</Square>
          <Square isSelected={ turn === 'o' }>{'o'}</Square>
      </section>
      {
        (winner !== null) &&
        <section onClick={resetGame} className='winner pointer'>
          <p className='text'>
            { !winner ? 'Ha habido un empate' : `The winner is ${ winner.toUpperCase() }`}
          </p>
          <p>Click to reset the game</p>
        </section>
      }

    </main>    
  )
}

export default App
