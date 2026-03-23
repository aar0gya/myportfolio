import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  ExternalLink,
  Github,
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
  { label: "Overview", href: "#overview" },
  { label: "Proof", href: "#proof" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  { value: "3+", label: "years building production-ready web experiences" },
  { value: "10+", label: "modern tools used across frontend, backend, and ML work" },
  { value: "24/7", label: "focus on clarity, responsiveness, and recruiter-ready communication" },
];

const strengths = [
  {
    title: "Frontend execution",
    text: "Responsive interfaces with React, Tailwind CSS, and a strong eye for hierarchy, polish, and usability.",
  },
  {
    title: "Product thinking",
    text: "I design for outcomes first, balancing aesthetics with performance, accessibility, and maintainability.",
  },
  {
    title: "Full-stack range",
    text: "Comfortable shipping across Node.js, Express, databases, real-time features, and machine-learning prototypes.",
  },
];

const capabilityGroups = [
  {
    label: "Core stack",
    items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Next.js", "Vite"],
  },
  {
    label: "Backend and data",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Socket.io", "GraphQL"],
  },
  {
    label: "Workflow",
    items: ["Git/GitHub", "Docker", "Figma", "REST APIs", "Responsive Design", "UI Systems"],
  },
];

const recruiterNotes = [
  "Builds interfaces that feel intentional, not template-generated.",
  "Comfortable translating vague ideas into clear deliverables and polished UI.",
  "Brings both engineering discipline and visual taste to product work.",
];

const projects = [
  {
    title: "apex-kicks",
    category: "Full-stack ecommerce product",
    description:
      "A full-stack sneaker ecommerce platform built with React, Node.js, PostgreSQL, Stripe payments, Clerk authentication, an admin dashboard, and transactional emails.",
    outcome: "Shows end-to-end product delivery across storefront UX, payments, authentication, admin tooling, and production-style backend flows.",
    stack: ["React", "Node.js", "JavaScript", "Express", "Stripe", "PostgreSQL"],
    demoUrl: "https://github.com/aar0gya/apex-kicks",
    githubUrl: "https://github.com/aar0gya/apex-kicks",
  },
  {
    title: "Stock News Sentiment Analysis",
    category: "Data-driven product",
    description:
      "A Python workflow that scrapes Finviz headlines, scores sentiment with NLTK VADER, and visualizes ticker-level trends.",
    outcome: "Demonstrates analytical thinking, automation, and turning raw data into understandable signals.",
    stack: ["Python", "Pandas", "NLTK", "Matplotlib", "Streamlit"],
    demoUrl: "https://stock-news-sentiment-analysis-fzx7qmxy27r8jt7immruik.streamlit.app/",
    githubUrl: "https://github.com/aar0gya/Stock-News-Sentiment-Analysis",
  },
  {
    title: "quizzy",
    category: "Full-stack quiz product",
    description:
      "A mobile-responsive quiz game built with Flask, JavaScript, and SQLite featuring multiple subjects, animated UI, sound effects, and a persistent leaderboard.",
    outcome: "Highlights full-stack interactivity, responsive design, game-like UX polish, and stateful leaderboard functionality.",
    stack: ["JavaScript", "Python", "Flask", "SQLite", "Frontend", "Backend"],
    demoUrl: "https://github.com/aar0gya/quizzy",
    githubUrl: "https://github.com/aar0gya/quizzy",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "thapaaarogyabikram@gmail.com",
    href: "mailto:thapaaarogyabikram@gmail.com",
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
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    toast({
      title: "Message drafted",
      description: "Thanks for reaching out. The form is currently configured as a portfolio demo.",
    });
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <div className="portfolio-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <header className="site-header">
        <a className="brand-mark" href="#overview">
          <span className="brand-dot" />
          Aarogya Bikram Thapa
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
          <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
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
        <div className="mobile-panel" data-reveal>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}

      <main className="page-content">
        <section id="overview" className="hero-section">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">
              <Sparkles size={14} />
              Frontend & Full-Stack Developer
            </p>
            <p className="hero-name">Aarogya Bikram Thapa</p>
            <h1>
              Designing and building web experiences that look sharp, feel smooth,
              and earn trust fast.
            </h1>
            <p className="hero-text">
              I'm a developer who blends product thinking, modern UI craft, and practical
              engineering to ship experiences that feel premium, clear, and recruiter-ready.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View selected work
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/aarogya-bikram-thapa-ab63b6371"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-panel" data-reveal>
            <div className="hero-card hero-card-main">
              <span className="card-label">Professional snapshot</span>
              <h2>Professional interfaces that help teams stand out immediately.</h2>
              <p>
                I focus on visual hierarchy, performance, readability, responsiveness,
                and the kind of polish that makes products feel more credible.
              </p>
            </div>

            <div className="hero-card hero-card-accent">
              <div>
                <span className="card-label">What I bring</span>
                <p>React UI systems, full-stack implementation, strong presentation, and ML-side experimentation.</p>
              </div>
              <ArrowUpRight size={20} />
            </div>

            <div className="hero-card hero-card-list">
              <span className="card-label">Immediate recruiter takeaways</span>
              <div className="note-list">
                {recruiterNotes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="hero-proof-band" data-reveal>
          {metrics.map((metric) => (
            <article key={metric.label} className="hero-proof-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </section>

        <section id="proof" className="content-section">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Fast recruiter scan</p>
            <h2>Proof points first, so the story is easy to trust.</h2>
          </div>

          <div className="strength-grid">
            {strengths.map((item, index) => (
              <article key={item.title} className="glass-card" data-reveal>
                <span className="strength-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="capabilities" className="content-section split-section">
          <div className="section-heading sticky-heading" data-reveal>
            <p className="section-kicker">Capabilities</p>
            <h2>Built for teams that need both craft and execution.</h2>
            <p className="section-text">
              My strongest value is combining strong visual instincts with hands-on
              delivery across the stack, which makes collaboration smoother and
              outcomes sharper.
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

            <article className="recruiter-card" data-reveal>
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
            <p className="section-kicker">Selected work</p>
            <h2>Projects that show range, ownership, and presentation quality.</h2>
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
              <p className="section-kicker">Let's connect</p>
              <h2>Open to internships, freelance work, and full-time opportunities.</h2>
              <p className="section-text">
                If you're hiring for frontend-heavy product work, full-stack development,
                or visually polished web experiences, I'd love to talk.
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

            <div className="social-row">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="social-link">
                    <Icon size={18} />
                    {item.label}
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
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};
