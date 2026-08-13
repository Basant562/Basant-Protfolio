import { motion } from "framer-motion";
import {
  Code2,
  Linkedin,
  Mail,
  Menu,
  Terminal,
  X,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import basantPhoto from './assets/images/basant_passport_photo.jpg';

const nav = ["About", "Experience", "Projects", "Skills", "Contact"];

const skills = {
  Frontend: ["Angular", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "RxJS", "NgRx"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT", "RBAC", "Microservices"],
  DatabasesCloud: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "AWS (EC2, S3)", "CI/CD", "Nginx"],
  ToolsIoT: ["Git", "Jest", "WebSockets", "MQTT", "OTA Updates", "A/B Testing", "Agile/Scrum"],
};

const experience = [
  {
    company: "Alphadroid India Pvt. Ltd.",
    role: "Senior Software Engineer",
    period: "Aug 2024 – Present",
    description:
      "Led Angular development for Alphaworld, a real-time robot fleet management platform. Architected a WebSocket-based live telemetry dashboard for 100+ robots, reducing response latency by 40%. Implemented MQTT protocol and OTA firmware update pipelines.",
    tags: ["Angular", "TypeScript", "WebSockets", "MQTT", "IoT", "AWS"],
  },
  {
    company: "Eleve Media Pvt. Ltd.",
    role: "Software Engineer",
    period: "Aug 2022 – Nov 2023",
    description:
      "Built CreatorTag, a SaaS platform for influencer marketing with 1M+ indexed creators. Designed scalable search engines, optimized MongoDB aggregations (reduced to <600ms), and developed 1,000+ RESTful APIs with JWT-based RBAC.",
    tags: ["Angular", "Node.js", "Express.js", "MongoDB", "AWS S3", "REST APIs"],
  },
  {
    company: "Netoyed",
    role: "Trainee Software Engineer",
    period: "Feb 2020 – Aug 2022",
    description:
      "Developed OTAP (MDM platform) and Vertel (mission-critical ICT platform). Shipped bulk-push configuration feature reducing manual setup by 70%. Built REST APIs using Node.js (Sails.js) and resolved 1,000+ frontend bugs.",
    tags: ["Angular", "Sails.js", "Node.js", "MySQL", "OTA Protocols"],
  }
];

const projects = [
  {
    number: "01",
    title: "Alphaworld — Robot Fleet Management",
    category: "IoT / FULL-STACK",
    description:
      "Real-time dashboard for managing, monitoring, and updating global robot fleets. Launched live map views, alert systems, and remote command execution with sub-second latency via WebSockets.",
    stack: ["Angular", "TypeScript", "WebSockets", "MQTT", "AWS"],
  },
  {
    number: "02",
    title: "CreatorTag — Influencer SaaS",
    category: "WEB / SAAS",
    description:
      "End-to-end platform for brands to discover creators and measure ROI. Powered by a 1M+ creator index with full-text search and optimized MongoDB aggregations.",
    stack: ["Angular", "Node.js", "MongoDB", "AWS S3", "JWT"],
  },
  {
    number: "03",
    title: "OTAP — Mobile Device Management",
    category: "ENTERPRISE",
    description:
      "MDM solution for configuring devices and tracking OTA data movement. Supported configuration push down to 1,000+ enterprise devices efficiently.",
    stack: ["Angular", "Sails.js", "MySQL", "OTA Protocols"],
  },
  {
    number: "04",
    title: "Vertel — Mission-Critical ICT",
    category: "FRONTEND / BACKEND",
    description:
      "Contributed to an Australian mission-critical platform serving enterprise/government. Built RESTful API reports and reliable Angular feature modules.",
    stack: ["Angular", "Node.js (Sails)", "MySQL", "REST APIs"],
  },
];

function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <div className="section-title">
      <span>{index}.</span> {title}
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top">
            <span className="text-accent-blue">&gt;_</span>Basant
          </a>

          <div className={`nav-links ${open ? "open" : ""}`}>
            {nav.map((item, i) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                <span>0{i + 1}.</span> {item}
              </a>
            ))}
            <a className="btn-primary" style={{ padding: '0.4rem 1rem' }} href="/Basant_Updated_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </div>

          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <section id="top" className="hero container">
        <div className="hero-content">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="hero-kicker">&lt; Hello World ! /&gt;</span>
            <h1>
              I'm <span className="gradient-text">Basant Kumar Mehta</span><br />
              Senior Software Engineer.
            </h1>
            <p className="hero-text">
              Specializing in Angular & MEAN Stack with 6+ years of experience building scalable IoT platforms, Influencer SaaS, and responsive web applications.
            </p>

            <div className="hero-actions">
              <a className="btn-primary" href="#projects"><Terminal size={17} /> View My Work</a>
              <a className="btn-secondary" href="#contact"><Mail size={17} /> Contact Me</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '280px', height: '280px' }}>
              <div className="neon-border" style={{
                position: 'absolute', top: '-10px', left: '-10px', right: '10px', bottom: '10px',
                border: '2px solid var(--accent-blue)', borderRadius: '1rem', zIndex: 0
              }}></div>
              <img
                src={basantPhoto}
                alt="Basant Kumar Mehta"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  borderRadius: '1rem', position: 'relative', zIndex: 1,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section container">
        <SectionTitle index="01" title="About Me" />
        <div className="grid-2">
          <div>
            <p className="text-muted" style={{ lineHeight: '1.8', marginBottom: '1rem', fontSize: '1.1rem' }}>
              Results-driven Senior Software Engineer with a proven track record of building scalable, full-stack web applications — from influencer marketing platforms to real-time IoT robot management dashboards.
            </p>
            <p className="text-muted" style={{ lineHeight: '1.8', marginBottom: '1rem', fontSize: '1.1rem' }}>
              My expertise covers the full delivery lifecycle: architecture, Agile sprints, CI/CD pipelines, and cloud deployments on AWS. I am highly comfortable designing structured schemas, building RESTful APIs, securing microservices with JWT, and engineering dynamic UI architectures.
            </p>
            <p className="text-muted" style={{ lineHeight: '1.8', marginBottom: '1rem', fontSize: '1.1rem' }}>
              I hold an MCA from NIT Raipur, and I am driven by the passion to build resilient systems that elevate user experiences and meet mission-critical goals.
            </p>
          </div>
          <div className="glass-card">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>Core Competencies:</h3>
            <ul style={{ listStyle: 'none', color: 'var(--text-muted)' }}>
              {["Angular & MEAN Stack Architecture", "Microservices & REST API Design", "Real-Time WebSocket & MQTT / IoT", "Agile Sprints & E2E Deployment", "Database Modeling & Optimizations"].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <ChevronRight size={16} className="text-accent-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" className="section container">
        <SectionTitle index="02" title="Experience" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experience.map((job, i) => (
            <motion.div
              className="glass-card"
              key={job.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>{job.role}</h3>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)' }}>{job.company}</h4>
                </div>
                <span className="terminal-text" style={{ fontSize: '0.9rem' }}>{job.period}</span>
              </div>
              <p className="text-muted" style={{ lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {job.description}
              </p>
              <div className="tag-list">
                {job.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="section container">
        <SectionTitle index="03" title="Projects & Works" />
        <div className="grid-2">
          {projects.map((project, i) => (
            <motion.div
              className="glass-card"
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span className="terminal-text" style={{ opacity: 0.7 }}>{project.number}</span>
                <Code2 size={24} className="text-accent-blue" />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{project.title}</h3>
              <p className="terminal-text" style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '1rem' }}>{project.category}</p>
              <p className="text-muted" style={{ lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{project.description}</p>
              <div className="tag-list">
                {project.stack.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" className="section container">
        <SectionTitle index="04" title="Skills & Tech Stack" />
        <div className="grid-2">
          {Object.entries(skills).map(([group, items]) => (
            <div className="glass-card" key={group}>
              <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                <span className="text-accent-blue">&gt;_</span> {group === "DatabasesCloud" ? "Databases & Cloud" : group === "ToolsIoT" ? "Tools / Real-Time / IoT" : group}
              </h3>
              <div className="tag-list" style={{ marginTop: 0 }}>
                {items.map(item => <span className="tag" key={item} style={{ backgroundColor: 'rgba(0,168,255,0.1)', borderColor: 'var(--accent-blue-transparent)', color: 'var(--text-main)' }}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section container" style={{ textAlign: 'center', paddingBottom: '8rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }} className="gradient-text">Get In Touch</h2>
        <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.2rem', lineHeight: '1.7' }}>
          Feel free to reach out for interesting collaborations, job opportunities, or just to connect.
          <br /><br />
          <strong style={{ color: 'var(--text-main)' }}>+91 7352286834</strong>
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a className="btn-primary" href="mailto:basantkumar562@gmail.com">
            <Mail size={18} /> Email Me
          </a>
          <a className="btn-secondary" href="https://linkedin.com/in/basant-kumar-mehta" target="_blank" rel="noreferrer">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <div className="container">
          <span className="text-accent-blue">&gt;_</span> Built by Basant Kumar Mehta. <br />
          <span style={{ opacity: 0.5 }}>Senior Software Engineer · Angular & MEAN Stack Developer</span>
        </div>
      </footer>
    </main>
  );
}