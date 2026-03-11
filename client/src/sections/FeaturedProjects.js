import { useEffect, useState } from "react";
import API from "../utils/api";

function FeaturedProjects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    const fetchProjects = async () => {

      const res = await API.get("/projects/featured");

      setProjects(res.data);

    };

    fetchProjects();

  }, []);

  return (

    <section className="py-20 bg-gray-100">

      <h2 className="text-4xl font-bold text-center mb-10">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-10">

        {projects.map((project) => (

          <div
            key={project._id}
            className="bg-white shadow-lg p-6 rounded-lg"
          >

            <h3 className="text-xl font-bold">
              {project.title}
            </h3>

            <p className="mt-3 text-gray-600">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">

              {project.techStack.map((tech, index) => (

                <span
                  key={index}
                  className="bg-gray-200 px-3 py-1 rounded"
                >
                  {tech}
                </span>

              ))}

            </div>

            <div className="mt-6 flex gap-4">

              <a
                href={project.githubLink}
                className="text-blue-500"
              >
                GitHub
              </a>

              <a
                href={project.liveLink}
                className="text-green-500"
              >
                Live
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default FeaturedProjects;