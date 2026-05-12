import { Container } from './Container'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Northline Goods. Demo storefront — no real
          checkout.
        </p>
        <p className="text-sm text-zinc-500">
          Built with React, Vite, and Tailwind CSS.
        </p>
      </Container>
    </footer>
  )
}
