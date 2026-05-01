import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.ezst.app/projects/ca7fed77-c2d6-481b-a0b1-324671aeff25/files/fd29e042-fa48-4215-8d2f-1f5d40562cdf.jpg";

const projects = [
  {
    year: "2024",
    title: "Brand Identity System",
    category: "Design",
    description: "Complete visual identity for a fintech startup — logo, typography, color system, and digital guidelines.",
    tags: ["Branding", "UI/UX", "Strategy"],
  },
  {
    year: "2023",
    title: "E-commerce Platform Redesign",
    category: "Product",
    description: "End-to-end redesign increasing conversion by 34%. Research, wireframes, prototyping, and implementation.",
    tags: ["Product Design", "Research", "Figma"],
  },
  {
    year: "2023",
    title: "Annual Report 2023",
    category: "Editorial",
    description: "Art direction and layout design for a 120-page report distributed to 40,000+ stakeholders.",
    tags: ["Editorial", "Print", "Art Direction"],
  },
  {
    year: "2022",
    title: "Mobile App — Healthcare",
    category: "UX/UI",
    description: "Patient-facing app for a private clinic network. From discovery workshops to developer handoff.",
    tags: ["Mobile", "Healthcare", "Prototyping"],
  },
];

const experience = [
  {
    period: "2022 — Present",
    role: "Senior Product Designer",
    company: "Studio Nord",
    location: "Berlin",
    description: "Leading design for enterprise clients across fintech, healthcare, and retail sectors. Managing a team of 3 designers.",
  },
  {
    period: "2019 — 2022",
    role: "UX/UI Designer",
    company: "Lightform Agency",
    location: "Amsterdam",
    description: "Designed digital products for 20+ clients. Specialised in design systems and user research.",
  },
  {
    period: "2017 — 2019",
    role: "Junior Designer",
    company: "Bureau Collective",
    location: "London",
    description: "Branding, print, and early digital projects. Foundation in editorial and typographic design.",
  },
];

const skills = [
  "Product Design", "Design Systems", "User Research",
  "Figma", "Prototyping", "Brand Identity",
  "Art Direction", "Typography", "Motion Design",
];

