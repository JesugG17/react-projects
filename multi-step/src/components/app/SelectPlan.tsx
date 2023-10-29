import { useState } from 'react';
import { CardLayout } from '../layouts/CardLayout';
import { twMerge } from 'tailwind-merge';
import { useStepStore } from '../../store/step-store';
import { YEARLY } from '../../utils/constants/price-constants';

const title = 'Select your plan';
const paragraph = 'You have the option of monthly or yearly billing';

interface Card {
  type: string;
  price: string[];
  img: string;
}

const cards: Card[] = [
  {
    type: 'Arcade',
    price: ['$9/mo', '$90/yr'],
    img: '/img/icon-arcade.svg',
  },
  {
    type: 'Advanced',
    price: ['$12/mo', '$120/yr'],
    img: '/img/icon-advanced.svg',
  },
  {
    type: 'Pro',
    price: ['$15/mo', '$150/yr'],
    img: '/img/icon-pro.svg',
  },
];

const DEFAULT_PLAN_SELECTED = 0;

export const SelectPlan = () => {
  const plan = useStepStore((state) => state.priceSelected);
  const setPriceSelected = useStepStore((state) => state.setPriceSelected);
  const [planSelected, setPlanSelected] = useState(DEFAULT_PLAN_SELECTED);

  const priceIndex = plan === 'montly' ? 0 : 1;
  console.log(plan);

  return (
    <CardLayout title={title} paragraph={paragraph}>
      <ul className='w-full flex flex-col gap-3 items-center md:flex-row md:justify-between'>
        {cards.map((card, index) => (
          <li
            key={card.type}
            onClick={() => setPlanSelected(index)}
            className={twMerge(
              'ring-1 w-[90%] h-[60px] rounded-md p-2 ring-gray-400 flex items-center gap-2 hover:ring-blue-dark cursor-pointer md:flex-col md:h-[135px] md:items-start md:justify-between md:w-1/3 md:py-4',
              planSelected === index && 'ring-blue-dark bg-background'
            )}
          >
            <img className='w-8' src={card.img} alt={`${card.type} logo`} />
            <div className='flex flex-col'>
              <h5 className='font-bold text-blue-dark text-sm'>{card.type}</h5>
              <span className='opacity-40 text-xs'>{card.price[priceIndex]}</span>
            </div>
          </li>
        ))}
      </ul>
      <article className='flex justify-center items-center bg-cyan-light py-3 rounded gap-5 md:mt-10'>
        <span
          className={twMerge(
            'text-blue-dark font-bold',
            plan === YEARLY && 'opacity-40 text-black'
          )}
        >
          Monthly
        </span>
        <button
          onClick={() => setPriceSelected(plan === 'montly' ? 'yearly' : 'montly')}
          className='bg-blue-dark relative p-1 rounded-full w-12 h-6'
        >
          <div
            className={twMerge(
              'bg-white rounded-full h-4 w-4 transition-all duration-200',
              plan === YEARLY && 'translate-x-6'
            )}
          ></div>
        </button>
        <span
          className={twMerge(
            'opacity-40 text-black font-bold',
            plan === YEARLY && 'opacity-100 text-blue-dark'
          )}
        >
          Yearly
        </span>
      </article>
    </CardLayout>
  );
};
