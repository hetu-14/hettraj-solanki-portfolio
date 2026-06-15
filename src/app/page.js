"use client";

import { motion, useReducedMotion } from "framer-motion";

const profile = {
  name: "Hetraj Solanki",
  title: "Full Stack Developer & Problem Solver",
  subtitle:
    "Building scalable web applications, real-time systems, and innovative digital experiences.",
  intro:
    "I am a Computer Engineering graduate from LDRP Institute of Technology and Research, Gujarat, India. I build production-grade MERN stack apps, real-time products, and Android solutions with a strong focus on clarity, performance, and reliability.",
  email: "hetrajsolanki148@gmail.com",
  phone: "+91 63524 26430",
  github: "https://github.com/hetu-14",
  linkedin: "https://www.linkedin.com/in/hetraj-solanki-06615b256/",
  leetcode: "https://leetcode.com/u/hetu_14/",
  codechef: "https://www.codechef.com/users/hetu_14",
  codeforces: "https://codeforces.com/profile/hetraj",
};

const experience = [
  {
    role: "Software Developer Trainee",
    company: "Torrent Gas",
    period: "Public LinkedIn profile",
    description:
      "Public LinkedIn search results confirm this role. The profile page itself is restricted, so I am only surfacing the verified role/company combination here.",
  },
];

const stats = [
  { value: "3+", label: "Major Projects" },
  { value: "Runner-Up", label: "Hackathon Result" },
  { value: "SIH", label: "National Finalist" },
  { value: "DSA", label: "Competitive Focus" },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    items: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Languages",
    items: ["JavaScript", "C++", "Java", "SQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Android Studio", "Postman"],
  },
  {
    title: "Other",
    items: ["Socket.IO", "JWT Authentication", "MVC Architecture"],
  },
];

const projects = [
  {
    name: "Placement Board",
    type: "Web Platform",
    description:
      "A placement management platform that helps students track opportunities, company visits, and learning resources.",
    features: [
      "Company listings",
      "Placement records",
      "Student applications",
      "Search functionality",
      "Learning resources",
    ],
    stack: "React.js, Node.js, Express.js, MongoDB, Socket.IO",
    links: [
      { label: "GitHub", href: "https://github.com/hetu-14" },
      { label: "Live Demo", href: null },
    ],
  },
  {
    name: "Pay & Park",
    type: "Android App",
    description:
      "An Android application designed to simplify parking management through real-time slot booking and secure payments.",
    features: [
      "Real-time slot selection",
      "QR code integration",
      "Payment gateway",
      "Reservation system",
      "Admin dashboard",
      "Firebase authentication",
    ],
    stack: "Android Studio, Firebase",
    links: [
      { label: "GitHub", href: "https://github.com/hetu-14" },
      { label: "APK / Demo", href: null },
    ],
  },
  {
    name: "Real-Time Chess Platform",
    type: "Realtime App",
    description:
      "A multiplayer chess application supporting live gameplay, in-game communication, and match history.",
    features: [
      "Live multiplayer matches",
      "Game rooms",
      "Authentication",
      "In-game chat",
      "Match history",
    ],
    stack: "Node.js, Socket.IO, MongoDB, JavaScript",
    links: [
      { label: "GitHub", href: "https://github.com/hetu-14" },
      { label: "Live Demo", href: null },
    ],
  },
];

const achievements = [
  {
    title: "SSIP Hackathon 2023",
    body: "Team leader and State Level Runner-Up.",
  },
  {
    title: "Smart India Hackathon",
    body: "National Level Finalist with production-oriented problem solving.",
  },
  {
    title: "Competitive Programming",
    body: "CodeChef rating 1220+ with active problem solving on LeetCode and Codeforces.",
  },
];

const education = [
  {
    title: "LDRP Institute of Technology and Research",
    body: "Bachelor of Technology in Computer Engineering",
    meta: "CGPA: 7.72",
  },
  {
    title: "Higher Secondary Education",
    body: "Science Stream",
    meta: "76.6%",
  },
];

const differentials = [
  "Quick Learner",
  "Self Motivated",
  "Team Leader",
  "Strong Problem Solver",
  "Real Project Experience",
  "Continuous Learner",
];

const motionItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const motionGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function SectionTitle({ eyebrow, title, body, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl tracking-[-0.05em] text-white sm:text-4xl">
        {title}
      </h2>
      {body ? <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{body}</p> : null}
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m4 7 8 6 8-6" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
    </svg>
  );
}

