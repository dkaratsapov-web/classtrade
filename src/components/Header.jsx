import { useState } from 'react'
import { LogoMark } from './common.jsx'
import { SearchIcon, HeartIcon, CartIcon } from './icons/index.jsx'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="header__bar">
        {/* Левый блок: логотип + кнопка каталога */}
        <div className="header__left">
          <a href="#/" className="header__seg header__seg--logo" onClick={close}>
            <div className="logo">
              <LogoMark />
              <span className="logo__text">CLASS TRADE</span>
            </div>
          </a>
          <button className="catalog-btn">
            <span className="burger">
              <span></span>
              <span></span>
              <span></span>
            </span>
            Каталог
          </button>
        </div>

        {/* Центральный блок: ссылки (десктоп) */}
        <nav className="header__seg nav">
          <a href="#/about">О компании</a>
          <a href="#/projects">Проекты</a>
          <a href="#/news">Блог</a>
          <a href="#/contacts">Контакты</a>
        </nav>

        {/* Правый блок: поиск, заказать звонок, избранное, корзина + меню (моб.) */}
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
          <button
            className="menu-toggle"
            aria-label="Меню"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="burger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Выпадающее меню для узких экранов */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#/about" onClick={close}>О компании</a>
          <a href="#/projects" onClick={close}>Проекты</a>
          <a href="#/news" onClick={close}>Блог</a>
          <a href="#/contacts" onClick={close}>Контакты</a>
          <button className="call-btn mobile-menu__call" onClick={close}>
            Заказать звонок
          </button>
        </div>
      )}
    </header>
  )
}
