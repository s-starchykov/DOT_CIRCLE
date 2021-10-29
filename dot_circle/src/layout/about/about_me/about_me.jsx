import s from "./about_me.module.scss"
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import inst from '../../../assets/instagram.png'
import facebook from '../../../assets/facebook.png'
import linkedIn from '../../../assets/linkedIin.png'
import {Link} from "react-router-dom";
import aboutMeBg from '../../../assets/about_me.png'


let AboutMe = () => {
    let t = (key) => i18next.t(key);
    return (
        <div className={s.aboutMe}>

            <div className={s.leftContent}>
                <h1>{t('Давайте познакомимся?')}</h1>
                <p>{t('Hello everyone, my name is Anar')}</p>
            </div>

            <div className={s.rightContent}>
                <img src={aboutMeBg} alt="" className={s.aboutMeBg}/>
                <div className={s.social}>
                    <Link to={'/'} className={s.socialLink}>
                        <img src={facebook} alt="logo" className={s.socialLogo}/>
                    </Link>
                    <Link to={'/'} className={s.socialLink}>
                        <img src={inst} alt="logo" className={s.socialLogo}/>
                    </Link>
                    <Link to={'https://linkedin.com/in/anar-mammadov-a3a66727/'} className={s.socialLink}>
                        <img src={linkedIn} alt="logo" className={s.socialLogo}/>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default withNamespaces()(AboutMe);