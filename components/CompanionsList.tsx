import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionsList = ({
  title,
  companions,
  classNames,
}: CompanionsListProps) => {
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-3xl mb-6 bg-gradient-to-r from-black to-primary/80 bg-clip-text text-transparent dark:from-white dark:to-primary/80">
        {title}
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <TableHead className="text-lg w-2/3 text-black/70 dark:text-white/70 font-medium">
              Lessons
            </TableHead>
            <TableHead className="text-lg text-black/70 dark:text-white/70 font-medium">
              Subject
            </TableHead>
            <TableHead className="text-lg text-right text-black/70 dark:text-white/70 font-medium">
              Duration
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({ id, subject, name, topic, duration }) => (
            <TableRow
              key={id}
              className="group hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors"
            >
              <TableCell className="p-4">
                <Link href={`/companions/${id}`}>
                  <div className="flex items-center gap-4">
                    <div
                      className="size-[72px] flex items-center justify-center rounded-2xl max-md:hidden group-hover:shadow-lg transition-all"
                      style={{
                        backgroundColor: `${getSubjectColor(subject)}90`,
                      }}
                    >
                      <Image
                        src={`/icons/${subject}.svg`}
                        alt={subject}
                        width={35}
                        height={35}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-2xl group-hover:text-primary transition-colors">
                        {name}
                      </p>
                      <p className="text-lg text-black/70 dark:text-white/70">
                        {topic}
                      </p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell className="p-4">
                <div
                  className="subject-badge w-fit max-md:hidden"
                  style={{ backgroundColor: getSubjectColor(subject) }}
                >
                  {subject}
                </div>
                <div
                  className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                  style={{ backgroundColor: getSubjectColor(subject) }}
                >
                  <Image
                    src={`/icons/${subject}.svg`}
                    alt={subject}
                    width={18}
                    height={18}
                  />
                </div>
              </TableCell>
              <TableCell className="p-4">
                <div className="flex items-center gap-2 w-full justify-end">
                  <div
                    className="p-1.5 rounded-full md:hidden"
                    style={{ backgroundColor: `${getSubjectColor(subject)}40` }}
                  >
                    <Image
                      src="/icons/clock.svg"
                      alt="minutes"
                      width={14}
                      height={14}
                    />
                  </div>
                  <p className="text-2xl font-medium">
                    {duration}{" "}
                    <span className="max-md:hidden text-black/60 dark:text-white/60 text-lg">
                      mins
                    </span>
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionsList;
