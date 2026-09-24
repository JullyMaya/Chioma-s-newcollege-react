import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}

      <section className="header">
        <nav>
          <a href="/">
            <img src="/images/logo.png" alt="University Logo" />
          </a>

          <div
            className="nav-links"
            style={{
              right: menuOpen ? "0" : "-200px",
            }}
          >
            <i
              className="fa fa-times"
              onClick={() => setMenuOpen(false)}
            ></i>

            <ul>
              <li>
                <a href="#">HOME</a>
              </li>

              <li>
                <a href="#">ABOUT</a>
              </li>

              <li>
                <a href="#">COURSE</a>
              </li>

              <li>
                <a href="#">BLOG</a>
              </li>

              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </div>

          <i
            className="fa fa-bars"
            onClick={() => setMenuOpen(true)}
          ></i>
        </nav>

        <div className="text-box">
          <h1>World's Biggest University</h1>

          <p>
            Welcome to our university! We are dedicated to providing an
            excellent education and <br />
            fostering a vibrant community of learners and scholars.
          </p>

          <a href="#" className="hero-btn">
            Visit us to know More
          </a>
        </div>
      </section>

      {/* ================= COURSE ================= */}

      <section className="course">
        <h1>Courses We Offer</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Quisquam, quod.
        </p>

        <div className="row">
          <div className="course-col">
            <h3>Intermediate</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Quisquam, quod.
            </p>
          </div>

          <div className="course-col">
            <h3>Degree</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Quisquam, quod.
            </p>
          </div>

          <div className="course-col">
            <h3>Post Graduate</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Quisquam, quod.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CAMPUS ================= */}

      <section className="campus">
        <h1>Our Global Campus</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Quisquam, quod.
        </p>

        <div className="row">
          <div className="campus-col">
            <img
              src="/images/london.png"
              alt="London Campus"
            />

            <div className="layer">
              <h3>London</h3>
            </div>
          </div>

          <div className="campus-col">
            <img
              src="/images/newyork.png"
              alt="New York Campus"
            />

            <div className="layer">
              <h3>New York</h3>
            </div>
          </div>

          <div className="campus-col">
            <img
              src="/images/washington.png"
              alt="Tokyo Campus"
            />

            <div className="layer">
              <h3>Tokyo</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FACILITIES ================= */}

      <section className="facilities">
        <h1>Our Facilities</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Quisquam, quod.
        </p>

        <div className="row">
          <div className="facilities-col">
            <img
              src="/images/library.png"
              alt="University Library"
            />

            <h3>World Class Library</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Quisquam, quod.
            </p>
          </div>

          <div className="facilities-col">
            <img
              src="/images/basketball.png"
              alt="Basketball Court"
            />

            <h3>Largest Play Ground</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Quisquam, quod.
            </p>
          </div>

          <div className="facilities-col">
            <img
              src="/images/cafeteria.png"
              alt="University Cafeteria"
            />

            <h3>Tasty and Healthy Food</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Quisquam, quod.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="testimonials">
        <h1>What Our Students Say</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, a enim impedit explicabo eligendi ducimus
          aperiam magni nostrum illo, fuga, sequi libero.
        </p>

        <div className="row">
          <div className="testimonial-col">
            <img
              src="/images/user1.jpg"
              alt="Christine Berkley"
            />

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas labore quaerat voluptatem assumenda, asperiores
                similique nostrum exercitationem itaque quisquam.
              </p>

              <h3>Christine Berkley</h3>

              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>

          <div className="testimonial-col">
            <img
              src="/images/user2.jpg"
              alt="David Byer"
            />

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas labore quaerat voluptatem assumenda, asperiores
                similique nostrum exercitationem itaque quisquam.
              </p>

              <h3>David Byer</h3>

              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}

      <section className="cta">
        <h1>
          Enroll For Our Various Online Courses
          <br />
          Anywhere From The World
        </h1>

        <a href="#" className="hero-btn">
          CONTACT US
        </a>
      </section>

      {/* ================= FOOTER ================= */}

      <section className="footer">
        <h4>About Us</h4>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Quisquam, quod.
        </p>

        <div className="icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-linkedin"></i>
        </div>

        <p>
          Made with{" "}
          <i className="fa fa-heart-o"></i>{" "}
          by Easy Tutorials
        </p>
      </section>
    </>
  );
}

export default App;
