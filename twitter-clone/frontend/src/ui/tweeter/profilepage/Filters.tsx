import { useState } from 'react';

export const Filters = () => {
  const [tabSelected, setTabSelected] = useState(0);

  return (
    <aside className="bg-white flex flex-col justify-center rounded-lg shadow py-2 font-medium  gap-5 items-start h-fit w-11/12 md:w-4/5 lg:w-1/4">
      {['Tweets', 'Tweets & Replies', 'Media', 'Likes'].map((filter, index) => (
        <button
          key={filter}
          className={`border-l-4 rounded px-4 py-1 ${
            tabSelected === index ? 'border-l-blue-500' : 'border-l-transparent'
          } transition-all ease-in duration-200`}
          onClick={() => setTabSelected(index)}
        >
          {filter}
        </button>
      ))}
    </aside>
  );
};
