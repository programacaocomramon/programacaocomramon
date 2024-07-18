"use client";
import { Progress } from "@/components/ui/progress";
import { useLanguageStore } from "@/hooks/use-language-store";
import { cn } from "@/lib/utils";

interface CourseProgressProps {
  value: number;
  variant?: "default" | "success";
  size?: "default" | "sm";
}

const colorByVariant = {
  default: "text-sky-700",
  success: "text-emerald-700",
};

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs",
};

export const CourseProgress = ({
  value,
  variant,
  size,
}: CourseProgressProps) => {
  const language = useLanguageStore().dashboard;

  return (
    <div>
      <Progress variant={variant} className="h-2 bg-sky-200/50" value={value} />

      <p
        className={cn(
          "font-medium mt-2 text-sky-700",
          colorByVariant[variant || "default"],
          sizeByVariant[size || "default"]
        )}
      >
        {Math.round(value)}% {language.complete}
      </p>
    </div>
  );
};
