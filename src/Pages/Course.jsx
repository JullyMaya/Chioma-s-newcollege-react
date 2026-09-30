import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = () => {
  const courses = [
    {
      icon: "💻",
      category: "Technology",
      title: "Computer Science",
      description:
        "Learn programming, software development, artificial intelligence, and modern computing technologies.",
      duration: "4 Years",
    },
    {
      icon: "🏥",
      category: "Medical Science",
      title: "Medicine & Surgery",
      description:
        "Develop the knowledge and practical skills required to build a rewarding career in healthcare.",
      duration: "6 Years",
    },
    {
      icon: "📊",
      category: "Business",
      title: "Business Administration",
      description:
        "Explore management, finance, marketing, entrepreneurship, and leadership in the modern business world.",
      duration: "4 Years",
    },
    {
      icon: "⚖️",
      category: "Law",
      title: "Law",
      description:
        "Study legal principles, justice, human rights, corporate law, and the foundations of the legal system.",
      duration: "5 Years",
    },
    {
      icon: "🏗️",
      category: "Engineering",
      title: "Civil Engineering",
      description:
        "Gain practical knowledge in construction, structural design, infrastructure, and engineering technology.",
      duration: "5 Years",
    },
    {
      icon: "🧠",
      category: "Social Science",
      title: "Psychology",
      description:
        "Understand human behaviour, emotions, development, mental processes, and social interactions.",
      duration: "4 Years",
    },
  ];

  return (
    <div className="course-page">

      {/* Hero Section */}
      <section className="course-hero">
        <div className="course-hero-content">
          <span>ACADEMIC PROGRAMS</span>

          <h1>
            Explore Our <strong>Courses</strong>
          </h1>

          <p>
            Discover world-class programs designed to prepare you for
            academic excellence, professional success, and a brighter future.
          </p>
        </div>
      </section>

      {/* Course Introduction */}
      <section className="course-intro">
        <span className="section-label">OUR PROGRAMS</span>

        <h2>Find the Right Course for You</h2>

        <p>
          Our university offers a wide range of undergraduate and professional
          programs designed to develop your knowledge, skills, creativity, and
          confidence.
        </p>
      </section>

      {/* Course Cards */}
      <section className="courses-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>

            <div className="course-icon">
              {course.icon}
            </div>

            <span className="course-category">
              {course.category}
            </span>

            <h3>{course.title}</h3>

            <p>{course.description}</p>

            <div className="course-footer">
              <span>⏱ {course.duration}</span>

              <button>
                View Course
              </button>
            </div>

          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="course-cta">
        <div>
          <span>START YOUR JOURNEY</span>

          <h2>Ready to Build Your Future?</h2>

          <p>
            Explore our programs and take the first step toward achieving your
            academic and career goals.
          </p>

          <Link to="/apply" className="hero-btn">
  APPLY NOW
</Link>

        </div>
      </section>

    </div>
  );
};

export default Course;

