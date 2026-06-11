import { useState } from 'react'
import { Sticker } from '../components/common.jsx'
import Contacts from '../components/Contacts.jsx'
import { PRODUCTS, EARLY_FILTERS, fmtPrice } from '../data/products.js'
import { useCart } from '../cart/CartContext.jsx'

function ProductCard({ p }) {
  const { add } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const buy = () => {
    add(p.id, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <div className="product-card">
      <div className="product-card__media">
        <span>Фото товара</span>
      </div>
      <div className="product-card__body">
        <h3>{p.title}</h3>
        <div className="product-card__price">{fmtPrice(p.price)} ₽</div>
        <div className="product-card__status">{p.status}</div>
        <div className="product-card__buy">
          <div className="qty">
            <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Меньше">−</button>
            <span>{qty}</span>
            <button onClick={() => setQty((q) => q + 1)} aria-label="Больше">+</button>
          </div>
          <button className="btn product-card__add" onClick={buy}>
            {added ? 'В корзине ✓' : 'В корзину'}
          </button>
        </div>
        <a href="#" className="product-card__kp">Получить коммерческое предложение</a>
      </div>
    </div>
  )
}

export default function SubcatalogPage() {
  const [filter, setFilter] = useState(0)

  return (
    <>
      <section className="about-hero dots-dark">
        <div className="container about-hero__inner">
          <nav className="breadcrumb">
            <a href=".">Главная</a>
            <span>—</span>
            <a href="catalog">Каталог</a>
            <span>—</span>
            <span>Ранний возраст</span>
          </nav>
          <Sticker a="РАННИЙ" b="ВОЗРАСТ" aClass="chip--white" bClass="chip--white" />
        </div>
      </section>

      <section className="section dots">
        <div className="container">
          <div className="subcatalog">
            <aside className="subcatalog__side">
              <div className="side-title">Категории</div>
              {EARLY_FILTERS.map((f, i) => (
                <button
                  key={f}
                  className={`side-link${i === filter ? ' is-active' : ''}`}
                  onClick={() => setFilter(i)}
                >
                  {f}
                </button>
              ))}
            </aside>

            <div className="subcatalog__main">
              <div className="sort-bar">
                <span className="sort-bar__label">Сортировка:</span>
                <button className="sort-chip is-active">По умолчанию</button>
                <button className="sort-chip">Цена</button>
                <button className="sort-chip">Наличие</button>
              </div>

              <div className="products-grid">
                {PRODUCTS.map((p) => (
                  <ProductCard key={p.id} p={p} />
                ))}
              </div>

              <div className="pagination">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <button key={n} className={`page-btn${n === 1 ? ' is-active' : ''}`}>{n}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contacts />
    </>
  )
}
