import { useState } from 'react';
import { CardLayout } from '../layouts/CardLayout';

const title = 'Select your plan';
const paragraph = 'You have the option of monthly or yearly billing';

const cards = [
  {
    type: 'Arcade',
    price: '$9/mo',
    img: '/img/icon-arcade.svg',
  },
  {
    type: 'Advanced',
    price: '$12/mo',
    img: '/img/icon-advanced.svg',
  },
  {
    type: 'Pro',
    price: '$15/mo',
    img: '/img/icon-pro.svg',
  },
];

export const SelectPlan = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <CardLayout title={title} paragraph={paragraph}>
      <ul className='w-full flex flex-col gap-3 items-center'>
        {cards.map((card) => (
          <li
            key={card.type}
            className='ring-1 w-[90%] h-[60px] rounded-md p-2 ring-gray-400 flex items-center gap-2 first-of-type:bg-cyan-light first-of-type:ring-blue-dark'
          >
            <img className='w-8' src={card.img} alt={`${card.type} logo`} />
            <div className='flex flex-col'>
              <h5 className='font-bold text-blue-dark text-sm'>{card.type}</h5>
              <span className='opacity-40 text-xs'>{card.price}</span>
            </div>
          </li>
        ))}
      </ul>
      <article className='flex justify-center items-center bg-cyan-light py-3 rounded gap-5'>
        <span className='text-blue-dark font-bold'>Monthly</span>
        <button 
          onClick={() => setToggle(prevState => !prevState)}
          className='bg-blue-dark relative p-1 rounded-full w-12 h-6'
        >
          <div className={`bg-white rounded-full h-4 w-4 transition-all duration-200 ${toggle &&'translate-x-6'}`}></div>
        </button>
        <span className='opacity-40 font-bold'>Yearly</span>
      </article>
    </CardLayout>
  );
};
