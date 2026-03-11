import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200 mt-20">

      <div className="max-w-6xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-12">

        {/* Left Section */}

        <div>

          <h2 className="text-2xl font-bold mb-4">
            Yug Patel
          </h2>

          <p className="text-gray-600 mb-6">
            Building digital experiences with passion and precision.
            Let's create something amazing together.
          </p>

          {/* Social Icons */}

          <div className="flex gap-4 text-gray-600">

            <a href="mailto:yugpatel1275@gmail.com">
              <Mail className="hover:text-black cursor-pointer" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-black cursor-pointer" />
            </a>

            <a href="https://github.com/Yug1275" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-black cursor-pointer" />
            </a>

            <a href="https://github.com/Yug1275" rel="noopener noreferrer">
              <Instagram className="hover:text-black cursor-pointer" />
            </a>

          </div>

        </div>


        {/* Quick Links */}

        <div>

          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-600">

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>

        </div>


        {/* Contact Section */}

        <div>

          <h3 className="text-lg font-semibold mb-4">
            Get In Touch
          </h3>

          <div className="space-y-2 text-gray-600">

            <p>yugpatel1275@gmail.com</p>

            <p>India</p>

            <div className="flex items-center gap-2 mt-3">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Available for opportunities</span>
            </div>

          </div>

        </div>

      </div>


      {/* Bottom Bar */}

      <div className="border-t border-gray-200">

        <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between text-gray-600 text-sm">

          <p>© 2026 Yug Patel. All rights reserved.</p>

          <p>Built with ❤️ By Yug Patel</p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;