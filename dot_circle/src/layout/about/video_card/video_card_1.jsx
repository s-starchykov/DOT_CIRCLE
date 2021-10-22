import style from './video_card.module.css'
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';

const Video_card_1 = (props) => {
    let t = (key) => i18next.t(key);
    return (

        <div className={style.VideoBox}>
            <div className={style.leftContent}>
                <iframe src={"https://www.youtube.com/embed/yPN81XlZ1oo"}>
                    video is not available
                </iframe>
            </div>

            <div className={style.rightContent}>
                <h1>{t('TRANSFORMATION PROGRAM')}
                    </h1>
                <span>{t('This program was created in the basis')}</span>
            </div>

        </div>
    )
};

export default withNamespaces()(Video_card_1);