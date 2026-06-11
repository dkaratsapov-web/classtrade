import { Sticker, LeadForm } from '../components/common.jsx'
import AdvantageBar from '../components/AdvantageBar.jsx'
import Contacts from '../components/Contacts.jsx'

const ADVANTAGES = [
  {
    title: 'Комплексный подход',
    text: 'Обеспечиваем полное оснащение учреждений всем необходимым оборудованием — от проектирования до установки и дальнейшего технического обслуживания.',
  },
  {
    title: 'Соответствие 44-ФЗ',
    text: 'Все процессы полностью соответствуют требованиям Федерального закона №44-ФЗ, что обеспечивает прозрачность и законность всех процедур закупок.',
  },
  {
    title: 'Квалифицированная команда',
    text: 'Наши специалисты обладают многолетним опытом в сфере проектирования и поставок оборудования для различных учреждений.',
  },
  {
    title: 'Индивидуальный подход',
    text: 'Учитываем все потребности клиента и разрабатываем решения, максимально соответствующие их уникальным требованиям.',
  },
]

function Check() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* ===== Интро ===== */}
      <section className="about-hero dots-dark">
        <div className="container about-hero__inner">
          <nav className="breadcrumb">
            <a href=".">Главная</a>
            <span>—</span>
            <span>О компании</span>
          </nav>
          <Sticker a="О КОМПАНИИ" b="CLASS TRADE" aClass="chip--white" bClass="chip--white" />
          <p className="about-hero__tagline">
            Ведущий поставщик современного и высококачественного оборудования для
            образовательных и культурных учреждений, домов культуры, больниц и
            спортивных центров
          </p>
          <p className="about-hero__text">
            Наша компания специализируется на комплексном оснащении и модернизации
            объектов согласно требованиям законодательства Российской Федерации, в
            частности по 44-ФЗ. Мы гордимся своим профессионализмом и многолетним
            опытом в обеспечении наших клиентов всем необходимым для создания
            комфортных и безопасных условий. В нашем арсенале — продукты от лучших
            мировых и отечественных производителей, которые помогают реализовывать
            проекты любой сложности и масштаба.
          </p>
        </div>
      </section>

      {/* ===== Преимущества ===== */}
      <section className="section dots">
        <svg
          className="ribbon"
          viewBox="0 0 1440 520"
          preserveAspectRatio="none"
          style={{ top: '60px', height: '520px' }}
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
          <Sticker a="НАШИ" b="ПРЕИМУЩЕСТВА" />
          <div className="about-cards">
            {ADVANTAGES.map((c) => (
              <div key={c.title} className="about-card">
                <span className="about-card__icon">
                  <Check />
                </span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdvantageBar
        items={[
          'Комплексный подход',
          'Соответствие 44-ФЗ',
          'Квалифицированная команда',
          'Индивидуальный подход',
        ]}
      />

      {/* ===== Приглашение к сотрудничеству ===== */}
      <section className="section section--tight dots">
        <div className="container">
          <Sticker a="ПРИГЛАШАЕМ" b="К СОТРУДНИЧЕСТВУ" bClass="chip--white" />
          <p className="about-coop__sub">
            Приглашаем к сотрудничеству поставщиков оборудования. Оставьте заявку —
            мы перезвоним и проконсультируем по всем вопросам.
          </p>
          <div className="contact-form about-form">
            <LeadForm
              fields={['Имя', 'Телефон', 'E-mail', 'Комментарий']}
              submitLabel="Оставить заявку"
            />
          </div>
        </div>
      </section>

      {/* ===== Благодарственные письма ===== */}
      <section className="section section--tight dots">
        <div className="container">
          <Sticker a="БЛАГОДАРСТВЕННЫЕ" b="ПИСЬМА" bClass="chip--white" />
          <div className="letters">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="letter">
                <span className="letter__label">Благодарственное письмо</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Контакты (общий блок) ===== */}
      <Contacts />
    </>
  )
}
