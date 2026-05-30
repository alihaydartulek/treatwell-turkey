"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

interface SocialProofProps {
  baseCount?: number;
}

export default function SocialProof({ baseCount = 12 }: SocialProofProps) {
  const [count, setCount] = useState(baseCount);

  useEffect(() => {
    // Randomize slightly on mount for realism
    const variance = Math.floor(Math.random() * 8);
    setCount(baseCount + variance);

    // Occasionally increment
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setCount((prev) => prev + 1);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [baseCount]);

  return (
    <div className="flex items-center gap-2 text-sm text-slate-500 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2 w-fit">
      <div className="flex -space-x-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-full bg-teal-400 border-2 border-white text-white text-xs flex items-center justify-center font-bold"
            style={{ backgroundColor: ["#3b82f6", "#8b5cf6", "#10b981"][i] }}
          />
        ))}
      </div>
      <Users size={13} className="text-amber-500" />
      <span>
        <strong className="text-slate-700">{count} people</strong> viewed this in the last 24 hours
      </span>
    </div>
  );
}
