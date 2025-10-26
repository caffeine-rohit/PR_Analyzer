import { ReactNode, ButtonHTMLAttributes } from 'react';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export default function GradientButton({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}: GradientButtonProps) {
  const baseClasses =
    'px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-purple-500/50 hover:scale-105',
    secondary:
      'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
