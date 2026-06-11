import { useState } from 'react'
import { Sticker, Cta } from '../components/common.jsx'
import Contacts from '../components/Contacts.jsx'
import { ArrowIcon } from '../components/icons/index.jsx'

const FILTERS = [
  'Все',
  'Детские сады',
  'Школы',
  'Вузы',
  'Физкультурные центры',
  'Кванториумы',
  'Исследовательские центры',
]

const IMGS = [
  'room-desks.png',
  'room-map.png',
  'room-shelves.png',
  'room-office.png',
  'room-tv.png',
  'room-kinder.png',
]

export default function ProjectsPage() {
  const [active, setActive] = useState(0)

  return (
    <>
      <section className="about-hero dots-dark">
        <div className="container about-hero__inner">
          <nav className="breadcrumb">
            <a href="#/">Главная</a>
            <span>—</span>
            <span>Проекты</span>
          </nav>
          <Sticker a="НАШИ" b="ПРОЕКТЫ" aClass="chip--white" bClass="chip--white" />
          <p className="about-hero__tagline">
            Реализованные проекты комплексного оснащения учреждений по всей России
          </p>
        </div>
      </section>

      <section className="section dots">
        <div className="container">
          <div className="filters">
            {FILTERS.map((f, i) => (
              <button
                key={f}
                className={`filter-chip${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="projects">
            {IMGS.map((img, i) => (
              <a key={i} href="#" className="project-card">
                <div className="project-card__media">
                  <img src={`assets/${img}`} alt="" />
                  <span className="project-card__arrow">
                    <ArrowIcon size={18} />
                  </span>
                </div>
                <h3>Средняя школа №12</h3>
                <div className="project-card__meta">
                  <span>2022–2025 год</span>
                  <span className="dot-sep">•</span>
                  <span>58 кабинетов</span>
                </div>
              </a>
            ))}
          </div>

          <div className="load-more">
            <Cta label="Загрузить ещё" btnClass="btn btn--ghost" />
          </div>
        </div>
      </section>

      <Contacts />
    </>
  )
}
