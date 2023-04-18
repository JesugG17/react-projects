

export const WinnerModal = ({ resetGame, winner }) => {
  return (
    <section onClick={resetGame} className="winner pointer">
      <p className="text">
        {!winner
          ? "Ha habido un empate"
          : `The winner is ${winner.toUpperCase()}`}
      </p>
      <p>Click to reset the game</p>
    </section>
  );
};
