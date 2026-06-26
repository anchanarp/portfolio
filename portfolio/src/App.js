import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaBootstrap,
  FaArrowUp,
  FaCss3Alt,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { SiC, SiFlask, SiGithub, SiMysql } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import './App.css';
import portfolioPreview from './portfolio-preview.svg';
import taskManagerPreview from './task-manager-preview.svg';

const contact = {
  email: 'anchanarp04@gmail.com',
  github: 'https://github.com/anchanarp',
  linkedin: 'https://www.linkedin.com/in/anchana-rp-230660367',
};

const navItems = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

const skills = [
  'Java',
  'Python',
  'JavaScript',
  'C',
  'HTML',
  'CSS',
  'React',
  'Bootstrap',
  'Flask',
  'MySQL',
  'Git',
  'GitHub',
  'VS Code',
];

const projects = [
  {
    title: 'Task Manager',
    description:
      'A focused task management application for creating, organizing, and tracking daily work with a clean user interface.',
    tags: ['React', 'JavaScript', 'CSS'],
    image: taskManagerPreview,
    github: 'https://github.com/anchanarp/task-manager',
    live: 'https://task-manager-fwgj.onrender.com',
  },
  {
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio designed to present skills, education, projects, and contact details to recruiters.',
    tags: ['React', 'HTML', 'CSS'],
    image: portfolioPreview,
    github: 'https://github.com/anchanarp/portfolio',
    live: 'https://portfolio-anchanarps-projects.vercel.app/',
  },
];

const skillIcons = {
  Java: FaJava,
  Python: FaPython,
  JavaScript: FaJs,
  C: SiC,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  React: FaReact,
  Bootstrap: FaBootstrap,
  Flask: SiFlask,
  MySQL: SiMysql,
  Git: FaGitAlt,
  GitHub: SiGithub,
  'VS Code': VscCode,
};

const particles = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: (index % 9) * 0.35,
  duration: 7 + (index % 6),
}));

const stars = Array.from({ length: 64 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  delay: (index % 13) * 0.26,
  duration: 3.4 + (index % 7) * 0.42,
}));

