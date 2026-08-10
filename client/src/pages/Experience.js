import { motion } from "framer-motion";
import { Briefcase, Eye } from "lucide-react";

function Experience() {
  const experiences = [
    {
      role: "Civic & Social Internship",
      company: "Prasidh Foundation NGO",
      type: "Summer Internship",
      period: "01/06/2024 - 15/06/2024",
      duration: "2 weeks",
      description: "My internship at Prasidh Foundation helped me understand how technology and social work intersect. Engaging in initiatives focused on women empowerment, education, and environmental awareness shaped my sense of ethical responsibility as a future technologist.",
      skills: ["Social Impact", "Women Empowerment", "Education", "Environmental Awareness"],
      certificate: "/assets/ngo-certificate.pdf"
    },
    {
      role: "MERN Stack Development Intern",
      company: "Brainy Beam Info-Tech Pvt. Ltd.",
      type: "Summer Internship",
      period: "15/05/2026 - 28/06/2026",
      duration: "6 weeks",
      description:
        "Completed an intensive MERN Stack internship focused on building scalable full-stack web applications using modern development practices. Worked on the CampusConnect – Smart University Management Portal, implementing secure authentication, role-based access control, CRUD operations, attendance management, event and club modules, interactive campus maps, analytics dashboards, notifications, and deployment workflows while following industry-standard software development and version control practices.",
      skills: [
        "MERN Stack",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "REST APIs",
        "Bootstrap",
        "Git & GitHub",
        "Vercel Deployment"
      ],
      certificate: "/assets/brainybeam-certificate.pdf"
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
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-[150px] -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Experience</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          My professional journey, internships, and practical work experience.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 md:p-10 relative group overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1 leading-tight">{exp.role}</h2>
                  <p className="text-gray-300 font-medium">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <p className="text-gray-500 text-sm font-medium bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                      {exp.period}
                    </p>
                    <p className="text-gray-500 text-sm font-medium tracking-wide uppercase bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                      {exp.duration}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-500 text-sm font-medium tracking-wide uppercase mb-4">{exp.type}</p>

              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2.5 mt-auto">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-sm font-medium text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>

              {exp.certificate && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Certificate</span>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;