import { useEffect, useState } from "react";
import { FloatingHearts } from "@/components/animations/FloatingHearts";
import { Confetti } from "@/components/animations/Confetti";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Generate placeholder photos with dates and random positions/rotations
  const photos = Array.from({ length: 30 }, (_, i) => {
    const row = Math.floor(i / 5);
    const col = i % 5;
    
    return {
      id: i + 1,
      url: `https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=400&h=400&fit=crop`,
      date: new Date(2024, 0, i + 1).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      // Random positioning within a loose grid
      left: col * 20 + (Math.random() * 10 - 5),
      top: row * 450 + (Math.random() * 50 - 25) + 400,
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
        <div className="relative h-96 overflow-hidden mb-32">
          <h2 className="text-5xl md:text-6xl font-script text-center text-primary mb-8 pt-8 animate-pulse">
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
        <div className="relative z-10 max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-romantic-pink/30">
          <div className="mb-6 flex justify-center">
            <div className="text-5xl animate-pulse">💕</div>
          </div>
          
          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="mb-4">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>
            <p className="mb-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
            <p className="mb-4">
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
