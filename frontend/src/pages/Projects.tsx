import { useState, useEffect } from "react";

// 👇 1️⃣ Define your data shape based on backend
interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

// 👇 2️⃣ Component
export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/projects/") // 👈 note the trailing slash (important in FastAPI)
      .then((res) => res.json())
      .then((data: Project[]) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  // 👇 3️⃣ Safe helper for text truncation
  const truncateText = (text: string | null | undefined, maxLength: number): string => {
    if (!text) return "";
    return text.length <= maxLength ? text : text.substring(0, maxLength) + "...";
  };

  return (
    <section id="projects" className="bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-slate-700 mx-auto mb-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore my portfolio of web applications and AI-powered solutions
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-slate-400"></div>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">
              No projects found. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 hover:scale-105 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-slate-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
                  {truncateText(project.description, 100)}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-slate-300 hover:text-slate-100 text-sm transition-colors mt-auto"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
