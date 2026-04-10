import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Github,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sparkles,
  SunMedium,
  X,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const navigation = [
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Expertise", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const quickFacts = [
  "Open to frontend and product-oriented roles",
  "Comfortable across design polish and implementation",
  "Based in Bharatpur, Nepal and available remotely",
];

const aboutPoints = [
  "I enjoy turning rough concepts into interfaces that feel clear, useful, and polished.",
  "I care about visual hierarchy, spacing, responsiveness, and the small details that make products feel trustworthy.",
  "My best work usually sits between frontend craft and practical product delivery, where design quality and implementation both matter.",
];

const stats = [
  { value: "3+", label: "years building modern interfaces" },
  { value: "3", label: "featured projects with live demos" },
  { value: "10+", label: "tools used across frontend and backend" },
  { value: "100%", label: "focus on clarity, polish, and usability" },
];

const projects = [
  {
    title: "apex-kicks",
    tag: "Full-stack ecommerce",
    summary:
      "A sneaker ecommerce platform with React, Node.js, PostgreSQL, Stripe, Clerk auth, and an admin dashboard.",
    outcome:
      "Shows product thinking across storefront experience, payments, user flows, and backend delivery.",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "Express"],
    demoUrl: "https://apex-kicks.vercel.app/",
    githubUrl: "https://github.com/aar0gya/apex-kicks",
  },
  {
    title: "Stock News Sentiment Analysis",
    tag: "Data application",
    summary:
      "A Python app that scrapes Finviz headlines, analyzes them with NLTK VADER, and visualizes stock sentiment trends.",
    outcome:
      "Demonstrates analytical thinking, automation, and turning raw inputs into something readable and useful.",
    stack: ["Python", "Pandas", "NLTK", "Matplotlib", "Streamlit"],
    demoUrl: "https://stock-news-sentiment-analysis-fzx7qmxy27r8jt7immruik.streamlit.app/",
    githubUrl: "https://github.com/aar0gya/Stock-News-Sentiment-Analysis",
  },
  {
    title: "quizzy",
    tag: "Interactive quiz app",
    summary:
      "A mobile-responsive quiz game using Flask, JavaScript, SQLite, animated UI, sound effects, and a persistent leaderboard.",
    outcome:
      "Highlights playful UX execution, responsive interaction, and complete full-stack implementation.",
    stack: ["JavaScript", "Python", "Flask", "SQLite", "Responsive UI"],
    demoUrl: "https://quizzy-j6cz.onrender.com/",
    githubUrl: "https://github.com/aar0gya/quizzy",
  },
];

const expertiseCards = [
  {
    icon: Layers3,
    title: "Frontend systems",
    text: "Clean UI architecture, reusable sections, responsive layouts, and interfaces that feel composed rather than assembled.",
  },
  {
    icon: Sparkles,
    title: "Visual refinement",
    text: "Hierarchy, spacing, typography, interaction details, and subtle motion that make a product feel premium and trustworthy.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Full-stack support",
    text: "APIs, databases, authentication flows, admin tooling, deployment, and the practical backend work needed to complete a product.",
  },
  {
    icon: BadgeCheck,
    title: "Recruiter-ready delivery",
    text: "Portfolio work that explains itself well, presents clearly, and helps people understand value quickly.",
  },
];

const toolkit = [
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Responsive Design",
  "Git/GitHub",
  "Deployment",
];

const recruiterNotes = [
  "Strong visual judgment without sacrificing usability.",
  "Comfortable turning rough ideas into polished interfaces.",
  "Works well across both product presentation and practical engineering.",
];

