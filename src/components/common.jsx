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

// Фирменный знак — синий скруглённый квадрат с белой «S» (SVG, чёткий на любом размере)
export function LogoMark({ className = 'logo__mark' }) {
  return (
    <span className={className} aria-hidden="true">
      <svg viewBox="0 0 64 64" width="100%" height="100%">
        <rect width="64" height="64" rx="16" fill="#036aff" />
        <path
          d="M43.5 23.2c-2.7-3.2-6.6-4.9-11-4.9-6.2 0-10.6 3.1-10.6 7.9 0 10.2 22.4 5.7 22.4 16 0 5-4.8 8.5-11.2 8.5-5 0-9.4-1.9-12.4-5.4"
          fill="none"
          stroke="#fff"
          strokeWidth="6.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
