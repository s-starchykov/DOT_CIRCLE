import s from "./stress_management.module.scss"
import {withNamespaces} from "react-i18next";
import {compose} from "redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {connect} from "react-redux";


const StressManagement = ({t, trainings}) => {
    const header = trainings.stressManagement.header.map(i => <div className={s.header}>
        <h1>{t(i.title)}</h1>
        <p>{t(i.content)}</p>
    </div>
)

    const blockOne = trainings.stressManagement.blockOne.map(i=>  <div className={s.blockOne}>
        <p>{t(i.title)}</p>
        <p className={s.bold}>{t(i.content)}</p>
    </div>
)
    const blockTwo = trainings.stressManagement.blockTwo.map(i  =>
        <div className={s.blockTwo}>
        <h1>{t(i.title)}</h1>
        <div className={s.item}>
            <h1>{t(i.number)}</h1>
            <p>{t(i.content)}</p>
        </div>
    </div>)

    const blockThree = trainings.stressManagement.blockThree.map( i =>  <div className={s.blockThree}>
        <h1>{t(i.title)}</h1>
        <div><h1>{t(i.number)}</h1>
            <p>{i.content}</p>
        </div>

    </div>)
    return (

        <div className={s.stressManagement}>
            {header}
            {blockOne}
            {blockTwo}
            {blockThree}
        </div>
    )
}

const mapStateToProps = (state) => ({trainings: state.trainingPageReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(StressManagement);