"use client";

import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-mono font-bold uppercase tracking-widest transition-all duration-200 select-none rounded-full";

  const sizeClasses = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-xs",
  }[size];

  const variantClasses = {
    primary:
      "bg-white text-black hover:bg-zinc-200 shadow-xl hover:scale-105 active:scale-95",
    secondary:
      "bg-zinc-800 text-white hover:bg-zinc-700 shadow-xl hover:scale-105 active:scale-95",
    outline:
      "bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-md",
    ghost:
      "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5",
  }[variant];

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
