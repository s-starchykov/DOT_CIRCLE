import style from './video_card.module.css'
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';

const Video_card_4 = (props) => {
    let t = (key) => i18next.t(key);
    return (

        <div className={style.VideoBox}>
            <div className={style.leftContent}>
                <iframe src={"https://www.youtube.com/embed/wtI4mQ4My1M"}>
                    video is not available
                </iframe>
            </div>

            <div className={style.rightContent}>
                <h1>{t('TIME MANAGEMENT')}
                </h1>
                <span>{t('What is time and how is it valuable to us')}</span>
            </div>

        </div>
    )
};

export default withNamespaces()(Video_card_4);