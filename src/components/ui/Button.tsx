import { type ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
  'aria-label'?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary-red text-white hover:bg-red-700 active:bg-red-800 shadow-md hover:shadow-lg',
  secondary: 'border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white',
  ghost: 'border-2 border-white text-white hover:bg-white/10',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = twMerge(
    clsx(
      'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 cursor-pointer',
      variantStyles[variant],
      sizeStyles[size],
      className
    )
  );

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
