import React from 'react'
import Nav from './Components/Nav/Nav'
import Upcoming from './Components/Upcoming/Upcoming'
import Customer from './Components/Customer/Customer'
import Form from './Components/Form/Form'
import About from './Components/About/About'
import Additional from './Components/Additional/Additional'
import Teacher from './Components/Teacher/Teacher'
import Map from './Components/Map/Map'
import Footer from './Components/Footer/Footer'
import error from './assets/images/404.png'

const App = () => {
  return (
    // <div className="sayt">
    //   <img src={error} alt="" />
    //   <h1 className='sayt_text'>Sayt vaqtinchalik faoliyat <br /> ko'rsata olmaydi.</h1>
    //   <h1 className='sayt_text2'>
    //     Muammo bo'yicha quyidagi raqamga <br /> qo'ngiroq qilishingiz mumkin: <br />
    //     <a className='sayt_link' href="tel: +998938091644">+998 (93) 809-16-44</a></h1>
    // </div>
    <div>

      <Nav />
      <Upcoming />
      <Customer />
      <div id="form-section">
        <Form />
      </div>
      <About />
      <Form />
      <Additional />
      <Teacher />
      <Form />
      <Map />
      <Footer />
    </div>
  )
}

export default App
