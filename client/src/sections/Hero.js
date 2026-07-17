import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.VANTA.NET) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x538d37,
          backgroundColor: 0x0,
          points: 12.00,
          maxDistance: 23.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={vantaRef} className="relative min-h-screen flex items-center bg-background text-foreground px-4 sm:px-6 md:px-10 py-24 md:py-0 overflow-hidden">
      
      {/* Background Glow/Blobs - Green Theme */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto gap-8">
        
        <motion.div 
          className="flex flex-col items-center justify-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
      
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 py-2"
          >
            Hi, I'm Yug Patel
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 drop-shadow-md">
            <TypeAnimation
              sequence={[
                "Computer Science Engineering Student",
                2000,
                "Full Stack Web Developer",
                2000,
                "Passionate About Building Projects",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={true}
            />
          </motion.div>

          <motion.p variants={itemVariants} className="mt-8 max-w-2xl text-base sm:text-lg text-gray-200 leading-relaxed drop-shadow-lg bg-black/20 p-4 rounded-2xl backdrop-blur-sm border border-white/5">
            I am passionate about developing modern web applications and continuously exploring new technologies, including full-stack development and Artificial Intelligence, to build impactful digital solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="mt-10">
            <div className="flex flex-wrap gap-5 justify-center">
              <Link to="/projects">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden group bg-white text-black px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-xl"
                >
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </motion.button>
              </Link>

              <a href="/assets/Yug Patel Resume.pdf" download>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 rounded-full font-bold border border-white/20 bg-black/40 backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-white shadow-xl"
                >
                  Download Resume
                </motion.button>
              </a>
            </div>
          </motion.div>
        </motion.div>

      </div>
      
      {/* Seamless Fading Mask */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}

export default Hero;