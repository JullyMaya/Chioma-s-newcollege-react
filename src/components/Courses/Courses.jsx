import React from 'react'
import './Courses.css'

const Course = () => {
  return (
    <div>
      <section className="course" id="course">
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

    </div>
  )
}

export default Course
