import { useState } from "react";
import logo from "../assets/logo.svg";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#products" },
  { name: "Author", href: "#about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-gray-200 bg-[#a2ca57]">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="w-8" />
          <span className="self-center text-2xl whitespace-nowrap">
            Identity
          </span>
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm
         rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
        focus:ring-gray-200"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`w-full overflow-hidden transition-all duration-300 ease-in-out
        ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        md:max-h-none md:opacity-100 md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
        bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 
        md:bg-transparent"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-[#a2ca57]
                md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
