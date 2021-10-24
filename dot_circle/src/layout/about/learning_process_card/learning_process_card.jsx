import s from './learning_process_card.module.css'
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import obj1 from "../../../assets/obg1_learning_process.png"
import obj2 from "../../../assets/obg2_learning_process.png"
import obj3 from "../../../assets/obg3_learning_process.png"
import obj4 from "../../../assets/obg4_learning_process.png"


const LearningProcessCard = (props) => {
    let t = (key) => i18next.t(key);
    return (

        <div className={s.container}>
            <h1>{t('Learning process')}</h1>
            <div className={s.leftContent}>
                <div className={s.items}>
                    <div className={s.lineOne}>
                        <img src={obj1} alt={"#"}/>
                        <h3>{t('Work in groups')}</h3>
                        <p>{t('Each participant voices his/her goals in the presence')}</p>
                    </div>

                    <div className={s.lineOne}>
                        <img src={obj2} alt={"#"}/>
                        <h3>{t('Business Game')}</h3>
                        <p>{t('Identifying the strengths and weaknesses of habitual')}</p>
                    </div>

                    <div className={s.lineOne}>
                        <img src={obj3} alt={"#"}/>
                        <h3>{t('Work with a trainer')}</h3>
                        <p>{t('Familiarization with personal cases of participants')}</p>
                    </div>

                    <div className={s.lineOne}>
                        <img src={obj4} alt={"#"}/>
                        <h3>{t('Work in pairs')}</h3>
                        <p>{t('Each participant practices and consolidates the')}</p>
                    </div>
                </div>

                <div className={s.rightContent}>
                    <div className={s.persents}><h2>{t('Practice')}</h2></div>
                </div>
            </div>

            <div className={s.leftContent}>
                <div className={s.items}>
                    <div className={s.lineOne}>
                        <img src={obj1} alt={"#"}/>
                        <h3>{t('Lecture material')}</h3>
                        <p>{t('Outline of basic principles, concepts and stereotypes')}</p>
                    </div>
                </div>
                <div className={s.rightContent}>
                    <div className={s.persents}><h2>{t('Theory')}</h2></div>
                </div>
            </div>


        </div>
    )
};

export default withNamespaces()(LearningProcessCard);