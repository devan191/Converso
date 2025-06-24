"use client";

import { useState, useEffect } from "react";

export default function HeaderBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const bannerHidden = localStorage.getItem("headerBannerHidden");
    if (bannerHidden) {
      setIsVisible(false);
    }
  }, []);

  const hideBanner = () => {
    localStorage.setItem("headerBannerHidden", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;
  return (
    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-2.5 text-center relative mb-6 rounded-xl shadow-md border border-violet-500/20 backdrop-blur-sm animate-gradient-shift">
      <p className="text-sm font-medium flex items-center justify-center gap-2">
        <span className="inline-flex items-center justify-center bg-white/20 text-xs font-bold px-2 py-0.5 rounded-full animate-pulse-slow">
          New!
        </span>
        Explore our latest AI companions for personalized learning
        <a
          href="/companions"
          className="ml-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105"
        >
          Learn more →
        </a>
      </p>
      <button
        onClick={hideBanner}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Close banner"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </button>
    </div>
  );
}
