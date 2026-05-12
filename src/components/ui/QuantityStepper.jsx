import { Button } from './Button'

export function QuantityStepper({
  value,
  min = 1,
  max = 99,
  onChange,
  compact,
}) {
  const pad = compact ? 'px-2 py-1' : 'px-3 py-2'
  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 bg-white">
      <Button
        variant="ghost"
        className={`${pad} !rounded-md`}
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
      >
        −
      </Button>
      <span className="min-w-8 text-center text-sm font-medium tabular-nums text-zinc-900">
        {value}
      </span>
      <Button
        variant="ghost"
        className={`${pad} !rounded-md`}
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
      >
        +
      </Button>
    </div>
  )
}
