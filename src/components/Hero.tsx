import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Civil Engineer and Frontend Developer.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length - 1) {
        clearInterval(interval);
        setShowCursor(false);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const downloadCV = (cvType: string) => {
    const link = document.createElement("a");
    link.href = `/${cvType}.pdf`;
    link.download = `${cvType}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: "url('/path-to-background-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white max-w-lg">
        <h1 className="text-5xl font-bold">Hello, I'm Ahmed</h1>
        <h2 className="mt-2 text-3xl semi-bold">
          {text}
          {showCursor && <span className="animate-blink text-white">|</span>}
        </h2>
        <p className="mt-4 text-lg">
          Building Solutions, Digitally and Structurally
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer inline-block px-6 py-3 rounded-full text-lg font-semibold transition-all duration-700 relative overflow-hidden group"
          >
            <span className="relative z-10 text-gold-light group-hover:text-white">
              View Projects
            </span>
            <div className="absolute inset-0 bg-gold transition-transform transform translate-x-full group-hover:translate-x-0"></div>
          </Link>
          <button
            onClick={() => downloadCV("FrontEnd Cv")}
            className="cursor-pointer inline-block px-6 py-3 rounded-full text-lg font-semibold transition-all duration-700 relative overflow-hidden group  text-white"
          >
            <span className="relative z-10 text-gold-light group-hover:text-white">
              FrontEnd CV
            </span>
            <div className="absolute inset-0 bg-gold transition-transform transform translate-x-full group-hover:translate-x-0"></div>
          </button>
          <button
            onClick={() => downloadCV("Civil Cv")}
            className="cursor-pointer inline-block px-6 py-3 rounded-full text-lg font-semibold transition-all duration-700 relative overflow-hidden group  text-white"
          >
            <span className="text-gold-light relative z-10 group-hover:text-white">
              Civil CV
            </span>
            <div className="absolute inset-0 bg-gold transition-transform transform translate-x-full group-hover:translate-x-0"></div>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
