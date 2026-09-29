import React from 'react';
import './Facilities.css'; 
import libraryImg from '../../assets/library.png';
import basketballImg from '../../assets/basketball.png';
import cafeteriaImg from '../../assets/cafeteria.png';

const Facilities = () => {
  const facilitiesData = [
    {
      id: 1,
      img: libraryImg,
      title: "World Class Library",
      alt: "Library"
    },
    {
      id: 2,
      img: basketballImg,
      title: "Largest Play Ground",
      alt: "Basketball Court"
    },
    {
      id: 3,
      img: cafeteriaImg,
      title: "Tasty and Healthy Food",
      alt: "Cafeteria"
    }
  ];

  return (
    <div>
      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quisquam, quod.
        </p>

        <div className="row">
          {facilitiesData.map((facility) => (
            <div className="facilities-col" key={facility.id}>
              <img src={facility.img} alt={facility.alt} />
              <h3>{facility.title}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quisquam, quod.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Facilities;
