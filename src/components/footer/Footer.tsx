import { Contacts } from '../common/Contacts';

export function Foooter() {
  function menuValues() {
    const menuLgValues: string[] = [
      'Расчёт стоимости',
      'Кейсы',
      'Услуги',
      'Благодарственные письма',
    ];

    const menuXsValues: string[] = [
      'Расчёт стоимости',
      'Благодарность клиентов',
      'Услуги',
      'Кейсы',
    ];

    const width = document.documentElement.clientWidth;

    const values = width < 1440 ? menuXsValues : menuLgValues;

    return [
      ...values,
      'Виджеты',
      'Сертификаты',
      'Интеграции',
      'Блог на Youtube',
      'Наши клиенты',
      'Вопрос / Ответ',
    ];
  }

  return (
    <footer className="pt-14 px-[15px] lg:px-0 flex flex-col lg:flex-row lg:basis-80 min-h-[615px] md:min-h-[320px] lg:min-h-[320px] relative lg:mt-[70px] bg-black lg:bg-transparent">
      <section id="about">
        <h6 className="footer-h6">О компании</h6>
        <ul className="list-none mt-5 flex flex-col text-sm lg:text-base">
          <li className="">
            <a href="#">Партнёрская программа</a>
          </li>
          <li className="mt-2">
            <a href="#">Вакансии</a>
          </li>
        </ul>
      </section>
      <section
        id="menu-footer"
        className="mt-[30px] lg:mt-0 lg:ml-24 lg:w-2/5 flex flex-col lg:block"
      >
        <h6 className="footer-h6">Меню</h6>
        <ul className="mt-5 lg:mt-0 list-none grid grid-cols-2 gap-y-[10px] lg:gap-y-0 lg:flex lg:flex-wrap text-sm lg:text-base">
          {menuValues().map((el, index) => (
            <li
              className={`h-min lg:w-1/2 ${
                index > 1 ? 'lg:mt-2' : 'w-1/3 lg:mt-5'
              }`}
              key={crypto.randomUUID()}
            >
              <a href="#">{el}</a>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-[30px] lg:mt-0 lg:ml-auto lg:text-right text-sm lg:text-base">
        <h6 className="footer-h6">Контакты</h6>
        <Contacts name="contacts-footer" />
        <address className="inline-block mt-2 lg:mt-5 not-italic">
          Москва, Путевой проезд 3с1, к 902
        </address>
      </section>
      <section className="flex flex-col items-start lg:items-end absolute left-[15px] bottom-0 lg:bottom-5 lg:right-0 font-['Montserrat'] text-xs">
        <p>©WELBEX 2022. Все права защищены.</p>
        <a href="#" className="underline">
          Политика конфиденциальности
        </a>
      </section>
    </footer>
  );
}
