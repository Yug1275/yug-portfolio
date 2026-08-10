import { motion } from "framer-motion";
import { Eye } from "lucide-react";

function Education() {
  const education = [
    {
      year: "2023 – 2027",
      degree: "B.Tech. in Computer Science Engineering",
      institution: "Pandit Deendayal Energy University (PDEU)",
      location: "Gandhinagar, Gujarat, India",
      description: "Currently pursuing a Bachelor’s degree in Computer Science Engineering at PDEU. Actively working on real-world projects and continuously learning modern technologies to build scalable and impactful software solutions.",
      grade: "9.53 CGPA",
      logo: "/assets/pdpu_logo.png",
      skills: ["Data Structures & Algorithm", "Web Development", "DBMS", "Computer Networks", "Operating System"],
      results: [
        { label: "Sem 1", file: "/assets/sem1-result.pdf" },
        { label: "Sem 2", file: "/assets/sem2-result.pdf" },
        { label: "Sem 3", file: "/assets/sem3-result.pdf" },
        { label: "Sem 4", file: "/assets/sem4-result.pdf" },
        { label: "Sem 5", file: "/assets/sem5-result.pdf" },
      ]
    },
    {
      year: "2021 – 2023",
      degree: "Higher Secondary Education - HSC (Science)",
      institution: "Saint Josephs's High School",
      location: "Khanusa, Vijapur, Gujarat, India",
      description: "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics which built a strong analytical and problem-solving foundation.",
      grade: null,
      logo: "/assets/sjs_logo.png",
      skills: ["Physics", "Chemistry", "Mathematics", "English"],
      results: [
        { label: "10th Result", file: "/assets/10th-result.pdf" },
        { label: "12th Result", file: "/assets/12th-result.pdf" },
      ]
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
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-[150px] -z-10 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Education</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          My academic background and the institutions that shaped my learning.
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
          {education.map((edu, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 md:p-10 relative group overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-6 gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-1 leading-tight">{edu.degree}</h2>
                  <p className="text-gray-300 font-medium text-lg mt-2">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <p className="text-gray-500 text-sm font-medium bg-white/5 px-2.5 py-1 rounded-md border border-white/10">{edu.year}</p>
                    <p className="text-gray-500 text-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                      {edu.location}
                    </p>
                  </div>
                </div>
                {edu.logo && (
                  <div className="hidden sm:block shrink-0 bg-white/90 p-1.5 rounded-xl border border-white/10 shadow-lg">
                    <img src={edu.logo} alt={edu.institution} className="w-12 h-12 object-contain rounded-lg" />
                  </div>
                )}
              </div>
              
              <div className="w-full h-px bg-white/10 mb-6" />
              
              <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                {edu.description}
              </p>

              {edu.grade && (
                <div className="mb-6">
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1 font-semibold">Grade</p>
                  <h3 className="text-xl font-bold text-white">{edu.grade}</h3>
                </div>
              )}
              
              <div className="mt-auto">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 font-semibold">{edu.grade ? "Skills" : "Key Subjects"}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span key={i} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-sm font-medium text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {edu.results && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 font-semibold">Results</p>
                  <div className="flex flex-wrap gap-3">
                    {edu.results.map((result, i) => (
                      <a
                        key={i}
                        href={result.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg text-white text-xs font-medium transition-all duration-300"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View {result.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Education;