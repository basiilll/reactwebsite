import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatMoney } from '../lib/formatMoney'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'

export function CheckoutPage() {
  const { lines, subtotalCents, clearCart } = useCart()
  const [submitted, setSubmitted] = useState(false)
  const shippingCents = lines.length > 0 ? 699 : 0
  const totalCents = subtotalCents + shippingCents

  const handleSubmit = (e) => {
    e.preventDefault()
    clearCart()
    setSubmitted(true)
  }

  if (lines.length === 0 && !submitted) {
    return (
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">Checkout</h1>
        <p className="mt-4 text-zinc-600">
          Your cart is empty.{' '}
          <Link to="/products" className="font-medium text-zinc-900 underline">
            Browse products
          </Link>
        </p>
      </Container>
    )
  }

  if (submitted) {
    return (
      <Container className="max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight">Thank you</h1>
        <p className="mt-4 text-zinc-600">
          Your demo order is placed. No payment was processed — this is a static
          frontend sample.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
        >
          Continue shopping
        </Link>
      </Container>
    )
  }

  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Checkout</h1>
      <p className="mt-2 text-zinc-600">
        Enter shipping details. Submitting clears the cart (demo only).
      </p>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8"
        >
          <div>
            <label htmlFor="fullName" className="text-sm font-medium text-zinc-800">
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              required
              autoComplete="name"
              className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none ring-zinc-900/10 focus:border-zinc-900 focus:ring-4"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-zinc-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none ring-zinc-900/10 focus:border-zinc-900 focus:ring-4"
            />
          </div>
          <div>
            <label htmlFor="address" className="text-sm font-medium text-zinc-800">
              Address
            </label>
            <input
              id="address"
              name="address"
              required
              autoComplete="street-address"
              className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none ring-zinc-900/10 focus:border-zinc-900 focus:ring-4"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="city" className="text-sm font-medium text-zinc-800">
                City
              </label>
              <input
                id="city"
                name="city"
                required
                autoComplete="address-level2"
                className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none ring-zinc-900/10 focus:border-zinc-900 focus:ring-4"
              />
            </div>
            <div>
              <label htmlFor="postal" className="text-sm font-medium text-zinc-800">
                Postal code
              </label>
              <input
                id="postal"
                name="postal"
                required
                autoComplete="postal-code"
                className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none ring-zinc-900/10 focus:border-zinc-900 focus:ring-4"
              />
            </div>
          </div>
          <div className="pt-2">
            <Button type="submit" className="w-full sm:w-auto">
              Place order ({formatMoney(totalCents)})
            </Button>
          </div>
        </form>
        <aside className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-sm">
          <h2 className="text-base font-semibold text-zinc-900">Totals</h2>
          <dl className="mt-4 space-y-2 text-zinc-600">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd className="tabular-nums text-zinc-900">{formatMoney(subtotalCents)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Shipping</dt>
              <dd className="tabular-nums text-zinc-900">{formatMoney(shippingCents)}</dd>
            </div>
            <div className="flex justify-between border-t border-zinc-200 pt-2 font-semibold text-zinc-900">
              <dt>Total</dt>
              <dd className="tabular-nums">{formatMoney(totalCents)}</dd>
            </div>
          </dl>
          <Link
            to="/cart"
            className="mt-6 inline-block text-sm font-medium text-zinc-900 underline-offset-4 hover:underline"
          >
            Edit cart
          </Link>
        </aside>
      </div>
    </Container>
  )
}
