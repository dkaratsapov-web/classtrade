import { LogoMark } from './common.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__logo">
            <LogoMark />
            <img className="logo__text logo__wm" src="wordmark.png" alt="CLASS TRADE" />
          </div>
          <p className="footer__copy">Весь контент на этом сайте защищён авторским правом</p>
        </div>
        <div className="footer__right">
          <nav className="footer__nav">
            <a href="catalog">Каталог</a>
            <a href="about">О компании</a>
            <a href="projects">Проекты</a>
            <a href="news">Блог</a>
            <a href="contacts">Контакты</a>
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
