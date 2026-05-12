import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { Container } from './Container'

const navClass = ({ isActive }) =>
  `text-sm font-medium transition ${
    isActive ? 'text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'
  }`

export function Header() {
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" className="text-lg font-semibold tracking-tight text-zinc-900">
          Northline
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={navClass}>
            Shop
          </NavLink>
          <NavLink to="/cart" className={navClass}>
            Cart
            {itemCount > 0 ? (
              <span className="ml-1.5 inline-flex min-w-5 items-center justify-center rounded-full bg-zinc-900 px-1.5 py-0.5 text-[11px] font-semibold text-white">
                {itemCount}
              </span>
            ) : null}
          </NavLink>
        </nav>
      </Container>
    </header>
  )
}
