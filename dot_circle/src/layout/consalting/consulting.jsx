import s from "./welcome_consalting.module.scss"
import {withNamespaces} from "react-i18next";
import consulting from "../../assets/consalting.png"
import {NavLink} from "react-router-dom";


const Consulting = ({t}) => {
    return (
        <div className={s.consultingPage}>
            <img src={consulting} alt="" className={s.bgImage}/>

            <div className={s.consultingType}>
                <h1>{t('Individual consulting')}</h1>
                <p>
                    <NavLink to={"individual_consulting"} className={s.link}>{t('Discover your talents')}</NavLink>


                </p>
            </div>
            <i className={'bx bx-sort-alt-2'}/>

            <div className={s.consultingType}>
                <h1>{t('Management consulting')}</h1>
                <p>
                    {t('www.altempuscapital.com')}
                </p>
            </div>
        </div>
    )
};

export default withNamespaces()(Consulting);