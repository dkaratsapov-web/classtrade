import { useState, useEffect } from 'react'
import { LogoMark, Cta } from './common.jsx'
import { SearchIcon, HeartIcon, CartIcon } from './icons/index.jsx'
import { useCart } from '../cart/CartContext.jsx'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [callOpen, setCallOpen] = useState(false)
  const close = () => setMenuOpen(false)
  const openCall = () => {
    setMenuOpen(false)
    setCallOpen(true)
  }
  const { count } = useCart()

  // блокируем прокрутку фона при открытом меню/модалке
  useEffect(() => {
    document.body.style.overflow = menuOpen || callOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, callOpen])

  // закрытие модалки по Esc
  useEffect(() => {
    if (!callOpen && !menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setCallOpen(false)
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [callOpen, menuOpen])

  return (
    <header className="header">
      <div className="header__bar">
        {/* Левый блок: логотип + кнопка каталога */}
        <div className="header__left">
          <a href="." className="header__seg header__seg--logo" onClick={close}>
            <div className="logo">
              <LogoMark />
              <img className="logo__text logo__wm" src="wordmark.png" alt="CLASS TRADE" />
            </div>
          </a>
          <a href="catalog" className="catalog-btn" onClick={close}>
            <span className="burger">
              <span></span>
              <span></span>
              <span></span>
            </span>
            Каталог
          </a>
        </div>

        {/* Центральный блок: ссылки (десктоп) */}
        <nav className="header__seg nav">
          <a href="about">О компании</a>
          <a href="projects">Проекты</a>
          <a href="news">Блог</a>
          <a href="contacts">Контакты</a>
        </nav>

        {/* Правый блок: поиск, заказать звонок, избранное, корзина + меню (моб.) */}
        <div className="header__seg header__actions">
          <button className="icon-btn" aria-label="Поиск">
            <SearchIcon />
          </button>
          <button className="call-btn" onClick={openCall}>Заказать звонок</button>
          <button className="icon-btn" aria-label="Избранное">
            <HeartIcon />
          </button>
          <a href="cart" className="cart-link" aria-label="Корзина" onClick={close}>
            <CartIcon />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </a>
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
          <a href="about" onClick={close}>О компании</a>
          <a href="projects" onClick={close}>Проекты</a>
          <a href="news" onClick={close}>Блог</a>
          <a href="contacts" onClick={close}>Контакты</a>
          <button className="call-btn mobile-menu__call" onClick={openCall}>
            Заказать звонок
          </button>
        </div>
      )}

      {/* Поп-ап «Заказать звонок» */}
      {callOpen && (
        <div className="modal-overlay" onClick={() => setCallOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" aria-label="Закрыть" onClick={() => setCallOpen(false)}>
              ×
            </button>
            <h3>Заказать звонок</h3>
            <a className="modal__phone" href="tel:+74822111111">+7 (4822) 111-11-11</a>
            <p className="modal__sub">
              Оставьте номер — перезвоним в течение 15 минут и проконсультируем по
              всем вопросам.
            </p>
            <div className="modal__form">
              <input placeholder="Имя" />
              <input placeholder="Телефон*" />
              <label className="contact-form__agree">
                <i></i>Я согласен с политикой конфиденциальности сайта
              </label>
              <Cta label="Заказать звонок" noArrow />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
