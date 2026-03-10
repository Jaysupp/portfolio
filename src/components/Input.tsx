import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="font-heading text-sm uppercase tracking-wider">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`brutal-border brutal-shadow-hover bg-white p-3 font-mono text-black outline-none focus:bg-[var(--color-primary)] focus:ring-0 ${
            error ? "border-red-500" : ""
          } ${className}`}
          {...props}
        />
        {error && <span className="font-mono text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
