"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  MapPin,
  MessageCircle,
  MoveUpRight,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import { useState } from "react";

const nav = ["About", "Experience", "Projects", "Skills", "Contact"];

const skills = {
  Frontend: ["Angular", "React", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  Backend: ["Node.js", "NestJS", "Express.js", "REST APIs", "WebSockets", "Microservices"],
  DataCloud: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "S3", "Docker", "Git"],
  AIRealtime: ["Generative AI", "Speech Recognition", "VAD", "TTS", "Real-time Streaming"],
};

const experience = [
  {
    company: "AlphaDroid India Pvt. Ltd.",
    role: "Lead Software Engineer",
    period: "Current",
    description:
      "Leading development of web and mobile products for real-time robot control, analytics and AI-assisted experiences. Working across Angular, React, React Native, Node.js and real-time communication while driving architecture, delivery and production quality.",
    tags: ["Angular", "React", "React Native", "Node.js", "WebSockets", "AWS"],
  },
  {
    company: "Previous Experience",
    role: "Full-Stack Software Engineer",
    period: "Earlier",
    description:
      "Built production-grade web applications and backend services, worked on enterprise dashboards, APIs, integrations and scalable application architecture. Contributed across frontend, backend and deployment workflows.",
    tags: ["JavaScript", "TypeScript", "Angular", "Node.js", "REST APIs", "MongoDB"],
  },
];

const projects = [
  {
    number: "01",
    title: "AI Real-Time Speech Assistant",
    category: "AI / MOBILE",
    description:
      "A fully automated speech assistant for a React Native application with wake-word detection, live transcription, voice activity detection, text-to-speech and real-time WebSocket streaming.",
    stack: ["React Native", "FastAPI", "WebSocket", "Speech Recognition", "VAD", "TTS"],
    featured: true,
  },
  {
    number: "02",
    title: "Robot Control & Analytics Platform",
    category: "FULL-STACK / REAL-TIME",
    description:
      "Web and mobile experiences for controlling real-time robots and monitoring operational analytics including robot performance, battery status and fleet activity.",
    stack: ["Angular", "React", "React Native", "Node.js", "WebSockets", "AWS"],
    featured: true,
  },
  {
    number: "03",
    title: "Enterprise Analytics Dashboard",
    category: "WEB / DATA",
    description:
      "Responsive analytics dashboards with reusable UI components, filtering, date-range workflows, API integrations and production-focused performance improvements.",
    stack: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    featured: false,
  },
  {
    number: "04",
    title: "Enterprise Angular Applications",
    category: "FRONTEND",
    description:
      "Production Angular applications with modular architecture, reusable components, validations, role-based workflows, dashboards and API-driven business processes.",
    stack: ["Angular", "TypeScript", "RxJS", "REST APIs", "SCSS"],
    featured: false,
  },
];

