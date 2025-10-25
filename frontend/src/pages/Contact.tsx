export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-slate-700 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a href="mailto:nandini@example.com" className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all group">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="text-slate-100 font-semibold mb-2">Email</h3>
            <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">nandanidewra2001@example.com</p>
          </a>
          
          <a href="https://linkedin.com" className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all group">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="text-slate-100 font-semibold mb-2">LinkedIn</h3>
            <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Connect with me</p>
          </a>
          
          <a href="https://github.com" className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all group">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="text-slate-100 font-semibold mb-2">GitHub</h3>
            <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">View my code</p>
          </a>
        </div>

        <a
          href="mailto:nandini@example.com"
          className="inline-block px-8 py-4 bg-slate-100 text-slate-950 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:scale-105"
        >
          Send Me a Message
        </a>
      </div>
    </section>
  );
}