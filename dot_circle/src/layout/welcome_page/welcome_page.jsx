import {withNamespaces} from "react-i18next";
import style from "./welcome_page.module.css"
import mainLogo from "./img/main-Logo.png"
// import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import {NavLink} from "react-router-dom";

const WelcomePage = () => {
    let t = (key) => i18next.t(key);
    return (
        <div className={style.container}>

            <div className={style.logoHead}>

                <NavLink to={'/about'} className={style.socialLink}>
                    <img src={mainLogo} alt="logo" className={style.sociallLogo}/>
                </NavLink>
            </div>


            <p className={style.middleParagraph}>
                Please select the product
            </p>


            <div className={style.products}>


                <div className={`${style.card} ${style.slideRight}`}>
                    <div className={style.cardContent}>
                        <div className={style.cardImg}>
                            D&S

                        </div>
                        <div className={style.cardText}> <h3>
                            some bold text

                        </h3>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus.
                        </div>
                    </div>

                </div>
                <div className={`${style.card} ${style.slideUp}`}>
                    <div className={style.cardContent}>
                        <div className={style.cardImg}>
                            WMW

                        </div>
                        <div className={style.cardText}> <h3>
                            some bold text

                        </h3>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus.
                        </div>
                    </div>

                </div>
                <div className={`${style.card} ${style.slideLeft}`}>
                    <div className={style.cardContent}>
                        <div className={style.cardImg}>
                            SS

                        </div>
                        <div className={style.cardText}> <h3>
                            some bold text

                        </h3>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus.
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
};

export default  withNamespaces()(WelcomePage);