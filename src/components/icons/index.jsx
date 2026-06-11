// Тонкие линейные SVG-иконки (stroke ~2px), монохром — по памятке CLASS TRADE.

export function ArrowIcon({ size = 22, stroke = '#fff', width = 2.2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={width}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function SearchIcon({ size = 18, stroke = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4-4" />
    </svg>
  )
}

export function HeartIcon({ size = 18, stroke = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2">
      <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5.5 6 5.5c2 0 3.2 1.3 4 2.5.8-1.2 2-2.5 4-2.5 3.5 0 5 3.5 3.5 6.5C19 16.5 12 21 12 21z" />
    </svg>
  )
}

export function CartIcon({ size = 18, stroke = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2">
      <path d="M6 7h13l-1.5 9.5a2 2 0 0 1-2 1.7H9.5a2 2 0 0 1-2-1.7L6 4H3" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="16" cy="20" r="1" />
    </svg>
  )
}
