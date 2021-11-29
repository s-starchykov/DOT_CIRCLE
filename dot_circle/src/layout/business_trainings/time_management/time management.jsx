import s from "./time_management.module.scss"

import {withNamespaces} from "react-i18next";
import {compose} from "redux";
import {connect} from "react-redux";
import bgImage from "../../../assets/time_management.png"


const TimeManagement = ({t, training}) => {


    const numberRange = training.timeManagement.bottomContent.map(i => <div className={s.item}>
        <h1>{i.number}</h1>
        <p>{t(i.content)}</p>
    </div>)

    const targets = training.timeManagement.middleContent.map(i => <p className={s.targets}>{t(i)}</p>
    )

    return (
        <div className={s.timeManagement}>
            <img src={bgImage} alt=""/>

            <div className={s.header}>
                <h1>{t(training.timeManagement.headerTitle)}</h1>
                <p>
                    {t(training.timeManagement.headerMessage)}
                </p>
            </div>


            <div className={s.blockOne}>
                <p>
                    {t(training.timeManagement.content)}
                </p>
            </div>

            <div className={s.blockTwo}>
                <h1>{t(training.timeManagement.middleTitle)}</h1>
                {targets}
            </div>

            <div className={s.blockThree}>

                <h1 className={s.topConent}>{t(training.timeManagement.bottomTitle)}</h1>
                <div className={s.botContent}>
                    {numberRange}
                </div>

            </div>


        </div>
    )
};
let mapStateToProps = (state) => ({training: state.trainingPageReducer});


export default compose(withNamespaces(), connect(mapStateToProps, null))(TimeManagement);

