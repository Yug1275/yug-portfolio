import Spline from "@splinetool/react-spline";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";



function Hero() {
  return (

    <section className="min-h-screen flex items-center bg-black text-white px-4 sm:px-6 md:px-10 py-16 md:py-0">

      <div className="flex flex-col md:flex-row items-center w-full gap-8 md:gap-0">

        {/* LEFT SIDE */}
        <div className="flex-1 text-center md:text-left">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Hi, I'm Yug Patel
          </h1>

          <div className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl text-gray-300">

            <TypeAnimation
              sequence={[
                "Computer Science Engineering Student",
                2000,
                "Full Stack Web Developer",
                2000,
                "Passionate About Building Projects",
                2000,
              ]}
              speed={80}
              repeat={Infinity}
            />

          </div>

          <p className="mt-4 md:mt-6 max-w-lg text-sm sm:text-base text-gray-400 mx-auto md:mx-0">
            I am passionate about developing modern web applications and continuously exploring new technologies, including full-stack development and Artificial Intelligence, to build impactful digital solutions.
          </p>

          {/* Buttons */}

          <div className="mt-6 md:mt-8">

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">

              <Link to="/projects">
                <button className="border border-white px-5 py-2 sm:px-6 text-sm sm:text-base rounded hover:bg-white hover:text-black transition duration-300">
                  View Projects
                </button>
              </Link>

              <a href="/assets/Yug Patel Resume.pdf" download>
                <button className="border border-white px-5 py-2 sm:px-6 text-sm sm:text-base rounded hover:bg-white hover:text-black transition duration-300">
                  Download Resume
                </button>
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE — Spline container with responsive height */}

        <div className="flex-1 w-full h-[280px] sm:h-[380px] md:h-[600px]">

          <Spline scene="https://prod.spline.design/AcoTuX6zf3KfZ36W/scene.splinecode" />

        </div>

      </div>

    </section>

  );
}

export default Hero;