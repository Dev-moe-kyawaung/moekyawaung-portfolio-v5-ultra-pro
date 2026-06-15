import Hero from "@/components/Hero";
import SkillPills from "@/components/SkillPills";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main className="relative">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_30%),linear-gradient(180deg,rgba(7,17,31,0)_0%,rgba(7,17,31,1)_100%)]" />
      
      <section className="relative mx-auto flex max-w-7xl flex-col gap-28 px-6 py-20 lg:px-8 lg:py-28">
        <Hero />

        {/* About */}
        <section className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            eyebrow="About"
            title="Senior-level mobile craftsmanship with premium presentation."
            description="I solve real product problems with clear architecture, strong UI systems, and polished execution that ships."
          />
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur">
            <p className="text-lg text-slate-300">
              I build production-ready Android and Flutter apps, then present them in a way that helps recruiters
              and teams quickly understand the technical depth behind each project.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <SectionHeading
            eyebrow="Skills"
            title="Core technologies"
            description="A compact, senior-friendly stack focused on Android, Flutter, and modern frontend delivery."
          />
          <div className="mt-10">
            <SkillPills />
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <SectionHeading
            eyebrow="Projects"
            title="Featured work"
            description="Each project is written like a mini case study: problem, solution, stack, and measurable outcome."
            align="center"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Core strengths */}
        <section>
          <SectionHeading
            eyebrow="Strengths"
            title="What this portfolio communicates"
            description="It shows not only what you build, but how you think about quality, scalability, and presentation."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold text-white">Architecture</h3>
              <p className="mt-4 text-slate-300">
                Clean code, modular structure, testable systems, and long-term maintainability.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold text-white">Product thinking</h3>
              <p className="mt-4 text-slate-300">
                Clear problem-solution-impact storytelling for every project with real metrics.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold text-white">Deployment</h3>
              <p className="mt-4 text-slate-300">
                GitHub Pages-ready with SEO-first structure, analytics, and modern static hosting.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <ContactSection />
      </section>
    </main>
  );
}
