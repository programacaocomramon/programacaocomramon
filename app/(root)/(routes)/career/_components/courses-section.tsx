import { typeLEVELS } from "@/constants/levels";
import { useLanguageStore } from "@/hooks/use-language-store";
import { Course } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CoursesSectionProps {
    courses: Course[];
    level: typeLEVELS;
}

const CoursesSection = ({ courses, level }: CoursesSectionProps) => {
    const language = useLanguageStore().careersPage;

    const backgroundColors = {
        BEGINNER: "bg-slate-800",
        INTERMEDIATE: "bg-blue-700",
        ADVANCED: "bg-emerald-600",
        SPECIALIST: "bg-violet-700",
    };
    const bgColor = backgroundColors[level];
    const colors = {
        BEGINNER: "text-slate-800",
        INTERMEDIATE: "text-blue-700",
        ADVANCED: "text-emerald-600",
        SPECIALIST: "text-violet-700",
    };
    const color = colors[level];
    const headings = {
        BEGINNER: language.levels.beginner,
        INTERMEDIATE: language.levels.intermediate,
        ADVANCED: language.levels.advanced,
        SPECIALIST: language.levels.specialist,
    };
    const heading = headings[level];

    return (
        <section className="mb-5">
            <h2 className={`py-2 text-white rounded-md pl-8 mb-5 ${bgColor}`}>
                {heading}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 px-2">
                {courses.map((course) => (
                    <Link
                        key={course.title}
                        href={`/career/${course.slug}`}
                        className="shadow border flex flex-col items-center hover:shadow-[0_1px_5px_1px_rgba(0,0,0,0.3)] text-center rounded"
                    >
                        <Image
                            src={course.imageUrl!}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }} // optional
                            className="rounded-t"
                            alt={course.title}
                        />
                        <div className="pt-3 pb-5 px-2">
                            <h3
                                className={`font-semibold text-base ${color} mb-5`}
                            >
                                {course.title}
                            </h3>

                            <span
                                className={`rounded-full py-2 text-sm px-6 font-semibold ${bgColor} text-white`}
                            >
                                {language.learnMore}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CoursesSection;
