import { useState, useEffect } from "react";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const roles = ["Full-Stack Developer", "React Engineer", "Python Developer", "AI Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen bg-slate-950 text-slate-100 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-slate-800/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto flex flex-col items-center justify-center min-h-screen text-center pt-20">
        {/* Greeting */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300 backdrop-blur-sm">
            👋 Welcome to my portfolio
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
          Hi, I'm Nandini
        </h1>

        {/* Typing animation */}
        <div className="h-16 mb-8">
          <p className="text-2xl md:text-3xl text-slate-300 font-medium">
            {displayText}
            <span className="inline-block w-0.5 h-7 bg-slate-400 ml-1 animate-pulse"></span>
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
          Building scalable web applications with <span className="text-slate-200 font-semibold">React</span>, 
          <span className="text-slate-200 font-semibold"> FastAPI</span>, and exploring 
          <span className="text-slate-200 font-semibold"> AI/ML</span> technologies. 
          Passionate about creating impactful solutions.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12 w-full max-w-2xl">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-3xl font-bold text-slate-100">6</div>
            <div className="text-sm text-slate-400 mt-1">Months Experience</div>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-3xl font-bold text-slate-100">5</div>
            <div className="text-sm text-slate-400 mt-1">Projects Built</div>
          </div>
          {/* <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-3xl font-bold text-slate-100">500+</div>
            <div className="text-sm text-slate-400 mt-1">Users Served</div>
          </div> */}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-4 bg-slate-100 text-slate-950 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-slate-800 text-slate-100 rounded-lg font-semibold border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap justify-center gap-3 max-w-xl">
          {["React", "Python", "FastAPI", "TypeScript", "NLP", "MySQL", "React Native"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-slate-900/50 border border-slate-800 text-slate-300 rounded-lg text-sm backdrop-blur-sm hover:border-slate-700 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        
      </div>
    </section>
  );
}