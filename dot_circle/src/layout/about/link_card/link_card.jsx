import style from './link_card.module.css'
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import {NavLink} from "react-router-dom";

const Link_card = (props) => {
    let t = (key) => i18next.t(key);
    return (

        <div className={style.container}>


            <div className={style.box}>
                <img src={img1} alt=""/>
                <p>{t('Dream team')}</p>
                <hr/>
                <NavLink to={'/useful'}>
                    <span>{t('GO TO')}</span>
                </NavLink>
            </div>

            <div className={style.box}>
                <img src={img2} alt=""/>
                <p>{t('Useful')}</p>
                <hr/>
                <NavLink to={'/'}>
                    <span>{t('GO TO')}</span>
                </NavLink>
            </div>

            <div className={style.box}>
                <img src={img3} alt=""/>
                <p>{t('Webinars')}</p>
                <hr/>
                <NavLink to={'/'}>
                    <span >{t('GO TO')}</span>
                </NavLink>
            </div>

            <div className={style.box}>
                <img src={img4} alt=""/>
                <p>{t('Gallery')}</p>
                <hr/>
                <NavLink to={'/'}>
                    <span>{t('GO TO')}</span>
                </NavLink>
            </div>

        </div>
    )
};

export default withNamespaces()(Link_card);