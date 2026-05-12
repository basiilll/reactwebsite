import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { Price } from '../product/Price'
import { Button } from '../ui/Button'
import { QuantityStepper } from '../ui/QuantityStepper'

export function CartLineItem({ product, quantity }) {
  const { setQuantity, removeLine } = useCart()

  return (
    <li className="flex gap-4 border-b border-zinc-100 py-4 last:border-0">
      <Link
        to={`/products/${product.slug}`}
        className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-zinc-100"
      >
        <img
          src={product.image}
          alt=""
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <Link
            to={`/products/${product.slug}`}
            className="font-semibold text-zinc-900 hover:underline"
          >
            {product.name}
          </Link>
          <p className="text-sm text-zinc-500">{product.category}</p>
          <p className="mt-1 text-sm text-zinc-600 sm:hidden">
            <Price cents={product.priceCents * quantity} />
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:flex-col sm:items-end lg:flex-row lg:items-center">
          <QuantityStepper
            value={quantity}
            min={1}
            onChange={(n) => setQuantity(product.id, n)}
            compact
          />
          <p className="hidden text-sm font-semibold tabular-nums text-zinc-900 sm:block">
            <Price cents={product.priceCents * quantity} />
          </p>
          <Button
            variant="ghost"
            className="text-sm text-red-600 hover:bg-red-50 hover:text-red-700"
            onClick={() => removeLine(product.id)}
          >
            Remove
          </Button>
        </div>
      </div>
    </li>
  )
}
