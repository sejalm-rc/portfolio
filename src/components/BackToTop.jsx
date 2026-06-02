import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 group
      transition-all duration-500 ease-out
      ${
        showButton
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-75 pointer-events-none"
      }`}
    >
      <div
        className="
        relative
        flex items-center justify-center
        w-12 h-12
        rounded-full
        bg-gradient-to-r from-[#d69a22]  to-[#8e5b0d]
        text-white
        shadow-[0_10px_30px_rgba(200,146,42,0.35)]
        backdrop-blur-md
        border border-white/20
        hover:scale-110
        hover:shadow-[0_15px_40px_rgba(200,146,42,0.55)]
        transition-all duration-300
        animate-bounce
        "
      >
        <ChevronUp
          size={20}
          className="group-hover:-translate-y-1 transition-transform duration-300"
        />

        {/* Glow Effect */}
        <span
          className="
          absolute inset-0 rounded-full
          bg-gradient-to-r from-[#d69a22] to-[#8e5b0d]
          blur-xl opacity-40
          -z-10
          "
        />
      </div>
    </button>
  );
};

export default BackToTop;