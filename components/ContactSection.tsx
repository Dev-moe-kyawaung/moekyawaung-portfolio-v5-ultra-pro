import { profile } from "@/data/profile";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden rounded-[3rem] border border-white/15 bg-gradient-to-r from-cyan-400/15 via-indigo-500/15 to-fuchsia-500/15 p-10 shadow-2xl shadow-cyan-950/20 md:p-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_40%)]" />
      
      <div className="relative max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">
          Contact
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          Let's build something polished and impactful.
        </h2>
        <p className="mt-6 text-xl text-slate-300">
          Open to senior Android, Flutter, and frontend opportunities, plus premium portfolio and product showcase work.
        </p>

        <div className="mt-10 flex flex-wrap gap-6">
          <a
            className="group inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
            href={`mailto:${profile.email}`}
          >
            <span>✉</span>
            <span>{profile.email}</span>
          </a>
          <a
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            href={profile.github}
          >
            <span>⌘</span>
            <span>Github</span>
          </a>
          <a
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            href={profile.linkedin}
          >
            <span>◎</span>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
