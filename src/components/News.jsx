import { Sticker, Cta } from './common.jsx'

const ITEMS = [
  { img: 'assets/room-tv.jpg' },
  { img: 'assets/room-desks.jpg' },
  { img: 'assets/room-map.jpg' },
]

export default function News() {
  return (
    <section className="section section--tight dots">
      <div className="container">
        <Sticker a="НОВОСТИ" b="И СТАТЬИ" bClass="chip--white" />
        <div className="news">
          {ITEMS.map((n, i) => (
            <div key={i} className="news-card">
              <div className="news-card__media">
                <img src={n.img} alt="" />
                <span className="news-card__badge">Новый проект</span>
              </div>
              <h3>Название новости</h3>
              <p>Аудио-визуальные системы, сценическое оборудование, интерактивные экспонаты</p>
              <Cta label="Подробнее" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
