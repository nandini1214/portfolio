import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-xl shadow-slate-900/50"
          : "bg-slate-950/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-slate-200 hover:text-white transition-colors duration-300"
        >
          Nandini Dewra - Full Stack Engineer
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-slate-400 hover:text-slate-100 relative group transition-colors duration-300"
            >
              {link.label}
              <span className="absolute bottom-1 left-4 right-4 h-px bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-300 shadow-lg shadow-slate-900/30"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-400 hover:text-slate-100 focus:outline-none relative w-10 h-10 flex flex-col justify-center items-center transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <span
            className={`bg-current h-0.5 w-6 rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`bg-current h-0.5 w-6 rounded transition-all duration-300 my-1.5 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`bg-current h-0.5 w-6 rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-slate-900 border-t border-slate-800">
          <div className="flex flex-col px-6 py-6 space-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg border border-slate-700 hover:border-slate-600 text-center transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}