import { useState } from 'react'

const REQUISITES = [
  ['Полное наименование', 'ООО «КЛАСС ТРЕЙД»'],
  ['ИНН', '6900000000'],
  ['КПП', '690000000'],
  ['ОГРН', '1006900000000'],
  ['Юридический адрес', 'Город, улица, дом, офис'],
  ['Расчётный счёт', '40700000000000000000'],
  ['Банк', 'НАЗВАНИЕ БАНКА'],
  ['БИК', '040000000'],
  ['Корр. счёт', '30100000000000000000'],
]

// Кнопка + модалка реквизитов (имитация)
export default function Requisites({ btnClass = 'btn btn--ghost', label = 'Смотреть реквизиты' }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className={btnClass} onClick={() => setOpen(true)}>
        {label}
      </button>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal modal--wide" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" aria-label="Закрыть" onClick={() => setOpen(false)}>
              ×
            </button>
            <h3>Реквизиты компании</h3>
            <dl className="requisites">
              {REQUISITES.map(([k, v]) => (
                <div key={k} className="requisites__row">
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <button className="btn" style={{ marginTop: '20px' }}>Скачать реквизиты</button>
          </div>
        </div>
      )}
    </>
  )
}