const resumeHighlights = [
  "Frontend-focused projects with product-grade polish",
  "Full-stack project execution across APIs, auth, and databases",
  "Clear overview of tools, projects, and current availability",
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
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
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
      <div className="grain-overlay" aria-hidden="true" />

      <div className="page-frame">
        <header className="topbar">
          <a className="brand" href="#overview">
            <span className="brand-mark">ABT</span>
            <span className="brand-meta">
              <strong>Aarogya Bikram Thapa</strong>
              <small>Frontend Developer</small>
            </span>
          </a>

          <nav className="nav desktop-nav" aria-label="Primary">
            <a href="#overview" className={activeSection === "overview" ? "nav-item active" : "nav-item"}>
              Overview
            </a>
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
            <a className="topbar-link desktop-only" href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
            <button
              type="button"
              className="icon-button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
            </button>
            <a className="cta-button desktop-only" href="#contact">
              Let's talk
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
            <a href="#overview" className="mobile-menu-link" onClick={(event) => handleMobileNavigation(event, "#overview")}>
              Overview
            </a>
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
              View Resume
            </a>
          </div>
        )}

        <main className="content">
          <section id="overview" className="hero" data-reveal>
            <div className="hero-copy">
              <p className="hero-kicker">
                <Sparkles size={14} />
                Product-focused frontend developer
              </p>
              <h1>I design and build polished digital experiences that feel clear, modern, and credible.</h1>
              <p className="hero-subline">
                I care about interface quality, strong visual rhythm, and the kind of implementation that helps products feel complete.
              </p>
              <p className="hero-description">
                Most of my work starts on the frontend, but I enjoy carrying ideas through backend logic, APIs, authentication flows,
                and deployment when the project needs full ownership.
              </p>

              <div className="hero-actions">
                <a className="cta-button" href="#portfolio">
                  Explore selected work
                  <ArrowRight size={16} />
                </a>
                <a className="ghost-button" href="/resume.pdf" target="_blank" rel="noreferrer">
                  Resume
                  <Download size={16} />
                </a>
              </div>

              <div className="hero-meta-row">
                {quickFacts.map((fact) => (
                  <p key={fact}>{fact}</p>
                ))}
              </div>

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
            </div>

            <div className="hero-visual">
              <div className="hero-visual-ring ring-one" />
              <div className="hero-visual-ring ring-two" />
              <div className="hero-profile-card">
                <div className="profile-badge">
                  <span className="status-dot" />
                  Available for opportunities
                </div>
                <div className="profile-monogram">ABT</div>
                <h2>Frontend systems, visual polish, and full-stack support.</h2>
                <p>I like shipping interfaces that feel considered rather than assembled.</p>
              </div>

              <div className="floating-note note-top">
                <small>Current focus</small>
                <strong>Product-grade UI with strong implementation detail</strong>
              </div>
              <div className="floating-note note-middle">
                <small>Primary tools</small>
                <strong>React, Tailwind CSS, Node.js, PostgreSQL</strong>
              </div>
              <div className="floating-note note-bottom">
                <small>Based in</small>
                <strong>Bharatpur, Nepal</strong>
              </div>
            </div>
          </section>

          <section className="stats-strip" data-reveal>
            {stats.map((item) => (
              <article key={item.label} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </section>

          <section id="portfolio" className="section-grid">
            <div className="section-heading" data-reveal>
              <p className="section-label">Selected Work</p>
              <h2>Projects that show how I balance presentation, usability, and implementation.</h2>
              <p className="section-copy">
                These projects represent the kind of work I enjoy most: products that need thoughtful UI, stronger flow, and complete execution.
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
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}>
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="project-outcome">{project.outcome}</div>
                  <div className="project-highlight">{project.stack.join(" / ")}</div>
                </article>
              ))}
            </div>
          </section>

          <section id="about" className="split-layout">
            <div className="section-heading sticky-panel" data-reveal>
              <p className="section-label">About</p>
              <h2>I'm most interested in work that feels useful, clear, and well put together.</h2>
              <p className="section-copy">
                I like websites that guide people naturally, communicate clearly, and give the sense that someone truly thought through the details.
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
                <p className="mini-label">Recruiter notes</p>
                <div className="points-list">
                  {recruiterNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </article>

              <article className="wide-card" data-reveal>
                <p className="mini-label">Toolkit</p>
                <div className="skill-badges">
                  {toolkit.map((item) => (
                    <span key={item} className="badge">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </section>

          <section id="resume" className="resume-layout" data-reveal>
            <div className="resume-copy">
              <p className="section-label">Resume</p>
              <h2>A direct way to review my background, tools, and project experience.</h2>
              <p className="section-copy">
                If you prefer scanning a traditional resume first, you can view or download it here. I've kept it visible inside the website so it's easy to access on both desktop and mobile.
              </p>
              <div className="resume-points">
                {resumeHighlights.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
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
              <p className="section-label">Expertise</p>
              <h2>The kind of work I usually do best.</h2>
            </div>

            <div className="cards-grid service-grid">
              {expertiseCards.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="info-card" data-reveal>
                    <div className="card-icon">
                      <Icon size={18} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="contact" className="contact-layout">
            <div className="contact-card" data-reveal>
              <div className="section-heading left">
                <p className="section-label">Contact</p>
                <h2>Open to roles, internships, and freelance projects.</h2>
                <p className="section-copy">
                  If you're looking for someone who cares about frontend quality and can also help carry the product through implementation, feel free to reach out.
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
            <div className="footer-brand">
              <p className="section-label">Aarogya Bikram Thapa</p>
              <h2>Frontend-focused work shaped by product thinking, clean visuals, and solid execution.</h2>
            </div>

            <div className="footer-columns">
              <div className="footer-column">
                <h3>Quick Links</h3>
                <a href="#portfolio">Work</a>
                <a href="#about">About</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="footer-column">
                <h3>Connect</h3>
                {socialLinks.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="footer-column">
                <h3>Contact</h3>
                <a href="mailto:arogyathapa.10@gmail.com">arogyathapa.10@gmail.com</a>
                <a href="tel:+9779844630082">+977 9844630082</a>
                <span>Bharatpur, Nepal</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};
