import { Sticker } from './common.jsx'

// 10 плиток-заглушек LOGO (реальные логотипы заменит заказчик)
export default function Partners() {
  return (
    <section className="section dots">
      <div className="container">
        <Sticker a="НАШИ" b="ПАРТНЁРЫ" />
        <div className="partners">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="partner">
              LOGO
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
