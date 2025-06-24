"use client";
import { removeBookmark } from "@/lib/actions/companion.actions";
import { addBookmark } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked: boolean;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
  bookmarked,
}: CompanionCardProps) => {
  const pathname = usePathname();
  const handleBookmark = async () => {
    if (bookmarked) {
      await removeBookmark(id, pathname);
    } else {
      await addBookmark(id, pathname);
    }
  };
  return (
    <article
      className="flex flex-col rounded-2xl border border-violet-500/10 px-6 py-6 gap-4 w-full justify-between shadow-lg hover:shadow-xl hover:shadow-violet-500/10 hover:scale-[1.02] transition-all duration-300 bg-white/80 dark:bg-black/40 backdrop-blur-sm hover-lift"
      style={{
        borderLeft: `4px solid ${color}`,
      }}
    >
      <div className="flex justify-between items-center">
        <div
          className="bg-black/80 dark:bg-white/10 text-white dark:text-white/90 rounded-full text-xs px-4 py-1.5 capitalize shadow-md font-semibold tracking-wide backdrop-blur-sm"
          style={{ backgroundColor: color }}
        >
          {subject}
        </div>
        <button
          className="p-2 rounded-full flex items-center justify-center h-8 w-8 aspect-square cursor-pointer hover:bg-violet-600 hover:scale-110 transition-all duration-200 backdrop-blur-sm animate-pulse-slow"
          style={{ backgroundColor: `${color}CC` }}
          onClick={handleBookmark}
        >
          <Image
            src={
              bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
            }
            alt="bookmark"
            width={14}
            height={16}
            className="transition-transform duration-300 hover:scale-110"
          />
        </button>
      </div>

      <h2 className="text-2xl font-bold tracking-tight">{name}</h2>
      <p className="text-sm text-black/70 dark:text-white/70">{topic}</p>
      <div className="flex items-center gap-2">
        <div
          className="p-1.5 rounded-full"
          style={{ backgroundColor: `${color}40` }}
        >
          <Image src="/icons/clock.svg" alt="duration" width={14} height={14} />
        </div>
        <p className="text-sm font-medium">{duration} minutes</p>
      </div>

      <Link href={`/companions/${id}`} className="w-full">
        <button
          className="btn-primary w-full justify-center group"
          style={{ background: color }}
        >
          Launch Lesson
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
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
