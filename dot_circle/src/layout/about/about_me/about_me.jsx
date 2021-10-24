import style from "./about_me.module.css"
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
        <div className={style.aboutMe}>

            <div className={style.leftContent}>
                <h1>{t('Давайте познакомимся?')}</h1>
                <p>{t('Hello everyone, my name is Anar')}</p>
            </div>

            <div className={style.rightContent}>
                <img src={aboutMeBg} alt="" className={style.aboutMeBg}/>
                <div className={style.social}>
                    <Link to={'/'} className={style.socialLink}>
                        <img src={facebook} alt="logo" className={style.socialLogo}/>
                    </Link>
                    <Link to={'/'} className={style.socialLink}>
                        <img src={inst} alt="logo" className={style.socialLogo}/>
                    </Link>
                    <Link to={'https://linkedin.com/in/anar-mammadov-a3a66727/'} className={style.socialLink}>
                        <img src={linkedIn} alt="logo" className={style.socialLogo}/>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default withNamespaces()(AboutMe);