import React from "react";
import { Link } from "react-router-dom";
import "./Admissions.css";

const Admissions = () => {
  return (
    <div className="admissions-page">

      {/* Hero Section */}
      <section className="admissions-hero">
        <div className="admissions-hero-content">
          <span>BEGIN YOUR JOURNEY</span>

          <h1>Admissions</h1>

          <p>
            Take the next step toward your future. Discover our programs,
            admission requirements, and everything you need to join our
            university community.
          </p>

          <Link to="/apply" className="admissions-hero-btn">
            Apply Now
          </Link>
        </div>
      </section>


      {/* Introduction */}
      <section className="admissions-intro">

        <div className="admissions-intro-text">
          <span className="admissions-label">
            JOIN OUR COMMUNITY
          </span>

          <h2>
            Your Future Starts <span>Here</span>
          </h2>

          <p>
            We welcome students from different backgrounds, cultures, and
            parts of the world. Our admissions process is designed to help
            students find the right academic path and prepare for a
            successful future.
          </p>

          <p>
            Whether you are beginning your undergraduate journey or advancing
            your education through postgraduate study, our admissions team is
            here to guide you.
          </p>

          <Link to="/apply" className="admissions-btn">
            Start Your Application
          </Link>
        </div>

        <div className="admissions-intro-image">
          <img
            src="/images/about.jpg"
            alt="Students at university"
          />
        </div>

      </section>


      {/* Admission Steps */}
      <section className="admission-process">

        <div className="admissions-heading">
          <span className="admissions-label">
            HOW IT WORKS
          </span>

          <h2>
            Admission <span>Process</span>
          </h2>

          <p>
            Follow these simple steps to begin your journey with us.
          </p>
        </div>


        <div className="process-grid">

          <div className="process-card">
            <div className="process-number">01</div>

            <h3>Choose Your Program</h3>

            <p>
              Explore our undergraduate and postgraduate programs and choose
              the course that matches your interests and career goals.
            </p>
          </div>


          <div className="process-card">
            <div className="process-number">02</div>

            <h3>Prepare Your Documents</h3>

            <p>
              Gather your academic certificates, identification documents,
              references, and any other required materials.
            </p>
          </div>


          <div className="process-card">
            <div className="process-number">03</div>

            <h3>Submit Your Application</h3>

            <p>
              Complete your application form carefully and submit it together
              with the required documents.
            </p>
          </div>


          <div className="process-card">
            <div className="process-number">04</div>

            <h3>Receive Your Decision</h3>

            <p>
              Our admissions team will review your application and contact
              you with the next steps.
            </p>
          </div>

        </div>

      </section>


      {/* Requirements */}
      <section className="requirements-section">

        <div className="requirements-heading">
          <span className="admissions-label">
            WHAT YOU NEED
          </span>

          <h2>
            Admission <span>Requirements</span>
          </h2>

          <p>
            Make sure you have the following documents ready before applying.
          </p>
        </div>


        <div className="requirements-grid">

          <div className="requirement-card">
            <div className="requirement-icon">🎓</div>

            <h3>Academic Records</h3>

            <p>
              Provide your previous academic certificates, transcripts, or
              qualifications relevant to your chosen program.
            </p>
          </div>


          <div className="requirement-card">
            <div className="requirement-icon">🪪</div>

            <h3>Identification</h3>

            <p>
              Submit a valid form of identification such as a passport or
              national identification document.
            </p>
          </div>


          <div className="requirement-card">
            <div className="requirement-icon">📄</div>

            <h3>Application Documents</h3>

            <p>
              Complete the application form and provide any additional
              documents requested for your chosen program.
            </p>
          </div>


          <div className="requirement-card">
            <div className="requirement-icon">✉️</div>

            <h3>Recommendation</h3>

            <p>
              Some programs may require recommendation letters or additional
              supporting documents.
            </p>
          </div>

        </div>

      </section>


      {/* Important Information */}
      <section className="admission-info">

        <div className="info-box">

          <span className="admissions-label">
            IMPORTANT INFORMATION
          </span>

          <h2>
            Ready to Take the <span>Next Step?</span>
          </h2>

          <p>
            Start your application today and take the first step toward
            becoming part of our university community.
          </p>

          <div className="info-buttons">
            <Link to="/apply" className="admissions-btn">
              Apply Now
            </Link>

            <Link to="/contact" className="admissions-outline-btn">
              Contact Admissions
            </Link>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Admissions;