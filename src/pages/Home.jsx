import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  SunMedium,
  X,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const navigation = [
  { label: "Intro", href: "#overview" },
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "3+", label: "years building production-ready interfaces" },
  { value: "3", label: "featured projects with live demos" },
  { value: "React", label: "main frontend stack with full-stack support" },
];

const serviceCards = [
  {
    title: "Frontend engineering",
    text: "Responsive interfaces with strong hierarchy, clean interaction patterns, and a product-first visual approach.",
  },
  {
    title: "Full-stack implementation",
    text: "I can take ideas past the UI layer into APIs, databases, authentication flows, and deployment-ready structure.",
  },
  {
    title: "UI refinement",
    text: "I pay attention to spacing, pacing, readability, and the kind of polish that makes a website feel cared for.",
  },
];

const aboutPoints = [
  "I care about how a site feels in the first few seconds someone lands on it.",
  "Most of my work starts with frontend structure, but I like owning the full experience where possible.",
  "I prefer websites that feel clear, believable, and usable over ones that only try to look impressive.",
];

const projects = [
  {
    title: "apex-kicks",
    tag: "Ecommerce platform",
    description:
      "A sneaker ecommerce product built with React, Node.js, PostgreSQL, Stripe, Clerk authentication, and an admin dashboard.",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "Express"],
    demoUrl: "https://apex-kicks.vercel.app/",
    githubUrl: "https://github.com/aar0gya/apex-kicks",
  },
  {
    title: "Stock News Sentiment Analysis",
    tag: "Data application",
    description:
      "A Python app that scrapes Finviz headlines, runs NLTK VADER sentiment analysis, and visualizes stock-related sentiment trends.",
    stack: ["Python", "Pandas", "NLTK", "Matplotlib", "Streamlit"],
    demoUrl: "https://stock-news-sentiment-analysis-fzx7qmxy27r8jt7immruik.streamlit.app/",
    githubUrl: "https://github.com/aar0gya/Stock-News-Sentiment-Analysis",
  },
  {
    title: "quizzy",
    tag: "Interactive quiz app",
    description:
      "A mobile-responsive quiz game with Flask, JavaScript, SQLite, animated UI, sound effects, and a persistent leaderboard.",
    stack: ["JavaScript", "Python", "Flask", "SQLite", "Responsive UI"],
    demoUrl: "https://quizzy-j6cz.onrender.com/",
    githubUrl: "https://github.com/aar0gya/quizzy",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "arogyathapa.10@gmail.com",
    href: "mailto:arogyathapa.10@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+977 9844630082",
    href: "tel:+9779844630082",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Bharatpur, Chitwan, Nepal",
    href: "https://maps.google.com/?q=Bharatpur,Chitwan,Nepal",
    icon: MapPin,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aarogya-bikram-thapa-ab63b6371",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aar0gya/",
    icon: Instagram,
  },
  {
    label: "GitHub",
    href: "https://github.com/aar0gya",
    icon: Github,
  },
];

