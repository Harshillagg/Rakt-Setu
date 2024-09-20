import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-16 flex bg-[#ff5353] items-center p-2 md:px-32 md:py-10 fixed top-0 z-50">
      <div className="w-full flex items-center justify-between">

        {/* Mobile View: Hamburger Button and Logo */}
        <div className="flex items-center justify-between w-full md:hidden">
          <button
            onClick={handleToggle}
            className="text-white text-2xl focus:outline-none mr-auto z-40"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Desktop View: Logo and Navigation Links */}
        <div className="text-xl font-bold flex items-center gap-4">
            <img src="/fav.jpeg" alt="" className="h-14 w-14" />
            <p className="text-4xl text-white">RaktSetu</p>
        </div>

        <div className="hidden md:flex items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-lg px-4 py-3 ${isActive ? "bg-red-800 text-white" : "text-white"} group`
            }
          >
            HOME
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative text-lg px-4 py-3 ${isActive ? "bg-red-800 text-white" : "text-white"} group`
            }
          >
            ABOUT US
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </NavLink>
          <NavLink
            to="/lookingforblood"
            className={({ isActive }) =>
              `relative text-lg px-4 py-3 ${isActive ? "bg-red-800 text-white" : "text-white"} group`
            }
          >
            LOOKING FOR BLOOD
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </NavLink>
          <NavLink
            to="/donateblood"
            className={({ isActive }) =>
              `relative text-lg px-4 py-3 ${isActive ? "bg-red-800 text-white" : "text-white"} group`
            }
          >
            WANT TO DONATE BLOOD
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center md:hidden transition-transform duration-300 ${isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <NavLink
          to="/"
          className="text-white text-lg py-2"
          onClick={handleToggle}
        >
          Home
        </NavLink>
        <NavLink
          to="/achievements"
          className="text-white text-lg py-2"
          onClick={handleToggle}
        >
          Achievements
        </NavLink>
        <NavLink
          to="/projects"
          className="text-white text-lg py-2"
          onClick={handleToggle}
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className="text-white text-lg py-2"
          onClick={handleToggle}
        >
          About Us
        </NavLink>
        {/* New NavLink for Tasks in Mobile Menu */}
        <NavLink
          to="/tasks"
          className="text-white text-lg py-2"
          onClick={handleToggle}
        >
          Tasks
        </NavLink>
      </div>

    </div>
  );
}

export default NavBar;
