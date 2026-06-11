import { useState, useEffect, useRef } from 'react'
import { LogoMark, LeadForm } from './common.jsx'
import { SearchIcon, HeartIcon, CartIcon } from './icons/index.jsx'
import { useCart } from '../cart/CartContext.jsx'
import { SUBS_BY_SLUG } from '../data/catalog.js'

// Поисковый индекс: страницы + все подкатегории каталога
const SEARCH_INDEX = [
  { title: 'О компании', href: 'about', sub: 'Раздел' },
  { title: 'Проекты', href: 'projects', sub: 'Раздел' },
  { title: 'Блог и новости', href: 'news', sub: 'Раздел' },
  { title: 'Контакты', href: 'contacts', sub: 'Раздел' },
  { title: 'Каталог оборудования', href: 'catalog', sub: 'Раздел' },
  { title: 'Корзина', href: 'cart', sub: 'Раздел' },
  { title: 'Товары — Ранний возраст', href: 'products', sub: 'Каталог' },
  ...Object.entries(SUBS_BY_SLUG).map(([slug, v]) => ({
    title: v.title,
    href: `catalog/${slug}`,
    sub: v.category,
  })),
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [callOpen, setCallOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const searchRef = useRef(null)
  const close = () => setMenuOpen(false)
  const openCall = () => {
    setMenuOpen(false)
    setCallOpen(true)
  }
  const closeSearch = () => {
    setSearchOpen(false)
    setQuery('')
  }
  const { count } = useCart()

  const q = query.trim().toLowerCase()
  const results = q
    ? SEARCH_INDEX.filter((r) => r.title.toLowerCase().includes(q)).slice(0, 8)
    : []

  // блокируем прокрутку фона при открытом меню/модалке/поиске
  useEffect(() => {
    document.body.style.overflow = menuOpen || callOpen || searchOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, callOpen, searchOpen])

  // автофокус в поле поиска
  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  // закрытие по Esc
  useEffect(() => {
    if (!callOpen && !menuOpen && !searchOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setCallOpen(false)
        setMenuOpen(false)
        closeSearch()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [callOpen, menuOpen, searchOpen])

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
          <button className="icon-btn" aria-label="Поиск" onClick={() => setSearchOpen(true)}>
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
            <LeadForm
              className="modal__form"
              fields={['Имя', 'Телефон*']}
              submitLabel="Заказать звонок"
            />
          </div>
        </div>
      )}

      {/* Поиск по сайту */}
      {searchOpen && (
        <div className="search-overlay" onClick={closeSearch}>
          <div className="search-panel" onClick={(e) => e.stopPropagation()}>
            <div className="search-box">
              <SearchIcon size={20} stroke="#5b6b80" />
              <input
                ref={searchRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск по сайту…"
              />
              <button className="search-close" aria-label="Закрыть" onClick={closeSearch}>
                ×
              </button>
            </div>
            {q && (
              <div className="search-results">
                {results.length ? (
                  results.map((r) => (
                    <a key={r.href} href={r.href} className="search-result" onClick={closeSearch}>
                      <span className="search-result__title">{r.title}</span>
                      <span className="search-result__sub">{r.sub}</span>
                    </a>
                  ))
                ) : (
                  <div className="search-empty">Ничего не найдено</div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
