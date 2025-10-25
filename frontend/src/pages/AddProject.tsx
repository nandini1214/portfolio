import { useState } from "react";

export default function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/projects/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, link }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || "Failed to add project");
      }

      setStatus("success");
      setTitle("");
      setDescription("");
      setLink("");
      
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-slate-950 text-slate-100 px-6 py-20">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Add New Project</h2>
          <div className="w-20 h-1 bg-slate-700 mx-auto mb-4"></div>
          <p className="text-slate-400">Share your latest work with the world</p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 p-8 md:p-10 rounded-2xl shadow-2xl backdrop-blur-sm space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-slate-300 mb-2">
              Project Title *
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., AI Resume Analyzer"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your project, its features, and technologies used..."
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all resize-none"
              rows={5}
              required
            />
            <p className="text-slate-500 text-xs mt-2">
              {description.length} characters
            </p>
          </div>

          <div>
            <label htmlFor="link" className="block text-sm font-medium text-slate-300 mb-2">
              Project Link *
            </label>
            <input
              id="link"
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://github.com/username/project"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
              required
            />
            <p className="text-slate-500 text-xs mt-2">
              GitHub, live demo, or portfolio link
            </p>
          </div>

          <button
            onClick={handleSubmit}
            disabled={status === "loading" || !title || !description || !link}
            className="w-full bg-slate-100 text-slate-950 font-semibold py-4 rounded-lg hover:bg-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Adding Project...
              </span>
            ) : (
              "Add Project"
            )}
          </button>

          {status === "success" && (
            <div className="bg-green-900/20 border border-green-700/50 text-green-400 px-4 py-3 rounded-lg flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Project added successfully!</span>
            </div>
          )}

          {status === "error" && (
            <div className="bg-red-900/20 border border-red-700/50 text-red-400 px-4 py-3 rounded-lg flex items-start gap-3">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span>{errorMessage}</span>
            </div>
          )}
        </div>

        <div className="mt-8 bg-slate-900/30 border border-slate-800 rounded-xl p-6">
          <h3 className="text-slate-200 font-semibold mb-3 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Tips for adding projects
          </h3>
          <ul className="text-slate-400 text-sm space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-slate-500 mt-1">•</span>
              <span>Use a clear, descriptive title that captures the essence of your project</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-500 mt-1">•</span>
              <span>Include key technologies, features, and impact in the description</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-500 mt-1">•</span>
              <span>Provide a working link to the project (GitHub, live demo, or case study)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}