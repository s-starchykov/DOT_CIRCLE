import s from './webinars.module.scss'

import {withNamespaces} from "react-i18next";
import {useState} from "react";

const Webinars = ({t}) => {
    let [open, setState] = useState(false);
    return (

        <div className={s.container}>
            <div className={s.topContent}>
                <p className={s.bold}>
                    {t('This type of training is useful for those who have')}
                    <br/>
                </p>
                <p className={s.bold}>
                    {t('Principles of webinar training')}
                </p>
                <p className={s.normal}>
                    {t('Interactive interaction between the trainer')}
                </p>

            </div>

            <div className={s.middleContent}>
                <h1 onMouseEnter={() => setState(!open)}
                    onMouseLeave={() => setState(!open)}>
                    {t('The advantages of webinars')}
                </h1>
                {open && <div>
                    <p className={s.appear}>{t('saving time and money')}</p>
                    <p className={s.appear}>{t('obtaining knowledge')}</p>
                </div>}

            </div>
            <div className={s.bottomContent}>
                <p className={s.bold}>
                    {t('Features')}
                </p>
                <p className={s.normal}>
                    {t('the formation of groups of no more than 10 people')}
                </p>
            </div>

        </div>
    )
}

export default withNamespaces()(Webinars);