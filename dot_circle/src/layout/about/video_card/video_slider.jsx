import style from './video_card.module.css'
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import s from "./video_card.module.css";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper core and required modules
import SwiperCore, {Autoplay, Keyboard, Mousewheel, Navigation, Pagination} from 'swiper';
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'


// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

const VideoCard = (props) => {
    let t = (key) => i18next.t(key);

    let slideData = [
        {'title': 'Transformation program', 'message': 'This program was created in the basis', 'src': 'https://www.youtube.com/embed/yPN81XlZ1oo'},
        {'title': 'Self-development', 'message': 'Self-development is a continuous improvement', 'src': 'https://www.youtube.com/embed/9h84XtWV3Lg'},
        {'title': 'Stress management', 'message': 'We should cultivate our own', 'src': 'https://www.youtube.com/embed/2hp6b_k8ezY'},
        {'title': 'Time management', 'message': 'What is time and how is it valuable to us', 'src': 'https://www.youtube.com/embed/wtI4mQ4My1M'},
    ]

    const videos = () => slideData.map(i =>  <SwiperSlide className={style.videoBox}>
        <div className={style.leftContent}>
            <iframe src={i.src}/>
        </div>
        <div className={style.rightContent}>
            <h1>{t(i.title)}</h1>
            <span>{t(i.message)}</span>
        </div>
    </SwiperSlide>)

    return (
        <Swiper direction={'vertical'}
                spaceBetween={30}
                mousewheel={true}
                keyboard={true}
                autoplay={{"delay": 2500}}
                pagination={{"dynamicBullets": true, "clickable": true}}
                className={s.swiper}>

            {videos()}

        </Swiper>


    )
};

export default withNamespaces()(VideoCard);