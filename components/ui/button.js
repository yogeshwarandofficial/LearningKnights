import Link from 'next/link'

export function Button({ children, href, onClick, variant = 'primary', size = 'default', className = '', ...props }) {
  const baseStyles = 'rounded-lg font-semibold transition-colors inline-block text-center'
  
  const sizeStyles = {
    default: 'px-4 py-2',
    sm: 'px-3 py-1.5 text-sm',
    lg: 'px-6 py-3 text-lg',
  }
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600',
    accent: 'bg-accent text-gray-900 hover:bg-accent-dark',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
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

