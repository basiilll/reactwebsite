import { products } from '../data/products'
import { Container } from '../components/layout/Container'
import { ProductGrid } from '../components/product/ProductGrid'

export function ProductListingPage() {
  return (
    <Container>
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">All products</h1>
        <p className="mt-2 text-zinc-600">
          {products.length} items — images from Unsplash for demo purposes.
        </p>
      </header>
      <div className="mt-10">
        <ProductGrid products={products} />
      </div>
    </Container>
  )
}
