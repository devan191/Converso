import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-white/60 dark:bg-black/40 flex items-center justify-between mx-auto w-full px-8 py-4 rounded-2xl shadow-lg sticky top-4 z-50 border border-black/5 dark:border-white/5">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 cursor-pointer group">
        <div className="relative overflow-hidden rounded-full p-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={38}
            height={38}
            className="drop-shadow-md group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-violet-600 transition-all duration-300">
          Converso
        </span>
      </Link>

      {/* Center navigation for desktop */}
      <div className="hidden md:block mx-auto">
        <NavItems />
      </div>

      {/* Mobile menu toggle and right section */}
      <div className="flex items-center gap-3 md:gap-4">
        <div className="md:hidden">
          <NavItems />
        </div>
        <div className="flex items-center justify-center">
          <ThemeToggle />
        </div>{" "}
        <SignedOut>
          <SignInButton>
            <button className="border border-black/10 dark:border-white/10 rounded-full px-4 sm:px-6 py-2.5 md:py-3 text-sm font-semibold flex items-center gap-2 sm:gap-2.5 cursor-pointer bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-violet-600 transition-all duration-300">
              <Image
                src="/icons/google.svg"
                alt="Google"
                width={18}
                height={18}
                className="hidden sm:block"
              />
              <span>Sign In</span>
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
