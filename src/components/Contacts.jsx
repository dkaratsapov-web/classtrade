import { Sticker, Cta } from './common.jsx'

export default function Contacts() {
  return (
    <section className="section--navy dots-dark">
      <div className="container section--inner">
        <Sticker a="НАШИ" b="КОНТАКТЫ" aClass="chip--white" bClass="chip--white" />

        <div className="contacts">
          <div className="contact-form">
            <h3>Оставьте заявку и мы свяжемся с вами</h3>
            <div className="contact-form__fields">
              <input placeholder="Имя" />
              <input placeholder="Телефон" />
              <input placeholder="E-mail" />
              <input placeholder="Комментарий" />
              <label className="contact-form__agree">
                <i></i>Я согласен с политикой конфиденциальности сайта
              </label>
              <Cta label="Оставить заявку" />
            </div>
          </div>

          <div className="contact-info">
            {/* Белая S-лента */}
            <svg
              viewBox="0 0 500 600"
              preserveAspectRatio="none"
              style={{
                position: 'absolute',
                right: '-80px',
                top: '-30px',
                width: '460px',
                height: '660px',
                pointerEvents: 'none',
              }}
            >
              <path
                d="M120,30 C 420,120 360,290 110,320 C 420,350 470,540 110,600"
                stroke="#fff"
                strokeWidth="64"
                fill="none"
                strokeLinecap="round"
                opacity=".85"
              />
            </svg>

            <div className="contact-info__body">
              <div>
                <div className="contact-info__label">Телефон</div>
                <div className="contact-info__value contact-info__value--big">+7 (4822) 00-00-00</div>
              </div>
              <div>
                <div className="contact-info__label">E-mail</div>
                <div className="contact-info__value">HELLO@CLASSTRADE.RU</div>
              </div>
              <div>
                <div className="contact-info__label">Адрес офиса</div>
                <div className="contact-info__value">ГОРОД, УЛИЦА, ДОМ</div>
              </div>
              <div>
                <div className="contact-info__label">Для сотрудничества</div>
                <div className="contact-info__value">SOTR@CLASSTRADE.RU</div>
                <div className="contact-info__value" style={{ marginTop: '6px' }}>+7 (4822) 00-12-12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
