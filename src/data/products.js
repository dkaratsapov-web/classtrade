// Товары подкаталога «Ранний возраст» (по PDF). Цены — из макета.
export const PRODUCTS = [
  { id: 'polidron-group', title: 'Набор ПОЛИДРОН (комплект на группу)', price: 34500, status: 'Под заказ' },
  { id: 'polidron-combo', title: 'Набор ПОЛИДРОН Комбинированный', price: 44400, status: 'Под заказ' },
  { id: 'polidron-wheels', title: 'Дополнительный набор ПОЛИДРОН «Колеса»', price: 4200, status: 'Под заказ' },
  { id: 'stem-lab', title: 'Весёлая лаборатория: STEM', price: 18900, status: 'Под заказ' },
  { id: 'robo-module', title: 'Робототехнический модуль', price: 27500, status: 'Под заказ' },
  { id: 'magnet-pp', title: 'Магнитные конструкторы Popular Playthings', price: 12300, status: 'Под заказ' },
  { id: 'cut-cards', title: 'Разрезные карточки (комплект)', price: 1900, status: 'Под заказ' },
  { id: 'demo-tables', title: 'Демонстрационные таблицы', price: 3400, status: 'Под заказ' },
  { id: 'craft-base', title: 'Комплекты основ для творчества', price: 5600, status: 'Под заказ' },
]

// Боковые категории подкаталога (из макета)
export const EARLY_FILTERS = [
  'Все',
  'Веселая лаборатория: STEM',
  'Робототехнический модуль',
  'Разрезные карточки',
  'Динамические пособия со шнурком',
  'Разноцветные окошки',
  'Демонстрационные таблицы',
  'Дошколка Медиа',
  'Средства обратной связи (веера)',
  'Материалы для конструирования и моделирования',
  'Комплекты карточек с заданиями',
  'Комплекты основ для творчества',
  'Магнитные конструкторы Popular Playthings',
]

export const fmtPrice = (n) => n.toLocaleString('ru-RU')

export const pluralGoods = (n) => {
  const a = n % 10
  const b = n % 100
  if (a === 1 && b !== 11) return 'товар'
  if (a >= 2 && a <= 4 && (b < 10 || b >= 20)) return 'товара'
  return 'товаров'
}
