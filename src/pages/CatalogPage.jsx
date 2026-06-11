import { useState } from 'react'
import { Sticker } from '../components/common.jsx'
import { ArrowIcon } from '../components/icons/index.jsx'
import { CATEGORIES } from '../data/catalog.js'

export default function CatalogPage() {
  const [active, setActive] = useState(0)
  const cat = CATEGORIES[active]

  return (
    <>
      <section className="about-hero dots-dark">
        <div className="container about-hero__inner">
          <nav className="breadcrumb">
            <a href=".">Главная</a>
            <span>—</span>
            <span>Каталог</span>
          </nav>
          <Sticker a="КАТАЛОГ" b="ОБОРУДОВАНИЯ" aClass="chip--white" bClass="chip--white" />
          <p className="about-hero__tagline">
            Полное оснащение учреждений — выберите категорию и направление
          </p>
        </div>
      </section>

      <section className="section dots">
        <div className="container">
          <Sticker a="ВЫБЕРИТЕ" b="КАТЕГОРИЮ" />

          {/* Верхние категории */}
          <div className="catalog-cats">
            {CATEGORIES.map((c, i) => (
              <button
                key={c.name}
                className={`cat-tile${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <img loading="lazy" decoding="async" src={`assets/${c.img}`} alt="" />
                <span className="cat-tile__shade"></span>
                <span className="cat-tile__title">{c.name}</span>
              </button>
            ))}
          </div>

          {/* Подкатегории выбранной категории — у каждой своя посадочная */}
          <div className="catalog-subs">
            {cat.subs.map((s) => (
              <a key={s.slug} href={`catalog/${s.slug}`} className="sub-card">
                <span>{s.name}</span>
                <span className="sub-card__arrow">
                  <ArrowIcon size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
