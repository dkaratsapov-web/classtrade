import { Fragment } from 'react'
import { Sticker } from './common.jsx'

// Логотипы-заглушки бегут горизонтально (медленный авто-скролл).
// REPS копий + сдвиг ровно на одну копию (-25%) — бесшовно, без пустот.
const REPS = 4
const PER_GROUP = 6

export default function Partners() {
  return (
    <section className="section dots">
      <div className="container">
        <Sticker a="НАШИ" b="ПАРТНЁРЫ" />
      </div>
      <div className="partners-marquee">
        <div className="partners-track">
          {Array.from({ length: REPS }).map((_, k) => (
            <Fragment key={k}>
              {Array.from({ length: PER_GROUP }).map((_, i) => (
                <div key={i} className="partner">LOGO</div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
