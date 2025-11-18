import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface BirthdayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const BirthdayButton = forwardRef<HTMLButtonElement, BirthdayButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white",
          "bg-gradient-to-r from-primary to-romantic-red rounded-full",
          "shadow-[0_8px_30px_rgb(229,62,62,0.3)]",
          "hover:shadow-[0_12px_40px_rgb(229,62,62,0.4)]",
          "transition-all duration-300",
          "hover:scale-105 active:scale-95",
          "overflow-hidden",
          "before:absolute before:inset-0",
          "before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0",
          "before:translate-x-[-200%] hover:before:translate-x-[200%]",
          "before:transition-transform before:duration-700",
          className
        )}
        {...props}
      >
        <span className="relative z-10 font-script text-2xl">{children}</span>
      </button>
    );
  }
);

BirthdayButton.displayName = "BirthdayButton";

export { BirthdayButton };
