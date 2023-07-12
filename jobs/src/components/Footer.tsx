import { FC } from 'react';
export const Footer: FC<Props> = ({ setPage }) => {
  return (
    <footer className="flex justify-end gap-5 p-4">
      <button
        onClick={() => {
          setPage((prevState) => {
            return prevState === 0 ? prevState : prevState - 1;
          });
        }}
      >
        prev
      </button>
      <button
        onClick={() => {
          setPage((prevState) => {
            return prevState === 26 ? prevState : prevState + 1;
          });
        }}
      >
        next
      </button>
    </footer>
  );
};

type Props = {
    setPage: React.Dispatch<React.SetStateAction<number>>;
}
