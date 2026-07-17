import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      title: "Programming Languages",
      icons: ["python", "c", "cpp", "javascript"]
    },
    {
      title: "Frontend Development",
      icons: ["react", "html", "css", "javascript", "tailwindcss"]
    },
    {
      title: "Backend Development",
      icons: ["nodejs", "express"]
    },
    {
      title: "Databases",
      icons: ["mongodb", "mysql", "redis"]
    },
    {
      title: "Python Libraries & Visualization",
      custom: [
        {
          name: "NumPy",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
        },
        {
          name: "Matplotlib",
          icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg"
        },
        {
          name: "Seaborn",
          icon: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg"
        },
        {
          name: "Pandas",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
        },
        {
          name: "Power BI",
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
        },
        {
          name: "Tableau",
          icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg"
        }
      ]
    },
    {
      title: "Tools & Platforms",
      icons: ["git", "github", "netlify", "vscode", "vercel"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-2 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Skills</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies, tools, and frameworks I work with to build modern applications.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 group relative overflow-hidden flex flex-col h-full"
            >
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* TITLE */}
              <h2 className="text-xl font-semibold mb-6 text-white tracking-wide border-b border-white/10 pb-4">
                {card.title}
              </h2>

              {/* ICONS */}
              <div className="flex flex-wrap gap-5 mt-auto">
                {card.icons &&
                  card.icons.map((icon, i) => (
                    <motion.div 
                      key={i} 
                      className="relative group/icon"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="absolute inset-0 bg-white/20 blur-md rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
                      <img
                        src={`https://skillicons.dev/icons?i=${icon}`}
                        alt={icon}
                        className="w-12 h-12 relative z-10"
                      />
                      {/* Tooltip */}
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-sm border border-white/10 text-white text-xs px-2.5 py-1.5 rounded-md opacity-0 group-hover/icon:opacity-100 transition duration-300 pointer-events-none whitespace-nowrap shadow-xl z-20">
                        {icon.charAt(0).toUpperCase() + icon.slice(1)}
                      </span>
                    </motion.div>
                  ))}

                {card.custom &&
                  card.custom.map((skill, i) => (
                    <motion.div 
                      key={i} 
                      className="relative group/icon"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="absolute inset-0 bg-white/20 blur-md rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
                      <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl border border-white/10 relative z-10 p-2">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-sm border border-white/10 text-white text-xs px-2.5 py-1.5 rounded-md opacity-0 group-hover/icon:opacity-100 transition duration-300 pointer-events-none whitespace-nowrap shadow-xl z-20">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))
                }
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills; 