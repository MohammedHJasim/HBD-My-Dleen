import { Heart } from "lucide-react";

export const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 4,
    duration: 4 + Math.random() * 2,
    size: 16 + Math.random() * 16,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-primary/30 animate-heart-float"
          style={{
            left: heart.left,
            bottom: "-50px",
            width: heart.size,
            height: heart.size,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
};
