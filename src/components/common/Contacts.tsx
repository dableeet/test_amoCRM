import TelegramIcon from '@/assets/contacts/telegram-20px.svg?react';
import ViberIcon from '@/assets/contacts/viber-20px.svg?react';
import WhatsappIcon from '@/assets/contacts/whatsapp-20px.svg?react';

export function Contacts({ name }: { name: string }) {
  return (
    <div id={name} className={name}>
      <a href="tel:+75555555555">+7 555 555-55-55</a>
      <section className="messengers">
        <a href="#">
          <TelegramIcon />
        </a>
        <a href="#">
          <ViberIcon />
        </a>
        <a href="#">
          <WhatsappIcon />
        </a>
      </section>
    </div>
  );
}
