import { Link } from 'react-router-dom'
import { formatMoney } from '../../lib/formatMoney'

export function CartSummary({ subtotalCents, lineCount }) {
  const shippingCents = lineCount > 0 ? 699 : 0
  const totalCents = subtotalCents + shippingCents

  return (
    <aside className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
      <h2 className="text-lg font-semibold text-zinc-900">Order summary</h2>
      <dl className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between text-zinc-600">
          <dt>Subtotal</dt>
          <dd className="tabular-nums text-zinc-900">{formatMoney(subtotalCents)}</dd>
        </div>
        <div className="flex justify-between text-zinc-600">
          <dt>Shipping (flat)</dt>
          <dd className="tabular-nums text-zinc-900">
            {lineCount > 0 ? formatMoney(shippingCents) : '—'}
          </dd>
        </div>
        <div className="flex justify-between border-t border-zinc-200 pt-3 text-base font-semibold text-zinc-900">
          <dt>Total</dt>
          <dd className="tabular-nums">{formatMoney(totalCents)}</dd>
        </div>
      </dl>
      {lineCount > 0 ? (
        <Link
          to="/checkout"
          className="mt-6 flex w-full items-center justify-center rounded-lg bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
        >
          Proceed to checkout
        </Link>
      ) : (
        <p className="mt-6 rounded-lg border border-dashed border-zinc-300 bg-white px-4 py-3 text-center text-sm text-zinc-500">
          Add items to your cart to continue.
        </p>
      )}
    </aside>
  )
}
