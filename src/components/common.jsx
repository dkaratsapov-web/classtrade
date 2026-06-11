import { useState } from 'react'
import { ArrowIcon } from './icons/index.jsx'

// Форма заявки: поля + рабочая галочка согласия (по умолчанию включена,
// можно снять; без неё кнопка отправки заблокирована)
export function LeadForm({ fields, submitLabel, btnClass = 'btn', className = 'contact-form__fields' }) {
  const [agree, setAgree] = useState(true)
  return (
    <div className={className}>
      {fields.map((f) => (
        <input key={f} placeholder={f} />
      ))}
      <label className="agree">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <span className="agree__box" aria-hidden="true" />
        <span>Я согласен с политикой конфиденциальности сайта</span>
      </label>
      <button className={btnClass} disabled={!agree}>
        {submitLabel}
      </button>
    </div>
  )
}

// Двухцветный стикер-заголовок (две диагональные плашки)
export function Sticker({ a, b, aClass = 'chip--navy', bClass = 'chip--navy' }) {
  return (
    <div className="sticker">
      <span className={`chip ${aClass} a`}>{a}</span>
      <span className={`chip ${bClass} b`}>{b}</span>
    </div>
  )
}

// Pill-кнопка + парная круглая кнопка со стрелкой (стрелку можно убрать — noArrow)
export function Cta({ label, btnClass = 'btn', arrowClass = 'btn-arrow', arrowStroke = '#fff', noArrow = false }) {
  return (
    <div className="cta">
      <button className={btnClass}>{label}</button>
      {!noArrow && (
        <button className={arrowClass} aria-label="Далее">
          <ArrowIcon size={20} stroke={arrowStroke} />
        </button>
      )}
    </div>
  )
}

// Фирменный знак CLASS TRADE (книга/диалоговое окно) — оригинал из брендбука
export function LogoMark({ className = 'logo__mark' }) {
  return (
    <span className={className} aria-hidden="true">
      <img src="logo-mark.png" alt="CLASS TRADE" />
    </span>
  )
}