const laptopParticles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${9 + ((index * 17) % 82)}%`,
  top: `${9 + ((index * 23) % 78)}%`,
  delay: index * 0.22,
  duration: 3.6 + (index % 5) * 0.48,
}));

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 34, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeftVariant = {
  hidden: { opacity: 0, x: -34 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const skillCardVariant = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

const charVariant = {
  hidden: { opacity: 0, y: 42, rotateX: -36 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

function Icon({ name }) {
  const icons = {
    github: FaGithub,
    linkedin: FaLinkedinIn,
    mail: FaEnvelope,
    download: FaDownload,
    external: FaExternalLinkAlt,
    send: FaPaperPlane,
  };
  const Component = icons[name];

  return <Component aria-hidden="true" className="icon" />;
}

function AnimatedSection({ id, className = '', children, direction = 'up' }) {
  const prefersReducedMotion = useReducedMotion();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.16,
    rootMargin: '-32px 0px',
    fallbackInView: true,
  });

  return (
    <motion.section
      ref={ref}
      className={`section-shell ${className}`}
      id={id}
      variants={direction === 'left' ? fadeLeftVariant : fadeUpVariant}
      initial={prefersReducedMotion ? false : 'hidden'}
      animate={prefersReducedMotion || inView ? 'show' : 'hidden'}
    >
      {children}
    </motion.section>
  );
}

function BackgroundEffects() {
  return (
    <div className="background-effects" aria-hidden="true">
      <div className="star-field">
        {stars.map((star) => (
          <span
            className="star"
            key={star.id}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>
      <div className="mesh mesh-one" />
      <div className="mesh mesh-two" />
      <div className="mesh mesh-three" />
      <div className="mesh mesh-four" />
      <div className="ambient-orb orb-one" />
      <div className="ambient-orb orb-two" />
      <div className="ambient-orb orb-three" />
      <div className="wave-layer" />
      <div className="wave-layer wave-layer-two" />
      {particles.map((particle) => (
        <span
          className="particle"
          key={particle.id}
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function LaptopIllustration({ tilt, prefersReducedMotion }) {
  return (
    <motion.div
      className="laptop-scene"
      style={{
        '--tilt-x': `${tilt.y}deg`,
        '--tilt-y': `${tilt.x}deg`,
      }}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              y: [0, -15, 0],
              rotateZ: [0, 1.2, -0.9, 0],
            }
      }
      transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="hero-sphere sphere-one" />
      <div className="hero-sphere sphere-two" />
      <div className="hero-sphere sphere-three" />
      <div className="hero-sphere sphere-four" />
      {laptopParticles.map((particle) => (
        <span
          className="laptop-particle"
          key={particle.id}
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      <svg className="laptop-art" viewBox="0 0 760 520" role="img" aria-label="Futuristic glowing laptop">
        <defs>
          <linearGradient id="screenEdge" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="48%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
          <linearGradient id="baseGlow" x1="0" x2="1">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="48%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <radialGradient id="purpleBloom" cx="50%" cy="52%" r="54%">
            <stop offset="0%" stopColor="#d946ef" stopOpacity=".88" />
            <stop offset="56%" stopColor="#7c3aed" stopOpacity=".36" />
            <stop offset="100%" stopColor="#030611" stopOpacity="0" />
          </radialGradient>
          <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="9" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse cx="394" cy="404" rx="230" ry="56" fill="url(#purpleBloom)" opacity=".9" />
        <path
          d="M262 110 606 236c18 7 28 22 25 39l-27 145c-3 20-23 29-43 20L218 288c-17-8-26-22-23-39l27-113c4-20 22-32 40-26Z"
          fill="#070b18"
          stroke="url(#screenEdge)"
          strokeWidth="3"
        />
        <path
          d="M270 135 586 250c10 4 16 13 14 23l-20 111c-2 10-12 15-22 11L243 257c-10-4-15-13-13-23l20-86c2-11 11-17 20-13Z"
          fill="#0b1228"
          stroke="#223368"
          strokeWidth="2"
        />
        <path d="M246 278 557 414 438 475 108 323l138-45Z" fill="#0a1024" stroke="#263b82" strokeWidth="2" />
        <path d="M108 323 438 475 548 417 557 414 438 490 95 333l13-10Z" fill="#101a3a" stroke="#1d4ed8" strokeWidth="2" />
        <path d="M221 315 450 418 385 447 148 339l73-24Z" fill="#101936" opacity=".88" />
        <path d="M250 336 410 407 374 423 207 348l43-12Z" fill="#060a16" opacity=".86" />
        <path d="M302 116 615 231" stroke="#8b5cf6" strokeOpacity=".38" />
        <g filter="url(#softGlow)">
          <path d="M305 172h92" stroke="#a855f7" strokeWidth="6" strokeLinecap="round" />
          <path d="M306 201h76" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
          <path d="M306 226h112" stroke="#a855f7" strokeWidth="5" strokeLinecap="round" />
          <path d="M306 251h67" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
          <path d="M306 276h128" stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" />
          <path d="M465 258 430 287l35 45" stroke="#a855f7" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M512 278 547 307l-35 45" stroke="#8b5cf6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
        <path d="M168 350 500 456" stroke="#7c3aed" strokeOpacity=".45" />
        <path d="M206 337 528 430" stroke="#2563eb" strokeOpacity=".35" />
        <ellipse cx="384" cy="398" rx="113" ry="24" fill="url(#baseGlow)" opacity=".72" filter="url(#softGlow)" />
      </svg>
    </motion.div>
  );
}

function RippleButton({ className, href, children, target, rel, download, type = 'link' }) {
  const props = {
    className: `btn ripple ${className}`,
    whileHover: { scale: 1.025 },
    whileTap: { scale: 0.97 },
  };

  if (type === 'button') {
    return (
      <motion.button {...props} type="button">
        {children}
      </motion.button>
    );
  }

  return (
    <motion.a {...props} href={href} target={target} rel={rel} download={download}>
      {children}
    </motion.a>
  );
}

function App() {
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0 });

  const sectionIds = useMemo(() => ['home', ...navItems.map((item) => item.toLowerCase())], []);

  useEffect(() => {
    if (prefersReducedMotion || process.env.NODE_ENV === 'test') {
      return undefined;
    }

    let lenis;
    let frameId;
    let isMounted = true;

    const setupLenis = async () => {
      const { default: Lenis } = await import('lenis');

      if (!isMounted) {
        return;
      }

      lenis = new Lenis({
        duration: 1.18,
        smoothWheel: true,
        wheelMultiplier: 0.82,
        touchMultiplier: 1.35,
      });

      const raf = (time) => {
        lenis.raf(time);
        frameId = requestAnimationFrame(raf);
      };

      frameId = requestAnimationFrame(raf);
    };

    setupLenis();

    const handleAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) {
        return;
      }

      const target = anchor.getAttribute('href');
      if (!target || target === '#') {
        return;
      }

      event.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, { offset: -10 });
      } else {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.pushState(null, '', target);
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      isMounted = false;
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      document.removeEventListener('click', handleAnchorClick);
      lenis?.destroy();
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 18);
      setShowTop(window.scrollY > 520);
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -48% 0px', threshold: 0.02 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  const handleHeroMove = (event) => {
    if (prefersReducedMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8;
    setHeroTilt({ x, y });
  };

  return (
    <div className="app">
      <BackgroundEffects />
      <motion.div className="scroll-progress" style={{ scaleX: scrollProgress }} />

      <nav className={`navbar ${scrolled ? 'is-scrolled' : ''}`} aria-label="Primary navigation">
        <a className="logo" href="#home">
          Anchana <span>R P</span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a className={activeSection === id ? 'active' : ''} key={item} href={`#${id}`}>
                {item}
              </a>
            );
          })}
        </div>

        <motion.a
          className="nav-resume"
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.97 }}
        >
          Download Resume <Icon name="download" />
        </motion.a>
      </nav>

      <main>
        <motion.section
          className="hero section-shell"
          id="home"
          variants={containerVariant}
          initial={prefersReducedMotion ? false : 'hidden'}
          animate="show"
          onMouseMove={handleHeroMove}
          onMouseLeave={() => setHeroTilt({ x: 0, y: 0 })}
        >
          <motion.div className="hero-copy" variants={containerVariant}>
            <motion.p className="eyebrow" variants={fadeUpVariant}>
              Hi, I'm
            </motion.p>
            <motion.h1 aria-label="Anchana R P" variants={containerVariant}>
              {'Anchana '.split('').map((char, index) => (
                <motion.span aria-hidden="true" className="name-letter" key={`first-${char}-${index}`} variants={charVariant}>
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
              {'R P'.split('').map((char, index) => (
                <motion.span aria-hidden="true" className="name-letter rp-letter" key={`last-${char}-${index}`} variants={charVariant}>
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p className="subtitle" variants={fadeUpVariant}>
              MCA Student | Aspiring Software Developer
            </motion.p>
            <motion.p className="intro" variants={fadeUpVariant}>
              I am an MCA student passionate about building responsive, accessible, and user-friendly web
              applications. I enjoy learning modern technologies and turning ideas into practical digital
              solutions with clean code.
            </motion.p>

            <motion.div className="cta-row" variants={containerVariant}>
              <RippleButton className="primary" href="#projects">
                View Projects
              </RippleButton>
              <RippleButton className="secondary" href="/resume.pdf" download>
                Download Resume <Icon name="download" />
              </RippleButton>
            </motion.div>

            <motion.div className="social-row" aria-label="Social links" variants={containerVariant}>
              <motion.a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" variants={fadeUpVariant}>
                <Icon name="github" />
              </motion.a>
              <motion.a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" variants={fadeUpVariant}>
                <Icon name="linkedin" />
              </motion.a>
              <motion.a href={`mailto:${contact.email}`} aria-label="Email" variants={fadeUpVariant}>
                <Icon name="mail" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-panel"
            aria-hidden="true"
            variants={fadeUpVariant}
          >
            <LaptopIllustration tilt={heroTilt} prefersReducedMotion={prefersReducedMotion} />
          </motion.div>
        </motion.section>

        <AnimatedSection className="about-animated" id="about" direction="left">
          <motion.div className="about-layout" variants={containerVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.28 }}>
            <div className="about-copy">
            <motion.p className="section-kicker" variants={fadeLeftVariant}>
              About
            </motion.p>
            <motion.h2 variants={fadeLeftVariant}>About Me</motion.h2>
            <motion.p className="about-text" variants={fadeLeftVariant}>
              I am currently pursuing MCA and building a strong foundation in software development, web
              technologies, and database-driven applications. I like creating clean, efficient interfaces that
              solve real user problems and present information clearly.
            </motion.p>
            <motion.p className="about-text" variants={fadeLeftVariant}>
              My goal is to grow as a developer by improving my programming skills, practicing project-based
              learning, and contributing to practical applications with thoughtful design and dependable code.
            </motion.p>
            </div>
            <motion.div className="location-card" variants={fadeUpVariant} whileHover={{ y: -8, scale: 1.015 }}>
              <div className="location-pin">
                <FaMapMarkerAlt aria-hidden="true" />
              </div>
              <p>Thiruvananthapuram, Kerala, India</p>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection id="skills">
          <motion.p className="section-kicker" variants={fadeUpVariant}>
            Skills
          </motion.p>
          <motion.h2 variants={fadeUpVariant}>Technical Skills</motion.h2>
          <motion.div
            className="skill-grid"
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((skill) => {
              const SkillIcon = skillIcons[skill];
              return (
                <motion.span key={skill} variants={skillCardVariant} whileHover={{ y: -7, scale: 1.025 }} transition={{ type: 'spring', stiffness: 320, damping: 22 }}>
                  <SkillIcon className="skill-icon" aria-hidden="true" />
                  {skill}
                </motion.span>
              );
            })}
          </motion.div>
        </AnimatedSection>

        <AnimatedSection id="projects">
          <motion.p className="section-kicker" variants={fadeUpVariant}>
            Projects
          </motion.p>
          <motion.h2 variants={fadeUpVariant}>Selected Projects</motion.h2>
          <motion.div
            className="project-grid"
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
          >
            {projects.map((project) => (
              <motion.article
                className="project-card"
                key={project.title}
                variants={fadeUpVariant}
                whileHover={{ y: -9, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <div className="project-image-wrap">
                  <img className="project-image" src={project.image} alt={`${project.title} preview`} loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <motion.div className="tag-row" variants={containerVariant}>
                    {project.tags.map((tag) => (
                      <motion.span key={tag} variants={fadeUpVariant}>
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                  <div className="project-actions">
                    <RippleButton className="small secondary" href={project.github} target="_blank" rel="noopener noreferrer">
                      <Icon name="github" /> GitHub
                    </RippleButton>
                    <RippleButton className="small primary" href={project.live} target="_blank" rel="noopener noreferrer">
                      Live Demo <Icon name="external" />
                    </RippleButton>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="education-animated" id="education">
          <motion.p className="section-kicker" variants={fadeUpVariant}>
            Education
          </motion.p>
          <motion.h2 variants={fadeUpVariant}>Academic Background</motion.h2>
          <motion.div
            className="timeline"
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.24 }}
          >
            <motion.article variants={fadeUpVariant}>
              <span>2025-Present</span>
              <h3>MCA - Lourdes Matha College of Science and Technology</h3>
            </motion.article>
            <motion.article variants={fadeUpVariant}>
              <span>2022-2025</span>
              <h3>BSc Computer Science - Emmanuel College</h3>
            </motion.article>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="contact-section" id="contact">
          <motion.div variants={fadeLeftVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.22 }}>
            <p className="section-kicker">Contact</p>
            <h2>Let us connect</h2>
            <p className="contact-copy">
              I am open to internships, entry-level developer opportunities, collaborations, and project
              discussions.
            </p>

            <div className="contact-links">
              <a href={contact.github} target="_blank" rel="noreferrer">
                <Icon name="github" /> GitHub
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" /> LinkedIn
              </a>
              <a href={`mailto:${contact.email}`}>
                <Icon name="mail" /> {contact.email}
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
          >
            <motion.label variants={fadeUpVariant}>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </motion.label>
            <motion.label variants={fadeUpVariant}>
              Email
              <input type="email" name="email" placeholder="your@email.com" />
            </motion.label>
            <motion.label className="full" variants={fadeUpVariant}>
              Subject
              <input type="text" name="subject" placeholder="Subject" />
            </motion.label>
            <motion.label className="full" variants={fadeUpVariant}>
              Message
              <textarea name="message" rows="5" placeholder="Write your message" />
            </motion.label>
            <RippleButton className="primary full send-button" type="button">
              Send Message <Icon name="send" />
            </RippleButton>
          </motion.form>
        </AnimatedSection>
      </main>

      <motion.button
        className="back-to-top"
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        initial={false}
        animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 18, pointerEvents: showTop ? 'auto' : 'none' }}
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowUp aria-hidden="true" />
      </motion.button>
    </div>
  );
}

export default App;
