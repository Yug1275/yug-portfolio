import { Cpu, Code, Brain } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="px-4 sm:px-8 py-24 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full filter blur-[120px] -z-10 pointer-events-none" />

      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          About Me
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Get to know more about me, my background, and my interests in technology.
        </p>
      </motion.div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <motion.div 
          className="flex-1 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="glass-panel p-8 sm:p-10 space-y-10 relative overflow-hidden group">
            {/* Subtle inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Item 1 */}
            <motion.div variants={itemVariants} className="flex gap-6 items-start">
              <div className="p-3 rounded-xl bg-white/10 border border-white/10 shrink-0">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                I am <span className="font-semibold text-white">Yug Patel</span>, a
                Computer Science Engineering student at
                <span className="font-semibold text-white"> Pandit Deendayal Energy University (PDEU)</span>.
                I am passionate about building modern web applications and solving
                real-world problems using technology.
              </p>
            </motion.div>

            {/* Item 2 */}
            <motion.div variants={itemVariants} className="flex gap-6 items-start">
              <div className="p-3 rounded-xl bg-white/10 border border-white/10 shrink-0">
                <Code className="text-white w-6 h-6" />
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                My main focus is on
                <span className="font-semibold text-white"> MERN stack development</span>
                and building scalable applications using
                <span className="font-semibold text-white"> React, Node.js, Express and MongoDB</span>.
              </p>
            </motion.div>

            {/* Item 3 */}
            <motion.div variants={itemVariants} className="flex gap-6 items-start">
              <div className="p-3 rounded-xl bg-white/10 border border-white/10 shrink-0">
                <Brain className="text-white w-6 h-6" />
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                I also enjoy exploring modern web technologies and building interactive
                digital experiences. I like experimenting with new tools, frameworks,
                and creative workflows to turn ideas into clean and responsive
                applications.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center w-full"
        >
          <div className="relative group w-64 sm:w-80 h-[390px] sm:h-[520px] overflow-visible" style={{ perspective: "1000px" }}>
            {/* Soft outer glow */}
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-white/10 via-transparent to-cyan-300/10 blur-3xl opacity-35 group-hover:opacity-55 transition-opacity duration-700" />

            {/* Frame */}
            <motion.div
              className="relative h-full w-full rounded-[3rem] p-[3px] bg-[linear-gradient(145deg,rgba(255,255,255,0.4),rgba(255,255,255,0.08),rgba(255,255,255,0.35))] shadow-[0_0_50px_rgba(255,255,255,0.12)]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[calc(3rem-3px)] border border-white/10 bg-slate-950/70 backdrop-blur-sm">
                <img
                  src="/assets/yug_profile_pic.png"
                  alt="Yug Patel"
                  className="h-full w-full object-cover object-center"
                />

                <div className="absolute inset-x-5 top-5 h-24 rounded-full bg-white/10 blur-2xl opacity-35" />
                <div className="absolute inset-x-5 bottom-5 h-20 rounded-full bg-cyan-300/10 blur-2xl opacity-40" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;