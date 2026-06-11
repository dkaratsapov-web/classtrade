import { Sticker } from './common.jsx'
import { ArrowIcon } from './icons/index.jsx'

const BIG = [
  { title: 'Детский сад', img: 'assets/cat-kinder.jpg' },
  { title: 'Школа', img: 'assets/cat-school.jpg' },
]

const SMALL = [
  { title: ['Средняя', 'и старшая школа'], img: 'assets/cat-secondary.jpg' },
  { title: ['Дополнительное', 'образование'], img: 'assets/cat-extra.jpg' },
  { title: ['Инклюзивное', 'образование'], img: 'assets/cat-inclusive.jpg' },
]

function Tile({ size, img, title, arrowSize }) {
  return (
    <div className={`tile tile--${size}`}>
      <img loading="lazy" decoding="async" src={img} alt="" />
      <div className="tile__shade"></div>
      <div className="tile__title">
        {Array.isArray(title)
          ? title.map((line, i) => (
              <span key={i}>
                {line}
                {i < title.length - 1 && <br />}
              </span>
            ))
          : title}
      </div>
      <div className="tile__arrow">
        <ArrowIcon size={arrowSize} />
      </div>
    </div>
  )
}

export default function Categories() {
  return (
    <section className="section dots">
      <div className="container">
        <Sticker a="ВСЕ ДЛЯ СОВРЕМЕННОГО" b="ОБРАЗОВАНИЯ" aClass="chip--white" />
        <div className="tiles-2">
          {BIG.map((t) => (
            <Tile key={t.title} size="lg" img={t.img} title={t.title} arrowSize={18} />
          ))}
        </div>
        <div className="tiles-3">
          {SMALL.map((t, i) => (
            <Tile key={i} size="sm" img={t.img} title={t.title} arrowSize={16} />
          ))}
        </div>
      </div>
    </section>
  )
}
