import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Code2,
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
  { label: "Why Me", href: "#proof" },
  { label: "Skills", href: "#capabilities" },
  { label: "Portfolio", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  { value: "3+", label: "Years building polished web experiences" },
  { value: "3", label: "Featured products with live execution" },
  { value: "10+", label: "Modern tools across frontend and backend" },
];

const strengths = [
  {
    title: "Recruiter-friendly presentation",
    text: "I build interfaces that communicate clearly, look credible, and make products easier to trust in seconds.",
  },
  {
    title: "Frontend craft with polish",
    text: "Strong focus on hierarchy, responsiveness, interaction detail, and visual systems that feel intentional.",
  },
  {
    title: "Full-stack execution",
    text: "Comfortable shipping across React, Node.js, APIs, databases, authentication, and product workflows.",
  },
];

const capabilityGroups = [
  {
    label: "Frontend systems",
    items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Next.js", "Vite"],
  },
  {
    label: "Backend delivery",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "Socket.io"],
  },
  {
    label: "Product workflow",
    items: ["Git/GitHub", "Docker", "Figma", "Responsive Design", "UI Systems", "Deployment"],
  },
];

const recruiterNotes = [
  "Delivers clean UI with strong visual judgment.",
  "Comfortable moving between design polish and engineering detail.",
  "Builds portfolio work that already feels product-ready.",
];

