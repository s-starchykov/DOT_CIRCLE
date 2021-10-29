import s from "./footer.module.css"
import {NavLink} from "react-router-dom";
import logo from "../../assets/logo.png"
import {Link} from "react-router-dom";
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaPhone
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={s.footer}>

            <div className={s.infoArea}>

                <div className={s.footerCta}>
                    <div className={s.row}>

                        <div className={s.col}>
                            <div className={s.singleCta}>
                                <FaMapMarkerAlt className={s.faLogo}/>
                                <h4 className={s.title}>Find us</h4>
                                <span>1010 Avenue, sw 54321</span>
                            </div>
                        </div>

                        <div className={s.col}>
                            <div className={s.singleCta}>
                                <FaPhone className={s.faLogo}/>
                                <h4 className={s.title}>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>

                        <div className={s.col}>
                            <div className={s.singleCta}>
                                <FaEnvelope className={s.faLogo}/>
                                <h4 className={s.title}>Mail us</h4>
                                <span>anar.m@dot-circle.com</span>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={s.footerContent}>
                    <div className={s.row}>
                        <div className={s.col}>
                            <div className={s.footerWidget}>
                                <img className={s.footerLogo} src={logo} alt=""/>
                                <div className={s.footerSocialIcon}>
                                    <h3 className={s.title}>Follow us</h3>
                                    <Link to={'/'}>
                                        <FaFacebookF className={s.faLogo}/>
                                    </Link>
                                    <Link to={'/'}>
                                        <FaInstagram className={s.faLogo}/>
                                    </Link>
                                    <Link to={'https://linkedin.com/in/anar-mammadov-a3a66727/'}>
                                        <FaLinkedinIn className={s.faLogo}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={s.col}>
                            <div className={s.footerWidget}>
                                <h3 className={`${s.title} ${s.underlined}`}>Useful Links</h3>
                                <ul>
                                    <li><NavLink to={'/about'}>About</NavLink></li>
                                    <li><NavLink to={'/articles'}>Articles</NavLink></li>
                                    <li><NavLink to={'/programs'}>Programs</NavLink></li>
                                    <li><NavLink to={'/blog'}>Blog</NavLink></li>
                                    <li><NavLink to={'/dream-team'}>Dream team</NavLink></li>
                                    <li><NavLink to={'/events'}>Events</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.col}>
                            <div className={s.footerWidget}>
                                <h3 className={`${s.title} ${s.underlined}`}>Subscribe</h3>
                                <div className={s.footerText}>
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className={s.subscribeForm}>
                                    <form action="#">
                                        <input type="text" placeholder="Email Address"/>
                                        <button><FaPaperPlane className={s.faLogo}/></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.copyrightArea}>
                <div className={s.container}>
                    <div className={s.row}>
                        <div className={s.col}>
                            <div className={s.copyrightText}>
                                <p>© 2019 Copyright: dot-circle.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}