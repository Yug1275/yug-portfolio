import { Cpu, Code, Brain } from "lucide-react";

function About() {

  return (

    <section className="px-8 py-8 max-w-6xl mx-auto">

      {/* Heading */}

      <h2 className="text-4xl font-bold text-center mb-2">
        About Me
      </h2>

      <p className="text-gray-600 text-center mt-4 mb-10">
        Get to know more about me, my background, and my interests in technology.
      </p>


      {/* Main Container */}

      <div className="flex flex-col md:flex-row items-center gap-16">


        {/* Left Content */}

        <div className="flex-1 space-y-10">

          {/* Card */}

          <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 border border-gray-300 rounded-2xl p-10 shadow-xl space-y-8 card-hover">

            {/* Item 1 */}

            <div className="flex gap-5 items-start">

              <Cpu className="text-black mt-1" size={24} />

              <p className="text-gray-700 leading-relaxed">

                I am <span className="font-semibold text-black">Yug Patel</span>, a
                Computer Science Engineering student at
                <span className="font-semibold text-black"> Pandit Deendayal Energy University (PDEU)</span>.
                I am passionate about building modern web applications and solving
                real-world problems using technology.

              </p>

            </div>


            {/* Item 2 */}

            <div className="flex gap-5 items-start">

              <Code className="text-black mt-1" size={24} />

              <p className="text-gray-700 leading-relaxed">

                My main focus is on
                <span className="font-semibold text-black"> MERN stack development</span>
                and building scalable applications using
                <span className="font-semibold text-black"> React, Node.js, Express and MongoDB</span>.

              </p>

            </div>


            {/* Item 3 */}

            <div className="flex gap-5 items-start">

              <Brain className="text-black mt-1" size={24} />

              <p className="text-gray-700 leading-relaxed">

                I am also deeply interested in
                <span className="font-semibold text-black"> Artificial Intelligence and Machine Learning</span>
                and enjoy participating in hackathons and development events
                to improve my problem-solving skills.

              </p>

            </div>

          </div>
        </div>


        {/* Right Image */}

        <div className="flex-1 flex justify-center">

          <div className="relative">

            {/* Metallic Frame */}

            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 via-black to-gray-700 blur-md scale-110"></div>

            {/* Image */}

            <img
              src="/assets/yug_profile_pic.png"
              alt="Yug Patel"
              className="relative w-72 h-50 object-cover rounded-full border-4 border-gray-800 shadow-2xl card-hover"
            />

          </div>

        </div>

      </div>

    </section>

  );

}

export default About;