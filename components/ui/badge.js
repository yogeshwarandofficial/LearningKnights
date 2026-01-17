export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-primary/10 text-primary',
    success: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    warning: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
    accent: 'bg-accent/20 text-accent-dark',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

