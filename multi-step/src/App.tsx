import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Steps } from './components/Steps';
import { useStepStore } from './store/step-store';

export const App = () => {
  const currentStep = useStepStore((state) => state.currentStep);
  return (
    <section className='min-h-screen bg-background'>
      <Header />
      <Steps />
      {currentStep !== 5 && <Footer />}
    </section>
  );
};
