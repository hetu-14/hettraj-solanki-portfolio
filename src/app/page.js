const profile = {
  name: "Hetraj Solanki",
  role: "Full-Stack Developer",
  tagline:
    "I design and ship clean web experiences with sharp visuals, fast interactions, and practical systems that scale.",
  location: "India / Remote",
  availability: "Open to freelance and full-time product work",
};

const stats = [
  { value: "15+", label: "shipped projects" },
  { value: "4", label: "focus areas" },
  { value: "100%", label: "responsive builds" },
];

const featuredProjects = [
  {
    name: "Portfolio Engine",
    category: "Brand site",
    summary:
      "A premium personal portfolio layout with bold typography, layered depth, and quick anchor-based navigation.",
    impact: "Built for a strong first impression on desktop and mobile.",
  },
  {
    name: "Task Flow Dashboard",
    category: "Productivity",
    summary:
      "A dense but readable dashboard concept that turns daily activity, priorities, and progress into one glance.",
    impact: "Keeps important decisions visible without overwhelming the screen.",
  },
  {
    name: "Studio Landing Page",
    category: "Marketing",
    summary:
      "A conversion-focused landing page with social proof, service highlights, and a clear contact path.",
    impact: "Optimized for lead capture without sacrificing visual quality.",
  },
];

const capabilities = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "App Router",
  "Responsive UI",
  "Animation",
  "Design Systems",
  "Accessibility",
];

const process = [
  {
    step: "01",
    title: "Shape the brief",
    body: "We define the audience, message, and primary action before anything is designed.",
  },
  {
    step: "02",
    title: "Build the system",
    body: "Colors, type, spacing, and component patterns are locked into a consistent visual language.",
  },
  {
    step: "03",
    title: "Ship and refine",
    body: "The final site is tuned for motion, responsiveness, and practical deployment on Vercel.",
  },
];

const timeline = [
  {
    year: "Now",
    title: "Freelance and product builds",
    body: "Focused on front-end craft, clean architecture, and polished delivery.",
  },
  {
    year: "2025",
    title: "Full-stack portfolio work",
    body: "Built apps, dashboards, and communication-driven interfaces with modern tooling.",
  },
  {
    year: "2024",
    title: "Web fundamentals",
    body: "Strengthened project structure, accessibility, and responsive implementation habits.",
  },
];

function Icon({ children, title }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>{title}</title>
      {children}
    </svg>
  );
}

function ArrowIcon() {
  return (
    <Icon title="Arrow">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Icon>
  );
}

function SparkIcon() {
  return (
    <Icon title="Spark">
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
    </Icon>
  );
}

function CodeIcon() {
  return (
    <Icon title="Code">
      <path d="m9 18-6-6 6-6" />
      <path d="m15 6 6 6-6 6" />
      <path d="M14 4 10 20" />
    </Icon>
  );
}

function MailIcon() {
  return (
    <Icon title="Mail">
      <path d="m4 7 8 6 8-6" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
    </Icon>
  );
}

