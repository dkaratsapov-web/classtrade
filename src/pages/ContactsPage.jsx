import { Sticker, Cta } from '../components/common.jsx'

function Icon({ d, extra }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {d.map((p, i) => (
        <path key={i} d={p} />
      ))}
      {extra}
    </svg>
  )
}

const CARDS = [
  {
    label: 'Отдел продаж',
    value: '+7 (4822) 111-11-11',
    icon: <Icon d={['M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z']} />,
  },
  {
    label: 'Отдел поддержки',
    value: '+7 (4822) 112-12-12',
    icon: <Icon d={['M3 18v-6a9 9 0 0 1 18 0v6', 'M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z', 'M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z']} />,
  },
  {
    label: 'Адрес',
    value: 'Город, улица, дом, офис',
    icon: <Icon d={['M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z']} extra={<circle cx="12" cy="10" r="3" />} />,
  },
  {
    label: 'Почта',
    value: 'help@classtrade.ru',
    icon: <Icon d={['M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z']} extra={<polyline points="22,6 12,13 2,6" />} />,
  },
]

export default function ContactsPage() {
  return (
    <>
      {/* ===== Интро ===== */}
      <section className="about-hero dots-dark">
        <div className="container about-hero__inner">
          <nav className="breadcrumb">
            <a href="#/">Главная</a>
            <span>—</span>
            <span>Контакты</span>
          </nav>
          <Sticker a="КОНТАКТЫ" b="КОМПАНИИ" aClass="chip--white" bClass="chip--white" />
          <p className="about-hero__tagline">
            Свяжитесь с нами любым удобным способом — отделы продаж и поддержки
            всегда на связи
          </p>
        </div>
      </section>

      {/* ===== Карточки + форма ===== */}
      <section className="section dots">
        <svg
          className="ribbon"
          viewBox="0 0 1440 520"
          preserveAspectRatio="none"
          style={{ top: '60px', height: '520px' }}
        >
          <path
            d="M-60,260 C 360,40 520,460 760,300 C 980,150 1080,520 1520,240"
            stroke="#036aff"
            strokeWidth="150"
            fill="none"
            strokeLinecap="round"
            opacity=".95"
          />
        </svg>

        <div className="container section--inner">
          <Sticker a="НАШИ" b="КОНТАКТЫ" />

          <div className="contacts-page">
            <div className="contact-cards">
              {CARDS.map((c) => (
                <div key={c.label} className="contact-card">
                  <span className="contact-card__icon">{c.icon}</span>
                  <div className="contact-card__label">{c.label}</div>
                  <div className="contact-card__value">{c.value}</div>
                </div>
              ))}
            </div>

            <div className="contact-form">
              <h3>Оставьте заявку и мы свяжемся с вами</h3>
              <div className="contact-form__fields">
                <input placeholder="Имя" />
                <input placeholder="Телефон" />
                <input placeholder="E-mail" />
                <input placeholder="Комментарий" />
                <label className="contact-form__agree">
                  <i></i>Я согласен с политикой конфиденциальности сайта
                </label>
                <Cta label="Оставить заявку" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
