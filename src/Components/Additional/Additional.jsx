import React from 'react'
import additional1 from '../../assets/images/programming.png'
import additional2 from '../../assets/images/additional2.png'
import additional3 from '../../assets/images/sport.png'
import additional4 from '../../assets/images/roboto.png'
import additional5 from '../../assets/images/additional5.png'
import additional6 from '../../assets/images/additional6.png'
import corner from '../../assets/images/corner2.png'
import Logo from '../Logo/Logo'

const Additional = () => {
    return (
        <div className='additional'>
            <div className="container">
                <div className="additional_title_box">
                    <div className="additional_title_card">
                        <h2 className="title">TO’GARAKLAR</h2>
                        <p className="additional_title_card_text">Bizda to’garaklar <span>bolaning qiziqisihdan</span>  kelib chiqib yo’lga qo’yiladi.</p>
                    </div>
                    <img src={corner} alt="" className='additional_img2'/>
                </div>
                <div className="additional_box">
                    <div className="additional_card">
                        <img src={additional1} alt="" />
                        <p className="additional_text">DASTURLASH</p>
                    </div>
                    <div className="additional_card">
                        <img src={additional2} alt="" />
                        <p className="additional_text">OSHPAZLIK</p>
                    </div>
                    <div className="additional_card">
                        <img src={additional3} alt="" />
                        <p className="additional_text">KURASH</p>
                    </div>
                    <div className="additional_card">
                        <img src={additional4} alt="" />
                        <p className="additional_text">ROBOTO TEXNIKA</p>
                    </div>
                    <div className="additional_card">
                        <img src={additional5} alt="" />
                        <p className="additional_text">TIL KURSLARI</p>
                    </div>
  
                </div>
            </div>
            <Logo/>
        </div>
    )
}

export default Additional
