import { useState } from 'react'
import { Sticker } from './common.jsx'

const REQUISITES = [
  ['Полное наименование', 'ООО «КЛАСС ТРЕЙД»'],
  ['ИНН', '6900000000'],
  ['КПП', '690000000'],
  ['ОГРН', '1006900000000'],
  ['Юридический адрес', 'Город, улица, дом, офис'],
  ['Расчётный счёт', '40700000000000000000'],
  ['Банк', 'НАЗВАНИЕ БАНКА'],
  ['БИК', '040000000'],
  ['Корр. счёт', '30100000000000000000'],
]

export default function About() {
  const [reqOpen, setReqOpen] = useState(false)

  return (
    <section className="section section--tight dots">
      {/* Синяя S-лента через блок */}
      <svg
        className="ribbon"
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
        style={{ top: '120px', height: '460px' }}
      >
        <path
          d="M-60,240 C 360,40 520,440 780,280 C 1000,140 1100,500 1520,220"
          stroke="#036aff"
          strokeWidth="150"
          fill="none"
          strokeLinecap="round"
          opacity=".95"
        />
      </svg>

      <div className="container section--inner">
        <Sticker a="О КОМПАНИИ" b="CLASS TRADE" bClass="chip--white" />

        <div className="about">
          <div className="about__photo about__photo--left">
            <img loading="lazy" decoding="async" src="assets/hero-1.jpg" alt="" />
          </div>
          <div className="about__text">
            <p>
              В современном мире качество образования напрямую зависит от уровня
              оснащённости учебных заведений.
            </p>
            <p>
              Компания CLASS TRADE, лидер на рынке профессионального оснащения,
              предлагает современные решения, которые делают процесс обучения
              увлекательным, эффективным и максимально продуктивным.
            </p>
            <p>
              Наш подход — индивидуальные решения, соответствующие уникальным
              требованиям каждого учебного заведения.
            </p>
            <div className="about__actions">
              <a href="about" className="btn btn--ghost">Подробнее</a>
              <button className="btn btn--ghost" onClick={() => setReqOpen(true)}>
                Смотреть реквизиты
              </button>
            </div>
          </div>
          <div className="about__photo about__photo--right">
            <img loading="lazy" decoding="async" src="assets/room-tv.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* Реквизиты (имитация) */}
      {reqOpen && (
        <div className="modal-overlay" onClick={() => setReqOpen(false)}>
          <div className="modal modal--wide" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" aria-label="Закрыть" onClick={() => setReqOpen(false)}>
              ×
            </button>
            <h3>Реквизиты компании</h3>
            <dl className="requisites">
              {REQUISITES.map(([k, v]) => (
                <div key={k} className="requisites__row">
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <button className="btn" style={{ marginTop: '20px' }}>Скачать реквизиты</button>
          </div>
        </div>
      )}
    </section>
  )
}
