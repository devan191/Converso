import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way</div>
      <h2 className="text-3xl font-bold">
        Build & Personalize Learning Companions
      </h2>
      <p className="text-white/85">
        Choose a name, subject, voice, and personality — create AI learning
        partners that make conversations natural and engaging.
      </p>
      <div className="relative transform hover:scale-105 transition-transform duration-300 my-2">
        <div className="absolute inset-0 blur-md bg-white/20 rounded-xl"></div>
        <Image
          src="/images/cta.svg"
          alt="cta"
          width={362}
          height={232}
          className="relative z-10"
        />
      </div>
      <Link href="/companions/new" className="w-full">
        <button className="btn-primary w-full justify-center group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20">
          <Image
            src="/icons/plus.svg"
            alt="plus"
            width={12}
            height={12}
            className="group-hover:rotate-90 transition-transform duration-300"
          />
          Build a New Companion
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-1 ml-1"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </Link>
    </section>
  );
};
export default Cta;
