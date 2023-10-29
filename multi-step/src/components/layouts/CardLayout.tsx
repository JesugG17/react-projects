import { FC, PropsWithChildren } from 'react';

export const CardLayout: FC<Props> = ({ title, paragraph, children }) => {
  return (
    <section className='w-[95%] max-w-[400px] rounded-md bg-white px-4 py-6 flex flex-col gap-3 lg:w-full lg:max-w-none'>
      <h4 className='text-blue-dark font-bold text-xl lg:text-3xl'>{title}</h4>
      <p className='opacity-50 text-sm font-medium lg:text-base'>{paragraph}</p>
      {children}
    </section>
  );
};

type Props = {
  title?: string;
  paragraph?: string;
} & PropsWithChildren;
