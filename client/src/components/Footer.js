import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  const socialLinks = [
    { icon: Mail, href: "mailto:yjpatel1275@gmail.com" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yugpatel040205/" },
    { icon: Github, href: "https://github.com/Yug1275" },
    { icon: Instagram, href: "https://www.instagram.com/yugpatel253/" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-background border-t border-white/10 pt-16 mt-20 overflow-hidden">
      {/* Subtle Gradient Line at top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-10 sm:pb-16 grid md:grid-cols-3 gap-12 md:gap-16">
        {/* Left Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
            Yug Patel
          </h2>
          <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
            Building digital experiences with passion and precision. Let's create something amazing together.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            Get In Touch
          </h3>
          <div className="space-y-4 text-gray-400">
            <a href="mailto:yjpatel1275@gmail.com" className="block hover:text-white transition-colors">
              yjpatel1275@gmail.com
            </a>
            <p>India</p>
            <div className="flex items-center gap-3 mt-4 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-green-400">Available for opportunities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Yug Patel. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-red-500">❤️</span> By Yug Patel
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;