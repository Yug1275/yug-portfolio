import Spline from "@splinetool/react-spline";
import { TypeAnimation } from "react-type-animation";

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
                "MERN Stack Developer",
                2000,
                "AI & ML Enthusiast",
                2000,
                "Frontend Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          <p className="mt-6 max-w-lg text-gray-400">
            I build modern web applications using the MERN stack
            and explore Artificial Intelligence and Machine Learning.
          </p>

          {/* Buttons */}

          <div className="mt-8 space-x-4">

            <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
              View Projects
            </button>

            <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
              Download Resume
            </button>

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