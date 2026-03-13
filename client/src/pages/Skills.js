function Skills() {

  const skills = [
    {
      title: "Programming Languages",
      icons: ["python", "c", "cpp", "javascript"]
    },
    {
      title: "Frontend Development",
      icons: ["react", "html", "css", "javascript", "tailwindcss"]
    },
    {
      title: "Backend Development",
      icons: ["nodejs", "express"]
    },
    {
      title: "Databases",
      icons: ["mongodb", "mysql", "redis"]
    },
    {
      title: "Python Libraries & Visualization",
      custom: [
        {
          name: "NumPy",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
        },
        {
          name: "Matplotlib",
          icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg"
        },
        {
          name: "Seaborn",
          icon: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg"
        },
        {
          name: "Pandas",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
        },
        {
          name: "Power BI",
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
        },
        {
          name: "Tableau",
          icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg"
        }
      ]
    },
    {
      title: "Tools & Platforms",
      icons: ["git", "github", "netlify", "vscode", "vercel"]
    }
  ];

  return (
    <section className="py-8 px-4 sm:px-8 max-w-7xl mx-auto">

      <div className="max-w-6xl mx-auto px-2 sm:px-6">

        <h1 className="text-4xl font-bold text-center mb-2">Skills</h1>

        <p className="text-gray-600 text-center mt-4 mb-10">
          Technologies, tools, and frameworks I work with to build modern applications.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-8 md:mt-16">

          {skills.map((card, index) => (

            <div
              key={index}
              className="bg-gradient-to-br from-white via-gray-100 to-gray-200 border border-gray-300 rounded-2xl p-6 sm:p-10 shadow-xl space-y-8 card-hover"
            >

              {/* TITLE */}
              <h2 className="text-lg font-semibold mb-6">
                {card.title}
              </h2>

              {/* ICONS */}
              <div className="flex flex-wrap gap-4">

                {card.icons &&
                  card.icons.map((icon, i) => (
                    <div key={i} className="relative group">

                      <img
                        src={`https://skillicons.dev/icons?i=${icon}`}
                        alt={icon}
                        className="w-10 h-10 hover:scale-110 transition"
                      />

                      {/* Tooltip */}
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 
        bg-black text-white text-xs px-2 py-1 rounded opacity-0 
        group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                        {icon}
                      </span>

                    </div>
                  ))}

                {card.custom &&
                  card.custom.map((skill, i) => (
                    <div key={i} className="relative group">

                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 hover:scale-110 transition"
                      />

                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 
      bg-black text-white text-xs px-2 py-1 rounded opacity-0 
      group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                        {skill.name}
                      </span>

                    </div>
                  ))
                }

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills; 