import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-black text-white flex justify-between items-center px-4 md:px-8 py-4">
        <h1 className="text-xl font-bold">
          <Link to="/">Yug Patel</Link>
        </h1>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-white/30"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden md:flex md:space-x-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/education">Education</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/achievements">Achievements</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            onClick={closeSidebar}
            aria-label="Close menu"
          />

          <aside className="absolute top-0 left-0 h-full w-72 bg-black text-white p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-bold">Menu</span>
              <button
                type="button"
                className="px-3 py-1 rounded-md border border-white/30"
                onClick={closeSidebar}
              >
                Close
              </button>
            </div>

            <div className="flex flex-col space-y-4 text-lg">
              <Link to="/" onClick={closeSidebar}>Home</Link>
              <Link to="/about" onClick={closeSidebar}>About</Link>
              <Link to="/experience" onClick={closeSidebar}>Experience</Link>
              <Link to="/education" onClick={closeSidebar}>Education</Link>
              <Link to="/projects" onClick={closeSidebar}>Projects</Link>
              <Link to="/skills" onClick={closeSidebar}>Skills</Link>
              <Link to="/achievements" onClick={closeSidebar}>Achievements</Link>
              <Link to="/resume" onClick={closeSidebar}>Resume</Link>
              <Link to="/contact" onClick={closeSidebar}>Contact</Link>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default Navbar;