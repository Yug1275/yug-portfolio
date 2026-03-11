import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-8 py-4">

      <h1 className="text-xl font-bold">
        Yug Patel
      </h1>

      <div className="space-x-6">

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/education">Education</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/achievements">Achievements</Link>
        <Link to="/hobbies">Hobbies</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>

      </div>

    </nav>
  );
}

export default Navbar;