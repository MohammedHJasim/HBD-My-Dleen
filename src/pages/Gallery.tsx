import { useEffect, useState } from "react";
import { FloatingHearts } from "@/components/animations/FloatingHearts";
import { Confetti } from "@/components/animations/Confetti";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Generate placeholder photos with dates
  const photos = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    url: `https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=400&h=400&fit=crop`,
    date: new Date(2024, 0, i + 1).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  }));

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Confetti />
      <FloatingHearts />

      <div
        className={`container mx-auto px-6 py-12 transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Floating photos section */}
        <div className="mb-16 relative h-96 overflow-hidden rounded-3xl bg-gradient-to-b from-romantic-pink/20 to-transparent">
          <h2 className="text-5xl md:text-6xl font-script text-center text-primary mb-8 pt-8 animate-pulse">
            Our Beautiful Moments
          </h2>
          
          <div className="absolute inset-0 flex items-center justify-center gap-8 px-8">
            {photos.slice(0, 5).map((photo, idx) => (
              <div
                key={photo.id}
                className="animate-float rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-110 transition-transform duration-300"
                style={{
                  animationDelay: `${idx * 0.5}s`,
                  width: "200px",
                  height: "200px",
                }}
              >
                <img
                  src={photo.url}
                  alt={`Memory ${photo.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {photos.map((photo, idx) => (
            <div
              key={photo.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{
                animation: `fade-in 0.5s ease-out ${idx * 0.1}s both`,
              }}
            >
              <div className="aspect-square">
                <img
                  src={photo.url}
                  alt={`Memory ${photo.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
                <p className="text-white font-medium text-sm text-center">
                  {photo.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Long message section */}
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-romantic-pink/30">
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
            <p>
              Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
