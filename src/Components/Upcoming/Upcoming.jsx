import React, { useEffect } from 'react'
import img1 from '../../assets/images/upcoming.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-scroll';



const Upcoming = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);
  return (
    <div className='upcoming'>
      <img className='upcoming_img' src={img1} alt="" />
      <div className="container">
        <div className="upcoming_box">
          <h2 className="upcoming_title " data-aos="fade-right">
            Biz natijalarni – <br /> amaliyotni <br /><span>ustiga quramiz.</span>
          </h2>
          <p className="upcoming_text" data-aos="fade-right" data-aos-duration="1200">
            Ingliz tili va aniq fanlarga ixtisoslashgan, amaliy darslar va natijalar maktabi
          </p>
          <Link

            to="form-section" // Target the id of the Form component's container
            smooth={true}
            duration={500}
            offset={50}
            className="upcoming_link"
          >
            Ariza qoldirish
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Upcoming
