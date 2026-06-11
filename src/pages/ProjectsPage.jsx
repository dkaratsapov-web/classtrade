import { useState } from 'react'
import { Sticker } from '../components/common.jsx'
import Contacts from '../components/Contacts.jsx'
import { ArrowIcon } from '../components/icons/index.jsx'

const IMGS = [
  'room-desks.jpg',
  'room-map.jpg',
  'room-shelves.jpg',
  'room-office.jpg',
  'room-tv.jpg',
  'room-kinder.jpg',
]

// Имитация фильтрации: для каждой вкладки — свои названия/мета объектов
const FILTERS = [
  { label: 'Все', base: 'Объект образования', units: 'кабинетов' },
  { label: 'Детские сады', base: 'Детский сад', units: 'групп' },
  { label: 'Школы', base: 'Средняя школа', units: 'кабинетов' },
  { label: 'Вузы', base: 'Университет', units: 'аудиторий' },
  { label: 'Физкультурные центры', base: 'Спортивный комплекс', units: 'залов' },
  { label: 'Кванториумы', base: 'Кванториум', units: 'лабораторий' },
  { label: 'Исследовательские центры', base: 'Исследовательский центр', units: 'лабораторий' },
]

function buildProjects(filterIndex) {
  const f = FILTERS[filterIndex]
  const nums = [12, 7, 25, 3, 18, 41]
  const counts = [58, 24, 96, 12, 34, 70]
  return IMGS.map((img, i) => ({
    id: `${filterIndex}-${i}`,
    title: `${f.base} №${nums[i]}`,
    meta: `2022–2025 год · ${counts[i]} ${f.units}`,
    img,
  }))
}

export default function ProjectsPage() {
  const [active, setActive] = useState(0)
  const [caseItem, setCaseItem] = useState(null)
  const projects = buildProjects(active)

  return (
    <>
      <section className="about-hero dots-dark">
        <div className="container about-hero__inner">
          <nav className="breadcrumb">
            <a href=".">Главная</a>
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
                key={f.label}
                className={`filter-chip${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="projects">
            {projects.map((p) => (
              <button key={p.id} className="project-card" onClick={() => setCaseItem(p)}>
                <div className="project-card__media">
                  <img loading="lazy" decoding="async" src={`assets/${p.img}`} alt="" />
                  <span className="project-card__arrow">
                    <ArrowIcon size={18} />
                  </span>
                </div>
                <h3>{p.title}</h3>
                <div className="project-card__meta">{p.meta}</div>
              </button>
            ))}
          </div>

          <div className="load-more">
            <button className="btn btn--ghost">Загрузить ещё</button>
          </div>
        </div>
      </section>

      {/* Заглушка кейса по клику на карточку */}
      {caseItem && (
        <div className="modal-overlay" onClick={() => setCaseItem(null)}>
          <div className="modal modal--wide case-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" aria-label="Закрыть" onClick={() => setCaseItem(null)}>
              ×
            </button>
            <h3>{caseItem.title}</h3>
            <p className="case-modal__meta">{caseItem.meta}</p>
            <div className="case-modal__media">
              <img src={`assets/${caseItem.img}`} alt="" />
            </div>
            <p className="case-modal__stub">
              Подробное описание проекта, состав оснащения и фотогалерея появятся
              позже. Хотите похожее решение для вашего учреждения — оставьте заявку,
              мы подготовим предложение.
            </p>
            <button className="btn">Оставить заявку</button>
          </div>
        </div>
      )}

      <Contacts />
    </>
  )
}
