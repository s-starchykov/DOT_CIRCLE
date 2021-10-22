 import style from "./AboutMeBox.module.css"
 import {withNamespaces} from "react-i18next";
 import i18next from 'i18next';


 let AboutMeBox = () => {
     let t = (key) => i18next.t(key);
    return (
        <div className={style.AboutMeBox}>
            <div className={style.leftContent}>
                <h1>
                    {t('ДАВАЙТЕ ПОЗНАКОМИМСЯ ?')}
                </h1>
                <p>
                    {t('Hello everyone, my name is Anar')}
                </p>

            </div>
            <div className={style.rightContent}>
                <img src="http://dot-circle.com/img/Anar3.jpg" alt=""/>
                <div className="social">
                    <img src="" alt="logo" className={style.socialLogo}/>
                    <img src="" alt="logo" className={style.socialLogo}/>
                    <img src="" alt="logo" className={style.socialLogo}/>

                </div>
            </div>



        </div>
    )
};


export default withNamespaces() (AboutMeBox);