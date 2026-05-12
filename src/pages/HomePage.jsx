import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { Container } from '../components/layout/Container'
import { ProductGrid } from '../components/product/ProductGrid'

const featured = products.slice(0, 3)

export function HomePage() {
  return (
    <Container>
      <section className="grid gap-10 rounded-3xl bg-zinc-900 px-8 py-14 text-white sm:px-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
            New season
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Everyday goods, considered.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-300">
            A small demo catalog with cart persistence and a simple checkout
            flow — no payment processor wired up.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Shop the collection
            </Link>
            <Link
              to="/cart"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-500 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View cart
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-800">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&h=675&fit=crop"
            alt=""
            className="h-full w-full object-cover opacity-90"
          />
        </div>
      </section>

      <section className="mt-16">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Featured</h2>
            <p className="mt-1 text-zinc-600">A few highlights from the shop.</p>
          </div>
          <Link
            to="/products"
            className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline"
          >
            View all products
          </Link>
        </div>
        <div className="mt-8">
          <ProductGrid products={featured} />
        </div>
      </section>
    </Container>
  )
}
