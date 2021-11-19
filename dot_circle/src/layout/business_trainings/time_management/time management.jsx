import s from "./time_management.module.scss"
import time_management from "../../../assets/time_managment.png";
import {withNamespaces} from "react-i18next";
import style from "../../about/coopereation_process/cooperation_process.module.scss";
import {compose} from "redux";
import {connect} from "react-redux";


const TimeManagement =({t, training}) => {

   const numberRange = training.data1.map(i => <div className={style.item}>
       <h1>{i.number}</h1>
       <p>{t(i.massage)}</p>
   </div>)
    return (
        <div className={s.timeManagement}>
            <img src={time_management} alt="" className={s.bgImage}/>

            <div className={s.header}>
                <h1>{t('Time Management')}</h1>
                <p>
                    {t('What is time and how is it valuable to us')}
                </p>
            </div>


            <div className={s.blockOne}>
                <p>
                    {t('The general approach does not work here')}
                </p>
            </div>

            <div className={s.blockTwo}>
                <h1>{t('Target audience for the training')}</h1>
                <p className={s.targets}>{t('Top-Management')}</p>
                <p className={s.targets}> {t('Heads of Departments')}</p>
                <p className={s.targets}>{t('All those interested in the effective time management')}</p>
                <p className={s.targets}> {t('Managers')}</p>
            </div>

            <div className={s.blockThree}>

                <h1 className={s.topConent}>kfokvksv</h1>
                {numberRange};
            </div>



        </div>
    )
};
let mapStateToProps = (state) => ({training: state.trainingPageReducer});


export default compose(withNamespaces(), connect(mapStateToProps, null))(TimeManagement);

