import { useEffect, useState, useRef, useCallback } from "react";
import API from "../utils/api";

const SLIDE_DURATION = 5000;

function Projects() {
  const [projects, setProjects] = useState([]);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  const timerRef = useRef(null);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await API.get("/projects/featured");
      setProjects(res.data);
    };
    fetchProjects();
  }, []);

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
    <section className="py-8 px-4 sm:px-8 max-w-7xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-2">
        Featured Projects
      </h2>

      <p className="text-gray-600 text-center mt-4 mb-10">
        A selection of projects that showcase my skills and problem-solving abilities.
      </p>

      {/* ── CARD STAGE ── */}
      <div className="relative overflow-hidden rounded-2xl card-hover" style={{ minHeight: 'clamp(320px, 60vw, 480px)' }}>
        {projects.map((project, idx) => {
          const isCurrent = idx === current;
          const isIncoming = idx === incomingIdx;

          let transform = "translateX(60px)";
          let opacity = "0";
          let pointerEvents = "none";
          let zIndex = 0;
          let position = "absolute";

          if (isCurrent) {
            if (isAnimating) {
              transform = direction === "left" ? "translateX(-60px)" : "translateX(60px)";
              opacity = "0";
            } else {
              transform = "translateX(0)";
              opacity = "1";
              pointerEvents = "auto";
              zIndex = 1;
              /* first card drives the stage height */
              if (idx === 0) position = "relative";
            }
          } else if (isIncoming) {
            transform = "translateX(0)";
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
                transition: "transform 0.45s cubic-bezier(0.65,0,0.2,1), opacity 0.45s ease",
                willChange: "transform, opacity",
              }}
              className="w-full grid md:grid-cols-[1.3fr_1fr] gap-10 items-center bg-gradient-to-br from-white via-gray-100 to-gray-200 border border-gray-300 rounded-2xl p-8 shadow-xl"
            >
              {/* IMAGE */}
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full h-[200px] sm:h-[260px] md:h-[320px] object-cover shadow-lg"
                />
              </div>

              {/* CONTENT */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="border border-gray-400 px-3 py-1 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
                  >
                    GitHub
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── CONTROLS BAR ── */}
      <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between">

        {/* Left: arrows */}
        <div className="flex gap-3">
          <button
            onClick={goPrev}
            disabled={isAnimating}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={goNext}
            disabled={isAnimating}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Right: ● ———— 01 / 03 */}
        <div className="flex items-center gap-3">
          {/* dot */}
          <span className="w-[7px] h-[7px] rounded-full bg-gray-800 flex-shrink-0" />

          {/* progress track */}
          <div className="w-28 h-[2px] bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-800 rounded-full"
              style={{ width: `${progress}%`, transition: "width 0.08s linear" }}
            />
          </div>

          {/* slide count */}
          <span className="text-sm font-bold text-gray-800 tracking-wide tabular-nums">
            {String(current + 1).padStart(2, "0")}
            <span className="font-normal text-gray-400">
              {" / "}{String(projects.length).padStart(2, "0")}
            </span>
          </span>
        </div>

      </div>
    </section>
  );
}

export default Projects;
