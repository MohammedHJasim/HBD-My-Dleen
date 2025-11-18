import { cn } from "@/lib/utils";

interface BalloonProps {
  color: string;
  delay?: number;
  left?: string;
}

export const Balloon = ({ color, delay = 0, left = "10%" }: BalloonProps) => {
  return (
    <div
      className="absolute animate-float"
      style={{
        left,
        bottom: "-100px",
        animationDelay: `${delay}s`,
      }}
    >
      <div className="relative">
        <div
          className={cn("w-16 h-20 rounded-full shadow-lg", color)}
          style={{
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-foreground/20"
          style={{
            transform: "translateX(-50%) translateY(100%)",
          }}
        />
      </div>
    </div>
  );
};
