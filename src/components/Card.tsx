import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({
  children,
  className = "",
  hoverable = false,
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-white brutal-border p-6 ${
        hoverable ? "brutal-shadow-hover hover-target" : "brutal-shadow"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
