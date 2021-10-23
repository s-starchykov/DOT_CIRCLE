import style from './video_card.module.css'
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';

const VideoCard2 = (props) => {
    let t = (key) => i18next.t(key);
    return (

        <div className={style.videoBox}>
            <div className={style.leftContent}>
                <iframe src={"https://www.youtube.com/embed/9h84XtWV3Lg"}/>
            </div>

            <div className={style.rightContent}>
                <h1>{t('Self-development')}</h1>
                <span>{t('Self-development is a continuous improvement')}</span>
            </div>

        </div>
    )
};

export default withNamespaces()(VideoCard2);