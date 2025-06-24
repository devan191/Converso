import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-28 pt-12 pb-8 text-sm relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-100/20 dark:to-violet-950/20 -z-10 backdrop-blur-sm rounded-t-3xl"></div>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative overflow-hidden rounded-full p-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg group-hover:shadow-violet-500/20">
                <Image
                  src="/images/logo.svg"
                  alt="Converso Logo"
                  width={28}
                  height={28}
                  className="group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-violet-600 transition-all duration-300">
                Converso
              </span>
            </Link>
            <p className="text-black/70 dark:text-white/70 mb-5 max-w-xs">
              Personalized AI companions for natural learning through
              interactive conversations.
            </p>{" "}
            <div className="flex space-x-5">
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-violet-600 p-2 rounded-full hover:bg-violet-100/30 dark:hover:bg-violet-900/30 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-violet-600 p-2 rounded-full hover:bg-violet-100/30 dark:hover:bg-violet-900/30 transition-all duration-300"
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-primary">
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
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary">
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-black/70 dark:text-white/70">
              <li>
                <Link href="#" className="hover:text-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-black/70 dark:text-white/70">
              <li>
                <Link href="#" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-black/70 dark:text-white/70">
              <li>
                <Link href="#" className="hover:text-primary">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Licenses
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/5 dark:border-white/5 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-black/60 dark:text-white/60">
          <p>© {new Date().getFullYear()} Converso. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ♥ for knowledge seekers</p>
        </div>
      </div>
    </footer>
  );
}
