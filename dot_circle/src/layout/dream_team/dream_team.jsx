import s from "./dream_team.module.scss"
import {withNamespaces} from "react-i18next";
import executiveDirector from '../../assets/Anar_dream_team.png'
import trainingAssistant from '../../assets/Zulfia_dream_team.png'
import challenger from '../../assets/Nurtac_dream_team.png'
import dreamTeam from "../../assets/dream_team.png";


const DreamTeam = ({t}) => {
    const data = [
        {
            name: 'Anar Mammadov',
            position: 'Executive Director/ Co-founder',
            image: executiveDirector,

        },
        {
            name: 'Zulfiya Nagiyeva',
            position: "Training Assistant",
            image: trainingAssistant,

        },
        {
            name: 'Guliyeva Nurtac',
            position: "Challenger",
            image: challenger,

        }
    ]
    let card = data.map(i =>
        <div className={s.card}>
            <img src={i.image} alt=""/>
            <div className={s.description}>
                <h3>
                    {t(i.name)}
                </h3>
                <p>
                    {t(i.position)}
                </p>
            </div>

        </div>)
    return (
        <div className={s.dreamTeam}>
            <img className={s.bgImage} src={dreamTeam} alt=""/>
            <h1> Dream team</h1>
            <i className={'bx bx-down-arrow-alt'}/>
            <i className={'bx bx-down-arrow-alt'}/>
            <i className={'bx bx-down-arrow-alt'}/>
            {card}

        </div>
    )
}


export default withNamespaces()(DreamTeam);