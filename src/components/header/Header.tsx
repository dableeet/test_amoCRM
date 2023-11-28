import LogoIcon from '@/assets/logo/logo1.svg?react';
import LogoName from '@/assets/logo/logo2.svg?react';
import { Contacts } from '../common/Contacts';

export function Header() {
  return (
    <header className="flex bg-black px-[15px] lg:px-0 lg:bg-transparent lg:pt-4 lg:basis-20 lg:min-h-[74px]">
      <section className="hidden lg:flex lg:flex-wrap lg:items-center lg:basis-1/6">
        <LogoIcon className="mr-2" />
        <LogoName />
        <p className="mt-2 text-[#e4e5ea95] text-[10px] font-['Montserrat'] leading-none">
          крупный интегратор CRM <br /> в Росcии и ещё 8 странах
        </p>
      </section>
      <nav className="uppercase w-full lg:w-fit lg:normal-case text-xs lg:text-base py-5 lg:py-0">
        <ul className="list-none flex justify-between">
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <a href="#">Виджеты</a>
          </li>
          <li>
            <a href="#">Интеграции</a>
          </li>
          <li>
            <a href="#">Кейсы</a>
          </li>
          <li className="hidden lg:inline-block">
            <a href="#">Сертификаты</a>
          </li>
        </ul>
      </nav>
      <Contacts name="contacts-header" />
    </header>
  );
}
