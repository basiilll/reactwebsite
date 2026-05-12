import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { getProductById } from '../data/products'
import { loadJson, saveJson } from '../lib/storage'

const CartContext = createContext(null)

const STORAGE_KEY = 'lines-v1'

export function CartProvider({ children }) {
  const [lines, setLines] = useState(() => loadJson(STORAGE_KEY, []))

  useEffect(() => {
    saveJson(STORAGE_KEY, lines)
  }, [lines])

  const addToCart = useCallback((productId, quantity = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.productId === productId)
      if (existing) {
        return prev.map((l) =>
          l.productId === productId
            ? { ...l, quantity: l.quantity + quantity }
            : l,
        )
      }
      return [...prev, { productId, quantity }]
    })
  }, [])

  const removeLine = useCallback((productId) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId))
  }, [])

  const setQuantity = useCallback((productId, quantity) => {
    const next = Math.max(0, Math.floor(quantity))
    if (next === 0) {
      setLines((prev) => prev.filter((l) => l.productId !== productId))
      return
    }
    setLines((prev) =>
      prev.map((l) =>
        l.productId === productId ? { ...l, quantity: next } : l,
      ),
    )
  }, [])

  const clearCart = useCallback(() => setLines([]), [])

  const { itemCount, subtotalCents } = useMemo(() => {
    let count = 0
    let subtotal = 0
    for (const line of lines) {
      const product = getProductById(line.productId)
      if (!product) continue
      count += line.quantity
      subtotal += product.priceCents * line.quantity
    }
    return { itemCount: count, subtotalCents: subtotal }
  }, [lines])

  const value = useMemo(
    () => ({
      lines,
      addToCart,
      removeLine,
      setQuantity,
      clearCart,
      itemCount,
      subtotalCents,
    }),
    [
      lines,
      addToCart,
      removeLine,
      setQuantity,
      clearCart,
      itemCount,
      subtotalCents,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
