import React, { useEffect, useState } from 'react'
import line from '../../assets/images/line.png'
import line2 from '../../assets/images/line2.png'

const Customer = () => {
    const [img, setImg] = useState(line)
    useEffect(() => {
        if (window.innerWidth < 450) {
            setImg(line2)
        }
    }, [])
    return (
        <div className='customer'>
            <div className="container">
                <div className="customer_title_box">
                    <h2 className="customer_title">NIMA UCHUN AYNAN <br /> <span>“HAMRAKULOV MAKTABI”</span> </h2>
                    <iframe className='customer_animation' src="https://lottie.host/embed/7029e98f-b110-433c-b6bb-f2b76d7d0cc2/mIYatOsjQK.json"></iframe>

                </div>
                <img className='customer_img1' src={img} alt="" />

                {/* <div className="customer_box">
                    <img className='customer_img' src={line} alt="" />
                    <div className="customer_box_container">
                        <div className="customer_card">
                            <h2 className="customer_number">
                                01
                            </h2>
                            <p className="customer_card_title">
                                Salohiyat
                            </p>
                            <p className="customer_text">Farzandingiz o’z salohiyatini <br /> to’liq namoyon qila</p>
                        </div>
                        <div className="customer_card">
                            <h2 className="customer_number">
                                02
                            </h2>
                            <p className="customer_card_title">
                                Xalqaro
                            </p>
                            <p className="customer_text">Farzandingiz xalqaro <br /> sertifikatlarni qo’lga kiriti</p>
                        </div>
                        <div className="customer_card">
                            <h2 className="customer_number">
                                03
                            </h2>
                            <p className="customer_card_title">
                                Salohiyat
                            </p>
                            <p className="customer_text">O’z imkoniyatlarini to’liq <br /> maktabda foydalana olish</p>
                        </div>
                    </div>
                </div> */}
            </div>

        </div>
    )
}

export default Customer
