import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline" | "neon";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-mono font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  const variants = {
    default: "border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-[#00f0ff]",
    secondary: "border border-zinc-700 bg-zinc-800/50 text-zinc-300",
    outline: "text-zinc-400 border border-zinc-700",
    neon: "border border-[#7000ff] bg-[#7000ff]/10 text-[#a855f7] shadow-[0_0_10px_rgba(112,0,255,0.2)]",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};
