import React from 'react'
import img1 from '../../assets/images/upcoming.png'

const Upcoming = () => {
  return (
    <div className='upcoming'>
      <img className='upcoming_img' src={img1} alt="" />
      <div className="container">
        <div className="upcoming_box">
          <h2 className="upcoming_title">
            Qadiryatlarga <br /> asoslangan <br /> <span>Ta’lim</span>
          </h2>
          <p className="upcoming_text">
            1-10- sinflar uchun Matematika va Ingliz tiliga ixtisoslashtirilgan xususiy maktab
          </p>
          <a href="#!" className="upcoming_link">Ariza qoldirish</a>
        </div>
      </div>
    </div>
  )
}

export default Upcoming
