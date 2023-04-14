

export const Square = ({ children,isSelected ,updateBoard, index }) => {
  
  return (
    <div onClick={() => updateBoard(index) } className={`square ${ isSelected ? 'is-selected' : '' }`} key={index}>
      <span className='cell__content'>
        { children }
      </span>
    </div>
  );
};
