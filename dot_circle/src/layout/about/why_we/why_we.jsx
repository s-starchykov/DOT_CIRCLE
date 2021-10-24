import style from './why_we.module.css';
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import img from '../../../assets/anar_why_we.png'
import WhyWeSlider from "./swiper/why_we_slider";


const WhyWe = () => {
    // Minify i18next construction
    let t = (key) => i18next.t(key);

    return (
        <div className={style.container}>

            <div className={style.topLine}>
                <div className={style.leftContent}>
                    <h1>{t('Why we?')}</h1>
                    <p>{t('Each training is a')}</p>
                </div>
                <div className={style.rightContent}><img src={img} alt=""/></div>
            </div>
            <div className={style.whyWeSlider}><WhyWeSlider/></div>
        </div>
    );
};

export default withNamespaces()(WhyWe);