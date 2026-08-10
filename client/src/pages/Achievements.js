import { motion } from "framer-motion";
import { Eye } from "lucide-react";

function Achievements() {
  const achievements = [
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      organization: "Udemy",
      date: "July 2026",
      description:
        "Successfully completed a comprehensive 62-hour full-stack web development bootcamp covering modern frontend and backend technologies, responsive web design, REST APIs, authentication, databases, deployment, and full-stack application development.",
      image: "/assets/fullstack.png",
      certificate: "/assets/certificates/fullstack.pdf"
    },
    {
      title: "Human Computer Interaction",
      organization: "NPTEL (IIT Delhi & IIT Madras)",
      date: "November 2025",
      description:
        "Completed a 12-week NPTEL course on Human Computer Interaction with a score of 90/100.",
      image: "/assets/nptel.png",
      certificate: "/assets/certificates/nptel.pdf"
    },
    {
      title: "Civic and Social Services Internship",
      organization: "Prasidhh Foundation",
      date: "July 2024",
      description:
        "Completed a one-month Civic and Social Services Internship with Nirvana Foundation.",
      image: "/assets/cssi.png",
      certificate: "/assets/certificates/cssi.pdf"
    },
    {
      title: "Power BI Workshop",
      organization: "Skill Nation",
      date: "April 2024",
      description:
        "Completed a hands-on Power BI workshop conducted by Skill Nation, focusing on data visualization, dashboard creation, and business intelligence techniques.",
      image: "/assets/powerbi.png",
      certificate: "/assets/certificates/powerbi.pdf"
    },
    {
      title: "Generative AI: The Evolution of Thoughtful Online Search",
      organization: "Microsoft & LinkedIn Learning",
      date: " March 2024",
      description:
        "Completed the Career Essentials in Generative AI learning path by Microsoft and LinkedIn Learning, covering generative AI concepts, responsible AI practices, and real-world AI applications.",
      image: "/assets/genai.png",
      certificate: "/assets/certificates/genai.pdf"
    },
    {
      title: "AI Fluency for Students",
      organization: "Anthropic",
      date: "July 2026",
      description:
        "Successfully completed the AI Fluency for Students program by Anthropic, developing practical skills in generative AI, prompt engineering, responsible AI usage, critical evaluation of AI-generated content, and effective application of AI tools for learning, research, and productivity.",
      image: "/assets/ai-fluency.png",
      certificate: "/assets/certificates/ai-fluency.pdf"
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-2 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Achievements</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Certifications, internships and achievements.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 group relative flex flex-col h-full overflow-hidden"
            >
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* IMAGE */}
              <div className="flex justify-center mb-8 h-32 relative">
                <div className="absolute inset-0 bg-white/5 rounded-2xl filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* DATE */}
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 text-center mb-3">
                {item.date}
              </div>

              {/* TITLE */}
              <h2 className="text-xl font-bold text-center text-white mb-2 leading-tight">
                {item.title}
              </h2>

              {/* ORGANIZATION */}
              <p className="text-gray-400 font-medium text-sm text-center mb-4">
                {item.organization}
              </p>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-400 text-center leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>

              {/* VIEW BUTTON */}
              <div className="flex justify-center mt-auto">
                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white border border-white/10 hover:border-white px-5 py-2.5 rounded-full text-white hover:text-black font-medium transition-all duration-300 text-sm group/btn"
                >
                  <Eye className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                  <span>View Certificate</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;