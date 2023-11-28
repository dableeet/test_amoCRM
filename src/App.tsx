import { Background } from './components/background/Background';
import { Foooter } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';

export function App() {
  return (
    <>
      <Background />
      <div className="flex flex-col lg:px-[150px] lg:pt-[46px] h-screen max-w-[1440px] m-auto">
        <Header />
        <Main />
        <Foooter />
      </div>
    </>
  );
}
