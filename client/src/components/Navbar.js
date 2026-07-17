import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Achievements", path: "/achievements" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={clsx(
          "fixed top-0 inset-x-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "py-3 bg-background/70 backdrop-blur-lg border-b border-white/10 shadow-lg"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-white hover:text-gray-300 transition-colors">
            <Link to="/">Yug Patel</Link>
          </h1>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    "relative px-3 py-2 rounded-md transition-colors duration-300 hover:text-white",
                    isActive ? "text-white" : "text-gray-400"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-md bg-white/10 -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isSidebarOpen && (
          <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeSidebar}
              aria-label="Close menu"
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 h-full w-72 bg-[#0a0a0a] border-r border-white/10 text-white p-6 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold tracking-tight">Menu</span>
                <button
                  type="button"
                  className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  onClick={closeSidebar}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={closeSidebar}
                      className={clsx(
                        "block px-4 py-3 rounded-lg transition-colors text-base font-medium",
                        location.pathname === link.path
                          ? "bg-white/10 text-white"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;