function Achievements() {

  const achievements = [
    {
      title: "Human Computer Interaction",
      organization: "NPTEL (IIT Delhi & IIT Madras)",
      date: "November 2025",
      description:
        "Completed a 12-week NPTEL course on Human Computer Interaction with a score of 90/100.",
      image: "/assets/nptel.png",
      certificate: "/assets/certificates/nptel.pdf"
    },
    {
      title: "Civic and Social Services Internship",
      organization: "Prasidhh Foundation",
      date: "July 2024",
      description:
        "Completed a one-month Civic and Social Services Internship with Nirvana Foundation.",
      image: "/assets/cssi.png",
      certificate: "/assets/certificates/cssi.pdf"
    },
    {
      title: "Power BI Workshop",
      organization: "Skill Nation",
      date: "April 2024",
      description:
        "Completed a hands-on Power BI workshop conducted by Skill Nation, focusing on data visualization, dashboard creation, and business intelligence techniques.",
      image: "/assets/powerbi.png",
      certificate: "/assets/certificates/powerbi.pdf"
    },
    {
      title: "Generative AI: The Evolution of Thoughtful Online Search",
      organization: "Microsoft & LinkedIn Learning",
      date: " March 2024",
      description:
        "Completed the Career Essentials in Generative AI learning path by Microsoft and LinkedIn Learning, covering generative AI concepts, responsible AI practices, and real-world AI applications.",
      image: "/assets/genai.png",
      certificate: "/assets/certificates/genai.pdf"
    }
  ];

  return (
    <section className="py-8 px-4 sm:px-8 max-w-7xl mx-auto">

      <div className="max-w-6xl mx-auto px-2 sm:px-6">

        <h1 className="text-4xl font-bold text-center mb-2">Achievements</h1>

        <p className="text-gray-600 text-center mt-4 mb-10">
          Certifications, internships and achievements.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-8 md:mt-16">

          {achievements.map((item, index) => (

            <div
              key={index}
              className="bg-gradient-to-br from-white via-gray-100 to-gray-200 border border-gray-300 rounded-2xl p-6 sm:p-10 shadow-xl space-y-6 card-hover"
            >

              {/* IMAGE */}
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-50 object-contain"
                />
              </div>

              {/* DATE */}
              <div className="text-sm text-gray-500 text-center">
                {item.date}
              </div>

              {/* TITLE */}
              <h2 className="text-lg font-semibold text-center">
                {item.title}
              </h2>

              {/* ORGANIZATION */}
              <p className="text-gray-600 text-sm text-center">
                {item.organization}
              </p>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-700 text-center">
                {item.description}
              </p>

              {/* DOWNLOAD BUTTON */}
              <div className="flex justify-center">
                <a
                  href={item.certificate}
                  download
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
                >
                  Download Certificate
                </a>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Achievements;