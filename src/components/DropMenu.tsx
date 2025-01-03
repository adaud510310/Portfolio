import { useState } from "react";
import { Link } from "react-scroll";
import { IoMdMenu } from "react-icons/io";
function DropMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden relative">
      <button onClick={toggleMenu} className="cursor-pointer hover:text-gold">
        <IoMdMenu size={30} />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-28 bg-transparents shadow-lg rounded backdrop-blur-md z-10 ">
          <ul className="flex flex-col text-lg gap-1 p-2 font-semibold">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gold"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gold"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gold"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gold"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropMenu;
