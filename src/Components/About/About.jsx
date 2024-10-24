import React from 'react'
import corner from '../../assets/images/corner.png'
import star from '../../assets/images/star.png'
import about1 from '../../assets/images/about1.png'
import border from '../../assets/images/border.png'


const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <div className="about_title_box">
                    <h2 className="about_title"> <span>“HAMRAQULOV MAKTAB” </span> <br /> HAQIDA</h2>
                    <img src={corner} alt="" />
                </div>
                <p className="about_text">
                    Bolaning aqlan, jismonan rivojlanishiga kerak bo‘ladigan zamonaviy va milliy metodlarga boyitilgan ta’lim tizimini kafolatlaydi. Ta’lim dasturlari uchun maxsus ishlab chiqilgan o‘quv qo‘llanmalardan foydalanib o‘qitiladi.
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
                                9 OYLIK TA’LIM
                            </p>
                        </div>
                        <div className="about_better_card">
                            <div className="about_better_img">
                                <img src={star} alt="" />
                            </div>
                            <p className="about_subtitle">
                                TRANSPORT XIZMATI
                            </p>
                        </div>
                    </div>
                    <div className="about_main">
                        <div className="about_main_card">
                            <div className="about_border"></div>
                            <p className="about_text active1">Biz har bir bolaning ta’limiga chuqur yondashamiz</p>
                        </div>
                        <div className="about_main_card">
                            <div className="about_border"></div>
                            <p className="about_text active1">O’qituvchilar xalqaro tajriba ega </p>
                        </div>
                    </div>
                    <div className="about_bottom">
                        <div className="about_bottom_card">
                            <img src={about1} alt="" className='about_bottom_img' />
                            <h2 className="about_subtitle active">
                                1-SINFDAN 11-SINFCHAGA
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
                                1-SINFDAN 11-SINFCHAGA
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
                                1-SINFDAN 11-SINFCHAGA
                            </h2>
                            <p className="about_text">Sifatli KUN TARTIB va qiziqarli ta’lim, barcha fanlar birdek kuch berib o‘qitiladi </p>
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