function SectionTitle({ index, title, eyebrow }: { index: string; title: string; eyebrow: string }) {
  return (
    <div className="section-title">
      <span className="section-index">{index}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav">
          <a className="brand" href="#top">&lt;/ Basant Kumar Mehta&gt;</a>

          <div className={`nav-links ${open ? "open" : ""}`}>
            {nav.map((item, i) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                <span>0{i + 1}.</span> {item}
              </a>
            ))}
            <a className="resume-btn" href="/Basant_Updated_Resume.pdf">Resume <ArrowUpRight size={15} /></a>
          </div>

          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="status"><span className="pulse" /> Available for opportunities</div>
            <p className="hero-kicker">Lead Software Engineer · Full-Stack · AI · Real-Time Systems</p>
            <h1>Building <em>scalable</em> products that solve real problems.</h1>
            <p className="hero-text">
              I&apos;m Basant Kumar Mehta. I build production-ready web and mobile applications across
              frontend, backend, cloud and real-time systems — with a growing focus on AI-powered experiences.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">View My Work <MoveUpRight size={17} /></a>
              <a className="ghost-btn" href="#contact">Let&apos;s Talk <MessageCircle size={17} /></a>
            </div>
          </motion.div>
        </div>

        <div className="hero-terminal">
          <div className="terminal-bar"><span /><span /><span /><label>basant.ts</label></div>
          <pre>{`const basant = {
  role: "Lead Software Engineer",
  focus: [
    "Full-Stack Development",
    "Real-Time Systems",
    "AI Experiences"
  ],
  stack: ["Angular", "React",
          "Node.js", "React Native"],
  mindset: "Build. Ship. Improve."
};`}</pre>
          <div className="terminal-footer"><Terminal size={15} /> currently building useful things</div>
        </div>
      </section>

      <section className="stats container">
        {[
          ["5+", "Years Engineering"],
          ["4+", "Core Platforms"],
          ["10+", "Technologies"],
          ["∞", "Curiosity"],
        ].map(([value, label]) => (
          <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>

      <section id="about" className="section container">
        <SectionTitle index="01" eyebrow="A little context" title="About Me" />
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I&apos;m a software engineer who enjoys turning complex requirements into clean, reliable
              products. My experience spans web, mobile, backend services, real-time communication and
              AI-enabled applications.
            </p>
            <p>
              At AlphaDroid, I work across product development from architecture and implementation to
              debugging, optimization and production delivery. I&apos;m especially interested in systems where
              frontend experience, backend reliability and real-time data all need to work together.
            </p>
            <p>
              I care about maintainable code, thoughtful UX, performance and solving the problem behind
              the feature — not just shipping the feature itself.
            </p>
          </div>
          <div className="about-card">
            <div className="card-icon"><Sparkles /></div>
            <h3>What I bring</h3>
            <ul>
              <li>End-to-end product ownership</li>
              <li>Strong frontend + backend breadth</li>
              <li>Real-time & event-driven thinking</li>
              <li>Production debugging & optimization</li>
              <li>AI integration mindset</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" className="section container">
        <SectionTitle index="02" eyebrow="Where I&apos;ve worked" title="Experience" />
        <div className="timeline">
          {experience.map((job, i) => (
            <motion.article
              className="job"
              key={job.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="job-marker"><BriefcaseBusiness size={16} /></div>
              <div className="job-main">
                <div className="job-head">
                  <div>
                    <p className="eyebrow">{job.period}</p>
                    <h3>{job.role}</h3>
                    <h4>{job.company}</h4>
                  </div>
                </div>
                <p>{job.description}</p>
                <div className="tags">{job.tags.map(t => <span key={t}>{t}</span>)}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="section container">
        <SectionTitle index="03" eyebrow="Things I&apos;ve built" title="Featured Projects" />
        <div className="project-grid">
          {projects.map((project, i) => (
            <motion.article
              className={`project ${project.featured ? "featured" : ""}`}
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="project-top">
                <span>{project.number}</span>
                <Code2 size={20} />
              </div>
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">{project.stack.map(t => <span key={t}>{t}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="section container">
        <SectionTitle index="04" eyebrow="What I work with" title="Skills & Technologies" />
        <div className="skills-grid">
          {Object.entries(skills).map(([group, items]) => (
            <div className="skill-group" key={group}>
              <h3>{group === "DataCloud" ? "Data & Cloud" : group === "AIRealtime" ? "AI & Real-Time" : group}</h3>
              <div className="skill-list">{items.map(item => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact container">
        <div className="contact-inner">
          <SectionTitle index="05" eyebrow="Have a project in mind?" title="Let&apos;s build something useful." />
          <p className="contact-text">
            I&apos;m open to interesting software engineering opportunities, product-focused teams and
            technically challenging projects.
          </p>
          <div className="contact-actions">
            <a className="primary-btn" href="mailto:YOUR_EMAIL@example.com">Send Me an Email <Mail size={17} /></a>
            <a className="ghost-btn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            <a className="ghost-btn" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          </div>
          <div className="contact-meta">
            <span><MapPin size={15} /> India</span>
            <span><Terminal size={15} /> Open to building ambitious products</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer">
          <span>&lt;/ Basant Kumar Mehta&gt;</span>
          <span>Designed & built with Next.js, TypeScript & CSS.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}