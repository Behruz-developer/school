import React from 'react'
import logo from '../../assets/images/logo2.svg'
import form1 from '../../assets/images/form1.png'

const Form = () => {
    return (
        <div className='form'>
            <div className="container">
                <div className="form_box">
                    <div className="form_card">
                        <img src={logo} alt="" className="form_logo" data-aos="fade-up"/>
                        <h2 className="form_title" data-aos="fade-right" data-aos-duration="1200">
                            HOZIROQ <span>RO’YXATDAN</span> O’TIB BIZ <br /> BILAN BOG’LANING
                        </h2>
                        <div className="form_send">
                            <div className="form_input">
                                <p className="form_send_text">Ism-familyaningiz </p>
                                <input type="text" />
                            </div>
                            <div className="form_input">
                                <p className="form_send_text">Telefon raqamingiz </p>
                                <input type="text" />
                            </div>
                        </div>
                        <button className='form_btn'>Ariza qoldirish</button>
                    </div>
                    <img src={form1} alt="" className='form_img' data-aos="fade-left"  data-aos-offset="500" />
                </div>
            </div>
        </div>
    )
}

export default Form
