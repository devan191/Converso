"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[70px] left-4 right-4 bg-white dark:bg-black/90 backdrop-blur-lg p-4 rounded-xl shadow-xl z-50 border border-black/5 dark:border-white/10 animate-slideInDown">
          <div className="flex flex-col gap-3">
            {navItems.map(({ label, href }, index) => (
              <Link
                href={href}
                key={label}
                className={cn(
                  "p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors animate-fadeIn",
                  pathname === href
                    ? "text-primary font-semibold"
                    : "text-foreground/80"
                )}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map(({ label, href }) => (
          <Link
            href={href}
            key={label}
            className={cn(
              "relative py-2 text-base transition-colors duration-300 hover:text-primary nav-item-hover",
              pathname === href
                ? "text-primary font-semibold"
                : "text-foreground/80"
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default NavItems;