import React from 'react'
import logo2 from '../../assets/images/logo2.svg'
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { TfiLocationPin } from "react-icons/tfi";
import { HiOutlinePhone } from 'react-icons/hi';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer_box">
                    <div className="footer_card">
                        <a href="#!" className='footer_logo'>
                            <img src={logo2} alt="" />
                        </a>
                        <h2 className="footer_title">
                            Ingliz tili va aniq fanlarga ixtisoslashgan, amaliy darslar va natijalar maktabi
                        </h2>
                    </div>
                    <ul className="footer_list">
                        <p className="footer_subtitle">Bizning ijtimoiy tarmoqlrimiz</p>
                        <li><a href="https://www.instagram.com/hamrakulov_maktabi/profilecard/?igsh=MTM0amk0bnk2NXRnOA==" className="footer_link"><FaInstagram className='footer_icon' />  Instagram</a></li>
                        <li><a href="https://t.me/hamrakulov_maktabi" className="footer_link"><PiTelegramLogoDuotone className='footer_icon' /> Telegram</a></li>
                        <li><a href="#!" className="footer_link"><FiFacebook className='footer_icon' /> Facebook</a></li>
                    </ul>
                    <ul className="footer_list">
                        <p className="footer_subtitle">Bog’lanish</p>
                        <li><a href="tel:+998722000809" className="footer_link"><HiOutlinePhone className='footer_icon2' />  +998 (72) 200-08-09</a></li>
                        <li><a href="#!" className="footer_link"><CgMail className='footer_icon2' /> hamrakulov@gmail.com</a></li>
                        <li><a href="#!" className="footer_link"><TfiLocationPin className='footer_icon2' /> Jizzax shahar ,Qaliya MFY, A.Sa'dullayev ko'chasi ,79 uy.</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
