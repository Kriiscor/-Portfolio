import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "neon";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  className = "",
  variant = "default",
  size = "md",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-mono font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] disabled:pointer-events-none disabled:opacity-50 active:scale-95";

  const variants = {
    default:
      "bg-[#00f0ff] text-black hover:bg-[#00f0ff]/80 hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] border border-transparent",
    neon: "bg-transparent border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]",
    outline:
      "border border-zinc-700 bg-transparent hover:border-zinc-500 text-zinc-300 hover:text-white",
    ghost: "hover:bg-zinc-800 text-zinc-400 hover:text-white",
  };

  const sizes = {
    sm: "h-9 px-3 text-xs",
    md: "h-10 px-4 py-2 text-sm",
    lg: "h-12 px-8 text-base",
  };

  // Fallback to neon variant logic if default is used in a specific context where we want pop, but stick to standard mapping
  const activeVariant = variants[variant] || variants.default;

  return (
    <button
      className={`${baseStyles} ${activeVariant} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
