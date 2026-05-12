const base =
  'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary:
    'bg-zinc-900 text-white hover:bg-zinc-800 focus-visible:outline-zinc-900',
  secondary:
    'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 focus-visible:outline-zinc-400',
  ghost: 'text-zinc-700 hover:bg-zinc-100 focus-visible:outline-zinc-400',
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
