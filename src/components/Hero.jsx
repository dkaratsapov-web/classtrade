import { useState } from 'react'
import { Cta } from './common.jsx'
import { ChevronDownIcon } from './icons/index.jsx'

const HERO_TOTAL = 3

export default function Hero() {
  const [slide, setSlide] = useState(0)
  const label = '0' + (slide + 1) + ' / 0' + HERO_TOTAL

  return (
    <section className="hero dots-dark">
      <div className="hero__head">
        <h1 className="hero__h1">ПРОФЕССИОНАЛЬНОЕ ОСНАЩЕНИЕ</h1>
        <div className="hero__stickers">
          <span className="hero__chip hero__chip--white">УЧЕБНЫХ</span>
          <span className="hero__chip hero__chip--blue">ЗАВЕДЕНИЙ</span>
        </div>
      </div>

      <div className="hero__grid">
        <div className="hero__photo hero__photo--left">
          <img src="assets/hero-1.png" alt="" />
        </div>

        <div className="hero__center">
          <p className="hero__lead">
            Высокое качество оборудования, индивидуальный подход и оперативная
            установка — залог успешного обучения и комфорта преподавателей
          </p>
          <div className="hero__cta">
            <Cta label="Перейти в каталог" />
          </div>
        </div>

        <div className="hero__photo hero__photo--right">
          <img src="assets/hero-2.png" alt="" />
        </div>
      </div>

      <div className="hero__slider">
        <div className="slider-nav">
          <button onClick={() => setSlide((s) => (s + HERO_TOTAL - 1) % HERO_TOTAL)}>‹</button>
          <span className="slider-nav__label">{label}</span>
          <button onClick={() => setSlide((s) => (s + 1) % HERO_TOTAL)}>›</button>
        </div>
        <div className="hero__down">
          <ChevronDownIcon />
        </div>
      </div>
    </section>
  )
}
