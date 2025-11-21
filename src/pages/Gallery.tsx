import { useEffect, useState } from "react";
import { FloatingHearts } from "@/components/animations/FloatingHearts";
import { Confetti } from "@/components/animations/Confetti";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Generate photos from local images folder
  const photos = Array.from({ length: 30 }, (_, i) => {
    const row = Math.floor(i / 5);
    const col = i % 5;
    
    return {
      id: i + 1,
      url: `/images/photo-${i + 1}.jpg`,
      date: new Date(2024, 0, i + 1).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      // Random positioning within a loose grid
      left: col * 20 + (Math.random() * 10 - 5),
      top: row * 450 + (Math.random() * 50 - 25) + 80,
      rotation: Math.random() * 20 - 10, // Random rotation between -10 and 10 degrees
      animationDelay: Math.random() * 2,
    };
  });

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Confetti />
      <FloatingHearts />

      <div
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Header section */}
        <div className="relative overflow-hidden pt-12 pb-4">
          <h2 className="text-5xl md:text-6xl font-script text-center text-primary animate-pulse">
            Our Beautiful Moments
          </h2>
        </div>

        {/* Polaroid photos with random positioning */}
        <div className="relative min-h-screen pb-32" style={{ height: `${Math.ceil(photos.length / 5) * 450 + 600}px` }}>
          {photos.map((photo, idx) => (
            <div
              key={photo.id}
              className="absolute animate-float hover:scale-110 hover:z-50 transition-all duration-300 cursor-pointer"
              style={{
                left: `${photo.left}%`,
                top: `${photo.top}px`,
                transform: `rotate(${photo.rotation}deg)`,
                animationDelay: `${photo.animationDelay}s`,
                animation: `float ${4 + Math.random() * 2}s ease-in-out infinite`,
              }}
            >
              {/* Polaroid frame */}
              <div className="bg-white p-4 pb-16 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                   style={{
                     boxShadow: '0 10px 30px rgba(0,0,0,0.3), 0 1px 8px rgba(0,0,0,0.2)',
                   }}>
                {/* Photo */}
                <div className="w-64 h-64 bg-gray-100 mb-2">
                  <img
                    src={photo.url}
                    alt={`Memory ${photo.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Date caption */}
                <p className="text-gray-700 font-script text-center text-sm mt-2">
                  {photo.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Long message section */}
        <div className="relative z-10 max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-romantic-pink/30 mb-32">
          <div className="mb-6 flex justify-center">
            <div className="text-5xl animate-pulse">💕</div>
          </div>
          
          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="mb-4">
              My soulmate, my girl, my love, my supporter, my baby, my princess, my queen, my daughter, my little kid, my future fiancée, my future wife, the mother of my future kids, my best friend, the female version of me, my girlfriend, my everything — the one and only, my Dleen.
            </p>
            <p className="mb-4">
              Many times when I’m with you—looking into your eyes, holding you in my arms, kissing you—or even when I’m alone thinking about you, I feel like I’m living inside one of those love novels people dream about. Or like I’m in a utopia that writers imagine but can never reach.
But I reached it… because of you.
You make me feel like those stories became real, and I’m the one chosen to live that dream with you. That’s how happy I am, how much I enjoy everything with you, how perfect you make everything around me feel.
            </p>
            <p className="mb-4">
              My daughter, happy birthday to you.
I wish you a year full of me — me kissing you, me hugging you, me smiling at you, me looking at you, me admiring you, me catching you, and a year full of happiness, success, love, the people you care about, enjoyment, full marks, smiles, laughter, and the warmth of family. I wish you a year where your dreams start becoming reality.
            </p>
            <p className="mb-4">
              My baby love, I love you so much — in a way you could never imagine. My love for you competes with the size of the universe. Each day, each hour, each minute, each second, I love you more.
When I’m with you, the only happiness I feel is you. Whatever else happens, no matter how great it is, it never affects me. I can’t see anything except you. Everything else becomes blank.
            </p>
            <p className="mb-4">
              I promise you, and inshallah in this coming year and throughout your whole life, I will be next to you as much as I can. I will protect you, surround you, support you, make you happy, make your wishes come true, solve your problems, and always be your man.
            </p>
            <p className="mb-4">
              I pray that God never shows me sadness in you, and keeps you in my life as my baby forever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
