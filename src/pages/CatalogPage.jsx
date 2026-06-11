import { useState } from 'react'
import { Sticker } from '../components/common.jsx'
import { ArrowIcon } from '../components/icons/index.jsx'

const CATEGORIES = [
  {
    name: 'Детский сад',
    img: 'room-kinder.png',
    subs: [
      'Игровая комната', 'Сенсорная комната', 'Кабинет логопеда', 'Кабинет психолога',
      'Экспериментирование', 'Окружающий мир', 'Математика и информатика', 'Наглядные пособия',
      'Технические средства обучения', 'Конструирование и проектирование', 'Технология', 'Искусство',
      'Философия', 'Методические материалы', 'Учебное оборудование', 'Спортивный зал',
      'Мебель', 'Софт', 'Медиазона',
    ],
  },
  {
    name: 'Начальная школа',
    img: 'room-desks.png',
    subs: [
      'Математика и информатика', 'Окружающий мир', 'Технология', 'Искусство',
      'Наглядные пособия', 'Учебное оборудование', 'Технические средства обучения', 'Спортивный зал',
      'Кабинет логопеда', 'Кабинет психолога', 'Методические материалы', 'Мебель',
      'Софт', 'Медиазона',
    ],
  },
  {
    name: 'Средняя и старшая школа',
    img: 'room-map.png',
    subs: [
      'Кабинет русского языка и литературы', 'Кабинет иностранных языков', 'Кабинет математики', 'Кабинет информатики',
      'Кабинет физики', 'Кабинет химии', 'Кабинет биологии', 'Кабинет географии',
      'Кабинет астрономии', 'Кабинет общественных наук', 'Кабинет МХК, ИЗО и музыки', 'Кабинет технологии',
      'Кабинет робототехники', 'Кабинет ОБЗР', 'Наглядные пособия', 'Технические средства обучения',
      'Учебное оборудование', 'Методические материалы', 'Спортивный зал', 'Мебель', 'Медиазона',
    ],
  },
  {
    name: 'Дополнительное образование',
    img: 'room-shelves.png',
    subs: [
      'Естественнонаучное', 'Художественное творчество', 'Физкультурно-спортивное', 'Робототехника',
      'Конструирование', 'Материальные технологии', 'Наглядные пособия', 'Технические средства обучения',
      'Учебное оборудование', 'Методические материалы', 'Мебель', 'Софт',
    ],
  },
  {
    name: 'Инклюзивное образование',
    img: 'room-office.png',
    subs: ['Коррекционное оборудование', 'Технические средства обучения', 'Мебель'],
  },
]

export default function CatalogPage() {
  const [active, setActive] = useState(0)
  const cat = CATEGORIES[active]

  return (
    <>
      <section className="about-hero dots-dark">
        <div className="container about-hero__inner">
          <nav className="breadcrumb">
            <a href="#/">Главная</a>
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
                <img src={`assets/${c.img}`} alt="" />
                <span className="cat-tile__shade"></span>
                <span className="cat-tile__title">{c.name}</span>
              </button>
            ))}
          </div>

          {/* Подкатегории выбранной категории */}
          <div className="catalog-subs">
            {cat.subs.map((s) => (
              <a key={s} href="#" className="sub-card">
                <span>{s}</span>
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
