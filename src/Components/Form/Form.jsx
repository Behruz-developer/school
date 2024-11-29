import React, { useState } from 'react';
import logo from '../../assets/images/logo2.svg';
import form1 from '../../assets/images/form1.png';

const Form = () => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

    const handlePhoneChange = (e) => {
        let inputValue = e.target.value;

        if (!inputValue.startsWith("+998")) {
            inputValue = "+998 ";
        }

        const numericPart = inputValue.replace(/[^0-9]/g, "").slice(3);
        let formattedValue = "+998";

        if (numericPart.length > 0) {
            formattedValue += ` (${numericPart.slice(0, 2)}`;
        }
        if (numericPart.length >= 3) {
            formattedValue += `) ${numericPart.slice(2, 5)}`;
        }
        if (numericPart.length >= 6) {
            formattedValue += `-${numericPart.slice(5, 7)}`;
        }
        if (numericPart.length >= 8) {
            formattedValue += `-${numericPart.slice(7, 9)}`;
        }

        setPhone(formattedValue.trim());
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const sendToTelegram = async () => {
        const token = "7546798027:AAG0g0JcMt8vN6rZUynykCEG0otUnRiQZzk";
        const chat_id = "-4756890182";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const message = `Телефон: ${phone}\nИмя: ${name}`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chat_id,
                    text: message,
                }),
            });

            if (response.ok) {
                alert("Ma'lumotlar muvaffaqiyatli yuborildi!");
                setPhone('');
                setName('');
            } else {
                alert("Xabar yuborishda xatolik yuz berdi.");
            }
        } catch (error) {
            console.error("Xatolik:", error);
            alert("Xabar yuborib bo'lmadi.");
        }
    };

    return (
        <div className='form'>
            <div className="container">
                <div className="form_box">
                    <div className="form_card">
                        <img src={logo} alt="" className="form_logo" data-aos="fade-up" />
                        <h2 className="form_title" data-aos="fade-right" data-aos-duration="1200">
                            HOZIROQ <span>RO’YXATDAN</span> O’TIB BIZ <br /> BILAN BOG’LANING
                        </h2>
                        <div className="form_send">
                            <div className="form_input">
                                <p className="form_send_text">Ism-familyaningiz</p>
                                <input 
                                    type="text" 
                                    value={name} 
                                    onChange={handleNameChange} 
                                />
                            </div>
                            <div className="form_input">
                                <p className="form_send_text">Telefon raqamingiz</p>
                                <input 
                                    type="text" 
                                    value={phone} 
                                    onChange={handlePhoneChange} 
                                />
                            </div>
                        </div>
                        <button className='form_btn' onClick={sendToTelegram}>Ariza qoldirish</button>
                    </div>
                    <img src={form1} alt="" className='form_img' data-aos="fade-left" data-aos-offset="500" />
                </div>
            </div>
        </div>
    );
};

export default Form;
