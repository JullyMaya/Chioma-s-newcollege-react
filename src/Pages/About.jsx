import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <span className="hero-tag">
              WELCOME TO OUR UNIVERSITY
            </span>

            <h1>
              Building the <span>World's Biggest</span> University Community
            </h1>

            <p>
              A place where ambitious minds come together to learn, innovate,
              discover, and create a better future.
            </p>

            <a href="#about" className="hero-btn">
              Discover Our Story
            </a>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">

        <div className="stat-card">
          <h2>50K+</h2>
          <p>Students</p>
        </div>

        <div className="stat-card">
          <h2>120+</h2>
          <p>Countries</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Programs</p>
        </div>

        <div className="stat-card">
          <h2>98%</h2>
          <p>Graduate Success</p>
        </div>

      </section>

      {/* About Section */}
      <section className="about-content" id="about">

        <div className="about-image">
          <img
            src="/images/about.jpg"
            alt="University campus"
          />
        </div>

        <div className="about-text">

          <span className="section-label">
            ABOUT OUR UNIVERSITY
          </span>

          <h2>
            Where Knowledge Meets <span>Opportunity</span>
          </h2>

          <p>
            Our university is a global community dedicated to transforming
            lives through education, research, innovation, and collaboration.
          </p>

          <p>
            We bring together students, educators, researchers, and leaders
            from around the world to create an environment where ideas can
            grow and possibilities are limitless.
          </p>

          <div className="about-points">

            <div>
              <span>✓</span>
              <p>World-class education</p>
            </div>

            <div>
              <span>✓</span>
              <p>Global learning community</p>
            </div>

            <div>
              <span>✓</span>
              <p>Modern research facilities</p>
            </div>

            <div>
              <span>✓</span>
              <p>Career-focused programs</p>
            </div>

          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">

        <div className="mission-heading">

          <span className="section-label">
            OUR PURPOSE
          </span>

          <h2>
            Learning Without <span>Limits</span>
          </h2>

          <p>
            We believe education should empower people to think differently,
            solve meaningful problems, and make a positive impact on the world.
          </p>

        </div>

        <div className="mission-cards">

          <div className="mission-card">
            <div className="mission-icon">🎓</div>

            <h3>Excellence</h3>

            <p>
              We pursue academic excellence through outstanding teaching,
              research, and continuous innovation.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">🌍</div>

            <h3>Global Community</h3>

            <p>
              Our diverse community connects students and educators from
              different cultures and backgrounds.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">💡</div>

            <h3>Innovation</h3>

            <p>
              We encourage creativity, entrepreneurship, technology, and
              research that can transform society.
            </p>
          </div>

        </div>
      </section>

      {/* Campus Section */}
      <section className="campus-section">

        <div className="campus-text">

          <span className="section-label">
            OUR CAMPUS
          </span>

          <h2>
            A Campus Designed for <span>Great Ideas</span>
          </h2>

          <p>
            From modern classrooms and advanced laboratories to libraries,
            sports facilities, and collaborative spaces, our campus provides
            everything students need to learn and thrive.
          </p>

          <Link to="/contact" className="campus-btn">
            Visit Our Campus
          </Link>

        </div>

        <div className="campus-image">
          <img
            src="/images/background.jpg"
            alt="University campus"
          />
        </div>

      </section>

      {/* Call To Action */}
      <section className="about-cta">

        <h2>
          Ready to Become Part of Our Story?
        </h2>

        <p>
          Join a community of curious minds, future leaders, and innovators.
        </p>

        <Link to="/contact" className="cta-btn">
          Start Your Journey
        </Link>

      </section>

    </div>
  );
};

export default About;