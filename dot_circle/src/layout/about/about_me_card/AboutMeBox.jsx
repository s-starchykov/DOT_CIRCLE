 import style from "./AboutMeBox.module.css"
 import {withNamespaces} from "react-i18next";
 import i18next from 'i18next';
 import inst from '../../../assets/instagram.png'
 import facebook from '../../../assets/facebook.png'
 import linkedIn from '../../../assets/linkedIin.png'
 import {NavLink} from "react-router-dom";



 let AboutMeBox = () => {
     let t = (key) => i18next.t(key);
    return (
        <div className={style.AboutMeBox}>
            <div className={style.leftContent}>
                <h1>
                    {t('Давайте познакомимся?')}
                </h1>
                <p>
                    {t('Hello everyone, my name is Anar')}
                </p>

            </div>
            <div className={style.rightContent}>
                <img src="http://dot-circle.com/img/Anar3.jpg" alt=""/>
                <div className={style.social}>
                    <a href={'/'} className={style.socialLink}>
                        <img src={facebook} alt="logo" className={style.socialLogo}/>
                    </a>
                    <NavLink to={'/'} className={style.socialLink}>
                        <img src={inst} alt="logo" className={style.sociallLogo}/>
                    </NavLink>
                    <a href={'https:"//www.linkedin.com/in/anar-mammadov-a3a66727/"'} className={style.socialLink} >
                    <img src={linkedIn} alt="logo" className={style.socialLogo}/>
                </a>



                </div>
            </div>



        </div>
    )
};


export default withNamespaces() (AboutMeBox);