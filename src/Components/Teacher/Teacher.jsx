import React from 'react'
import border from '../../assets/images/border.png'
import teacher1 from '../../assets/images/teacher1.png'
import teacher2 from '../../assets/images/teacher2.jpg'
import teacher3 from '../../assets/images/teacher3.jpg'
import teacher4 from '../../assets/images/teacher4.jpg'
import teacher5 from '../../assets/images/teacher5.jpg'
import teacher6 from '../../assets/images/teacher6.jpg'
import teacher7 from '../../assets/images/teacher7.jpg'
import teacher8 from '../../assets/images/teacher8.jpg'
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
                            <p className="teacher_subtitle">Mr. MANOJ</p>
                            <p className="teacher_text">IT specialist </p>

                        </div>

                    </div>
                    <div className="teacher_card">
                        <img className='teacher_img' src={teacher2} alt="" />
                        <div className="teacher_card_bottom">
                            <p className="teacher_subtitle">Murodova Muxlisa</p>
                            <p className="teacher_text">Ona tili va Adabiyot </p>

                        </div>

                    </div>
                    <div className="teacher_card">
                        <img className='teacher_img' src={teacher3} alt="" />
                        <div className="teacher_card_bottom">
                            <p className="teacher_subtitle">Lapasova Sitora</p>
                            <p className="teacher_text">Biologiya </p>
                        </div>
                    </div>
                    <div className="teacher_card">
                        <img className='teacher_img' src={teacher4} alt="" />
                        <div className="teacher_card_bottom">
                            <p className="teacher_subtitle">Egamnazarov Murod</p>
                            <p className="teacher_text">Psixolog </p>
                        </div>
                    </div>
                    <div className="teacher_card">
                        <img className='teacher_img' src={teacher5} alt="" />
                        <div className="teacher_card_bottom">
                            <p className="teacher_subtitle">Razzaqova Ma'mura</p>
                            <p className="teacher_text">Tabiiy fanlar va Geografiya </p>
                        </div>
                    </div>
                    <div className="teacher_card">
                        <img className='teacher_img' src={teacher6} alt="" />
                        <div className="teacher_card_bottom">
                            <p className="teacher_subtitle">Aytmuratova Sumbula</p>
                            <p className="teacher_text">Boshlang'ich ta'lim </p>
                        </div>
                    </div>
                    <div className="teacher_card">
                        <img className='teacher_img' src={teacher7} alt="" />
                        <div className="teacher_card_bottom">
                            <p className="teacher_subtitle">Egamova Ozoda</p>
                            <p className="teacher_text">Tasviriy san'at </p>
                        </div>
                    </div>
                    <div className="teacher_card">
                        <img className='teacher_img' src={teacher8} alt="" />
                        <div className="teacher_card_bottom">
                            <p className="teacher_subtitle">Oblaqulova Dilshoda</p>
                            <p className="teacher_text">Administrator </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teacher
