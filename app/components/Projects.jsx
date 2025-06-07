import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      img: "",
      title: "Redis Clone",
      dis: "A Redis clone built in C++, providing a high-performance, in-memory data structure store for caching and real-time applications with efficient data retrieval and storage capabilities.",
    },
    {
      id: 2,
      img: "",
      title: "AI RAG Customer Support",
      dis: "Used python libraries to construct charts and graphs, some of the libraries I used were, Matplotlib, Seaborn, Plotly, ggplot and Pandas.",
    },
    {
      id: 3,
      img: "",
      title: "OpenAI Inventory System",
      dis: "Used python libraries to construct charts and graphs, some of the libraries I used were, Matplotlib, Seaborn, Plotly, ggplot and Pandas, to offer a range of functionalities that cater to different needs, from simple plots to interactive.",
    },
    {
      id: 4,
      img: "",
      title: "Analytical Budgeting App",
      dis: "Used python libraries to construct charts and graphs, some of the libraries I used were, Matplotlib, Seaborn, Plotly, ggplot and Pandas, to offer a range of functionalities that cater to different needs.",
    },
  ];
  return (
    <div className="my-[4em] p-4 rounded-lg bg-slate-700/[0.2] transition-all ease-in-out duration-200 hover:bg-slate-800/[0.3] backdrop-blur-3xl">
      <h2 className="text-3xl font-bold font-sans text-sky-500 mb-4">
        Projects
      </h2>

      <div className="grid grid-flow-row grid-cols-2 max-[1190px]:grid-cols-1 gap-0">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" flex flex-col p-4 transition-all ease-in-out duration-200 ring-slate-900 hover:ring-1 rounded-lg"
          >
            <div className="bg-black w-full max-md:w-[70%] max-sm:w-full h-[160px] rounded-md"></div>
            <h4 className="text-xl font-sans font-bold text-[#5ba4d8] mt-4 mb-2">
              {project.title}
            </h4>
            <p className="text-slate-300 max-[441px]:text-sm text-lg font-bold font-sans text-left">
              {project.dis}
            </p>
          </div>
        ))}
      </div>

      <button className="m-8 mx-auto max-sm:w-[80%] w-[40%] text-lg h-10 hover:border border-slate-900 rounded-lg transition-all ease-in-out bg-slate-700/50 hover:bg-slate-700/70 text-slate-300 font-bold font-sans">
        View Full Portfolio
      </button>
    </div>
  );
};

export default Projects;
