function About() {

  return (

    <section className="px-8 py-24 max-w-6xl mx-auto">

      {/* Heading */}

      <h2 className="text-4xl font-bold text-center mb-16">
        About Me
      </h2>


      {/* About Card */}

      <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 border border-gray-300 rounded-2xl p-12 shadow-xl">

        <div className="space-y-10 relative">

          {/* Timeline Line */}

          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gray-300"></div>


          {/* Paragraph 1 */}

          <div className="flex gap-6">

            <div className="w-4 h-4 bg-gray-600 rounded-full mt-2 relative z-10"></div>

            <p className="text-gray-700 leading-relaxed">

              I am <span className="font-semibold text-black">Yug Patel</span>, a 
              Computer Science Engineering student at 
              <span className="font-semibold text-black"> Pandit Deendayal Energy University (PDEU)</span>. 
              I am passionate about building modern web applications and solving 
              real-world problems using technology. My main focus is on 
              <span className="font-semibold text-black"> MERN stack development</span> and exploring 
              <span className="font-semibold text-black"> Artificial Intelligence and Machine Learning</span>.

            </p>

          </div>


          {/* Paragraph 2 */}

          <div className="flex gap-6">

            <div className="w-4 h-4 bg-gray-600 rounded-full mt-2 relative z-10"></div>

            <p className="text-gray-700 leading-relaxed">

              I enjoy building scalable full-stack applications using 
              <span className="font-semibold text-black"> React</span>, 
              <span className="font-semibold text-black"> Node.js</span>, 
              <span className="font-semibold text-black"> Express</span> and 
              <span className="font-semibold text-black"> MongoDB</span>. 
              I actively participate in hackathons and development events 
              to improve my problem-solving skills and gain real-world 
              engineering experience.

            </p>

          </div>

        </div>


        {/* Stats Section */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16 text-center">

          <div>
            <h3 className="text-4xl font-bold text-black">5+</h3>
            <p className="text-gray-600 text-sm mt-2 tracking-wide">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-black">10+</h3>
            <p className="text-gray-600 text-sm mt-2 tracking-wide">
              Technologies
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-black">1+</h3>
            <p className="text-gray-600 text-sm mt-2 tracking-wide">
              Years Learning
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-black">2+</h3>
            <p className="text-gray-600 text-sm mt-2 tracking-wide">
              Hackathons
            </p>
          </div>

        </div>

      </div>

    </section>

  );

}

export default About;