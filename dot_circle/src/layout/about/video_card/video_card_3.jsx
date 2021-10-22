import style from './video_card.module.css'
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';

const Video_card_3 = (props) => {
    let t = (key) => i18next.t(key);
    return (

        <div className={style.VideoBox}>
            <div className={style.leftContent}>
                <iframe src={"https://www.youtube.com/embed/2hp6b_k8ezY"}>
                    video is not available
                </iframe>
            </div>

            <div className={style.rightContent}>
                <h1>{t('STRESS MANAGEMENT')}
                </h1>
                <span>{t('We should cultivate our own abilities in order to protect')}</span>
            </div>

        </div>
    )
};

export default withNamespaces()(Video_card_3);