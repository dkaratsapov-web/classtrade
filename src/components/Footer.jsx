import { LogoMark } from './common.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__logo">
            <LogoMark />
            <span className="logo__text">CLASS TRADE</span>
          </div>
          <p className="footer__copy">Весь контент на этом сайте защищён авторским правом</p>
        </div>
        <div className="footer__right">
          <nav className="footer__nav">
            <a href="#">Каталог</a>
            <a href="#">О компании</a>
            <a href="#">Проекты</a>
            <a href="#">Блог</a>
            <a href="#">Контакты</a>
          </nav>
          <div className="footer__legal">
            <a href="#">Договор-оферта</a>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Разработка сайта</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