export default function Home() {
  return (
    <main className="min-h-dvh overflow-x-clip bg-[radial-gradient(circle_at_top_left,_rgba(217,119,6,0.2),_transparent_28%),radial-gradient(circle_at_85%_10%,_rgba(15,118,110,0.16),_transparent_22%),linear-gradient(180deg,_#f7f1e8_0%,_#f5efe3_48%,_#efe4d2_100%)] text-stone-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-4 sm:px-8 lg:px-10">
        <header className="sticky top-3 z-30 mb-8 rounded-full border border-black/10 bg-[#fffaf0]/85 px-4 py-3 shadow-[0_18px_60px_rgba(27,24,20,0.12)] backdrop-blur-xl">
          <nav className="flex flex-wrap items-center justify-between gap-3">
            <a href="#top" className="text-sm font-semibold tracking-[0.3em] uppercase">
              {profile.name}
            </a>
            <div className="flex flex-wrap items-center gap-2 text-sm text-stone-700">
              <a className="rounded-full px-3 py-1 transition hover:bg-stone-950 hover:text-white" href="#work">
                Work
              </a>
              <a className="rounded-full px-3 py-1 transition hover:bg-stone-950 hover:text-white" href="#about">
                About
              </a>
              <a className="rounded-full px-3 py-1 transition hover:bg-stone-950 hover:text-white" href="#process">
                Process
              </a>
              <a className="rounded-full px-3 py-1 transition hover:bg-stone-950 hover:text-white" href="#contact">
                Contact
              </a>
            </div>
          </nav>
        </header>

        <section
          id="top"
          className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-stone-700 shadow-sm">
              <SparkIcon />
              Portfolio 2026
            </div>

            <div className="space-y-4">
              <h1 className="font-display max-w-4xl text-5xl leading-[0.92] tracking-[-0.05em] text-balance sm:text-6xl lg:text-8xl">
                Product-minded interfaces with a premium feel.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-stone-700 sm:text-lg">
                {profile.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-stone-800"
              >
                View selected work
                <ArrowIcon />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-stone-950/15 bg-white/70 px-5 py-3 text-sm font-medium text-stone-950 transition hover:-translate-y-0.5 hover:border-stone-950/30 hover:bg-white"
              >
                Start a project
                <MailIcon />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-3xl border border-white/70 bg-white/75 p-4 shadow-[0_18px_40px_rgba(33,26,16,0.08)] backdrop-blur"
                >
                  <div className="text-3xl font-semibold tracking-[-0.04em]">{stat.value}</div>
                  <p className="mt-1 text-sm text-stone-600">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-stone-950/10 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-[#111111] p-6 text-white shadow-[0_25px_80px_rgba(16,12,8,0.26)]">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/55">Studio card</p>
                  <h2 className="font-display text-3xl tracking-[-0.04em]">
                    {profile.name}
                  </h2>
                  <p className="max-w-xs text-sm leading-6 text-white/72">{profile.role}</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d97706] text-lg font-bold text-white">
                  HS
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/50">Location</p>
                  <p className="mt-3 text-lg font-medium">{profile.location}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/50">Availability</p>
                  <p className="mt-3 text-lg font-medium">{profile.availability}</p>
                </div>
              </div>

              <div className="mt-4 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/50">Current stack</p>
                  <CodeIcon />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {capabilities.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-white/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="work" className="mt-20 space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-stone-600">Selected work</p>
              <h2 className="font-display mt-2 text-3xl tracking-[-0.04em] sm:text-4xl">
                A portfolio that shows range without looking busy.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-stone-600">
              Each card is built to make the story easy to scan: what it is, why it matters, and the kind of value it creates.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article
                key={project.name}
                className="group rounded-[1.75rem] border border-stone-950/10 bg-white/75 p-5 shadow-[0_18px_40px_rgba(33,26,16,0.06)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(33,26,16,0.12)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-stone-950/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-stone-600">
                    {project.category}
                  </span>
                  <span className="text-sm text-stone-500">0{index + 1}</span>
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl tracking-[-0.03em]">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone-700">{project.summary}</p>
                <div className="mt-6 border-t border-stone-950/10 pt-4 text-sm text-stone-600">
                  {project.impact}
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-stone-950">
                  Explore concept
                  <span className="transition group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-20 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="rounded-[2rem] border border-stone-950/10 bg-[#fffaf0]/80 p-6 shadow-[0_18px_40px_rgba(33,26,16,0.07)] backdrop-blur">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-stone-600">About</p>
            <h2 className="font-display mt-3 text-3xl tracking-[-0.04em] sm:text-4xl">
              Clear structure, strong typography, and practical frontend decisions.
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              This portfolio is designed to feel confident on first glance and stay useful when someone actually needs to scan your work,
              your stack, and how to contact you.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Product UI", "Web apps", "Landing pages", "Motion"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-stone-950/10 bg-white/80 px-3 py-1.5 text-sm text-stone-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-stone-950/10 bg-white/80 p-6 shadow-[0_18px_40px_rgba(33,26,16,0.06)] backdrop-blur">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-stone-600">Timeline</p>
                <h2 className="font-display mt-3 text-3xl tracking-[-0.04em]">
                  What I’ve been building
                </h2>
              </div>
              <div className="hidden rounded-full border border-stone-950/10 bg-stone-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white sm:block">
                Current focus
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {timeline.map((item) => (
                <div key={item.year} className="grid gap-3 rounded-[1.5rem] border border-stone-950/10 p-4 sm:grid-cols-[90px_1fr]">
                  <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d97706]">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-stone-600">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="process" className="mt-20 space-y-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-stone-600">Process</p>
            <h2 className="font-display mt-2 text-3xl tracking-[-0.04em] sm:text-4xl">
              Straightforward workflow, no unnecessary noise.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {process.map((item) => (
              <article
                key={item.step}
                className="rounded-[1.75rem] border border-stone-950/10 bg-white/75 p-5 shadow-[0_18px_40px_rgba(33,26,16,0.06)] backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d97706]">
                  {item.step}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-stone-950/10 bg-stone-950 px-6 py-8 text-white shadow-[0_24px_80px_rgba(16,12,8,0.3)] sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/55">Contact</p>
              <h2 className="font-display mt-3 text-3xl tracking-[-0.04em] sm:text-4xl">
                Want a portfolio that looks more deliberate than template-made?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
                Send over your name, role, and links. I can swap the placeholder copy, add your real projects, and tailor the site to your niche.
              </p>
            </div>
            <a
              id="contact"
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d97706] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c26b04]"
            >
              hello@example.com
              <MailIcon />
            </a>
          </div>
        </section>

        <footer className="mt-10 flex flex-col gap-3 border-t border-stone-950/10 pt-6 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {profile.name}. Built for a polished GitHub + Vercel launch.
          </p>
          <p className="text-stone-500">
            Edit the profile object in <code>src/app/page.js</code> to personalize names and links.
          </p>
        </footer>
      </div>
    </main>
  );
}
