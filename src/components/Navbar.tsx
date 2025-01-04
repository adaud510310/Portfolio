import { Link } from "react-scroll";
import DropMenu from "./DropMenu";

const Navbar = () => {
  

  return (
    <nav
      className={`fixed z-50 top-0 w-full bg-[#0d5e19] backdrop-blur-md text-white `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <ul className="hidden md:flex justify-between py-4 text-lg font-semibold">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className={`cursor-pointer hover:text-gold `}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className={`cursor-pointer hover:text-gold `}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className={`cursor-pointer hover:text-gold `}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className={`cursor-pointer hover:text-gold `}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={`cursor-pointer hover:text-gold `}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`cursor-pointer hover:text-gold `}
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
            className={`cursor-pointer hover:text-gold `}
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
