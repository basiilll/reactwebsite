import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function SiteLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-white text-zinc-900">
      <Header />
      <main className="flex-1 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
