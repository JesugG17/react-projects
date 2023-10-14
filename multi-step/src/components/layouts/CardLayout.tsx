import { FC, PropsWithChildren } from 'react';

export const CardLayout: FC<Props> = ({ title, paragraph, children }) => {
  return (
    <section className='w-[95%] rounded-md bg-white px-4 py-6 flex flex-col gap-3'>
      <h4 className='text-blue-dark font-bold text-xl'>{title}</h4>
      <p className='opacity-50 text-sm font-medium'>{paragraph}</p>
      {children}
    </section>
  );
};

type Props = {
  title: string;
  paragraph: string;
} & PropsWithChildren;
