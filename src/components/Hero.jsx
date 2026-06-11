import { ArrowIcon } from './icons/index.jsx'

export default function Hero() {
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
          <img src="assets/hero-1.jpg" alt="" fetchpriority="high" />
        </div>

        <div className="hero__center">
          <ul className="hero__usp">
            <li>
              <span className="hero__lead-dot" aria-hidden="true" />
              Высокое качество оборудования
            </li>
            <li>
              <span className="hero__lead-dot" aria-hidden="true" />
              Индивидуальный подход
            </li>
            <li>
              <span className="hero__lead-dot" aria-hidden="true" />
              Оперативная установка
            </li>
          </ul>
          <p className="hero__usp-note">
            Залог успешного обучения и комфорта преподавателей
          </p>
        </div>

        <div className="hero__photo hero__photo--right">
          <img src="assets/hero-2.jpg" alt="" fetchpriority="high" />
        </div>
      </div>

      <div className="hero__cta">
        <a href="catalog" className="btn-hero">
          <span className="btn-hero__label">Перейти в каталог</span>
          <span className="btn-hero__icon">
            <ArrowIcon size={22} stroke="#036aff" />
          </span>
        </a>
      </div>
    </section>
  )
}
