import React from 'react'
import { ImLocation } from "react-icons/im";


const Map = () => {
    return (
        <div className='map'>
            <div className="container">
                <div className="map_box">
                    <div className="map_card">
                        <h2 className='map_title'>Bizni yanada  osonroq  toping!</h2>
                        <div className="map_icon_card">
                            <ImLocation className='map_location' />
                            <div className="map_text_card">
                                <p className="map_subtitle">
                                    Mo’ljal:
                                </p>
                                <p className="map_text">Jizzax shahri, Chilonzor tumani</p>
                            </div>
                        </div>
                    </div>
                    <iframe className='map_container' src="https://yandex.com/map-widget/v1/?um=constructor%3A1d8c5550600d1309b559ffa29e96490687f79104c9d642c17e5119de495adeb4&amp;source=constructor" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Map
