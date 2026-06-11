import { useState } from 'react'
import { ArrowIcon } from './icons/index.jsx'

// Маска телефона +7 (XXX) XXX-XX-XX
function formatPhone(value) {
  let digits = value.replace(/\D/g, '')
  if (digits.startsWith('8')) digits = '7' + digits.slice(1)
  if (digits && !digits.startsWith('7')) digits = '7' + digits
  digits = digits.slice(0, 11)
  if (!digits) return ''
  const d = digits.slice(1)
  let res = '+7'
  if (d.length) res += ' (' + d.slice(0, 3)
  if (d.length >= 3) res += ') ' + d.slice(3, 6)
  if (d.length >= 6) res += '-' + d.slice(6, 8)
  if (d.length >= 8) res += '-' + d.slice(8, 10)
  return res
}

// Поле формы — тип/ограничения определяются по названию
function Field({ label }) {
  const lower = label.toLowerCase()
  const isPhone = lower.includes('телефон')
  const isInn = lower.includes('инн')
  const isEmail = lower.includes('mail')
  const [val, setVal] = useState('')

  if (isPhone) {
    return (
      <input
        placeholder={label}
        inputMode="tel"
        value={val}
        onChange={(e) => setVal(formatPhone(e.target.value))}
      />
    )
  }
  if (isInn) {
    return (
      <input
        placeholder={label}
        inputMode="numeric"
        value={val}
        onChange={(e) => setVal(e.target.value.replace(/\D/g, '').slice(0, 12))}
      />
    )
  }
  if (isEmail) {
    return <input placeholder={label} type="email" inputMode="email" />
  }
  return <input placeholder={label} />
}

// Форма заявки: поля + рабочая галочка согласия (по умолчанию включена,
// можно снять; без неё кнопка отправки заблокирована)
export function LeadForm({ fields, submitLabel, btnClass = 'btn', className = 'contact-form__fields' }) {
  const [agree, setAgree] = useState(true)
  return (
    <div className={className}>
      {fields.map((f) => (
        <Field key={f} label={f} />
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
