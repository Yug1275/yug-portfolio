import { useEffect, useState, useRef, useCallback } from "react";
import projectsData from "../data/projects.json";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const SLIDE_DURATION = 5000;

function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  const timerRef = useRef(null);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);



  const goTo = useCallback(
    (next, dir) => {
      if (isAnimating || projects.length === 0) return;
      setDirection(dir);
      setIsAnimating(true);
      setProgress(0);
      setTimeout(() => {
        setCurrent(next);
        setDirection(null);
        setIsAnimating(false);
      }, 450);
    },
    [isAnimating, projects.length]
  );

  const goPrev = useCallback(() => {
    goTo((current - 1 + projects.length) % projects.length, "right");
  }, [current, projects.length, goTo]);

  const goNext = useCallback(() => {
    goTo((current + 1) % projects.length, "left");
  }, [current, projects.length, goTo]);

  /* ---------- timer + smooth progress ---------- */
  useEffect(() => {
    if (projects.length === 0) return;
    startTimeRef.current = performance.now();

    const tick = (now) => {
      const pct = Math.min(((now - startTimeRef.current) / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    timerRef.current = setTimeout(() => {
      goTo((current + 1) % projects.length, "left");
    }, SLIDE_DURATION);

    return () => {
      clearTimeout(timerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [current, projects.length, goTo]);

  if (projects.length === 0) return null;

  const incomingIdx = isAnimating
    ? direction === "left"
      ? (current + 1) % projects.length
      : (current - 1 + projects.length) % projects.length
    : -1;

  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-blue-500/5 rounded-full filter blur-[150px] -z-10 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A selection of projects that showcase my skills and problem-solving abilities.
        </p>
      </motion.div>

      {/* ── CARD STAGE ── */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl min-h-[600px] sm:min-h-[650px] lg:min-h-[450px]" 
      >
        {projects.map((project, idx) => {
          const isCurrent = idx === current;
          const isIncoming = idx === incomingIdx;

          let transform = "translateX(60px) scale(0.95)";
          let opacity = "0";
          let pointerEvents = "none";
          let zIndex = 0;
          let position = "absolute";

          if (isCurrent) {
            if (isAnimating) {
              transform = direction === "left" ? "translateX(-60px) scale(0.95)" : "translateX(60px) scale(0.95)";
              opacity = "0";
            } else {
              transform = "translateX(0) scale(1)";
              opacity = "1";
              pointerEvents = "auto";
              zIndex = 1;
              if (idx === 0) position = "relative";
            }
          } else if (isIncoming) {
            transform = "translateX(0) scale(1)";
            opacity = "1";
            pointerEvents = "auto";
            zIndex = 2;
          }

          return (
            <div
              key={idx}
              style={{
                position,
                inset: 0,
                transform,
                opacity,
                pointerEvents,
                zIndex,
                transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.5s ease",
                willChange: "transform, opacity",
              }}
              className="w-full h-full grid lg:grid-cols-[1fr_1.5fr] gap-0 items-center glass-panel group"
            >
              {/* IMAGE */}
              <div className="relative h-full overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[200px] sm:h-[250px] lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6 flex flex-col h-full justify-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{project.description}</p>
                </div>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-xs font-medium text-gray-300 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* ── CONTROLS BAR ── */}
      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
        {/* Left: arrows */}
        <div className="flex gap-4">
          <button
            onClick={goPrev}
            disabled={isAnimating}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-white hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group/btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:-translate-x-0.5 transition-transform">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={goNext}
            disabled={isAnimating}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-white hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group/btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-0.5 transition-transform">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Right: ● ———— 01 / 03 */}
        <div className="flex items-center gap-4">
          {/* dot */}
          <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] flex-shrink-0" />

          {/* progress track */}
          <div className="w-32 h-[3px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              style={{ width: `${progress}%`, transition: "width 0.08s linear" }}
            />
          </div>

          {/* slide count */}
          <span className="text-sm font-bold text-white tracking-wide tabular-nums">
            {String(current + 1).padStart(2, "0")}
            <span className="font-normal text-gray-500">
              {" / "}{String(projects.length).padStart(2, "0")}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
