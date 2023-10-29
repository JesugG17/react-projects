import { Header, Steps, Footer } from './components';
import { useStepStore } from './store/step-store';

export const App = () => {
  const currentStep = useStepStore((state) => state.currentStep);
  return (
    <section className='min-h-screen bg-background md:flex md:justify-center md:items-center '>
      <article className='md:w-[85%] max-w-[850px] max-h-[520px] md:bg-white md:rounded-md md:flex md:p-3 lg:gap-10 md:shadow-lg'>
        <Header />
        <article className='lg:w-[90%] md:flex md:flex-col md:justify-between '>
          <Steps />
          {currentStep !== 5 && <Footer />}
        </article>
      </article>
    </section>
  );
};
