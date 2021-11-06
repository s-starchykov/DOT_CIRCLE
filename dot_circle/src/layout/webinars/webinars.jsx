import s from './webinars.module.scss'
import {withNamespaces} from "react-i18next";
import faq from "../../assets/webinar_bg.png";
import Footer from "../footer/footer";

const Webinars = ({t}) => {
    return (
        <>
            <div className={s.webinars}>
                <h1 className={s.title}>{t('Webinars')}</h1>
                <img className={s.bgImage} src={faq} alt=""/>

                <div className={s.topContent}>
                    <p><i className={'bx bx-info-square'}/>{t('This type of training is useful for those who have')}</p>
                    <h1 className={s.bold}>{t('Principles of webinar training')}</h1>
                    <p className={s.normal}>{t('Interactive interaction between the trainer')}</p>
                </div>

                <div className={s.middleContent}>
                    <h1 className={s.containerTitle}><i
                        className={'bx bx-error-circle'}/>{t('The advantages of webinars')}</h1>
                    <p className={`${s.listItem} ${s.show}`}>{t('Saving time and money')}</p>
                    <p className={`${s.listItem} ${s.show}`}>{t('Obtaining knowledge')}</p>
                </div>

                <div className={s.bottomContent}>
                    <p className={s.bold}>{t('Features')}</p>
                    <p className={s.normal}>{t('The formation of groups of no more than 10 people')}</p>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default withNamespaces()(Webinars);