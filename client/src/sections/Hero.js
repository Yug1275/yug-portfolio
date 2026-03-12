import Spline from "@splinetool/react-spline";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";



function Hero() {
  return (

    <section className="min-h-screen flex items-center bg-black text-white px-10">

      <div className="flex flex-col md:flex-row items-center w-full">

        {/* LEFT SIDE */}
        <div className="flex-1">

          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, I'm Yug Patel
          </h1>

          <div className="mt-6 text-2xl text-gray-300">

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

          <p className="mt-6 max-w-lg text-gray-400">
          I am passionate about developing modern web applications and continuously exploring new technologies, including full-stack development and Artificial Intelligence, to build impactful digital solutions.
          </p>

          {/* Buttons */}

          <div className="mt-8 space-x-4">

            <div className="flex gap-4">

              <Link to="/projects">
                <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition duration-300">
                  View Projects
                </button>
              </Link>

              <a href="/assets/Yug Patel Resume.pdf" download>
                <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition duration-300">
                  Download Resume
                </button>
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex-1 h-[600px]">

          <Spline scene="https://prod.spline.design/AcoTuX6zf3KfZ36W/scene.splinecode" />

        </div>

      </div>

    </section>

  );
}

export default Hero;