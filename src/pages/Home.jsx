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
  Sparkles,
  SunMedium,
  X,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const navigation = [
  { label: "Home", href: "#overview" },
  { label: "Services", href: "#services" },
  { label: "About Me", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact Me", href: "#contact" },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Done" },
  { value: "100%", label: "Recruiter-Focused" },
];

const serviceCards = [
  {
    title: "Frontend Engineering",
    text: "Responsive interfaces with strong hierarchy, motion, polish, and recruiter-ready presentation.",
  },
  {
    title: "Full-Stack Products",
    text: "From APIs and databases to polished user flows, I build products that feel complete and credible.",
  },
  {
    title: "UI/UX Execution",
    text: "I bridge design taste and engineering detail so the final product looks intentional, not template-made.",
  },
];

const aboutPoints = [
  "Strong visual judgment with practical engineering discipline.",
  "Comfortable shipping across React, Node.js, PostgreSQL, APIs, and responsive UI.",
  "Focused on premium-feeling interfaces that help products stand out quickly.",
];

const projects = [
  {
    title: "apex-kicks",
    tag: "Ecommerce Platform",
    description:
      "Full-stack sneaker ecommerce with React, Node.js, PostgreSQL, Stripe, Clerk auth, admin dashboard, and transactional flows.",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "Express"],
    demoUrl: "https://apex-kicks.vercel.app/",
    githubUrl: "https://github.com/aar0gya/apex-kicks",
  },
  {
    title: "Stock News Sentiment Analysis",
    tag: "Data Product",
    description:
      "Python-based sentiment tracking app that scrapes Finviz headlines, analyzes with NLTK VADER, and visualizes trend signals.",
    stack: ["Python", "Pandas", "NLTK", "Matplotlib", "Streamlit"],
    demoUrl: "https://stock-news-sentiment-analysis-fzx7qmxy27r8jt7immruik.streamlit.app/",
    githubUrl: "https://github.com/aar0gya/Stock-News-Sentiment-Analysis",
  },
  {
    title: "quizzy",
    tag: "Interactive Quiz App",
    description:
      "Mobile-responsive quiz game with Flask, JavaScript, SQLite, animated UI, sound effects, and a persistent leaderboard.",
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
              Hire Me
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
              Download CV
            </a>
          </div>
        )}

        <main className="content">
          <section id="overview" className="hero" data-reveal>
            <div className="hero-copy">
              <p className="hero-lead">Hi I am</p>
              <p className="hero-name">Aarogya Bikram Thapa</p>
              <h1>Frontend Product Developer</h1>
              <p className="hero-description">
                I build classy digital experiences that combine modern frontend craft,
                full-stack capability, and a presentation style that feels professional,
                credible, and recruiter-friendly.
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
                <a className="cta-button" href="#contact">
                  Hire Me
                </a>
                <a className="ghost-button" href="/resume.pdf" target="_blank" rel="noreferrer">
                  Download CV
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
                <div className="portrait-title">Frontend craft</div>
                <div className="portrait-subtitle">UI polish • Product thinking • Full-stack execution</div>
              </div>
              <div className="floating-note note-top">
                <small>Current Focus</small>
                <strong>Professional, product-grade interfaces</strong>
              </div>
              <div className="floating-note note-bottom">
                <small>Based In</small>
                <strong>Bharatpur, Nepal</strong>
              </div>
            </div>
          </section>

          <section id="services" className="section-grid">
            <div className="section-heading" data-reveal>
              <p className="section-label">Services</p>
              <h2>What I bring to digital products.</h2>
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

          <section id="about" className="split-layout">
            <div className="section-heading sticky-panel" data-reveal>
              <p className="section-label">About me</p>
              <h2>Built to stand out without losing professionalism.</h2>
              <p className="section-copy">
                I care about how products feel when someone lands on them for the first
                time. That means clearer hierarchy, sharper visuals, better responsiveness,
                and a stronger overall impression.
              </p>
            </div>

            <div className="stack-column">
              <article className="wide-card" data-reveal>
                <p className="mini-label">Why this works</p>
                <div className="points-list">
                  {aboutPoints.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </article>

              <article className="wide-card" data-reveal>
                <p className="mini-label">Core strengths</p>
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

          <section id="portfolio" className="section-grid">
            <div className="section-heading" data-reveal>
              <p className="section-label">Portfolio</p>
              <h2>Selected work that reflects product thinking and execution.</h2>
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

          <section id="contact" className="contact-layout">
            <div className="contact-card" data-reveal>
              <div className="section-heading left">
                <p className="section-label">Contact me</p>
                <h2>Open to full-time roles, internships, and freelance opportunities.</h2>
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
                <textarea name="message" rows="5" placeholder="Tell me about the role or the product." required />
              </label>
              <button type="submit" className="cta-button submit-button">
                Start Conversation
                <ArrowUpRight size={16} />
              </button>
            </form>
          </section>

          <footer className="footer" data-reveal>
            <div>
              <p className="section-label">Aarogya Bikram Thapa</p>
              <h2>Classy interfaces, stronger first impressions, and product-ready execution.</h2>
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
