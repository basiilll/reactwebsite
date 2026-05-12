import { formatMoney } from '../../lib/formatMoney'

export function Price({ cents, className = '' }) {
  return (
    <span className={`tabular-nums font-semibold text-zinc-900 ${className}`}>
      {formatMoney(cents)}
    </span>
  )
}
