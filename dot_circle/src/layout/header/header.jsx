import s from "./header.module.css";
import {useLocation, NavLink} from "react-router-dom";
import i18n from "i18next";
import {withNamespaces} from 'react-i18next';
import {useState} from "react";
import Logo from '../../assets/title.png';

const Header = ({t}) => {
    // Change language
    const changeLanguage = (lng) => {
        // Set language code
        localStorage.setItem('i18nextLng', lng);

        // Change language wia i18n
        i18n.changeLanguage(lng);
    }

    // Define menu state wia hook
    const [isActive, setActive] = useState(false);
    // Set menu className to state
    const toggleClass = () => setActive(!isActive);

    // Get current path for props
    const location = useLocation();

    return (
        <div className={s.Header}>
            <div className={`${s.sidebar} ${isActive && s.open} `} onMouseEnter={() => toggleClass()} onMouseLeave={() => toggleClass()}>
                <div className={s.logo_details}>
                    <div className={s.logo_name}><img src={Logo} alt="Logo"/> DOT&CIRCLE</div>
                    <i className={`bx btn ${isActive ? 'bx-menu-alt-right' : 'bx-menu'} ${s.btn}`} id="btn"/>
                </div>
                <ul className={s.item_list}>
                    <li>
                        <NavLink to={'/about'} activeClassName={s.activeLink}>
                            <i className='bx bx-grid-alt'/>
                            <span className={s.links_name}>{t('About')}</span>
                        </NavLink>
                        <span className={s.tooltip}>About</span>
                    </li>
                    <li>
                        <NavLink to={'/trainings'} activeClassName={s.activeLink}>
                            <i className='bx bx-user'/>
                            <span className={s.links_name}>{t('Business trainings')}</span>
                        </NavLink>
                        <span className={s.tooltip}>Business trainings</span>
                    </li>
                    <li>
                        <NavLink to={'/open_programs'} activeClassName={s.activeLink}>
                            <i className='bx bx-chat'/>
                            <span className={s.links_name}>Open programs</span>
                        </NavLink>
                        <span className={s.tooltip}>Open programs</span>
                    </li>
                    <li>
                        <NavLink to={'/team'} activeClassName={s.activeLink}>
                            <i className='bx bx-folder'/>
                            <span className={s.links_name}>Dream team</span>
                        </NavLink>
                        <span className={s.tooltip}>Dream team</span>
                    </li>
                    <li>
                        <NavLink to={'/consulting'} activeClassName={s.activeLink}>
                            <i className='bx bx-cart-alt'/>
                            <span className={s.links_name}>Consulting</span>
                        </NavLink>
                        <span className={s.tooltip}>Consulting</span>
                    </li>
                    <li>
                        <NavLink to={'/webinars'} activeClassName={s.activeLink}>
                            <i className='bx bx-heart'/>
                            <span className={s.links_name}>Webinars</span>
                        </NavLink>
                        <span className={s.tooltip}>Webinars</span>
                    </li>
                    <li>
                        <NavLink to={'/useful'} activeClassName={s.activeLink}>
                            <i className='bx bx-cog'/>
                            <span className={s.links_name}>Useful</span>
                        </NavLink>
                        <span className={s.tooltip}>Useful</span>
                    </li>
                    <li>
                        <NavLink to={'/gallery'} activeClassName={s.activeLink}>
                            <i className='bx bx-cog'/>
                            <span className={s.links_name}>Gallery</span>
                        </NavLink>
                        <span className={s.tooltip}>Gallery</span>
                    </li>
                    <div className={s.langPanel}>
                        {['en', 'ru', 'az'].map(lang => {
                            return isActive
                                ? <button className={`${s.open} ${i18n.language === lang && s.current}`} onClick={() => changeLanguage(lang)}>{lang}</button>
                                : <button className={`${i18n.language === lang && s.current}`} onClick={() => changeLanguage(lang)}>{lang}</button>
                        })}
                    </div>
                </ul>
            </div>
        </div>
    )
};

export default withNamespaces()(Header);