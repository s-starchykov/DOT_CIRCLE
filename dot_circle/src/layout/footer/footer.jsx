import style from "./Footer.modules.css";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className={style.Footer}>
            <div className={style.topLine}>
            <div className={style.line_one}>
                <NavLink to={'/'} activeClassName={style.activeLink}>ABOUT</NavLink>
                <NavLink to={'/articles'} activeClassName={style.activeLink}>ARTICLES</NavLink>
            </div>
            <div className={style.line_two}>
                <NavLink to={'/blog'} activeClassName={style.activeLink}>BLOG</NavLink>
                <NavLink to={'/dream-team'} activeClassName={style.activeLink}>DREAM TEAM</NavLink>
            </div>
            <div className={style.line_three}>
                <NavLink to={'/programs'} activeClassName={style.activeLink}>PROGRAMS</NavLink>
                <NavLink to={'/events'} activeClassName={style.activeLink}>EVENTS</NavLink>
            </div>
            </div>
            <hr/>
            <div className={style.botLine}>
                © 2019 Copyright: DOT-CIRCLE.COM
            </div>



        </div>
    )
};


export default Footer;