import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
}

const skillsData = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
      { name: "C", icon: "https://skillicons.dev/icons?i=c" },
      { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
      { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
      { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwindcss" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
      { name: "Redis", icon: "https://skillicons.dev/icons?i=redis" },
    ],
  },
  {
    title: "Python Libraries & Visualization",
    skills: [
      {
        name: "NumPy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
      {
        name: "Matplotlib",
        icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
      },
      {
        name: "Seaborn",
        icon: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
      },
      {
        name: "Pandas",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
      {
        name: "Power BI",
        icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
      },
      {
        name: "Tableau",
        icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
      { name: "Netlify", icon: "https://skillicons.dev/icons?i=netlify" },
      { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
      { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
    ],
  },
];

function OrbitCluster3D({ title, skills }) {
  const [angle, setAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const lastTimeRef = useRef(performance.now());
  const rafRef = useRef(null);

  const total = skills.length;
  const radiusX = 125; // horizontal radius
  const radiusY = 28;  // vertical radius bringing icons across text
  const radiusZ = 80;  // 3D depth radius

  // 16 seconds for full 360 degree revolution
  const ORBIT_DURATION_MS = 16000;

  useEffect(() => {
    lastTimeRef.current = performance.now();

    const animate = (now) => {
      const delta = now - lastTimeRef.current;
      lastTimeRef.current = now;

      if (!isPaused) {
        setAngle((prev) => (prev + (delta / ORBIT_DURATION_MS) * 360) % 360);
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setHoveredIcon(null);
      }}
      className="glass-panel relative w-full h-[360px] rounded-3xl p-4 flex items-center justify-center overflow-hidden group border border-white/10 hover:border-white/20 transition-all duration-500 shadow-xl [perspective:1000px]"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* 3D Elliptical Orbit Line */}
      <svg
        className="absolute w-[320px] h-[180px] pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-500"
        viewBox="0 0 320 180"
      >
        <ellipse
          cx="160"
          cy="90"
          rx={radiusX}
          ry={radiusY}
          fill="none"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
      </svg>

      {/* 3D Orbit Stage */}
      <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d] pointer-events-none">
        
        {/* Center Label (Placed inside 3D stage at z=0, zIndex=20) */}
        <div 
          className="absolute z-20 w-28 h-28 rounded-full bg-black/75 backdrop-blur-md border border-white/15 flex items-center justify-center p-3 text-center shadow-2xl transition-transform duration-300 group-hover:scale-105 pointer-events-none"
          style={{ transform: "translate3d(0, 0, 0px)" }}
        >
          <span className="text-sm font-semibold text-white tracking-wide leading-tight drop-shadow">
            {title}
          </span>
        </div>

        {skills.map((skill, idx) => {
          const baseAngle = (360 / total) * idx;
          const currentAngle = (baseAngle + angle) % 360;
          const rad = (currentAngle * Math.PI) / 180;

          // Trigonometric 3D positions
          const x = Math.cos(rad) * radiusX;
          const y = Math.sin(rad) * radiusY;
          const z = Math.sin(rad) * radiusZ; // positive when in front, negative when behind

          // Normalized depth factor from 0 (furthest back) to 1 (closest front)
          const depthFactor = (z + radiusZ) / (2 * radiusZ);

          const isThisHovered = hoveredIcon === skill.name;

          // Dynamic scale, opacity & z-index
          const currentScale = isThisHovered
            ? 1.35
            : 0.7 + depthFactor * 0.5; // 0.7x (back) to 1.2x (front)

          const currentOpacity = isThisHovered
            ? 1.0
            : 0.4 + depthFactor * 0.6; // 0.4 (back) to 1.0 (front)

          // Icons in front (z > 0) get high z-index (100+), icons in back get low z-index (< 20)
          const currentZIndex = isThisHovered
            ? 300
            : z > 0
            ? 100 + Math.round(z)
            : 5 + Math.round(depthFactor * 10);

          return (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredIcon(skill.name)}
              onMouseLeave={() => setHoveredIcon(null)}
              className="absolute pointer-events-auto transition-transform duration-100 ease-out"
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                zIndex: currentZIndex,
                willChange: "transform, opacity",
              }}
            >
              <div
                className="relative group/icon flex flex-col items-center justify-center"
                style={{
                  transform: `scale(${currentScale})`,
                  opacity: currentOpacity,
                  transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
                }}
              >
                {/* Skill Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 p-2.5 flex items-center justify-center shadow-2xl group-hover/icon:border-white/60 group-hover/icon:bg-white/15 transition-all">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain pointer-events-none"
                  />
                </div>

                {/* Tooltip Pill */}
                <span className="absolute -top-9 bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs px-2.5 py-1 rounded-full opacity-0 group-hover/icon:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xl z-50 transform translate-y-1 group-hover/icon:translate-y-0">
                  {skill.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MobileSkillCard({ title, skills }) {
  return (
    <div className="glass-panel p-6 rounded-2xl relative overflow-hidden flex flex-col h-full border border-white/10">
      <h2 className="text-lg font-semibold mb-5 text-white tracking-wide border-b border-white/10 pb-3">
        {title}
      </h2>

      <div className="flex flex-wrap gap-4 mt-auto">
        {skills.map((skill, i) => (
          <div key={i} className="relative group/icon flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shadow-md">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[11px] text-gray-400 mt-1.5 font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const isMobile = useIsMobile();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[140px] -z-10 pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[140px] -z-10 pointer-events-none animate-pulse" />

      <div className="max-w-6xl mx-auto px-2 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Skills & Ecosystem
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies, frameworks, and tools powering my full-stack applications.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              {isMobile ? (
                <MobileSkillCard
                  title={category.title}
                  skills={category.skills}
                />
              ) : (
                <OrbitCluster3D
                  title={category.title}
                  skills={category.skills}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;