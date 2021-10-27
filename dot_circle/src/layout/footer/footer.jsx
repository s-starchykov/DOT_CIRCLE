import style from "./Footer.module.css"
import {NavLink} from "react-router-dom";
import location from "../../assets/map_navigation.png"
import logo from "../../assets/logo.png"
import telegram from "../../assets/telegram-plane-brands (1).svg"
import facebook from "../../assets/facebook.png";
import inst from "../../assets/instagram.png";
import linkedIn from "../../assets/linkedIin.png";
import {Link} from "react-router-dom";
import { faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className={style.footerSection}>
            <div className={style.container}>
                <div className={style.footerCta}>
                    <div className={style.row}>
                        <div className={style.col}>
                            <div className={style.singleCta}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className={style.faLogo} />
                                <div className={style.ctaText}>
                                    <h4>Find us</h4>
                                    <span>1010 Avenue, sw 54321</span>
                                </div>
                            </div>
                        </div>
                        <div className={style.col}>
                            <div className={style.singleCta}>
                                <FontAwesomeIcon icon={faPhone} className={style.faLogo} />
                                <div className={style.ctaText}>
                                    <h4>Call us</h4>
                                    <span>9876543210 0</span>
                                </div>
                            </div>
                        </div>
                        <div className={style.col}>
                            <div className={style.singleCta}>
                                <FontAwesomeIcon icon={faEnvelope} className={style.faLogo} />
                                <div className={style.ctaText}>
                                    <h4>Mail us</h4>
                                    <span>mail@info.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.footerContent }>
                    <div className={style.row}>
                        <div className={style.colFooter}>
                            <div className={style.footerWidget}>
                                <div className={style.footerLogo}>
                                    <img src={logo} alt=""/>
                                </div>
                                <div className={style.footerTextTwo}>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                                <div className={style.footerSocialIcon}>
                                    <span>Follow us</span>
                                    <Link to={'/'}  >
                                        <img src={facebook} alt={style.logo} />
                                    </Link>
                                    <Link to={'/'} >
                                        <img src={inst} alt={style.logo}/>
                                    </Link>
                                    <Link to={'https://linkedin.com/in/anar-mammadov-a3a66727/'}>
                                        <img src={linkedIn} alt={style.logo}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={style.col}>
                            <div className={style.footerWidget}>
                                <div className={style.footerWidgetHeading}>
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><NavLink to={'/about'}>About</NavLink></li>
                                    <li><NavLink to={'/articles'}>Articles</NavLink></li>
                                    <li><NavLink to={'/programs'} >Programs</NavLink></li>
                                    <li><NavLink to={'/blog'} >Blog</NavLink></li>
                                    <li><NavLink to={'/dream-team'}>Dream team</NavLink></li>
                                    <li><NavLink to={'/events'}>Events</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className={style.col}>
                            <div className={style.footerWidget}>
                                <div className={style.footerWidgetHeading}>
                                    <h3>Subscribe</h3>
                                </div>
                                <div className={style.footerText}>
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className={style.subscribeForm}>
                                    <form action="#">
                                        <input type="text" placeholder="Email Address"/>
                                            <button>
                                                <FontAwesomeIcon icon={faPaperPlane} className={style.faLogo}/>
                                            </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.copyrightArea}>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={style.col}>
                            <div className={style.copyrightText}>
                                <p>
                                    © 2019 Copyright: DOT-CIRCLE.COM
                                    </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}