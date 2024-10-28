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
                            Qadiryatlarga asosalngan <br /> ta’lim
                        </h2>
                    </div>
                    <ul className="footer_list">
                        <p className="footer_subtitle">Bizning ijtimoiy tarmoqlrimiz</p>
                        <li><a href="#!" className="footer_link"><FaInstagram className='footer_icon' />  Instagram</a></li>
                        <li><a href="#!" className="footer_link"><PiTelegramLogoDuotone className='footer_icon' /> Telegram</a></li>
                        <li><a href="#!" className="footer_link"><FiFacebook className='footer_icon' /> Facebook</a></li>
                        <li><a href="#!" className="footer_link"><AiOutlineYoutube className='footer_icon' /> Youtube</a></li>
                    </ul>
                    <ul className="footer_list">
                        <p className="footer_subtitle">Bog’lanish</p>
                        <li><a href="#!" className="footer_link"><HiOutlinePhone  className='footer_icon2' />  +99890 000 99 99</a></li>
                        <li><a href="#!" className="footer_link"><CgMail className='footer_icon2'/> maktab@gmail.com</a></li>
                        <li><a href="#!" className="footer_link"><TfiLocationPin className='footer_icon2'/> Jizzax shahri, <br /> Chilonzor tumani</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
