import { useNavigate } from "react-router-dom";
import { FloatingHearts } from "@/components/animations/FloatingHearts";
import { Confetti } from "@/components/animations/Confetti";
import { BirthdayButton } from "@/components/ui/birthday-button";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const Message = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    setIsVisible(false);
    setTimeout(() => navigate("/gallery"), 500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-12">
      <Confetti />
      <FloatingHearts />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-romantic-gold text-3xl animate-float">🎈</div>
      <div className="absolute top-20 right-16 text-romantic-pink text-4xl animate-float-delayed">🎈</div>
      <div className="absolute bottom-20 left-16 text-accent text-3xl animate-float">🎈</div>
      <div className="absolute bottom-10 right-10 text-primary text-4xl animate-float-delayed">🎈</div>

      {/* Sparkles */}
      <Sparkles className="absolute top-1/4 left-1/4 text-romantic-gold animate-pulse w-8 h-8" />
      <Sparkles className="absolute top-1/3 right-1/4 text-romantic-pink animate-pulse w-6 h-6" style={{ animationDelay: "1s" }} />
      <Sparkles className="absolute bottom-1/4 left-1/3 text-accent animate-pulse w-7 h-7" style={{ animationDelay: "0.5s" }} />

      {/* Main content */}
      <div
        className={`max-w-3xl mx-auto text-center z-10 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-romantic-pink/30">
          <div className="mb-8 flex justify-center">
            <div className="text-6xl animate-pulse">💝</div>
          </div>
          
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 mb-8 font-light">
            Me as a programmer, I will always try to show you my love and impress you by doing things related to programming.
            <br /><br />
            You know that programming is one of the main things in my life, it's like my own language.
            <br /><br />
            So whatever I do, there will always be something that expresses my love for you through the language I speak.
          </p>

          <div className="flex justify-center animate-bounce">
            <BirthdayButton onClick={handleClick}>
              Click again please
            </BirthdayButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
