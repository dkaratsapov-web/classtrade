import { useState } from 'react'
import { Sticker } from './common.jsx'

const SPHERES = [
  { name: 'МЕДИЦИНА', desc: 'Медицинские учебные заведения и исследовательские центры', img: 'assets/room-office.png' },
  { name: 'ОБРАЗОВАНИЕ', desc: 'Учебные заведения всех уровней', img: 'assets/room-map.png' },
  { name: 'КУЛЬТУРА', desc: 'Культурные учреждения и учебные заведения искусств', img: 'assets/room-tv.png' },
  { name: 'СПОРТ', desc: 'Спортивные институты и заведения с физкультурными направлениями', img: 'assets/room-sport.png' },
]

export default function Spheres() {
  // Активный пункт по умолчанию — второй (как в эталоне)
  const [active, setActive] = useState(1)

  return (
    <section className="section section--tight dots" style={{ paddingBottom: '80px' }}>
      <div className="container">
        <Sticker a="СФЕРЫ ВНЕДРЕНИЯ" b="ОБОРУДОВАНИЯ" />

        <div className="spheres">
          <div className="spheres__photo">
            <img src={SPHERES[active].img} alt="" />
          </div>
          <div className="spheres__list">
            {SPHERES.map((s, i) => (
              <div key={s.name} className="sphere-item" onClick={() => setActive(i)}>
                <div
                  className="sphere-item__name"
                  style={{ color: i === active ? 'var(--blue)' : 'var(--navy)' }}
                >
                  {s.name}
                </div>
                {i === active && <div className="sphere-item__desc">{s.desc}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
