function Experience() {
  return (
    <section className="px-8 py-8 max-w-6xl mx-auto">

      {/* Heading */}

      <h1 className="text-4xl font-bold text-center mb-2">
        Experience
      </h1>
      <p className="text-gray-600 text-center mt-4 mb-10">
  My professional journey, internships, and practical work experience.
</p>
      


      {/* Experience Card */}

      <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 border border-gray-300 rounded-2xl p-10 shadow-xl space-y-8 card-hover">

        {/* Title */}

        <div>
          <h2 className="text-2xl font-semibold text-black">
            Civic & Social Internship
          </h2>

          <p className="text-gray-600 mt-1">
            Prasidh Foundation NGO
          </p>

          <p className="text-gray-500 text-sm">
            Summer Internship
          </p>
        </div>


        {/* Description */}

        <p className="text-gray-700 text-lg leading-relaxed">

          My internship at <span className="font-semibold text-black">Prasidh Foundation</span> 
          helped me understand how technology and social work intersect. 
          Engaging in initiatives focused on 
          <span className="font-semibold text-black"> women empowerment</span>, 
          <span className="font-semibold text-black"> education</span>, and 
          <span className="font-semibold text-black"> environmental awareness</span> 
          shaped my sense of ethical responsibility as a future technologist.

        </p>


        {/* Skills / Focus Areas */}

        <div className="flex flex-wrap gap-3">

          <span className="border border-gray-400 px-3 py-1 rounded-lg text-sm">
            Social Impact
          </span>

          <span className="border border-gray-400 px-3 py-1 rounded-lg text-sm">
            Women Empowerment
          </span>

          <span className="border border-gray-400 px-3 py-1 rounded-lg text-sm">
            Education
          </span>

          <span className="border border-gray-400 px-3 py-1 rounded-lg text-sm">
            Environmental Awareness
          </span>

        </div>

      </div>

    </section>
  );
}

export default Experience;