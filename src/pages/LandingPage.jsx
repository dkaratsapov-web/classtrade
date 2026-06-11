import { Sticker } from '../components/common.jsx'
import AdvantageBar from '../components/AdvantageBar.jsx'
import Contacts from '../components/Contacts.jsx'
import { LANDINGS } from '../data/landings.js'

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  )
}

export default function LandingPage({ slug }) {
  const data = LANDINGS[slug]

  if (!data) {
    return (
      <section className="about-hero dots-dark">
        <div className="container about-hero__inner">
          <nav className="breadcrumb">
            <a href="#/">Главная</a>
            <span>—</span>
            <a href="#/catalog">Каталог</a>
          </nav>
          <h1 className="landing-hero__title">Раздел в разработке</h1>
          <p className="about-hero__tagline">
            Страница этого направления скоро появится. Оставьте заявку — подберём
            оборудование под ваш запрос.
          </p>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* ===== Интро ===== */}
      <section className="about-hero dots-dark">
        <div className="container about-hero__inner">
          <nav className="breadcrumb">
            <a href="#/">Главная</a>
            <span>—</span>
            <a href="#/catalog">Каталог</a>
            <span>—</span>
            <span>Детский сад</span>
            <span>—</span>
            <span>{data.title}</span>
          </nav>
          <h1 className="landing-hero__title">{data.title}</h1>
          <p className="about-hero__tagline">{data.lead}</p>
        </div>
      </section>

      {/* ===== Оснащение ===== */}
      <section className="section dots">
        <div className="container">
          <Sticker a="ЧТО ВХОДИТ" b="В ОСНАЩЕНИЕ" />
          <p className="landing-intro">{data.intro}</p>
          <div className="equip-grid">
            {data.equipment.map((e) => (
              <div key={e} className="equip-item">
                <span className="equip-item__check">
                  <Check />
                </span>
                {e}
              </div>
            ))}
          </div>
          <div className="load-more">
            <a href="#/catalog" className="btn btn--ghost" style={{ textDecoration: 'none' }}>
              ← Вернуться в каталог
            </a>
          </div>
        </div>
      </section>

      {/* ===== Преимущества ===== */}
      <section className="section section--tight dots">
        <div className="container">
          <Sticker a="ПОЧЕМУ" b="CLASS TRADE" bClass="chip--white" />
          <div className="about-cards landing-benefits">
            {data.benefits.map((b) => (
              <div key={b.t} className="about-card">
                <span className="about-card__icon">
                  <Check />
                </span>
                <h3>{b.t}</h3>
                <p>{b.x}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdvantageBar
        items={[
          'Соответствие ФГОС ДО',
          'Поставки по 44-ФЗ',
          '2700+ садов обновят до 2030',
          'Доставка по всей России',
          'Гарантия и сервис',
        ]}
      />

      {/* ===== Заявка ===== */}
      <Contacts />
    </>
  )
}
