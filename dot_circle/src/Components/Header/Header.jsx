import style from "./Header.module.css";
import Dropdown from "./DropdownMenu/DropdownMenu";
import {useLocation, NavLink} from "react-router-dom";

const Header = () => {
    const listItems = {
        trainings: [
            {title: 'TIME MANAGEMENT', path: 'time_management'},
            {title: 'STRESS MANAGEMENT', path: 'stress_management'},
            {title: 'INTUITIVE MANAGEMENT', path: 'intuitive_management'},
            {title: 'SELF-DEVELOPMENT', path: 'self_development'}
        ],
        open_programs: [
            {title: 'TRANSFORMATION PROGRAM', path: 'transformation_program'},
            {title: 'LIFE MANAGEMENT PROGRAM', path: 'life_management'},
            {title: 'MY BEST YEAR PROGRAM', path: 'my_best_year'}
        ],
        consulting: [
            {title: 'INDIVIDUAL CONSULTING', path: 'individual_consulting'},
            {title: 'MANAGEMENT CONSULTING', path: 'management_consulting'}
        ],
    };

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
                    <NavLink to={'/about'} activeClassName={style.activeLink}>ABOUT</NavLink>
                    <Dropdown path={location} title="BUSINESS TRAININGS" content={listItems.trainings}/>
                    <Dropdown path={location} title="OPEN PROGRAMS" content={listItems.open_programs}/>
                </div>

                <hr/>

                <div className={style.botLine}>
                    <Dropdown path={location} title="CONSULTING" content={listItems.consulting}/>
                    <NavLink to={'/VEBINARS'} activeClassName={style.activeLink}>VEBINARS</NavLink>
                    <NavLink to={'/USEFUL'} activeClassName={style.activeLink}>USEFUL</NavLink>
                    <NavLink to={'/GALLERY'} activeClassName={style.activeLink}>GALLERY</NavLink>
                </div>
            </div>

            <div className={style.langPanel}>
                <span>ru</span>
                <span>eng</span>
                <span>az</span>
            </div>
        </div>
    )
};

export default Header;