import React from 'react';
import './Campus.css';
import london from '../../assets/london.png';
import newyork from '../../assets/newyork.png';
import washington from '../../assets/washington.png';

const Campus = () => {
  return (
    <div>
      <section className="campus">
        <h1>Our Global Campus</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quisquam, quod.
        </p>
        <div className="row">
          <div className="campus-col">
            <img src={london} alt="London" />
            <div className="layer">
              <h3>London</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src={newyork} alt="New York" />
            <div className="layer">
              <h3>New York</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src={washington} alt="Washington" />
            <div className="layer">
              <h3>Washington</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campus;
