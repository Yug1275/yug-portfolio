import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

function Resume() {
  const resumeFile = "/assets/Yug Patel Resume.pdf"; // put resume in public/assets

  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative min-h-screen flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full filter blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Resume</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            View or download my resume below.
          </p>
        </motion.div>

        {/* RESUME CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="glass-panel p-6 sm:p-10 relative overflow-hidden flex flex-col items-center group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* PDF PREVIEW */}
          <div className="w-full h-[65vh] min-h-[400px] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative bg-white/5">
            <iframe
              src={resumeFile}
              title="Resume Preview"
              className="w-full h-full relative z-10"
            ></iframe>
            {/* Fallback visual if iframe fails or loads slowly */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Loading Resume...
            </div>
          </div>

          {/* DOWNLOAD BUTTON */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 px-8 py-3.5 rounded-full text-white font-medium transition-all duration-300 shadow-xl"
            >
              <Eye className="w-5 h-5" />
              <span>Open in Browser</span>
            </a>
            
            <a
              href={resumeFile}
              download
              className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-xl group/btn"
            >
              <Download className="w-5 h-5 group-hover/btn:-translate-y-0.5 transition-transform" />
              <span>Download PDF</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;