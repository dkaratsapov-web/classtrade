import { Sticker } from './common.jsx'

const CARDS = [
  {
    title: 'Широкий ассортимент оборудования',
    text: 'Наличие широкого ассортимента продукции, который покрывает все потребности учебных заведений, вплоть до уникального и специализированного оборудования',
  },
  {
    title: 'Высокий уровень сервиса и поддержки',
    text: 'Помогаем не только подобрать оборудование, но и обеспечиваем доставку, обучение персонала и дальнейшее сервисное обслуживание',
    blue: true,
  },
  {
    title: 'Оптовые цены и гибкие решения',
    text: 'Предлагаем учебным заведениям возможность покупать оборудование по сниженным оптовым ценам, что является значительным экономическим преимуществом',
  },
]

export default function Advantages() {
  return (
    <section className="section dots">
      {/* Фирменная S-лента — декоративный фоновый слой */}
      <svg
        className="ribbon"
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
        style={{ top: '40px', height: '520px' }}
      >
        <path
          d="M-60,260 C 360,40 520,460 760,300 C 980,150 1080,520 1520,240"
          stroke="#036aff"
          strokeWidth="150"
          fill="none"
          strokeLinecap="round"
          opacity=".95"
        />
        <path
          d="M-60,300 C 360,80 520,500 760,340 C 980,190 1080,560 1520,280"
          stroke="#ffffff"
          strokeWidth="60"
          fill="none"
          strokeLinecap="round"
          opacity=".9"
        />
      </svg>

      <div className="container section--inner">
        <Sticker a="ПРЕИМУЩЕСТВА" b="СОТРУДНИЧЕСТВА" />
        <div className="cards-3">
          {CARDS.map((c) => (
            <div key={c.title} className={`adv-card${c.blue ? ' adv-card--blue' : ''}`}>
              <div className={`adv-toggle${c.blue ? ' adv-toggle--blue' : ''}`}>
                <i></i>
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
