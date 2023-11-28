export function Main() {
  return (
    <main className="flex flex-col lg:justify-between px-[15px] lg:px-0 min-h-[445px] lg:flex-row mt-10 lg:mt-[90px]">
      <section className="basis-1/3">
        <h1 className="text-4xl/tight lg:text-5xl/tight">
          Зарабатывайте больше
          <br />
          <span className="font-extrabold gradient-text">с WELBEX</span>
          <br />
          <span className="mt-[15px] lg:mt-[30px] inline-block font-['Montserrat'] text-lg/tight">
            Развиваем и контролируем <br /> продажи за вас
          </span>
        </h1>
      </section>
      <section className="basis-1/3 text-left lg:text-right pt-[45px] lg:pt-[15px]">
        <p className="font-medium text-lg">
          Вместе с&nbsp;
          <span className="gradient-text text-lg font-bold normal-case lg:uppercase ">
            бесплатной консультацией&nbsp;
          </span>
          мы дарим:
          <ul className="list-none hidden lg:grid grid-cols-2 gap-y-[30px] font-['Montserrat'] mt-10 text-base">
            <li>
              <p className="leading-tight">
                <span className="uppercase text-lg font-medium tracking-[0.9px]">
                  Виджеты
                </span>
                <br />
                30 готовых <br /> решений
              </p>
            </li>
            <li>
              <p className="leading-tight">
                <span className="uppercase text-lg font-medium tracking-[0.9px]">
                  Dashboard
                </span>
                <br />с показателями <br /> вашего бизнеса
              </p>
            </li>
            <li>
              <p className="leading-tight">
                <span className="uppercase text-lg font-medium tracking-[0.9px]">
                  Skype Аудит
                </span>
                <br />
                отдела продаж <br /> и CRM системы
              </p>
            </li>
            <li>
              <p className="leading-tight">
                <span className="uppercase text-lg font-medium tracking-[0.9px]">
                  35 дней
                </span>
                <br />
                использования <br /> CRM
              </p>
            </li>
          </ul>
          <ul
            id="mobile-list"
            className="grid lg:hidden grid-cols-2 gap-y-[14px] font-['Montserrat'] mt-5 text-[13px] uppercase tracking-[0.65px]"
          >
            <li>Skype аудит</li>
            <li>30 виджетов</li>
            <li>Dashboard</li>
            <li>Месяц аmoCRM</li>
          </ul>
        </p>
        <button
          type="button"
          className="hidden lg:inline-block mt-[60px] w-64 h-16 bg-blue-500"
        >
          <span>Получить консультацию</span>
        </button>
      </section>
    </main>
  );
}
