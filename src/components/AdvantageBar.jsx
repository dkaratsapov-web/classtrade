import { Fragment } from 'react'

// Синяя «бегущая строка» — бесконечная горизонтальная прокрутка (marquee).
// Пункты белым UPPERCASE, между ними иконка-«S».
export default function AdvantageBar({ items, small = false }) {
  // Группа: после каждого пункта — разделитель «S». Две одинаковые копии
  // в треке дают бесшовный цикл (сдвиг на -50% = ширина одной копии).
  const group = (prefix) =>
    items.map((item, i) => (
      <Fragment key={prefix + i}>
        <span className="bar__item">{item}</span>
        <span className="bar__s" aria-hidden="true">S</span>
      </Fragment>
    ))

  return (
    <div className={`bar${small ? ' bar--small' : ''}`}>
      <div className="marquee">
        <div className="marquee__track">
          {group('a')}
          {group('b')}
        </div>
      </div>
    </div>
  )
}
