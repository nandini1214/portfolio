export default function About() {
  const skills = [
    { category: "Frontend", items: ["React.js", "React Native", "TypeScript", "Redux Toolkit", "Tailwind CSS"] },
    { category: "Backend", items: ["Python", "FastAPI", "REST APIs", "JWT", "SQLAlchemy"] },
    { category: "Database", items: ["MySQL", "SQLite", "Database Design"] },
    { category: "AI/ML", items: ["NLP", "spaCy", "Sentence Transformers", "Text Processing"] },
  ];

  const highlights = [
    { icon: "💼", title: "Professional Experience", desc: "Full-stack development at We 2 Code Technology" },
    { icon: "🎓", title: "Education", desc: "B.Tech in Electronics & Communication, RGPV University" },
    { icon: "🏆", title: "Certifications", desc: "HackerRank, Udemy, AICTE Python Developer" },
    { icon: "🎤", title: "Leadership", desc: "Hosted major college events and workshops" },
  ];

  return (
    <section id="about" className="bg-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-slate-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-slate-100 mb-4">Who I Am</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Full-Stack Developer with hands-on experience building scalable web and mobile applications. 
              I specialize in creating responsive React frontends and robust Python/FastAPI backends, 
              with a growing focus on AI/ML technologies.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              At We 2 Code Technology, I developed solutions serving 10,000+ monthly users, built 15+ RESTful APIs, 
              and reduced manual processes by 30%. I'm passionate about leveraging technology to solve real-world problems.
            </p>
            <p className="text-slate-400 leading-relaxed">
              When I'm not coding, you'll find me hosting events, dancing, or diving into a good book.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-slate-600 transition-colors">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="text-slate-100 font-semibold mb-1 text-sm">{item.title}</h4>
                <p className="text-slate-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-slate-100 mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillSet, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
                <h4 className="text-slate-100 font-semibold mb-4">{skillSet.category}</h4>
                <div className="space-y-2">
                  {skillSet.items.map((skill, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}