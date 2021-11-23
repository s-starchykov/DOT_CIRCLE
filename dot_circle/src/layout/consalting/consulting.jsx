import s from "./welcome_consalting.module.scss"
import {withNamespaces} from "react-i18next";
import consulting from "../../assets/consalting.png"
import {Link, NavLink, useRouteMatch} from "react-router-dom";

const Consulting = ({t}) => {
    const match = useRouteMatch();

    return (
        <div className={s.consultingPage}>

            <img src={consulting} alt="" className={s.bgImage}/>

            <h1 className={s.pageTitle}>{t('Individual consulting')}</h1>

            <NavLink to={`${match.url}/individual_consulting`} className={s.consultingType}>
                <div>
                    <h1>{t('Individual consulting')}</h1>
                    <p>{t('Discover your talents')}</p>
                </div>
            </NavLink>

            <i className={'bx bx-sort-alt-2'}/>

            <Link className={s.consultingType}>
                <div>
                    <h1>{t('Management consulting')}</h1>
                    <p>{t('www.altempuscapital.com')}</p>
                </div>
            </Link>
        </div>
    )
};

export default withNamespaces()(Consulting);