import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-[120%] bg-gradient-hero"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-primary-foreground animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-float">
            Welcome
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto px-6">
            Discover your path to wellness and mindfulness
          </p>
          <div className="mt-8">
            <div className="w-16 h-1 bg-primary-foreground mx-auto rounded-full opacity-60" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