const projects = [
  {
    title: "apex-kicks",
    category: "Full-stack ecommerce",
    description:
      "A sneaker ecommerce platform built with React, Node.js, PostgreSQL, Stripe payments, Clerk authentication, an admin dashboard, and transactional emails.",
    outcome: "Demonstrates real product architecture across storefront UX, checkout, auth, admin tooling, and backend operations.",
    stack: ["React", "Node.js", "Express", "Stripe", "PostgreSQL"],
    demoUrl: "https://apex-kicks.vercel.app/",
    githubUrl: "https://github.com/aar0gya/apex-kicks",
  },
  {
    title: "Stock News Sentiment Analysis",
    category: "Data-driven application",
    description:
      "A Python workflow that scrapes Finviz headlines, scores sentiment with NLTK VADER, and visualizes ticker-level trends.",
    outcome: "Shows analytical thinking, automation, and the ability to turn raw inputs into understandable insights.",
    stack: ["Python", "Pandas", "NLTK", "Matplotlib", "Streamlit"],
    demoUrl: "https://stock-news-sentiment-analysis-fzx7qmxy27r8jt7immruik.streamlit.app/",
    githubUrl: "https://github.com/aar0gya/Stock-News-Sentiment-Analysis",
  },
  {
    title: "quizzy",
    category: "Interactive full-stack quiz",
    description:
      "A mobile-responsive quiz game built with Flask, JavaScript, and SQLite featuring multiple subjects, animated UI, sound effects, and a persistent leaderboard.",
    outcome: "Highlights responsive interaction design, stateful features, and strong end-to-end execution for a playful product.",
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
      root.style.setProperty("--scroll-y", `${window.scrollY}`);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const initialTheme = storedTheme || (mediaQuery.matches ? "light" : "dark");

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
    const sectionElements = document.querySelectorAll("section[id]");

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
    sectionElements.forEach((element) => sectionObserver.observe(element));

    return () => {
      revealElements.forEach((element) => revealObserver.unobserve(element));
      sectionElements.forEach((element) => sectionObserver.unobserve(element));
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
    <div className="portfolio-shell">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />

      <div className="portfolio-frame">
        <header className="site-header">
          <a className="brand-mark" href="#overview">
            <span className="brand-dot" />
            ABT
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href.slice(1) ? "nav-link active" : "nav-link"}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
            </button>
            <a className="button button-primary desktop-cta" href="#contact">
              Hire Me
            </a>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </header>

        {menuOpen && (
          <div className="mobile-panel">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-link"
                onClick={(event) => handleMobileNavigation(event, item.href)}
              >
                {item.label}
              </a>
            ))}
            <a className="mobile-resume" href="/resume.pdf" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
              Download Resume
            </a>
          </div>
        )}

        <main className="page-content">
          <section id="overview" className="hero-section">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">
                <Sparkles size={14} />
                Frontend & Full-Stack Developer
              </p>
              <p className="hero-intro">Hi, I am</p>
              <h1>
                Aarogya Bikram
                <span> Thapa</span>
              </h1>
              <h2 className="hero-role">Building classy digital products with strong UI judgment and real engineering depth.</h2>
              <p className="hero-text">
                I design and develop recruiter-friendly web experiences that feel premium,
                perform smoothly, and present products with clarity, confidence, and polish.
              </p>

              <div className="hero-socials">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="social-orb" aria-label={item.label}>
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>

              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Hire Me
                </a>
                <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
                  Download CV
                </a>
              </div>
            </div>

            <div className="hero-stage" data-reveal>
              <div className="portrait-shell">
                <div className="portrait-ring" />
                <div className="portrait-core">
                  <div className="monogram">ABT</div>
                  <p>Frontend craft</p>
                  <p>Full-stack range</p>
                </div>
              </div>

              <article className="stage-card top-card">
                <small>Primary Focus</small>
                <strong>Professional UI/UX for modern products</strong>
              </article>

              <article className="stage-card bottom-card">
                <small>Based In</small>
                <strong>Bharatpur, Chitwan, Nepal</strong>
              </article>
            </div>
          </section>

          <section className="metrics-bar" data-reveal>
            {metrics.map((metric) => (
              <article key={metric.label} className="metric-item">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </section>

          <section id="proof" className="content-section">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">Why recruiters notice it</p>
              <h2>A portfolio designed to communicate value before the first interview.</h2>
            </div>

            <div className="feature-grid">
              {strengths.map((item, index) => (
                <article key={item.title} className="feature-card" data-reveal>
                  <span className="feature-index">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="capabilities" className="content-section split-section">
            <div className="section-heading sticky-heading" data-reveal>
              <p className="section-kicker">Capabilities</p>
              <h2>Design sensitivity paired with hands-on delivery.</h2>
              <p className="section-text">
                I work best where product presentation matters as much as implementation.
                That means sharper UI, cleaner communication, and more trustworthy digital experiences.
              </p>
            </div>

            <div className="capability-column">
              {capabilityGroups.map((group) => (
                <article key={group.label} className="capability-card" data-reveal>
                  <div className="capability-title">
                    <Code2 size={18} />
                    <h3>{group.label}</h3>
                  </div>
                  <div className="chip-row">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}

              <article className="notes-card" data-reveal>
                <div className="capability-title">
                  <Briefcase size={18} />
                  <h3>Recruiter notes</h3>
                </div>
                <div className="note-list">
                  {recruiterNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </article>
            </div>
          </section>

          <section id="projects" className="content-section">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">Portfolio</p>
              <h2>Selected projects that show polish, ownership, and product thinking.</h2>
            </div>

            <div className="project-stack">
              {projects.map((project) => (
                <article key={project.title} className="project-card" data-reveal>
                  <div className="project-topline">
                    <span>{project.category}</span>
                    <div className="project-links">
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} demo`}>
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} repository`}
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-outcome">{project.outcome}</div>
                  <div className="chip-row">
                    {project.stack.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="content-section contact-section">
            <div className="contact-panel" data-reveal>
              <div className="section-heading left-aligned">
                <p className="section-kicker">Contact me</p>
                <h2>Open to internships, freelance work, and full-time opportunities.</h2>
                <p className="section-text">
                  If you’re hiring for frontend-heavy product work, full-stack execution,
                  or a portfolio-ready design mindset, I’d be glad to connect.
                </p>
              </div>

              <div className="contact-list">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.label} href={item.href} className="contact-item" target="_blank" rel="noreferrer">
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

            <form className="message-card" onSubmit={handleFormSubmit} data-reveal>
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label>
                Opportunity
                <input type="text" name="opportunity" placeholder="Role, project, or collaboration" required />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me a bit about the role or what you're building."
                  required
                />
              </label>
              <button type="submit" className="button button-primary submit-button">
                Start the conversation
                <ArrowUpRight size={16} />
              </button>
            </form>
          </section>

          <footer className="site-footer" data-reveal>
            <div className="footer-copy">
              <p className="footer-kicker">Aarogya Bikram Thapa</p>
              <h2>Classy interfaces, thoughtful frontend work, and full-stack execution that feels product-ready.</h2>
            </div>

            <div className="footer-links">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="footer-social">
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
