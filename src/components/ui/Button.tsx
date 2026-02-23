import type { ButtonProps } from '../../types'

export const Button = ({ children, onClick, className = '', variant = 'primary' }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center w-full h-12 gap-2.5 rounded-[6px] px-10 py-3 text-base font-semibold transition-colors duration-200'

  const variants = {
    primary: 'bg-[#EE6F4B] text-white hover:bg-[#d9603f]',
    secondary: 'bg-transparent border-2 border-[#EE6F4B] text-[#EE6F4B] hover:bg-[#EE6F4B] hover:text-white'
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
