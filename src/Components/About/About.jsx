import React from 'react'
import corner from '../../assets/images/corner.png'
import star from '../../assets/images/star.png'
import about1 from '../../assets/images/about1.png'


const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <div className="about_title_box">
                    <h2 className="title"> <span>“HAMRAKULOV MAKTABI” </span> <br /> HAQIDA</h2>
                    <img src={corner} alt="" />
                </div>
                <p className="about_text">
                    Maktabimizda o’quvchilarni hamma tomondan yetuk inson bo’lishlari uchun imkoniyatlar yaratiladi.
                </p>
                <div className="about_box">
                    <div className="about_better">
                        <div className="about_better_card">
                            <div className="about_better_img">
                                <img src={star} alt="" />
                            </div>
                            <p className="about_subtitle">
                                3 MAHAL OVQAT
                            </p>
                        </div>
                        <div className="about_better_card">
                            <div className="about_better_img">
                                <img src={star} alt="" />
                            </div>

                            <p className="about_subtitle">
                                10 OYLIK TA’LIM
                            </p>
                        </div>
                        <div className="about_better_card">
                            <div className="about_better_img">
                                <img src={star} alt="" />
                            </div>
                            <p className="about_subtitle">
                                YOTOQXONA XIZMATI
                            </p>
                        </div>
                    </div>
                    <div className="about_main">
                        <div className="about_main_card">
                            <div className="about_border"></div>
                            <p className="about_text active1">Avvaldan bir yillik to’lov qilinsa <span>-20%</span></p>
                        </div>
                        <div className="about_main_card">
                            <div className="about_border"></div>
                            <p className="about_text active1">Bir oiladan 2 va undan ortiq bola uchun har bir bolaning to’lovidan <span>-5%</span> </p>
                        </div>
                    </div>
                    <div className="about_bottom">
                        <div className="about_bottom_card">
                            <img src={about1} alt="" className='about_bottom_img' />
                            <h2 className="about_subtitle active">
                                1-SINFDAN 11-SINFGACHA
                            </h2>
                            <p className="about_text">Maktabimizda eng yaxshi o‘quvchiga har oy <span>300 ming </span> so‘m stipendiya beriladi.</p>
                            <div className="about_bottom_information">
                                <p className="about_subtitle">7-17 <br /> YOSH</p>
                                <p className="about_subtitle">5  KUN</p>
                                <p className="about_subtitle">5  SOAT</p>
                            </div>
                        </div>
                        <div className="about_bottom_card">
                            <img src={about1} alt="" className='about_bottom_img' />
                            <h2 className="about_subtitle active">
                                1-SINFDAN 11-SINFGACHA
                            </h2>
                            <p className="about_text">Sifatli KUN TARTIB va qiziqarli ta’lim, barcha fanlar birdek kuch berib o‘qitiladi </p>
                            <div className="about_bottom_information">
                                <p className="about_subtitle">7-17 <br /> YOSH</p>
                                <p className="about_subtitle">5  KUN</p>
                                <p className="about_subtitle">5  SOAT</p>
                            </div>
                        </div>
                        <div className="about_bottom_card">
                            <img src={about1} alt="" className='about_bottom_img' />
                            <h2 className="about_subtitle active">
                                1-SINFDAN 11-SINFGACHA
                            </h2>
                            <p className="about_text">Sifatli va qiziqarli ta’lim, barcha fanlar birdek kuch berib o‘qitiladi</p>
                            <div className="about_bottom_information">
                                <p className="about_subtitle">7-17 <br /> YOSH</p>
                                <p className="about_subtitle">5  KUN</p>
                                <p className="about_subtitle">5  SOAT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
