import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import DropMenu from "./DropMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 top-0 w-full bg-transparent backdrop-blur-md ${
        isScrolled ? "text-black" : "text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <ul className="hidden md:flex justify-between py-4 text-lg font-semibold">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className={`cursor-pointer hover:text-gold ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className={`cursor-pointer hover:text-gold ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className={`cursor-pointer hover:text-gold ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className={`cursor-pointer hover:text-gold ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={`cursor-pointer hover:text-gold ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`cursor-pointer hover:text-gold ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:hidden flex justify-between py-4">
          <DropMenu />

          <Link
            to="hero"
            smooth={true}
            duration={500}
            className={`cursor-pointer hover:text-gold ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
