import style from "./header.module.css";
import Dropdown from "./DropdownMenu/DropdownMenu";
import {useLocation, NavLink} from "react-router-dom";
import i18n from "i18next";
import {withNamespaces} from 'react-i18next';

const Header = ({t}) => {

    // Change language
    const changeLanguage = (lng) => {
        // Set language code
        localStorage.setItem('i18nextLng', lng);

        // Change language wia i18n
        i18n.changeLanguage(lng);
    }

    // Get current path for props
    const location = useLocation();

    return (
        <div className={style.Header}>

            <div className={style.logo}>
                <NavLink to={'/dream_team'} activeClassName={style.activeLink}>
                    <img src="http://dot-circle.com/img/Logo.png" alt="#"/>
                </NavLink>
            </div>

            <div className={style.nav}>
                <div className={style.topLine}>
                    <NavLink to={'/about'} activeClassName={style.activeLink}>{t('about')}</NavLink>
                    <Dropdown path={location} title="BUSINESS TRAININGS"/>
                    <Dropdown path={location} title="OPEN PROGRAMS"/>
                </div>

                <hr/>

                <div className={style.botLine}>
                    <Dropdown path={location} title="CONSULTING"/>
                    <NavLink to={'/VEBINARS'} activeClassName={style.activeLink}>VEBINARS</NavLink>
                    <NavLink to={'/USEFUL'} activeClassName={style.activeLink}>USEFUL</NavLink>
                    <NavLink to={'/GALLERY'} activeClassName={style.activeLink}>GALLERY</NavLink>
                </div>
            </div>

            <div className={style.langPanel}>
                <button onClick={() => changeLanguage('en')}>ENG</button>
                <button onClick={() => changeLanguage('ru')}>RU</button>
                <button onClick={() => changeLanguage('az')}>AZ</button>
            </div>
        </div>
    )
};

export default withNamespaces()(Header);