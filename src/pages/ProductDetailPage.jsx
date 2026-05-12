import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getProductBySlug } from '../data/products'
import { useCart } from '../context/CartContext'
import { Container } from '../components/layout/Container'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { QuantityStepper } from '../components/ui/QuantityStepper'
import { Price } from '../components/product/Price'

export function ProductDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const product = useMemo(
    () => (slug ? getProductBySlug(slug) : undefined),
    [slug],
  )

  if (!product) {
    return (
      <Container>
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <p className="mt-2 text-zinc-600">
          We could not find a product for{' '}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">{slug}</code>.
        </p>
        <Button className="mt-6" onClick={() => navigate('/products')}>
          Back to shop
        </Button>
      </Container>
    )
  }

  const handleAdd = () => {
    addToCart(product.id, qty)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Container>
      <div className="mb-6 text-sm text-zinc-500">
        <Link to="/products" className="hover:text-zinc-800">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-800">{product.name}</span>
      </div>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
          <img
            src={product.image}
            alt=""
            className="aspect-square w-full object-cover"
          />
        </div>
        <div>
          <Badge>{product.category}</Badge>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            {product.name}
          </h1>
          <p className="mt-4 text-lg text-zinc-600">{product.description}</p>
          <p className="mt-6 text-2xl">
            <Price cents={product.priceCents} />
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuantityStepper value={qty} min={1} onChange={setQty} />
            <Button onClick={handleAdd}>
              {added ? 'Added to cart' : 'Add to cart'}
            </Button>
            <Link
              to="/cart"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
            >
              View cart
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}
