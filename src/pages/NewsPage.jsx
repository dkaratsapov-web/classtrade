import { useState } from 'react'
import { Sticker } from '../components/common.jsx'
import Contacts from '../components/Contacts.jsx'

const IMGS = [
  'room-tv.jpg', 'room-desks.jpg', 'room-map.jpg', 'room-shelves.jpg', 'room-office.jpg',
  'room-kinder.jpg', 'room-sport.jpg', 'hero-1.jpg', 'hero-2.jpg',
]

const STUB_BODY = [
  'Повседневная практика показывает, что социально-экономическое развитие не оставляет шанса для экономической целесообразности. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения существенных финансовых и административных условий.',
  'Задача организации, в особенности же укрепление и развитие структуры способствует подготовке и реализации соответствующих условий активизации. Не следует, однако, забывать, что укрепление и развитие внутренней структуры в значительной степени обуславливает создание систем массового участия.',
  'Идейные соображения высшего порядка, а также рамки и место обучения кадров играют важную роль в формировании направлений прогрессивного развития. Это демонстрационный текст-заглушка — реальная новость появится после наполнения раздела.',
]

export default function NewsPage() {
  const [item, setItem] = useState(null)

  return (
    <>
      <section className="about-hero dots-dark">
        <div className="container about-hero__inner">
          <nav className="breadcrumb">
            <a href=".">Главная</a>
            <span>—</span>
            <span>Новости</span>
          </nav>
          <Sticker a="НОВОСТИ" b="КОМПАНИИ" aClass="chip--white" bClass="chip--white" />
          <p className="about-hero__tagline">
            Свежие новости, проекты и статьи компании CLASS TRADE
          </p>
        </div>
      </section>

      <section className="section dots">
        <div className="container">
          <div className="news">
            {IMGS.map((img, i) => (
              <div key={i} className="news-card">
                <div className="news-card__media">
                  <img loading="lazy" decoding="async" src={`assets/${img}`} alt="" />
                  <span className="news-card__badge">01/01/2025</span>
                </div>
                <h3>Название новости</h3>
                <p>
                  Повседневная практика показывает, что социально-экономическое
                  развитие не оставляет шанса для экономической целесообразности.
                </p>
                <button className="btn" onClick={() => setItem({ img, date: '01/01/2025' })}>
                  Подробнее
                </button>
              </div>
            ))}
          </div>

          <div className="pagination">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <button key={n} className={`page-btn${n === 1 ? ' is-active' : ''}`}>
                {n}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Заглушка новости */}
      {item && (
        <div className="modal-overlay" onClick={() => setItem(null)}>
          <div className="modal modal--wide case-modal news-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" aria-label="Закрыть" onClick={() => setItem(null)}>
              ×
            </button>
            <span className="news-card__badge news-modal__badge">{item.date}</span>
            <h3>Название новости</h3>
            <div className="case-modal__media">
              <img src={`assets/${item.img}`} alt="" />
            </div>
            {STUB_BODY.map((t, i) => (
              <p key={i} className="news-modal__p">{t}</p>
            ))}
          </div>
        </div>
      )}

      <Contacts />
    </>
  )
}
