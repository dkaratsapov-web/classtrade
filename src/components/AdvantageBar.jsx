import { Fragment } from 'react'

// Синяя «бегущая строка» — бесконечная горизонтальная прокрутка (marquee).
// Несколько одинаковых копий контента + сдвиг ровно на ОДНУ копию (-100%/REPS),
// чтобы «хвост» ленты никогда не попадал в кадр (нет пустых зазоров на любой ширине).
const REPS = 6

export default function AdvantageBar({ items, small = false }) {
  const group = (prefix) =>
    items.map((item, i) => (
      <Fragment key={prefix + '-' + i}>
        <span className="bar__item">{item}</span>
        <img className="bar__s" src="logo-mark.png" alt="" aria-hidden="true" />
      </Fragment>
    ))

  return (
    <div className={`bar${small ? ' bar--small' : ''}`}>
      <div className="marquee">
        <div className="marquee__track">
          {Array.from({ length: REPS }).map((_, k) => (
            <Fragment key={k}>{group(k)}</Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
