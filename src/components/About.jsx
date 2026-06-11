import { Sticker, Cta } from './common.jsx'

export default function About() {
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
            <img src="assets/hero-1.png" alt="" />
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
            <Cta label="Подробнее" btnClass="btn btn--ghost" />
          </div>
          <div className="about__photo about__photo--right">
            <img src="assets/room-tv.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