export default function Index() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          <span className="font-display text-xl font-light tracking-wide">
            Daniel Yarockii
          </span>
          <div className="hidden md:flex items-center gap-10 text-sm font-light tracking-widest uppercase text-stone-400">
            <button onClick={() => scrollTo("work")} className="hover:text-stone-900 transition-colors">Work</button>
            <button onClick={() => scrollTo("experience")} className="hover:text-stone-900 transition-colors">Experience</button>
            <button onClick={() => scrollTo("about")} className="hover:text-stone-900 transition-colors">About</button>
            <button
              onClick={() => scrollTo("contact")}
              className="text-stone-900 border border-stone-900 px-5 py-2 hover:bg-stone-900 hover:text-white transition-all"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div className="opacity-0 animate-[fade-up_0.7s_ease-out_0.1s_forwards]">
            <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-8">
              Product Designer · Berlin
            </p>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-10">
              Crafting<br />
              <em className="not-italic text-stone-400">purposeful</em><br />
              experiences
            </h1>
            <p className="text-stone-500 font-light leading-relaxed text-lg max-w-md mb-12">
              Senior Product Designer with 7+ years building digital products
              that balance business goals with genuine user needs.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollTo("work")}
                className="bg-stone-900 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-stone-700 transition-colors"
              >
                View Work
              </button>
              <button className="flex items-center gap-2 text-sm tracking-widest uppercase text-stone-400 hover:text-stone-900 transition-colors">
                <Icon name="Download" size={16} />
                Download CV
              </button>
            </div>
          </div>

          <div className="opacity-0 animate-[fade-up_0.7s_ease-out_0.35s_forwards]">
            <div className="relative">
              <img
                src={HERO_IMAGE}
                alt="Portfolio"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-stone-200 -z-10" />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="mt-20 pt-10 border-t border-stone-100 grid grid-cols-3 gap-8 opacity-0 animate-[fade-up_0.7s_ease-out_0.55s_forwards]"
        >
          {[
            { n: "7+", label: "Years of experience" },
            { n: "60+", label: "Projects delivered" },
            { n: "20+", label: "Happy clients" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl font-light mb-1">{s.n}</p>
              <p className="text-sm text-stone-400 font-light tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 max-w-6xl mx-auto px-8">
        <div className="flex items-end justify-between mb-16 border-b border-stone-900 pb-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-3">Selected</p>
            <h2 className="font-display text-5xl font-light">Workkk</h2>
          </div>
          <span className="text-sm text-stone-400 font-light">{projects.length} projects</span>
        </div>

        <div className="space-y-0">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group border-b border-stone-100 py-10 grid grid-cols-12 gap-6 hover:bg-stone-50 transition-colors px-4 -mx-4 cursor-pointer"
            >
              <div className="col-span-1 text-stone-300 font-light text-sm pt-1">{p.year}</div>
              <div className="col-span-7">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="font-display text-2xl font-light group-hover:text-stone-600 transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-xs tracking-widest uppercase text-stone-400 border border-stone-200 px-3 py-1">
                    {p.category}
                  </span>
                </div>
                <p className="text-stone-500 font-light leading-relaxed">{p.description}</p>
              </div>
              <div className="col-span-3 flex flex-wrap gap-2 content-start">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs text-stone-400 font-light">{tag}</span>
                ))}
              </div>
              <div className="col-span-1 flex items-center justify-end">
                <Icon name="ArrowUpRight" size={18} className="text-stone-300 group-hover:text-stone-900 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-end justify-between mb-16 border-b border-stone-900 pb-6">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-3">Career</p>
              <h2 className="font-display text-5xl font-light">Experience</h2>
            </div>
            <button className="flex items-center gap-2 text-sm font-light tracking-widest uppercase text-stone-900 border border-stone-900 px-6 py-3 hover:bg-stone-900 hover:text-white transition-all">
              <Icon name="Download" size={15} />
              Download CV
            </button>
          </div>

          <div className="space-y-0">
            {experience.map((e) => (
              <div key={e.company} className="border-b border-stone-200 py-10 grid grid-cols-12 gap-6">
                <div className="col-span-3">
                  <p className="text-sm text-stone-400 font-light">{e.period}</p>
                </div>
                <div className="col-span-9">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
                    <h3 className="font-display text-2xl font-light">{e.role}</h3>
                    <span className="text-stone-400 font-light">—</span>
                    <span className="text-stone-600 font-light">{e.company}</span>
                    <span className="text-xs tracking-widest uppercase text-stone-300 ml-auto">{e.location}</span>
                  </div>
                  <p className="text-stone-500 font-light leading-relaxed max-w-xl">{e.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="mt-20">
            <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-8">Skills & Tools</p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="text-sm font-light border border-stone-200 px-4 py-2 text-stone-600 hover:border-stone-900 hover:text-stone-900 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-3">About</p>
            <h2 className="font-display text-5xl font-light mb-10 border-b border-stone-900 pb-6">
              Who I am
            </h2>
            <div className="space-y-5 text-stone-500 font-light leading-relaxed text-lg">
              <p>
                I'm a product designer based in Berlin, originally from Stockholm.
                My work lives at the intersection of rigorous thinking and visual craft.
              </p>
              <p>
                I believe the best digital products are invisible — they get out of the way
                and let people do what they came to do. Getting there requires equal parts
                empathy, systems thinking, and obsessive attention to detail.
              </p>
              <p>
                When not designing, I shoot 35mm film, read about urban planning,
                and search for the perfect cup of coffee.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-8">Education & Certifications</p>
            {[
              { year: "2017", title: "BA Graphic & Communication Design", place: "Central Saint Martins, London" },
              { year: "2019", title: "Google UX Design Certificate", place: "Google / Coursera" },
              { year: "2021", title: "Nielsen Norman UX Certification", place: "NN Group" },
            ].map((edu) => (
              <div key={edu.title} className="border-l-2 border-stone-200 pl-6 hover:border-stone-900 transition-colors">
                <p className="text-xs text-stone-400 mb-1 font-light">{edu.year}</p>
                <p className="font-display text-xl font-light">{edu.title}</p>
                <p className="text-sm text-stone-400 font-light">{edu.place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-4">Let's talk</p>
              <h2 className="font-display text-6xl font-light leading-tight mb-6">
                Available for<br />
                <em className="not-italic text-stone-400">new projects</em>
              </h2>
              <p className="text-stone-400 font-light leading-relaxed mb-10">
                Open to freelance collaborations, full-time roles, and consulting.
                Typical response within 24 hours.
              </p>
              <a
                href="mailto:hello@alexmorgan.design"
                className="inline-flex items-center gap-3 text-sm tracking-widest uppercase border border-white text-white px-8 py-4 hover:bg-white hover:text-stone-900 transition-all"
              >
                <Icon name="Mail" size={16} />
                Say hello
              </a>
            </div>

            <div className="space-y-6 border-l border-stone-700 pl-12">
              {[
                { icon: "Mail", label: "Email", value: "hello@alexmorgan.design" },
                { icon: "Linkedin", label: "LinkedIn", value: "linkedin.com/in/alexmorgan" },
                { icon: "Globe", label: "Website", value: "alexmorgan.design" },
                { icon: "MapPin", label: "Location", value: "Berlin, Germany" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <Icon name={c.icon} size={16} className="text-stone-500" />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-stone-500 font-light">{c.label}</p>
                    <p className="text-stone-300 font-light">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-stone-100 max-w-6xl mx-auto px-8 flex items-center justify-between">
        <span className="font-display text-sm font-light text-stone-400">© 2024 Alex Morgan</span>
        <span className="text-xs tracking-widest uppercase text-stone-300 font-light">Product Designer</span>
      </footer>
    </div>
  );
}