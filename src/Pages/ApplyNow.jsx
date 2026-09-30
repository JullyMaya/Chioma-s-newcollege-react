import React from "react";
import "./ApplyNow.css";

const ApplyNow = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you! Your application has been submitted.");
  };

  return (
    <div className="apply-page">

      {/* Hero */}
      <section className="apply-hero">
        <div className="apply-hero-content">
          <span>START YOUR JOURNEY</span>

          <h1>Apply to Our University</h1>

          <p>
            Take the first step toward your future. Complete your application
            and become part of our global university community.
          </p>
        </div>
      </section>


      {/* Application */}
      <section className="application-section">

        <div className="application-header">
          <span>APPLICATION FORM</span>

          <h2>Begin Your Application</h2>

          <p>
            Please provide your information below to start your application.
          </p>
        </div>


        <form
          className="application-form"
          onSubmit={handleSubmit}
        >

          {/* Personal Information */}
          <div className="form-section">

            <h3>Personal Information</h3>

            <div className="form-grid">

              <div className="form-group">
                <label htmlFor="firstName">
                  First Name
                </label>

                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="lastName">
                  Last Name
                </label>

                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

            </div>
          </div>


          {/* Academic Information */}
          <div className="form-section">

            <h3>Academic Information</h3>

            <div className="form-grid">

              <div className="form-group">
                <label htmlFor="course">
                  Choose Course
                </label>

                <select id="course" required>
                  <option value="">
                    Select a course
                  </option>

                  <option value="computer-science">
                    Computer Science
                  </option>

                  <option value="medicine">
                    Medicine & Surgery
                  </option>

                  <option value="business">
                    Business Administration
                  </option>

                  <option value="law">
                    Law
                  </option>

                  <option value="engineering">
                    Civil Engineering
                  </option>

                  <option value="psychology">
                    Psychology
                  </option>
                </select>
              </div>


              <div className="form-group">
                <label htmlFor="level">
                  Study Level
                </label>

                <select id="level" required>
                  <option value="">
                    Select level
                  </option>

                  <option value="undergraduate">
                    Undergraduate
                  </option>

                  <option value="postgraduate">
                    Postgraduate
                  </option>

                  <option value="phd">
                    PhD
                  </option>
                </select>
              </div>

            </div>
          </div>


          {/* Message */}
          <div className="form-section">

            <h3>Additional Information</h3>

            <div className="form-group">

              <label htmlFor="message">
                Tell us about yourself
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Write a short message about yourself..."
              ></textarea>

            </div>

          </div>


          {/* Submit */}
          <button
            type="submit"
            className="apply-submit"
          >
            Submit Application
          </button>

        </form>

      </section>

    </div>
  );
};

export default ApplyNow;