function ExternalTile({ label, href }) {
  const baseClass =
    "rounded-[1.3rem] border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium transition";

  if (!href) {
    return (
      <div className={`${baseClass} cursor-default text-slate-500`}>
        {label}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${baseClass} text-slate-200 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white`}
    >
      {label}
    </a>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const heroInitial = reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 };
  const heroAnimate = reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <main className="min-h-dvh overflow-x-clip bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_28%),radial-gradient(circle_at_80%_10%,_rgba(59,130,246,0.16),_transparent_24%),radial-gradient(circle_at_20%_80%,_rgba(245,158,11,0.12),_transparent_25%),linear-gradient(180deg,_#020617_0%,_#0b1020_55%,_#050816_100%)] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-4 sm:px-8 lg:px-10">
        <motion.header
          initial={heroInitial}
          animate={heroAnimate}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="sticky top-3 z-30 mb-8 rounded-full border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-xl shadow-[0_18px_70px_rgba(2,6,23,0.55)]"
        >
          <nav className="flex flex-wrap items-center justify-between gap-3">
            <a href="#top" className="text-sm font-semibold tracking-[0.34em] uppercase text-white">
              Hetraj Solanki
            </a>
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
              {["about", "experience", "skills", "projects", "achievements", "education", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="rounded-full px-3 py-1 transition hover:bg-white/10 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        </motion.header>

        <motion.section
          id="top"
          variants={motionGroup}
          initial="hidden"
          animate="show"
          className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
        >
          <motion.div variants={motionItem} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-cyan-200 backdrop-blur">
              <SparkIcon />
              Modern Developer Portfolio
            </div>

            <div className="space-y-4">
              <h1 className="font-display max-w-4xl text-5xl leading-[0.92] tracking-[-0.06em] text-balance sm:text-6xl lg:text-8xl">
                {profile.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {profile.subtitle}
              </p>
              <p className="max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                {profile.intro}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(34,211,238,0.28)] transition"
              >
                View Projects
                <ArrowIcon />
              </motion.a>
              <motion.a
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/12"
              >
                Contact Me
                <MailIcon />
              </motion.a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-transparent px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/24 hover:bg-white/6"
              >
                Download Resume
              </a>
            </div>

            <motion.div variants={motionGroup} className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <motion.article
                  key={stat.label}
                  variants={motionItem}
                  className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-xl shadow-[0_18px_50px_rgba(2,6,23,0.34)]"
                >
                  <div className="text-3xl font-semibold tracking-[-0.05em] text-white">{stat.value}</div>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          <motion.aside
            variants={motionItem}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_28px_90px_rgba(2,6,23,0.58)] backdrop-blur-2xl">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70">Profile snapshot</p>
                  <h2 className="font-display text-3xl tracking-[-0.05em]">{profile.name}</h2>
                  <p className="max-w-xs text-sm leading-6 text-slate-300">
                    Computer Engineering graduate focused on full-stack engineering, real-time apps, Android development, and DSA.
                  </p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400 to-blue-500 text-lg font-bold text-slate-950">
                  HS
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Current goal</p>
                  <p className="mt-3 text-lg font-medium leading-7 text-white">
                    Become a highly skilled Software Engineer and master DSA and System Design.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Focus stack</p>
                  <p className="mt-3 text-lg font-medium leading-7 text-white">
                    React, Node.js, Express.js, MongoDB, Socket.IO, Firebase, Android Studio.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Availability</p>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Open for opportunities
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Based in Gujarat, India and open to building production-grade web applications, real-time systems, and portfolio collaborations.
                </p>
              </div>
            </div>
          </motion.aside>
        </motion.section>

        <motion.section
          id="about"
          variants={motionGroup}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <motion.article variants={motionItem} className="rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur-2xl shadow-[0_24px_70px_rgba(2,6,23,0.38)]">
            <SectionTitle
              eyebrow="About"
              title="I enjoy building efficient, user-friendly applications that solve real-world problems."
              body="My journey started with programming fundamentals and evolved into complete full-stack projects. I like work that is practical, fast, and well structured."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {differentials.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>

          <motion.article variants={motionItem} className="rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur-2xl shadow-[0_24px_70px_rgba(2,6,23,0.38)]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <SectionTitle
                eyebrow="Why me"
                title="Technical depth with real project delivery."
                body="I focus on clear architecture, maintainable code, and interfaces that feel complete on day one."
              />
              <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Learning fast
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Web", "Full Stack Development, Backend Engineering, Real-Time Applications"],
                ["Life", "Movies, web series, and cricket when I am not coding"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </motion.section>

        <motion.section
          id="experience"
          variants={motionGroup}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-20 space-y-6"
        >
          <motion.div variants={motionItem}>
            <SectionTitle
              eyebrow="Experience"
              title="Verified public LinkedIn role."
              body="The public profile snippet confirms the current role, so I keep this section precise and source-aligned."
            />
          </motion.div>

          <div className="grid gap-4">
            {experience.map((item) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                variants={motionItem}
                className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur-2xl shadow-[0_24px_70px_rgba(2,6,23,0.34)]"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-2 text-sm font-medium text-cyan-200">{item.company}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-slate-300">
                    {item.period}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          variants={motionGroup}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 space-y-6"
        >
          <motion.div variants={motionItem}>
            <SectionTitle
              eyebrow="Skills"
              title="The stack I use to ship end-to-end."
              body="Grouped by how I actually build: frontend, backend, data, language, and tools."
            />
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <motion.article
                key={group.title}
                variants={motionItem}
                className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur-2xl shadow-[0_24px_70px_rgba(2,6,23,0.34)]"
              >
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          variants={motionGroup}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-20 space-y-6"
        >
          <motion.div variants={motionItem}>
            <SectionTitle
              eyebrow="Projects"
              title="Featured builds that show range across web and mobile."
              body="Each project card explains what it does, the features it contains, and the stack behind it."
            />
          </motion.div>

          <div className="grid gap-4 xl:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.name}
                variants={motionItem}
                whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
                className="group rounded-[1.8rem] border border-white/10 bg-white/8 p-5 backdrop-blur-2xl shadow-[0_24px_70px_rgba(2,6,23,0.34)] transition"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                    {project.type}
                  </span>
                  <span className="text-xs uppercase tracking-[0.22em] text-slate-500">{project.name}</span>
                </div>

                <h3 className="mt-5 font-display text-2xl tracking-[-0.04em] text-white">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Key features</p>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-300">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 text-sm leading-7 text-slate-400">
                  <span className="font-semibold text-slate-200">Tech stack: </span>
                  {project.stack}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <div key={link.label} className="inline-flex items-center gap-2">
                      {link.href ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
                        >
                          {link.label}
                          <ArrowIcon />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-slate-500">
                          {link.label} pending
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="achievements"
          variants={motionGroup}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-20 space-y-6"
        >
          <motion.div variants={motionItem}>
            <SectionTitle
              eyebrow="Achievements"
              title="Proof points from hackathons and competitive programming."
              body="These are the signal items I would put front and center for recruiters and collaborators."
            />
          </motion.div>

          <div className="grid gap-4 lg:grid-cols-3">
            {achievements.map((item) => (
              <motion.article
                key={item.title}
                variants={motionItem}
                className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur-2xl shadow-[0_24px_70px_rgba(2,6,23,0.34)]"
              >
                <p className="text-xs uppercase tracking-[0.26em] text-cyan-200/80">{item.title}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="education"
          variants={motionGroup}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-20 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <motion.article variants={motionItem} className="rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur-2xl shadow-[0_24px_70px_rgba(2,6,23,0.34)]">
            <SectionTitle
              eyebrow="Education"
              title="Formal foundation, practical output."
              body="Academic background and project work both matter here, so I keep them together."
            />
          </motion.article>

          <motion.div variants={motionItem} className="grid gap-4">
            {education.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur-2xl shadow-[0_24px_70px_rgba(2,6,23,0.34)]"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.body}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-cyan-200">
                    {item.meta}
                  </span>
                </div>
              </article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          variants={motionGroup}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          className="mt-20 rounded-[2rem] border border-white/10 bg-white/8 px-6 py-8 backdrop-blur-2xl shadow-[0_28px_90px_rgba(2,6,23,0.45)] sm:px-8"
        >
          <motion.div variants={motionItem} className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow="Contact"
                title="If you need a focused builder, these are the best ways to reach me."
                body="Email and phone are the fastest, while GitHub and LinkedIn show the work itself."
              />
            </div>

            <div className="grid gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Email</p>
                <p className="mt-2 text-lg font-semibold text-white">{profile.email}</p>
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Phone</p>
                <p className="mt-2 text-lg font-semibold text-white">{profile.phone}</p>
              </a>
              <div className="grid gap-3 sm:grid-cols-2">
                <ExternalTile label="LinkedIn" href={profile.linkedin} />
                <ExternalTile label="GitHub" href={profile.github} />
                <ExternalTile label="LeetCode" href={profile.leetcode} />
                <ExternalTile label="CodeChef" href={profile.codechef} />
                <ExternalTile label="Codeforces" href={profile.codeforces} />
              </div>
            </div>
          </motion.div>
        </motion.section>

        <footer className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Built for Hetraj Solanki. Update the profile object in src/app/page.js for final links and resume.</p>
          <p>Designed for GitHub and Vercel deployment.</p>
        </footer>
      </div>
    </main>
  );
}
