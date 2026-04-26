import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold",
        "bg-transparent border-[#38BDF8] text-[#38BDF8]",
        "transition-all duration-300 hover:bg-[#38BDF8] hover:text-white",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-[#38BDF8] transition-all duration-300 group-hover:scale-125"></div>

        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>

      <div
        className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 
                      transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 text-white"
      >
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
}
