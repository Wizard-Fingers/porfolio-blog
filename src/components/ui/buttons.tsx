import React from "react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "solid" | "outlined" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  children,
  onClick,
  size = "md",
  variant = "solid",
  icon,
  className = "",
  ...rest
}: ButtonProps) {
  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-3 py-1 text-sm m-2",
    md: "px-4 py-2 text-base m-2",
    lg: "px-6 py-3 text-lg m-2",
  };

  const variantClasses: Record<ButtonVariant, string> = {
    solid:
      "bg-lightCol4 text-lightCol1 dark:bg-darkCol4 dark:text-darkCol2 hover:bg-lightCol3 dark:hover:bg-darkCol3",
    outlined:
      "bg-transparent text-lightCol4 border border-lightCol4 dark:text-darkCol4 dark:border-darkCol4 hover:bg-lightCol4 hover:text-lightCol1 dark:hover:bg-darkCol4 dark:hover:text-darkCol2",
    ghost:
      "bg-transparent text-lightCol2 dark:text-darkCol2 hover:text-lightCol4 dark:hover:text-darkCol4",
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-md font-semibold hover:-translate-y-1 transform transition duration-200 hover:shadow-md ${sizeClasses[size]} ${variantClasses[variant]} ${className} flex items-center justify-center`}
      {...rest}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
