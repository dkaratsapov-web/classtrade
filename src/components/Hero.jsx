import { Cta } from './common.jsx'

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
          <img src="assets/hero-1.png" alt="" />
        </div>

        <div className="hero__center">
          <div className="hero__lead">
            <span className="hero__lead-dot" aria-hidden="true" />
            <p>
              Высокое качество оборудования, индивидуальный подход и оперативная
              установка — залог успешного обучения и комфорта преподавателей
            </p>
          </div>
          <div className="hero__cta">
            <Cta label="Перейти в каталог" />
          </div>
        </div>

        <div className="hero__photo hero__photo--right">
          <img src="assets/hero-2.png" alt="" />
        </div>
      </div>
    </section>
  )
}
