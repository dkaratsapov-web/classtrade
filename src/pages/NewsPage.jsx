import { Sticker, Cta } from '../components/common.jsx'
import Contacts from '../components/Contacts.jsx'

const IMGS = [
  'room-tv.jpg',
  'room-desks.jpg',
  'room-map.jpg',
  'room-shelves.jpg',
  'room-office.jpg',
  'room-kinder.jpg',
  'room-sport.jpg',
  'hero-1.jpg',
  'hero-2.jpg',
]

export default function NewsPage() {
  return (
    <>
      <section className="about-hero dots-dark">
        <div className="container about-hero__inner">
          <nav className="breadcrumb">
            <a href="#/">Главная</a>
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
                  <img src={`assets/${img}`} alt="" />
                  <span className="news-card__badge">01/01/2025</span>
                </div>
                <h3>Название новости</h3>
                <p>
                  Повседневная практика показывает, что социально-экономическое
                  развитие не оставляет шанса для экономической целесообразности.
                </p>
                <Cta label="Подробнее" />
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

      <Contacts />
    </>
  )
}
