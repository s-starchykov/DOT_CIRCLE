import style from './video_card.module.css'
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';

const VideoCard1 = (props) => {
    let t = (key) => i18next.t(key);
    return (

        <div className={style.videoBox}>
            <div className={style.leftContent}>
                <iframe src={"https://www.youtube.com/embed/yPN81XlZ1oo"}/>
            </div>
            <div className={style.rightContent}>
                <h1>{t('Transformation program')}</h1>
                <span>{t('This program was created in the basis')}</span>
            </div>
        </div>
    )
};

export default withNamespaces()(VideoCard1);