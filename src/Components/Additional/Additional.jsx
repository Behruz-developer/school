import React from 'react'
import additional1 from '../../assets/images/additional1.png'
import additional2 from '../../assets/images/additional2.png'
import additional3 from '../../assets/images/additional3.png'
import additional4 from '../../assets/images/additional4.png'
import additional5 from '../../assets/images/additional5.png'
import corner from '../../assets/images/corner2.png'

const Additional = () => {
    return (
        <div className='additional'>
            <div className="container">
                <div className="additional_title_box">
                    <div className="additional_title_card">
                        <h2 className="title">TO’GARAKLAR</h2>
                        <p className="additional_title_card_text">Farzandingiz bizning maktabda o’qisa <span>bepul</span> to’garaklarga qatnashish imoniyatiga ega.</p>
                    </div>
                    <img src={corner} alt="" />
                </div>
                <div className="additional_box">
                    <div className="additional_card">
                        <img src={additional1} alt="" />
                        <p className="additional_text">lABORATORIYA</p>
                    </div>
                    <div className="additional_card">
                        <img src={additional2} alt="" />
                        <p className="additional_text">OSHPAZLIK</p>
                    </div>
                    <div className="additional_card">
                        <img src={additional3} alt="" />
                        <p className="additional_text">SUZISH</p>
                    </div>
                    <div className="additional_card">
                        <img src={additional4} alt="" />
                        <p className="additional_text">GIMANSTIKA</p>
                    </div>
                    <div className="additional_card">
                        <img src={additional5} alt="" />
                        <p className="additional_text">TIL KURSLARI</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Additional
