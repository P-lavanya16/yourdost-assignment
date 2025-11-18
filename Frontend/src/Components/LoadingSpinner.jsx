import React from "react";

export default function LoadingSpinner({ size = 48 }) {
  // Google-like subtle ring spinner
  return (
    <div className="flex items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <div className="absolute inset-0 rounded-full animate-spin-slow border-4 border-gray-200 border-t-[--brand]" style={{ borderTopColor: "var(--brand)" }} />
        <div className="absolute inset-2 rounded-full bg-white/80" />
      </div>
    </div>
  );
}
