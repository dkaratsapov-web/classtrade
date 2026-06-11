import { useState } from 'react'
import { Sticker, Cta } from './common.jsx'

const FEATURE_TOTAL = 4

export default function Feature() {
  const [slide, setSlide] = useState(0)
  const label = '0' + (slide + 1) + ' / 0' + FEATURE_TOTAL

  return (
    <section className="section section--tight dots">
      <div className="container">
        <Sticker a="МАГАЗИН УНИКАЛЬНЫХ" b="РЕШЕНИЙ" />

        <div className="feature">
          <div className="feature__panel">
            {/* Белая S-лента через панель */}
            <svg
              viewBox="0 0 600 600"
              preserveAspectRatio="none"
              style={{
                position: 'absolute',
                right: '-120px',
                top: '-40px',
                width: '520px',
                height: '680px',
                pointerEvents: 'none',
              }}
            >
              <path
                d="M120,40 C 420,120 380,300 120,320 C 420,360 460,540 120,600"
                stroke="#fff"
                strokeWidth="60"
                fill="none"
                strokeLinecap="round"
                opacity=".12"
              />
            </svg>

            <div className="feature__body">
              <h3>
                Комплексное оснащение
                <br />
                для детского сада
              </h3>
              <p className="feature__sub">В комплект включено:</p>
              <ul className="feature__list">
                <li>четыре группы</li>
                <li>медицинский кабинет</li>
                <li>пищеблок</li>
                <li>вспомогательные помещения</li>
              </ul>
              <p className="feature__note">
                Группы оборудованы спальнями с кроватками для детей и удобным
                рабочим местом для воспитателя
              </p>
              <Cta label="Подробнее" btnClass="btn btn--white" arrowClass="btn-arrow btn-arrow--white" arrowStroke="#036aff" />
            </div>
          </div>

          <div className="feature__photo">
            <img src="assets/room-kinder.jpg" alt="" />
            <div className="feature__slider">
              <span onClick={() => setSlide((s) => (s + FEATURE_TOTAL - 1) % FEATURE_TOTAL)}>‹</span>
              <span className="label">{label}</span>
              <span onClick={() => setSlide((s) => (s + 1) % FEATURE_TOTAL)}>›</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
