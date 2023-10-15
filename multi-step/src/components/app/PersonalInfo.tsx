import { CardLayout } from '../layouts/CardLayout';

const title = 'Personal info';
const paragraph = 'please provide your name, email, address and phone number.';

export const PersonalInfo = () => {
  return (
    <CardLayout title={title} paragraph={paragraph}>
      <form className='flex flex-col gap-5'>
        <article className='flex flex-col lg:gap-2'>
          <label className='text-blue-dark font-medium text-xs lg:text-sm' htmlFor='name'>
            Name
          </label>
          <input
            className='border-2 border-gray-300 py-1 px-3 focus:outline-none rounded'
            id='name'
            type='text'
            placeholder='e.g Stephen King'
          />
        </article>
        <article className='flex flex-col gap-2'>
          <label className='text-blue-dark font-medium text-xs lg:text-sm' htmlFor='email'>
            Email Address
          </label>
          <input
            className='border-2 border-gray-300 py-1 px-3 focus:outline-none rounded'
            id='email'
            type='email'
            placeholder='e.g stephenking@lorem.com'
          />
        </article>
        <article className='flex flex-col gap-2'>
          <label className='text-blue-dark font-medium text-xs lg:text-sm' htmlFor='phone'>
            Phone number
          </label>
          <input
            className='border-2 border-gray-300 py-1 px-3 focus:outline-none rounded'
            id='phone'
            type='tel'
            placeholder='e.g +1 234 567 890'
          />
        </article>
      </form>
    </CardLayout>
  );
};
