import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span>GET IN TOUCH</span>

          <h1>Contact Our University</h1>

          <p>
            Have questions about admissions, courses, or campus life?
            Our team is here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">

        <div className="contact-info-card">
          <div className="contact-icon">📍</div>

          <h3>Our Location</h3>

          <p>
            University Avenue,
            <br />
            Port Harcourt, Nigeria
          </p>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">📞</div>

          <h3>Phone Number</h3>

          <p>
            +234 800 123 4567
            <br />
            +234 801 987 6543
          </p>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">✉️</div>

          <h3>Email Address</h3>

          <p>
            info@ouruniversity.edu
            <br />
            admissions@ouruniversity.edu
          </p>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">🕐</div>

          <h3>Opening Hours</h3>

          <p>
            Monday - Friday
            <br />
            8:00 AM - 5:00 PM
          </p>
        </div>

      </section>

      {/* Contact Form Section */}
      <section className="contact-section">

        <div className="contact-form-container">

          <div className="contact-heading">
            <span>CONTACT US</span>

            <h2>We'd Love to Hear From You</h2>

            <p>
              Send us a message and our team will get back to you as soon
              as possible.
            </p>
          </div>

          <form className="contact-form">

            <div className="contact-form-grid">

              <div className="contact-form-group">
                <label htmlFor="firstName">First Name</label>

                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="lastName">Last Name</label>

                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>

            </div>

            <div className="contact-form-group">
              <label htmlFor="subject">Subject</label>

              <input
                id="subject"
                type="text"
                placeholder="What would you like to talk about?"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="message">Your Message</label>

              <textarea
                id="message"
                rows="6"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* Campus Section */}
      <section className="contact-campus">

        <div className="contact-campus-image">
          <img
            src="/images/background.jpg"
            alt="University campus"
          />
        </div>

        <div className="contact-campus-content">

          <span>VISIT OUR CAMPUS</span>

          <h2>Come and See Us</h2>

          <p>
            We welcome prospective students, parents, researchers, and
            visitors to our university campus. Come and experience our
            learning environment for yourself.
          </p>

          <div className="campus-details">

            <div>
              <strong>📍 Address</strong>
              <p>University Avenue, Port Harcourt, Nigeria</p>
            </div>

            <div>
              <strong>📞 Phone</strong>
              <p>+234 800 123 4567</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;
