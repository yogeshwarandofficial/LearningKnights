import Link from 'next/link'

export function Button({ children, href, onClick, variant = 'primary', size = 'default', className = '', ...props }) {
  const baseStyles = 'rounded-lg font-semibold transition-colors inline-block text-center'

  const sizeStyles = {
    default: 'px-4 py-2',
    sm: 'px-3 py-1.5 text-sm',
    lg: 'px-6 py-3 text-lg',
  }

  const variants = {
    primary: 'bg-primary text-black font-bold hover:bg-primary-dark hover:text-black shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)]',
    secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/10',
    accent: 'bg-accent text-black font-bold hover:bg-accent-dark',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-black',
  }

  const classes = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}

