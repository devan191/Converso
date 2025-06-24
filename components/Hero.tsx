import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 gap-16 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute -z-10 left-1/2 top-1/4 w-1/2 aspect-square rounded-full bg-indigo-400/20 blur-[120px] dark:bg-indigo-700/20"></div>
      <div className="absolute -z-10 left-1/4 bottom-1/4 w-1/3 aspect-square rounded-full bg-violet-400/20 blur-[100px] dark:bg-violet-700/20"></div>

      <div className="w-full md:w-1/2 space-y-8">
        <div className="inline-block">
          <div className="bg-gradient-to-r from-violet-600/20 to-indigo-600/20 dark:from-violet-500/20 dark:to-indigo-500/20 px-5 py-2 rounded-full text-violet-700 dark:text-violet-300 font-medium text-sm backdrop-blur-sm border border-violet-500/10 shadow-sm">
            AI-Powered Learning Companions
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black dark:text-white leading-tight">
          Learn anything through{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
            natural conversation
          </span>
        </h1>
        <p className="text-xl text-black/70 dark:text-white/70 max-w-xl">
          Experience personalized learning with AI companions that adapt to your
          style and help you master any subject through interactive dialogue.
        </p>{" "}
        <div className="flex flex-wrap gap-4 pt-6">
          <Link href="/companions">
            <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full px-8 py-4 flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-violet-500/20 hover:scale-105 transition-all duration-300 font-medium">
              Browse Companions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse-slow"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </Link>

          <Link href="/companions/new">
            <button className="border border-violet-500/20 dark:border-violet-400/20 bg-white/80 dark:bg-black/50 backdrop-blur-sm text-black dark:text-white rounded-full px-8 py-4 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium">
              <Image
                src="/icons/plus.svg"
                alt="Create"
                width={16}
                height={16}
              />
              Create Custom Companion
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-2 pt-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-gray-${
                  i * 100
                } to-gray-${i * 100 + 100}`}
              ></div>
            ))}
          </div>
          <p className="text-sm text-black/70 dark:text-white/70">
            <span className="font-bold">500+</span> users learning right now
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative">
        <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-full"></div>
        <div className="relative bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-3xl border border-white/20 dark:border-white/10 overflow-hidden shadow-2xl">
          <div className="relative p-6 flex items-center rounded-t-3xl bg-black/5 dark:bg-white/5 border-b border-white/10">
            <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
            <div className="mx-auto text-sm font-medium opacity-70">
              Conversation with Physics Companion
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                P
              </div>
              <div className="flex-1">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl rounded-tl-none">
                  <p className="text-black/80 dark:text-white/80">
                    How would you explain the concept of gravity in simple
                    terms?
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                AI
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-2xl rounded-tl-none">
                  <p className="text-black/80 dark:text-white/80">
                    Imagine you're holding a ball and you let go. It falls to
                    the ground, right? That's gravity!
                    <br />
                    <br />
                    In simple terms, gravity is like an invisible force of
                    attraction between objects with mass. The more massive
                    something is, the stronger its gravitational pull.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
