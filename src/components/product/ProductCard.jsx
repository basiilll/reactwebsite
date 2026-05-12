import { Link } from 'react-router-dom'
import { Badge } from '../ui/Badge'
import { Price } from './Price'

export function ProductCard({ product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link to={`/products/${product.slug}`} className="relative aspect-square overflow-hidden bg-zinc-100">
        <img
          src={product.image}
          alt=""
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute left-3 top-3">
          <Badge>{product.category}</Badge>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link to={`/products/${product.slug}`}>
          <h3 className="text-base font-semibold text-zinc-900 group-hover:underline">
            {product.name}
          </h3>
        </Link>
        <p className="line-clamp-2 flex-1 text-sm text-zinc-600">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-1">
          <Price cents={product.priceCents} />
          <Link
            to={`/products/${product.slug}`}
            className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  )
}
