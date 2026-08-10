import { useState, useEffect, useRef, useCallback } from "react";
import projectsData from "../data/projects.json";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDE_DURATION = 3000;

function Projects() {
  const [projects] = useState(projectsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const lastTimeRef = useRef(performance.now());
  const rafRef = useRef(null);
  const wheelTimeout = useRef(null);

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + projects.length) % projects.length);
    setProgress(0);
  }, [projects.length]);

  // 1. Timer Loop Logic
  useEffect(() => {
    lastTimeRef.current = performance.now();
    const tick = (now) => {
      const delta = now - lastTimeRef.current;
      lastTimeRef.current = now;

      if (!isPaused) {
        setProgress((prev) => prev + (delta / SLIDE_DURATION) * 100);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused]);

  // Trigger pagination when progress completes
  useEffect(() => {
    if (progress >= 100) {
      paginate(1);
    }
  }, [progress, paginate]);

  // 2. Wheel Scroll Gesture
  const handleWheel = useCallback((e) => {
    if (Math.abs(e.deltaX) < 20) return; // ignore small trackpad wiggles
    if (wheelTimeout.current) return;

    wheelTimeout.current = setTimeout(() => { wheelTimeout.current = null }, 800); // Cooldown

    if (e.deltaX > 0) paginate(1);
    else if (e.deltaX < 0) paginate(-1);
  }, [paginate]);

  // 3. Touch/Drag Gesture
  const handleDragEnd = (e, { offset, velocity }) => {
    setIsPaused(false); // resume on drag end
    const swipeThreshold = 50;
    const velocityThreshold = 500;

    if (offset.x < -swipeThreshold || velocity.x < -velocityThreshold) {
      paginate(1);
    } else if (offset.x > swipeThreshold || velocity.x > velocityThreshold) {
      paginate(-1);
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    })
  };

  if (projects.length === 0) return null;

  return (
    <section className="py-24 px-4 sm:px-8 overflow-hidden relative min-h-screen flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-blue-500/5 rounded-full filter blur-[150px] -z-10 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my skills and problem-solving abilities.
          </p>
        </motion.div>

        {/* Carousel Area */}
        <div
          className="relative w-full px-4 sm:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onWheel={handleWheel}
        >

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full bg-white/10 hover:bg-white border border-white/10 hover:border-white text-gray-300 hover:text-black transition-all duration-300 backdrop-blur-md"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full bg-white/10 hover:bg-white border border-white/10 hover:border-white text-gray-300 hover:text-black transition-all duration-300 backdrop-blur-md"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Card Container */}
          <div className="relative w-full h-[600px] lg:h-[450px] overflow-hidden rounded-[2.5rem]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => setIsPaused(true)}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 w-full h-full bg-[#121212] border border-white/5 shadow-2xl flex flex-col lg:flex-row cursor-grab active:cursor-grabbing rounded-[2.5rem] overflow-hidden"
              >

                {/* Image Left */}
                <div className="relative w-full lg:w-2/5 h-1/2 lg:h-full shrink-0 overflow-hidden bg-black">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    draggable={false}
                  />
                  {/* Subtle gradient overlay to blend into the right content on mobile, or right edge on desktop */}
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#121212] lg:from-transparent lg:via-transparent via-[#121212]/50 to-transparent pointer-events-none" />
                </div>

                {/* Content Right */}
                <div className="w-full lg:w-3/5 h-1/2 lg:h-full p-6 sm:p-10 flex flex-col justify-center relative z-10 -mt-6 lg:mt-0">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 tracking-tight">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 line-clamp-4 lg:line-clamp-none">
                    {projects[currentIndex].description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[currentIndex].techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white/10 border border-white/5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium text-gray-300 backdrop-blur-md shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-auto lg:mt-0">
                    {projects[currentIndex].liveLink && (
                      <a
                        href={projects[currentIndex].liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex justify-center items-center gap-2 bg-white text-black hover:bg-gray-200 px-6 py-3.5 rounded-full text-[15px] font-bold transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={projects[currentIndex].githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/5 px-6 py-3.5 rounded-full text-white text-[15px] font-semibold transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Segmented Progress Bar */}
        <div className="flex justify-center items-center gap-2 mt-4 px-12 max-w-md mx-auto w-full">
          {projects.map((_, idx) => (
            <div
              key={idx}
              className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden relative cursor-pointer"
              onClick={() => {
                const dir = idx > currentIndex ? 1 : -1;
                setDirection(dir);
                setCurrentIndex(idx);
                setProgress(0);
              }}
            >
              {idx === currentIndex && (
                <motion.div
                  className="absolute left-0 top-0 h-full bg-white"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              )}
              {idx < currentIndex && (
                <div className="absolute left-0 top-0 h-full w-full bg-white" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
