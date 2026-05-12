import { Link } from 'react-router-dom'
import { getProductById } from '../data/products'
import { useCart } from '../context/CartContext'
import { Container } from '../components/layout/Container'
import { CartLineItem } from '../components/cart/CartLineItem'
import { CartSummary } from '../components/cart/CartSummary'

export function CartPage() {
  const { lines, subtotalCents } = useCart()

  const resolved = []
  for (const line of lines) {
    const product = getProductById(line.productId)
    if (product) resolved.push({ product, quantity: line.quantity })
  }

  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Your cart</h1>
      {resolved.length === 0 ? (
        <p className="mt-4 text-zinc-600">
          Your cart is empty.{' '}
          <Link to="/products" className="font-medium text-zinc-900 underline">
            Continue shopping
          </Link>
        </p>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <ul className="rounded-2xl border border-zinc-200 bg-white px-4 sm:px-6">
            {resolved.map(({ product, quantity }) => (
              <CartLineItem key={product.id} product={product} quantity={quantity} />
            ))}
          </ul>
          <CartSummary
            subtotalCents={subtotalCents}
            lineCount={resolved.length}
          />
        </div>
      )}
    </Container>
  )
}
