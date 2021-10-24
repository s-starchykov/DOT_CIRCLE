import s from "./header.module.css";
import {useLocation, NavLink} from "react-router-dom";
import i18n from "i18next";
import {withNamespaces} from 'react-i18next';
import {useState} from "react";
import Logo from '../../assets/logo_title.png';


const Header = ({t}) => {
    // Change language
    const switchLang = (lng) => {
        // Set language code
        localStorage.setItem('i18nextLng', lng);

        // Change language wia i18n
        i18n.changeLanguage(lng).then(() => console.log(lng));
    };

    // Define menu state wia hook
    const [isActive, setActive] = useState(false);
    // Set menu className to state
    const toggleClass = () => setActive(!isActive);

    // Get current path for props
    const location = useLocation().pathname;

    // Language switcher buttons
    const langButtons = () => ['en', 'ru', 'az'].map((l) => isActive
        ? <button className={`${s.open} ${i18n.language === l && s.current}`} onClick={() => switchLang(l)}>{l}</button>
        : <button className={`${i18n.language === l && s.current}`} onClick={() => switchLang(l)}>{l}</button>
    );

    return (
        <div className={`${s.sidebar} ${isActive && s.open} `} onMouseEnter={() => toggleClass()} onMouseLeave={() => toggleClass()}>
                <div className={s.logo_details}>
                    <div className={s.logo_name}><img src={Logo} alt="Logo"/> DOT&CIRCLE</div>
                    <i className={`bx btn ${isActive ? 'bx-menu-alt-right' : 'bx-menu'} ${s.btn}`} id="btn"/>
                </div>
                <ul className={s.item_list}>
                    <li>
                        <NavLink to={'/'} activeClassName={`${location === '/' && s.activeLink}`}>
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
                            <span className={s.links_name}>{t('Open programs')}</span>
                        </NavLink>
                        <span className={s.tooltip}>Open programs</span>
                    </li>
                    <li>
                        <NavLink to={'/team'} activeClassName={s.activeLink}>
                            <i className='bx bx-folder'/>
                            <span className={s.links_name}>{t('Dream team')}</span>
                        </NavLink>
                        <span className={s.tooltip}>Dream team</span>
                    </li>
                    <li>
                        <NavLink to={'/consulting'} activeClassName={s.activeLink}>
                            <i className='bx bx-cart-alt'/>
                            <span className={s.links_name}>{t('Consulting')}</span>
                        </NavLink>
                        <span className={s.tooltip}>Consulting</span>
                    </li>
                    <li>
                        <NavLink to={'/webinars'} activeClassName={s.activeLink}>
                            <i className='bx bx-heart'/>
                            <span className={s.links_name}>{t('Webinars')}</span>
                        </NavLink>
                        <span className={s.tooltip}>Webinars</span>
                    </li>
                    <li>
                        <NavLink to={'/useful'} activeClassName={s.activeLink}>
                            <i className='bx bx-cog'/>
                            <span className={s.links_name}>{t('Useful')}</span>
                        </NavLink>
                        <span className={s.tooltip}>Useful</span>
                    </li>
                    <li>
                        <NavLink to={'/gallery'} activeClassName={s.activeLink}>
                            <i className='bx bx-cog'/>
                            <span className={s.links_name}>{t('Gallery')}</span>
                        </NavLink>
                        <span className={s.tooltip}>Gallery</span>
                    </li>
                    <div className={s.langPanel}>{langButtons()}</div>
                </ul>
            </div>
    )
};

export default withNamespaces()(Header);