import { useEffect, useState } from "react";

import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { Link, useLocation } from "react-router";

import links from "../lib/nav-links.ts";

const Navbar = () => {
  const location = useLocation();
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  const handleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.className = mode;
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <nav className="fixed z-50 my-2 flex h-12 w-full items-center justify-center drop-shadow-lg">
      <div className="flex items-center justify-center space-x-1 rounded-md bg-blue-300/50 p-1 backdrop-blur-sm">
        {links.map((link: any) => (
          <Link
            key={link.id}
            to={link.path}
            onClick={() => window.scrollTo(0, 0)}
            className={`${location.pathname === link.path ? "text-white" : "text-heading"} ${location.pathname === link.path ? "bg-blue-500" : "bg-transparent"} ${location.pathname === link.path ? "hover:bg-blue-500" : "hover:bg-blue-300/50"} font-primaryRegular rounded-md px-3 py-2 text-base hover:bg-blue-300/60`}
          >
            {link.name}
          </Link>
        ))}
        <button
          onClick={handleMode}
          className="flex size-[41px] items-center justify-center p-2.5 hover:scale-110 hover:transition-transform"
        >
          {mode == "light" ? (
            <FaMoon className="size-5 fill-black" />
          ) : (
            <IoMdSunny className="size-5 fill-white" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
