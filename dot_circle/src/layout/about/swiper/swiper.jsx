// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
import "swiper/css/pagination"
import i18next from "i18next";
import {withNamespaces} from "react-i18next";
import style from './swiper.module.css'

export default () => {
    let t = (key) => i18next.t(key);
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <h1> {t('Goals')}</h1>
                <p>{t('To study effective technologies and apply them')}</p>
            </SwiperSlide>
            <SwiperSlide>
                <h1>{t('Goals')}</h1>
            </SwiperSlide>
            <P> {t('We create the best conditions for the full development and maximum self-realization of the individual, for professional growth and the realization of higher expectations in personal life and in the field of career growth - improve the quality of life!')}</P>

            <SwiperSlide><h1>{t('Goals')}</h1>
                <p>{t('We look for tools to achieve the desired changes in our lives')}</p>
            </SwiperSlide>
            <SwiperSlide><h1>{t('Values')}</h1>
                <p>Ind{t('Individual approach Continuous development 70% Practice - 30% Theory')}</p>
            </SwiperSlide>

        </Swiper>
    );
};
export default withNamespaces();