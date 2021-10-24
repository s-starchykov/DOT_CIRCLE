// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper core and required modules
import SwiperCore, {Keyboard, Mousewheel, Navigation, Pagination} from 'swiper';
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import bgImage from './../../../assets/top_slider_bg.png'
import s from './top_slider.module.css'
import {withNamespaces} from "react-i18next";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);


const TopSlider = ({t}) => {
    let slideData = [
        {'title': 'Goals', 'message': 'We look for tools to achieve the desired changes in our lives'},
        {'title': 'Goals', 'message': 'To study effective technologies'},
        {'title': 'Goals', 'message': 'We create the best conditions'},
        {'title': 'Values', 'message': 'Individual approach Continuous development  70% Practice - 30% Theory'},
    ]

    const slides = () => slideData.map(i => <SwiperSlide className={s.slide}><h1>{t(i.title)}</h1><p>{t(i.message)}</p></SwiperSlide>)

    return (
        <Swiper navigation={true}
                mousewheel={true}
                keyboard={true}
                pagination={{"dynamicBullets": true, "clickable": true}}
                className={s.swiper}>

            <img src={bgImage} alt="" className={s.bgImage}/>

            {slides()}
        </Swiper>
    )
}

export default withNamespaces()(TopSlider);