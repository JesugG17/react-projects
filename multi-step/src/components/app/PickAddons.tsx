import { useState, useMemo, ChangeEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import { CardLayout } from '../layouts/CardLayout';
import {
  CUSTOMIZABLE,
  LARGER_STORAGE,
  ONLINE_SERVICE,
} from '../../utils/constants/addons-contants';
import { useStepStore } from '../../store/step-store';

const title = 'Pick add-ons';
const paragraph = 'Add-ons help enhance your gaming experience';

const cards = [
  {
    service: 'Online service',
    description: 'Acess to multiplayer games',
    price: ['+$1/mo', '+$10/yr'],
  },
  {
    service: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: ['+$2/mo', '+$20/yr'],
  },
  {
    service: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: ['+$2/mo', '+$20/yr'],
  },
];

type Addons = {
  service: boolean;
  storage: boolean;
  profile: boolean;
};

const addons: Addons = {
  service: false,
  storage: false,
  profile: false,
};

export const PickAddons = () => {
  const [checked, setChecked] = useState<Addons>(addons);
  const price = useStepStore((state) => state.priceSelected);

  const priceIndex = useMemo(() => (price === 'montly' ? 0 : 1), []);

  const handleCheckAddon = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    if (name === CUSTOMIZABLE) {
      return setChecked((prevState) => ({
        storage: false,
        service: false,
        profile: !prevState.profile,
      }));
    }

    setChecked((prevState) => ({
      ...prevState,
      profile: false,
      [name]: !prevState[name as keyof Addons],
    }));
  };

  const returnCheckedStyles = (service: string) => {
    if (service === ONLINE_SERVICE && checked.service) return 'bg-background border-blue-dark';
    if (service === LARGER_STORAGE && checked.storage) return 'bg-background border-blue-dark';
    if (service === 'Customizable profile' && checked.profile)
      return 'bg-background border-blue-dark';
    return '';
  };

  return (
    <CardLayout title={title} paragraph={paragraph}>
      <ul className='flex flex-col gap-3'>
        {cards.map((card) => (
          <li
            key={card.service}
            className={twMerge(
              'flex justify-between items-center border px-3 py-2 rounded lg:px-4',
              returnCheckedStyles(card.service)
            )}
          >
            <div className='flex gap-3'>
              <input
                name={card.service.split(' ')[1]}
                checked={checked[card.service.split(' ')[1] as keyof Addons]}
                onChange={handleCheckAddon}
                className='w-5 checked:before:bg-violet-500'
                type='checkbox'
              />
              <div className='flex flex-col'>
                <h4 className='text-blue-dark font-bold'>{card.service}</h4>
                <span className='text-xs opacity-60 lg:text-sm'>{card.description}</span>
              </div>
            </div>
            <span className='text-violet-700 text-xs font-medium lg:text-sm'>
              {card.price[priceIndex]}
            </span>
          </li>
        ))}
      </ul>
    </CardLayout>
  );
};
