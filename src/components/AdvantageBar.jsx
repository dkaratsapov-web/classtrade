import { Fragment } from 'react'

// Синяя «бегущая строка» — пункты белым UPPERCASE, между ними иконка-«S»
export default function AdvantageBar({ items, small = false }) {
  return (
    <div className={`bar${small ? ' bar--small' : ''}`}>
      <div className="bar__inner">
        {items.map((item, i) => (
          <Fragment key={i}>
            <span>{item}</span>
            {i < items.length - 1 && <span className="bar__s">S</span>}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