export const Home = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    const updateScroll = () => {
      root.style.setProperty("--scroll-y", String(window.scrollY));
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = storedTheme || (prefersLight ? "light" : "dark");

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");
    const sections = document.querySelectorAll("section[id]");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
    sections.forEach((element) => sectionObserver.observe(element));

    return () => {
      revealElements.forEach((element) => revealObserver.unobserve(element));
      sections.forEach((element) => sectionObserver.unobserve(element));
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  const handleMobileNavigation = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);
    document.body.style.overflow = "";

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    toast({
      title: "Message drafted",
      description: "Thanks for reaching out. The form is currently configured as a portfolio demo.",
    });
  };

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />
      <div className="page-frame">
        <header className="topbar">
          <a className="brand" href="#overview">
            <span className="brand-accent">ABT</span>
          </a>

          <nav className="nav desktop-nav" aria-label="Primary">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href.slice(1) ? "nav-item active" : "nav-item"}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="topbar-actions">
            <button
              type="button"
              className="icon-button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
            </button>
            <a className="cta-button desktop-only" href="#contact">
              Get in touch
            </a>
            <button
              type="button"
              className="icon-button mobile-only"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </header>

        {menuOpen && (
          <div className="mobile-menu">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-menu-link"
                onClick={(event) => handleMobileNavigation(event, item.href)}
              >
                {item.label}
              </a>
            ))}
            <a className="mobile-menu-resume" href="/resume.pdf" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
              Resume
            </a>
          </div>
        )}

        <main className="content">
          <section id="overview" className="hero" data-reveal>
            <div className="hero-copy">
              <p className="hero-lead">Hello, I'm</p>
              <p className="hero-name">Aarogya Bikram Thapa</p>
              <h1>Frontend developer with a product mindset.</h1>
              <p className="hero-subline">I care about clean interfaces, believable structure, and websites that feel thoughtfully made.</p>
              <p className="hero-description">
                My work is mostly frontend-focused, but I like taking responsibility for the
                whole experience when needed, from visual direction and interaction details
                to backend logic, APIs, and deployment.
              </p>

              <div className="hero-social-row">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="social-chip" aria-label={item.label}>
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>

              <div className="hero-actions">
                <a className="cta-button" href="#portfolio">
                  View work
                </a>
                <a className="ghost-button" href="/resume.pdf" target="_blank" rel="noreferrer">
                  Resume
                </a>
              </div>

              <div className="stats-panel">
                {stats.map((item) => (
                  <article key={item.label} className="stat-block">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-orbit" />
              <div className="hero-portrait-card">
                <div className="portrait-caption">ABT</div>
                <div className="portrait-title">Frontend, product, implementation</div>
                <div className="portrait-subtitle">A practical builder who enjoys making digital work feel more complete.</div>
              </div>
              <div className="floating-note note-top">
                <small>Current focus</small>
                <strong>Frontend-heavy product work with polished UX</strong>
              </div>
              <div className="floating-note note-bottom">
                <small>Based in</small>
                <strong>Bharatpur, Nepal</strong>
              </div>
            </div>
          </section>

          <section id="portfolio" className="section-grid">
            <div className="section-heading" data-reveal>
              <p className="section-label">Work</p>
              <h2>Some projects that represent how I like to build.</h2>
              <p className="section-copy">
                These are the kinds of projects where I’ve been able to combine interface quality,
                practical development, and stronger presentation.
              </p>
            </div>
            <div className="cards-grid project-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card" data-reveal>
                  <div className="project-header">
                    <span>{project.tag}</span>
                    <div className="project-actions">
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} demo`}>
                        <ExternalLink size={18} />
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repo`}>
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-highlight">{project.stack.join(" • ")}</div>
                </article>
              ))}
            </div>
          </section>

          <section id="about" className="split-layout">
            <div className="section-heading sticky-panel" data-reveal>
              <p className="section-label">About</p>
              <h2>I’m most interested in work that feels useful, clear, and well put together.</h2>
              <p className="section-copy">
                I like websites that read naturally, guide people well, and give the sense that
                someone actually thought through the details rather than assembling generic sections.
              </p>
            </div>

            <div className="stack-column">
              <article className="wide-card" data-reveal>
                <p className="mini-label">How I think about the work</p>
                <div className="points-list">
                  {aboutPoints.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </article>

              <article className="wide-card" data-reveal>
                <p className="mini-label">Tools I use often</p>
                <div className="skill-badges">
                  {["React", "Node.js", "Tailwind CSS", "PostgreSQL", "Responsive UI", "APIs", "Product UI", "Deployment"].map(
                    (item) => (
                      <span key={item} className="badge">
                        {item}
                      </span>
                    )
                  )}
                </div>
              </article>
            </div>
          </section>

          <section id="resume" className="resume-layout" data-reveal>
            <div className="resume-copy">
              <p className="section-label">Resume</p>
              <h2>A quick way to review my background, tools, and project experience.</h2>
              <p className="section-copy">
                If you prefer scanning a traditional resume first, you can view or download it here.
                I’ve kept it easy to access directly from the website so it’s useful on both desktop and mobile.
              </p>
              <div className="resume-actions">
                <a className="cta-button" href="/resume.pdf" target="_blank" rel="noreferrer">
                  View Resume
                </a>
                <a className="ghost-button" href="/resume.pdf" download>
                  Download PDF
                </a>
              </div>
            </div>

            <div className="resume-preview-wrap">
              <div className="resume-preview-card">
                <div className="resume-window-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <iframe className="resume-frame" src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0" title="Resume preview" />
              </div>
            </div>
          </section>

          <section id="services" className="section-grid">
            <div className="section-heading" data-reveal>
              <p className="section-label">Services</p>
              <h2>The kind of work I usually do best.</h2>
            </div>
            <div className="cards-grid service-grid">
              {serviceCards.map((item) => (
                <article key={item.title} className="info-card" data-reveal>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="contact-layout">
            <div className="contact-card" data-reveal>
              <div className="section-heading left">
                <p className="section-label">Contact</p>
                <h2>Open to roles, internships, and freelance projects.</h2>
                <p className="section-copy">
                  If you're looking for someone who cares about frontend quality and can also
                  help carry the product through implementation, feel free to reach out.
                </p>
              </div>
              <div className="contact-links">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.label} href={item.href} className="contact-link" target="_blank" rel="noreferrer">
                      <span className="contact-icon">
                        <Icon size={18} />
                      </span>
                      <span>
                        <small>{item.label}</small>
                        <strong>{item.value}</strong>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            <form className="form-card" onSubmit={handleFormSubmit} data-reveal>
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" placeholder="Tell me a bit about the role or the project." required />
              </label>
              <button type="submit" className="cta-button submit-button">
                Start conversation
                <ArrowUpRight size={16} />
              </button>
            </form>
          </section>

          <footer className="footer" data-reveal>
            <div>
              <p className="section-label">Aarogya Bikram Thapa</p>
              <h2>Frontend-focused work shaped by product thinking, clean visuals, and solid execution.</h2>
            </div>
            <div className="footer-links">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="footer-link">
                    <Icon size={18} />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};
