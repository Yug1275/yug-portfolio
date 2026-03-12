function Education() {
  return (
    <section className="px-8 py-8 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold text-center mb-2">
        Education
      </h1>
      <p className="text-gray-600 text-center mt-4 mb-10">
        My academic background and the institutions that shaped my learning.
      </p>

      <div className="space-y-12">

        {/* PDEU CARD */}

        <div className="grid md:grid-cols-[150px_1fr_220px] gap-10 items-center bg-gradient-to-br from-white via-gray-100 to-gray-200 border border-gray-300 rounded-2xl p-10 shadow-xl card-hover">


          {/* LEFT YEAR SECTION */}

          <div>

            <h2 className="text-5xl font-bold text-black">
              2027
            </h2>

            <p className="text-gray-500 mt-2">
              2023 – 2027
            </p>

            {/* University Image */}

            <img
              src="/assets/pdpu_logo.png"
              alt="PDEU"
              className="w-24 h-24 rounded-xl mt-4 object-contain bg-white p-2 shadow"
            />

          </div>


          {/* MIDDLE CONTENT */}

          <div className="space-y-5">

            <h2 className="text-2xl font-semibold text-black">
              B.Tech. in Computer Science Engineering
            </h2>

            <p className="text-gray-600">
              Pandit Deendayal Energy University (PDEU)
            </p>

            <p className="text-gray-500 text-sm">
              Gandhinagar, Gujarat, India
            </p>

            <hr className="border-gray-300" />

            <p className="text-gray-700 leading-relaxed">

              Currently pursuing a Bachelor’s degree in Computer Science Engineering at PDEU. Actively working on real-world projects and continuously learning modern technologies to build scalable and impactful software solutions.

            </p>

          </div>


          {/* RIGHT SIDE */}

          <div className="space-y-6">

            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wide">
                Grade
              </p>

              <h3 className="text-2xl font-semibold text-black">
                9.53 CGPA
              </h3>
            </div>


            <div>

              <p className="text-gray-500 text-sm uppercase tracking-wide mb-3">
                Skills
              </p>

              <div className="flex flex-wrap gap-2">

                <span className="border border-gray-400 px-3 py-1 rounded-lg text-sm">
                  Data Structures & Algorithm
                </span>

                <span className="border border-gray-400 px-3 py-1 rounded-lg text-sm">
                  Web Development
                </span>

                <span className="border border-gray-400 px-3 py-1 rounded-lg text-sm">
                  DBMS
                </span>

                <span className="border border-gray-400 px-3 py-1 rounded-lg text-sm">
                  Computer Networks
                </span>

                <span className="border border-gray-400 px-3 py-1 rounded-lg text-sm">
                  Operating System
                </span>

              </div>

            </div>

          </div>

        </div>



        {/* SCHOOL CARD */}

        <div className="grid md:grid-cols-[150px_1fr_220px] gap-10 items-center bg-gradient-to-br from-white via-gray-100 to-gray-200 border border-gray-300 rounded-2xl p-10 shadow-xl card-hover">


          {/* LEFT YEAR */}

          <div>

            <h2 className="text-5xl font-bold text-black">
              2023
            </h2>

            <p className="text-gray-500 mt-2">
              2021 – 2023
            </p>

            <img
              src="/assets/sjs_logo.png"
              alt="School"
              className="w-24 h-24 rounded-xl mt-4 object-contain bg-white p-2 shadow"
            />

          </div>


          {/* MIDDLE */}

          <div className="space-y-5">

            <h2 className="text-2xl font-semibold text-black">
              Higher Secondary Education -HSC (Science)
            </h2>

            <p className="text-gray-600">
              Saint Josephs's High School
            </p>

            <p className="text-gray-500 text-sm">
              Khanusa, vijapur ,Gujarat, India
            </p>

            <hr className="border-gray-300" />

            <p className="text-gray-700 leading-relaxed">

              Completed higher secondary education with focus on
              Physics, Chemistry, and Mathematics which built a strong
              analytical and problem-solving foundation.

            </p>

          </div>


          {/* RIGHT */}

          <div>

            <p className="text-gray-500 text-sm uppercase tracking-wide mb-3">
              Key Subjects
            </p>

            <div className="flex flex-wrap gap-2">

              <span className="border border-gray-400 px-3 py-1 rounded-lg text-sm">
                Physics
              </span>

              <span className="border border-gray-400 px-3 py-1 rounded-lg text-sm">
                Chemistry
              </span>

              <span className="border border-gray-400 px-3 py-1 rounded-lg text-sm">
                Mathematics
              </span>

              <span className="border border-gray-400 px-3 py-1 rounded-lg text-sm">
                English
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;