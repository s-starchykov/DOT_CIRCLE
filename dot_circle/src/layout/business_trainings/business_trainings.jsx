import s from './business_trainings.module.scss'
import {withNamespaces} from "react-i18next";
import {NavLink} from "react-router-dom";
import stress_management from "../../assets/stress_management.png";
import time_management from "../../assets/time_managment.png";
import self_development from "../../assets/self_development.png";
import intuitive_management from "../../assets/intuitive_management.png";
import {compose} from "redux";
import {connect} from "react-redux";


const BusinessTrainings = ({t, trainings, name}) => {

    let topContent = trainings.BisTrTopContent.map(i => <div className={s.trainingType}>
        <NavLink to={i.link} className={s.link}>
            <img src={time_management} alt=""/>
            <h1>{t(i.name)}</h1>
            <p>
                {t(i.massage)}
            </p>
        </NavLink>
    </div> )

    let botContent = trainings.BisTrBotContent.map(i => <div className={s.trainingType}>
        <NavLink to={i.link} className={s.link}>
            <img src={time_management} alt=""/>
            <h1>{t(i.name)}</h1>
            <p>
                {t(i.massage)}
            </p>
        </NavLink>
    </div> )

    return (
        <div className={s.businessTrainings}>
            {topContent}
            <div className={s.central}><h1>{t(name)}</h1></div>
            {botContent}
        </div>


    )
}

let mapStateToProps = (state) => ({trainings: state.trainingPageReducer});


export default compose(withNamespaces(), connect(mapStateToProps, null))(BusinessTrainings);

