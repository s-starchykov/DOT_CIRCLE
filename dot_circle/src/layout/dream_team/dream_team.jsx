import s from "./dream_team.module.scss"
import {withNamespaces} from "react-i18next";
import executiveDirector from '../../assets/Anar_dream_team.png'
import trainingAssistant from '../../assets/Zulfia_dream_team.png'
import challenger from '../../assets/Nurtac_dream_team.png'
import dreamTeam from "../../assets/dream_team.png";
import {Link} from "react-router-dom";
import {FaFacebookSquare, FaInstagram, FaLinkedinIn} from "react-icons/fa";


const DreamTeam = ({t}) => {
    const data = [
        {
            name: 'Anar Mammadov',
            position: 'Executive Director',
            image: executiveDirector,
            social: [
                {icon: 'facebook', link: 'facebook.com'},
                {icon: 'instagram', link: '/'},
                {icon: 'linkedin', link: '/'},
            ]
        },
        {
            name: 'Zulfiya Nagiyeva',
            position: "Training Assistant",
            image: trainingAssistant,
            social: [
                {icon: 'facebook', link: '/'},
                {icon: 'instagram', link: '/'},
                {icon: 'linkedin', link: '/'},
            ]
        },
        {
            name: 'Guliyeva Nurtac',
            position: "Challenger",
            image: challenger,
            social: [
                {icon: 'facebook', link: '/'},
                {icon: 'instagram', link: '/'},
                {icon: 'linkedin', link: '/'},
            ]
        }
    ];

    let card = data.map(i =>
        <div className={s.card}><img src={i.image} alt=""/>
            <div className={s.description}>
                <h3 className={s.name}>{t(i.name)}</h3>
                <p className={s.position}><b>{t('Position')}:</b> <br/> {t(i.position)}</p>
                <p className={s.position}><b>{t('Contacts')}:</b></p>
                <div className={s.social}>{
                    i.social?.map(i =>
                        <Link className={s.socialLink} to={i.link}>
                            {i.icon === 'facebook' && <FaFacebookSquare className={s.faLogo}/>}
                            {i.icon === 'instagram' && <FaInstagram className={s.faLogo}/>}
                            {i.icon === 'linkedin' && <FaLinkedinIn className={s.faLogo}/>}
                        </Link>)}
                </div>
            </div>
        </div>
    );

    return (
        <div className={s.dreamTeam}>
            <img className={s.bgImage} src={dreamTeam} alt=""/>
            <h1>Dream team</h1>
            {card}
        </div>
    );
};

export default withNamespaces()(DreamTeam);