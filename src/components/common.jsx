import { ArrowIcon } from './icons/index.jsx'

// Двухцветный стикер-заголовок (две диагональные плашки)
export function Sticker({ a, b, aClass = 'chip--navy', bClass = 'chip--navy' }) {
  return (
    <div className="sticker">
      <span className={`chip ${aClass} a`}>{a}</span>
      <span className={`chip ${bClass} b`}>{b}</span>
    </div>
  )
}

// Pill-кнопка + парная круглая кнопка со стрелкой
export function Cta({ label, btnClass = 'btn', arrowClass = 'btn-arrow', arrowStroke = '#fff' }) {
  return (
    <div className="cta">
      <button className={btnClass}>{label}</button>
      <button className={arrowClass} aria-label="Далее">
        <ArrowIcon size={20} stroke={arrowStroke} />
      </button>
    </div>
  )
}

// Иконка-«S» (логотип) в синем скруглённом квадрате
export function LogoMark({ className = 'logo__mark' }) {
  return <div className={className}>S</div>
}
