import style from "./Header.module.css";
import Dropdown from "./DropdownMenu/DropdownMenu";
import {useLocation, NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Header = (props) => {

    // Get current url path for props
    const location = useLocation();

    // Get menu items array from props
    const tabGroup = props.headerData.headerItems;

    return (
        <div className={style.Header}>


            <div className={style.logo}>
                <NavLink to={'/'} className={style.logo} activeClassName={style.activeLink}>
                    <img src="http://dot-circle.com/img/Logo.png" alt="#"/>
                </NavLink>
            </div>

            <div className={style.nav}>

                <div className={style.topLine}>
                    <NavLink to={'/about'} className={style.headerItem} activeClassName={style.activeLink}>ABOUT</NavLink>
                    <Dropdown path={location} title="BUSINESS TRAININGS" content={tabGroup.trainings}/>
                    <Dropdown path={location} title="OPEN PROGRAMS" content={tabGroup.open_programs}/>
                </div>

                <hr/>

                <div className={style.botLine}>
                    <Dropdown path={location} title="CONSULTING" content={tabGroup.consulting}/>
                    <NavLink to={'/webinars'} className={style.headerItem} activeClassName={style.activeLink}>VEBINARS</NavLink>
                    <NavLink to={'/useful'} className={style.headerItem} activeClassName={style.activeLink}>USEFUL</NavLink>
                    <NavLink to={'/gallery'} className={style.headerItem} activeClassName={style.activeLink}>GALLERY</NavLink>
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


const mapStateToProps = (state) => ({
    headerData: state.headerReducer
})

export default connect(mapStateToProps, null)(Header);