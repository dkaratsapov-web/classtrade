import { Sticker, Cta } from '../components/common.jsx'
import Contacts from '../components/Contacts.jsx'
import { fmtPrice, pluralGoods } from '../data/products.js'
import { useCart } from '../cart/CartContext.jsx'

export default function CartPage() {
  const { list, setQty, remove, count, total } = useCart()

  return (
    <>
      <section className="about-hero dots-dark">
        <div className="container about-hero__inner">
          <nav className="breadcrumb">
            <a href="#/">Главная</a>
            <span>—</span>
            <span>Корзина</span>
          </nav>
          <Sticker a="ОФОРМЛЕНИЕ" b="ЗАКАЗА" aClass="chip--white" bClass="chip--white" />
        </div>
      </section>

      <section className="section dots">
        <div className="container">
          {count === 0 ? (
            <div className="cart-empty">
              <p>Ваша корзина пуста</p>
              <a href="#/products" className="btn" style={{ textDecoration: 'none' }}>
                Перейти в каталог
              </a>
            </div>
          ) : (
            <div className="cart">
              <div className="cart__items">
                <div className="cart__summary">
                  <span>
                    {count} {pluralGoods(count)}
                  </span>
                  <span className="cart__total">
                    Итого: <b>{fmtPrice(total)} ₽</b>
                  </span>
                </div>

                {list.map((p) => (
                  <div key={p.id} className="cart-row">
                    <div className="cart-row__media">
                      <span>Фото</span>
                    </div>
                    <div className="cart-row__title">{p.title}</div>
                    <div className="qty">
                      <button onClick={() => setQty(p.id, p.qty - 1)} aria-label="Меньше">−</button>
                      <span>{p.qty}</span>
                      <button onClick={() => setQty(p.id, p.qty + 1)} aria-label="Больше">+</button>
                    </div>
                    <div className="cart-row__price">{fmtPrice(p.price * p.qty)} ₽</div>
                    <button className="cart-row__del" onClick={() => remove(p.id)} aria-label="Удалить">
                      ×
                    </button>
                  </div>
                ))}

                <div className="cart__actions">
                  <button className="btn btn--ghost">Скачать файлом</button>
                  <button className="btn btn--ghost">Получить коммерческое предложение</button>
                </div>
              </div>

              {/* Вместо оплаты — форма оформления заказа */}
              <div className="cart__form contact-form">
                <h3>Введите данные для оформления заказа</h3>
                <div className="contact-form__fields">
                  <input placeholder="Название компании*" />
                  <input placeholder="ИНН" />
                  <input placeholder="Телефон*" />
                  <input placeholder="Имя*" />
                  <input placeholder="Email" />
                  <label className="contact-form__agree">
                    <i></i>Я согласен с политикой конфиденциальности сайта
                  </label>
                  <Cta label="Оформить заказ" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Contacts />
    </>
  )
}
