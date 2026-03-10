import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "dark" | "outline";
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "px-6 py-3 font-heading text-sm uppercase tracking-wider brutal-border brutal-shadow-hover hover-target transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[var(--color-primary)] text-black",
    accent: "bg-[var(--color-accent)] text-black",
    dark: "bg-black text-white",
    outline: "bg-transparent text-black",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
