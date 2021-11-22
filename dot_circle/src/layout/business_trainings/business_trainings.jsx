import s from './business_trainings.module.scss'
import {withNamespaces} from "react-i18next";
import {NavLink} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";


const BusinessTrainings = ({t, trainings, name}) => {

    let businessTrainings = trainings.businessTraining.map(i => <div className={s.trainingType}>
        <NavLink to={i.link} className={s.link}>
            <img src= {`${process.env.PUBLIC_URL}/images/${i.src}`} alt=""/>
            <h1>{t(i.name)}</h1>
            <p>
                {t(i.massage)}
            </p>
        </NavLink>
    </div> )



    return (
        <div className={s.businessTrainings}>
            <div className={s.central}><h1>{t(name)}</h1></div>
            {businessTrainings}
        </div>


    )
}

let mapStateToProps = (state) => ({trainings: state.trainingPageReducer});


export default compose(withNamespaces(), connect(mapStateToProps, null))(BusinessTrainings);

