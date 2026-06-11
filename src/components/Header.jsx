import { LogoMark } from './common.jsx'
import { SearchIcon, HeartIcon, CartIcon } from './icons/index.jsx'

export default function Header() {
  return (
    <header className="header">
      <div className="header__bar">
        {/* Левый блок: логотип + кнопка каталога */}
        <div className="header__left">
          <div className="header__seg header__seg--logo">
            <div className="logo">
              <LogoMark />
              <span className="logo__text">CLASS TRADE</span>
            </div>
          </div>
          <button className="catalog-btn">
            <span className="burger">
              <span></span>
              <span></span>
              <span></span>
            </span>
            Каталог
          </button>
        </div>

        {/* Центральный блок: ссылки */}
        <nav className="header__seg nav">
          <a href="#">О компании</a>
          <a href="#">Проекты</a>
          <a href="#">Блог</a>
          <a href="#">Контакты</a>
        </nav>

        {/* Правый блок: поиск, заказать звонок, избранное, корзина */}
        <div className="header__seg header__actions">
          <button className="icon-btn" aria-label="Поиск">
            <SearchIcon />
          </button>
          <button className="call-btn">Заказать звонок</button>
          <button className="icon-btn" aria-label="Избранное">
            <HeartIcon />
          </button>
          <button className="icon-btn" aria-label="Корзина">
            <CartIcon />
          </button>
        </div>
      </div>
    </header>
  )
}
