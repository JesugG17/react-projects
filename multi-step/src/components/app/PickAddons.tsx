import { CardLayout } from '../layouts/CardLayout';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const title = 'Pick add-ons';
const paragraph = 'Add-ons help enhance your gaming experience';

const cards = [
  {
    service: 'Online service',
    description: 'Acess to multiplayer games',
    price: '+$1/mo',
  },
  {
    service: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: '+$2/mo',
  },
  {
    service: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: '+$2/mo',
  },
];

export const PickAddons = () => {
  const [checked, setChecked] = useState({
    service: false,
    storage: false,
    customizable: false,
  });

  const handleCheckAddon = (service: string) => {
    if (service === 'Online service') {
      return setChecked((prevState) => ({
        ...prevState,
        service: !prevState.service,
      }));
    }

    if (service === 'Larger storage') {
      return setChecked((prevState) => ({
        ...prevState,
        storage: !prevState.storage,
      }));
    }

    if (service === 'Customizable profile') {
      return setChecked((prevState) => ({
        ...prevState,
        customizable: !prevState.customizable,
      }));
    }
  };

  const returnCheckedStyles = (service: string) => {
    if (service === 'Online service' && checked.service) return 'bg-background border-blue-dark';
    if (service === 'Larger storage' && checked.storage) return 'bg-background border-blue-dark';
    if (service === 'Customizable profile' && checked.customizable)
      return 'bg-background border-blue-dark';
    return '';
  };

  return (
    <CardLayout title={title} paragraph={paragraph}>
      <ul className='flex flex-col gap-3'>
        {cards.map((card) => (
          <li
            key={card.service}
            onClick={() => handleCheckAddon(card.service)}
            className={twMerge('flex justify-between items-center border px-3 py-2 rounded lg:px-4', returnCheckedStyles(card.service))}
          >
            <div className='flex gap-3'>
              <input className='w-5 checked:before:bg-violet-500' type='checkbox' />
              <div className='flex flex-col'>
                <h4 className='text-blue-dark font-bold'>{card.service}</h4>
                <span className='text-xs opacity-60 lg:text-sm'>{card.description}</span>
              </div>
            </div>
            <span className='text-violet-700 text-xs font-medium lg:text-sm'>{card.price}</span>
          </li>
        ))}
      </ul>
    </CardLayout>
  );
};
