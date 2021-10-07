import style from "./Header.module.css";
import Dropdown from "./DropdownMenu/DropdownMenu";

const Header = () => {
    const listItems = ['TIME MANAGEMENT', 'STRESS MANAGEMENT','INTUITIVE MANAGEMENT'
    , 'SELF-DEVELOPMENT','TRANSFORMATION PROGRAM', 'LIFE MANAGEMENT PROGRAM', 'MY BEST YEAR PROGRAM','INDIVIDUAL CONSULTING', 'MANAGEMENT CONSULTING'];
    return (
        <div className={style.Header}>

            <div className={style.logo}>
                <a href="#">
                    <img src="http://dot-circle.com/img/Logo.png" alt="#"/>
                </a>
            </div>


            <div className={style.nav}>
                <div className={style.topLine}>
                    <a href={''}>ABOUT</a>
                    <a><Dropdown title="BUSINESS TRAININGS" options={listItems}/></a>
                    {/*<a href={''}><Dropdown title="OPEN PROGRAMS" options={item2}/></a>*/}
                    <a href={''}>DREAM TEAM</a>
                </div>

                <hr/>

                <div className={style.botLine}>
                    {/*<a href={''}>*/}
                        {/*<Dropdown title="CONSULTING" options={item3}/>*/}
                    {/*</a>*/}
                    <a href={''}>VEBINARS</a>
                    <a href={''}>USEFUL</a>
                    <a href={''}>GALLERY</a>

                </div>
            </div>

            <div className={style.langPanel}>

                ru eng az

            </div>


        </div>
    )
};

export default Header;