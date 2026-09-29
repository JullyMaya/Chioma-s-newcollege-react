import React from 'react';
import './Testimonials.css';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';


const Testimonials = () => {
  return (
    <div>
      <section className="testimonials">
        <h1>What Our Students Say</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, a enim impedit explicabo eligendi ducimus aperiam
          magni nostrum illo, fuga, sequi libero. Blanditiis maxime nisi
          incidunt, odit nulla enim ex?
        </p>

        <div className="row">
          <div className="testimonial-col">
            <img src={user1} alt="Christine Berkley" />

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas labore quaerat voluptatem assumenda, asperiores
                similique nostrum exercitationem itaque quisquam, tenetur
                nihil sapiente, vel odio. Explicabo molestias voluptates
                iusto culpa accusamus!
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
            <img src={user2} alt="David Byer" />

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas labore quaerat voluptatem assumenda, asperiores
                similique nostrum exercitationem itaque quisquam, tenetur
                nihil sapiente, vel odio. Explicabo molestias voluptates
                iusto culpa accusamus!
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


    </div>
  )
}

export default Testimonials
