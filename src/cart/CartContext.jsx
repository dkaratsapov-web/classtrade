import { createContext, useContext, useEffect, useState } from 'react'
import { PRODUCTS } from '../data/products.js'

const CartCtx = createContext(null)
const KEY = 'ct_cart'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(items))
  }, [items])

  const add = (id, qty = 1) =>
    setItems((s) => ({ ...s, [id]: (s[id] || 0) + qty }))

  const setQty = (id, qty) =>
    setItems((s) => {
      const n = { ...s }
      if (qty <= 0) delete n[id]
      else n[id] = qty
      return n
    })

  const remove = (id) =>
    setItems((s) => {
      const n = { ...s }
      delete n[id]
      return n
    })

  const clear = () => setItems({})

  const list = Object.entries(items)
    .map(([id, qty]) => {
      const p = PRODUCTS.find((x) => x.id === id)
      return p ? { ...p, qty } : null
    })
    .filter(Boolean)

  const count = Object.values(items).reduce((a, b) => a + b, 0)
  const total = list.reduce((a, p) => a + p.price * p.qty, 0)

  return (
    <CartCtx.Provider value={{ items, add, setQty, remove, clear, list, count, total }}>
      {children}
    </CartCtx.Provider>
  )
}

export const useCart = () => useContext(CartCtx)
