export const Confetti = () => {
  const confettiColors = [
    "bg-primary",
    "bg-romantic-pink",
    "bg-romantic-gold",
    "bg-accent",
    "bg-secondary",
  ];

  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    color: confettiColors[i % confettiColors.length],
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className={`absolute w-2 h-3 ${piece.color} opacity-80`}
          style={{
            left: piece.left,
            top: "-20px",
            animation: `confetti-fall ${piece.duration}s linear infinite`,
            animationDelay: `${piece.delay}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
};
