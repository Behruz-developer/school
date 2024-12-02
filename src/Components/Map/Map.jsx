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
                                <p className="map_text">Jizzax shahar ,Qaliya MFY, A.Sa'dullayev ko'chasi ,79 uy.</p>
                            </div>
                        </div>
                    </div>
                    <iframe className='map_container' src="https://yandex.com/map-widget/v1/?um=constructor%3Ad5fae42cd5cf687c7e936bb37856a1bb5cc39d0f03fbc627c07dbde89761d09e&amp;source=constructor" width="747" height="471" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Map
