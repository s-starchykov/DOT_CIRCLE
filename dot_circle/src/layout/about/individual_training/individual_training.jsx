import style from './individual_training.module.css';
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';


const IndividualTraining = (props) => {
    // Minify i18next construction
    let t = (key) => i18next.t(key);

    return (
        <div className={style.CorporateTraining}>


            <div className={style.topline}>
                <div className={style.leftContent}>
                    <img src="http://dot-circle.com/img/IMG_8513.jpg" alt=""/>
                </div>

                <div className={style.rightContent}>
                    <h1>

                        OPEN TRAINING
                    </h1>
                    <span> 'An open training format involves a combined composition of groups consisting of employees of various companies and individuals who want to make a qualitative change in their lives. Training is conducted in the form of a seminar, business training according to the program announced in the announcement.</span>
                </div>
            </div>
            <div className={style.item}>

                <h3>
                    <div className={style.circle}>
                        <span className={style.number}>1</span>
                    </div>
                    INITIATION PROCESS
                </h3>
                Carry out an in-depth study of the issue, change your attitude to what is happening in life, increase the level of awareness and responsibility

            </div>
            <div className={style.item}>

                <h3>
                    <div className={style.circle}>
                        <span className={style.number}>2</span>
                    </div>
                    SKILL PROCESSES
                </h3>

                Get specific tools, knowledge, skill practices

            </div>
            <div className={style.item}>

                <h3>
                    <div className={style.circle}>
                        <span className={style.number}>3</span>
                    </div>
                    CONTINUOUS GROWTH
                </h3>
                Bring Purity of Mind to your life. Tune-in to new goals and achievements. Get help and help others. Make new friends with like-minded people. Use new skills and tools to achieve your goals
            </div>

        </div>
    )
};
//<svg xmlns={"http://www.w3.org/2000/svg"}>
//                 </svg>
export default withNamespaces()(IndividualTraining);