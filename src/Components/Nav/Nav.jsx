import React, { useState } from 'react'
import { BiSolidPhone } from "react-icons/bi";
import micrafon from '../../assets/images/micrafon.png'
import instagram from '../../assets/images/instagram.svg'
import youtube from '../../assets/images/youtube.svg'
import telegram from '../../assets/images/telegram.svg'
import facebook from '../../assets/images/facebook.svg'
import logo from '../../assets/images/logo.svg'
import logo2 from '../../assets/images/logo2.svg'
import { CgMenu } from "react-icons/cg";

import { CgClose } from "react-icons/cg";
const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="header_box">
            <a href="+998722000809" className='header_phone'> <BiSolidPhone className='header_phone_icon' />+998 (72) 200-08-09</a>

            <div className="header_card">
              <img src={micrafon} alt="" />
              <p className="header_text">Yangi 2024-2025 o’quv yili boshlandi</p>
              <img src={micrafon} alt="" />
            </div>
            <div className="header_card">

              <a href='https://www.instagram.com/hamrakulov_maktabi/profilecard/?igsh=MTM0amk0bnk2NXRnOA==' className="header_icon">
                <img src={instagram} alt="" />
              </a>
              <a href='https://t.me/hamrakulov_maktabi' className="header_icon">
                <img src={telegram} alt="" />
              </a>
              <a href='#!' className="header_icon">
                <img src={facebook} alt="" />
              </a>
            </div>

          </div>
        </div>
      </header>

      <nav className="nav">
        <div className="container">
          <div className="nav_box">
            <a href="#!" className="nav_logo">
              <img src={logo} alt="" />
            </a>
            <a href="#!" className='header_logo'>
              <img src={logo2} alt="" />
            </a>
            <ul className={`nav_list ${active && "active"}`}>
              <CgClose className='nav_close' onClick={() => setActive(false)} />
              <li><a href="#!" className="nav_link">Asosiy sahifa</a></li>
              <li><a href="#!" className="nav_link">Maktab</a></li>
              <li><a href="#!" className="nav_link">To’garak</a></li>
              <li><a href="#!" className="nav_link">O’qituvchilar</a></li>
              <li><a href="#!" className="nav_link">Manzil </a></li>
              <a href="#!" className="nav_phone2"> <BiSolidPhone className='nav_phone_icon' /> Qo’ng’iroq qilish</a>
              <div className="header_card2">
                <div className="header_icon2">
                  <img src={youtube} alt="" />
                </div>
                <div className="header_icon2">
                  <img src={instagram} alt="" />
                </div>
                <div className="header_icon2">
                  <img src={telegram} alt="" />
                </div>
                <div className="header_icon2">
                  <img src={facebook} alt="" />
                </div>
              </div>
            </ul>
            <a href="+998722000809" className="nav_phone"> <BiSolidPhone className='nav_phone_icon' /> Qo’ng’iroq qilish</a>
            <CgMenu className='nav_menu' onClick={() => setActive(true)} />

          </div>
        </div>
      </nav>
    </>

  )
}

export default Nav
