import './App.css';
import profile from './profile.jpg';

import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiC } from "react-icons/si";
function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h3 className="logo">ANCHANA</h3>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="overlay">

          <img src={profile} alt="profile" className="hero-img" />

          <p className="intro">Hello, I'm</p>

          <h1 className="title">Anchana R P</h1>

          <p className="subtitle">
           Aspiring Software Engineer | Passionate About Web Development
          </p>

        </div>
      </div>

      {/* ABOUT */}
      <div className="section" id="about">
        <h2>About Me</h2>

        <p className="about-text">
          I am an enthusiastic MCA student passionate about building modern,
          user-friendly applications. I enjoy transforming ideas into real-world
          solutions through clean and efficient code.
        </p>

        <p className="about-text delay">
          With a strong foundation in Computer Science, I continuously explore
          new technologies and strive to create impactful digital experiences.
        </p>
      </div>

      {/* SKILLS */}
      <div className="section" id="skills">
        <h2>Skills</h2>

        <div className="skills">
  <span><FaPython /> Python</span>
  <span><SiC /> C Programming</span>
  <span><FaJs /> JavaScript</span>
  <span><FaHtml5 /> HTML</span>
  <span><FaCss3Alt /> CSS</span>
</div>
      </div>

      {/* PROJECTS */}
      <div className="section" id="projects">
        <h2>Projects</h2>

        <div className="projects">
          <div className="card">Coming Soon 🚀</div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="section" id="contact">
        <h2>Contact</h2>

        <p>📧 anchanarpee@gmail.com</p>

        <p>
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/anchana-rp-230660367"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>

        <button
          className="btn"
          onClick={() => window.location.href = "mailto:anchanarpee@gmail.com"}
        >
          Email Me
        </button>
      </div>

    </div>
  );
}

export default App;