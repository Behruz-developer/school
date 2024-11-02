import React from 'react'
import border from '../../assets/images/border.png'
import teacher1 from '../../assets/images/teacher1.png'
import { FaTelegramPlane } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";


const Teacher = () => {
    return (
        <div className='teacher'>
            <div className="container">
                <div className="additional_title_box">
                    <div className="additional_title_card">
                        <h2 className="title">BIZNING O’QITUVCHILARIMIZ</h2>
                        <p className="additional_title_card_text">Farzandingiz bizning maktabda o’qisa <span>xalqaro o’qituvchilardan </span>  dars oladi</p>
                    </div>
                    <img src={border} alt="" className='teacher_img2' />
                </div>
                <div className="teacher_box">
                    <div className="teacher_card">
                        <img className='teacher_img' src={teacher1} alt="" />
                        <div className="teacher_card_bottom">
                            <p className="teacher_subtitle">Steven Strange</p>
                            <p className="teacher_text">Maktab direktori </p>
  
                        </div>
                        <div className="teacher_social">
                                <a href="#!" ><FaTelegramPlane className='teacher_icon telegram' /></a>
                                <a href="#!" ><SiInstagram className='teacher_icon' /></a>
                                <a href="#!" ><FaPhone className='teacher_icon' /></a>
                            </div>
                    </div>
                    <div className="teacher_card">
                        <img className='teacher_img' src={teacher1} alt="" />
                        <div className="teacher_card_bottom">
                            <p className="teacher_subtitle">Steven Strange</p>
                            <p className="teacher_text">Maktab direktori </p>
  
                        </div>
                        <div className="teacher_social">
                                <a href="#!" ><FaTelegramPlane className='teacher_icon telegram' /></a>
                                <a href="#!" ><SiInstagram className='teacher_icon' /></a>
                                <a href="#!" ><FaPhone className='teacher_icon' /></a>
                            </div>
                    </div>
                    <div className="teacher_card">
                        <img className='teacher_img' src={teacher1} alt="" />
                        <div className="teacher_card_bottom">
                            <p className="teacher_subtitle">Steven Strange</p>
                            <p className="teacher_text">Maktab direktori </p>
  
                        </div>
                        <div className="teacher_social">
                                <a href="#!" ><FaTelegramPlane className='teacher_icon telegram' /></a>
                                <a href="#!" ><SiInstagram className='teacher_icon' /></a>
                                <a href="#!" ><FaPhone className='teacher_icon' /></a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teacher
