import { useState } from 'react';
export const Filter = () => {
  const [selected, setSelected] = useState(0);

  return (
    <aside className="bg-white flex flex-col justify-center rounded-lg shadow py-2 font-medium  gap-5 items-start h-fit w-3/12">
      {['Top', 'Latest', 'People', 'Media'].map((filter, index) => (
        <button
          key={filter}
          className={`border-l-4 rounded px-4 py-1 ${
            selected === index ? 'border-l-blue-500' : 'border-l-transparent'
          } transition-all ease-in duration-200`}
          onClick={() => setSelected(index)}
        >
          {filter}
        </button>
      ))}
    </aside>
  );
};
