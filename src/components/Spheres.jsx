import { useState } from 'react'
import { Sticker } from './common.jsx'

const SPHERES = [
  {
    name: 'МЕДИЦИНА',
    desc: 'Оснащаем медицинские учебные заведения, симуляционные центры и исследовательские лаборатории. Поставляем диагностическое и учебное оборудование, мебель для кабинетов и лабораторий, а также расходные материалы — всё необходимое для подготовки квалифицированных специалистов и проведения научных исследований.',
    img: 'assets/room-office.jpg',
  },
  {
    name: 'ОБРАЗОВАНИЕ',
    desc: 'Комплексно оснащаем учебные заведения всех уровней — от детских садов до вузов. Классы, кабинеты, лаборатории и зоны отдыха получают современную мебель, интерактивное и лабораторное оборудование, которое делает процесс обучения наглядным, безопасным и по-настоящему эффективным.',
    img: 'assets/room-map.jpg',
  },
  {
    name: 'КУЛЬТУРА',
    desc: 'Оборудуем учреждения культуры и учебные заведения искусств: музыкальные и художественные школы, театры, музеи и концертные залы. Поставляем сценическое, аудио-визуальное и выставочное оборудование, специализированную мебель и инвентарь для творческих направлений.',
    img: 'assets/room-tv.jpg',
  },
  {
    name: 'СПОРТ',
    desc: 'Оснащаем спортивные институты, школы и заведения с физкультурными направлениями. Поставляем спортивный инвентарь, тренажёры, покрытия и оборудование для залов и площадок — всё для безопасных тренировок и полноценного учебно-тренировочного процесса.',
    img: 'assets/room-sport.jpg',
  },
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
