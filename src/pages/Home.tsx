import { useNavigate } from "react-router-dom";
import { Balloon } from "@/components/animations/Balloon";
import { Confetti } from "@/components/animations/Confetti";
import { FloatingHearts } from "@/components/animations/FloatingHearts";
import { BirthdayButton } from "@/components/ui/birthday-button";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    setIsVisible(false);
    setTimeout(() => navigate("/message"), 500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Confetti />
      <FloatingHearts />
      
      {/* Balloons */}
      <Balloon color="bg-primary" left="10%" delay={0} />
      <Balloon color="bg-romantic-pink" left="25%" delay={1} />
      <Balloon color="bg-romantic-gold" left="40%" delay={0.5} />
      <Balloon color="bg-secondary" left="60%" delay={1.5} />
      <Balloon color="bg-accent" left="75%" delay={0.8} />
      <Balloon color="bg-primary" left="90%" delay={1.2} />

      {/* Main content */}
      <div
        className={`text-center z-10 transition-all duration-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h1 className="font-script text-7xl md:text-9xl mb-8 text-primary drop-shadow-lg animate-pulse">
          Hello birthday girl
        </h1>
        <div className="flex justify-center animate-bounce">
          <BirthdayButton onClick={handleClick}>
            Click here please
          </BirthdayButton>
        </div>
      </div>

      {/* Decorative sparkles */}
      <div className="absolute top-10 left-10 text-romantic-gold text-4xl animate-pulse">✨</div>
      <div className="absolute top-20 right-20 text-romantic-pink text-5xl animate-pulse" style={{ animationDelay: "0.5s" }}>✨</div>
      <div className="absolute bottom-20 left-20 text-accent text-4xl animate-pulse" style={{ animationDelay: "1s" }}>✨</div>
      <div className="absolute bottom-10 right-10 text-primary text-5xl animate-pulse" style={{ animationDelay: "1.5s" }}>✨</div>
    </div>
  );
};

export default Home;
