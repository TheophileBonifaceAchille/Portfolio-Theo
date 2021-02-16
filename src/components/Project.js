import React, { useEffect, useState } from "react";
//import project from "../../portfolio/schemas/project";
import sanityClient from "../client";

export default function Project() {
  const [projectData, setProjectData] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      linkGit,
      linkSite,
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gradient-to-r from-gray-800 via-yellow-300 to-gray-800 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        <section className="grid grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project) => (
              // eslint-disable-next-line react/jsx-key
              <article className="rounded-lg shadow-xl bg-gray-800 p-16">
                <h3 className="cursive text-yellow-200 font-bold text-3xl font-bold mb-2 hover:text-red-500">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-white text-sm space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Place</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-white leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.linkSite}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold py-5 hover:underline hover:text-red-400"
                  >
                    View The Project Site{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                  <a
                    href={project.linkGit}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400"
                  >
                    View Git Repository{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
