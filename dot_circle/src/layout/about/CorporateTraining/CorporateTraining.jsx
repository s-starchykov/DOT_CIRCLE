import style from './CorporateTraining.module.css';
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';


const CorporateTraining = (props) => {
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

                        Corporate Training
                    </h1>
                    <span> Corporate training programs
                can effectively improve the effectiveness of teamwork. In the process of implementation, issues of simultaneous training of several
                employees, personnel
                a department or a division of a company are solved.</span>
                </div>
            </div>
            <div className={style.item}>

                <h3>
                    <div className={style.circle}>
                        <span className={style.number}>1</span>
                    </div>
                    INITIATION PROCESS
                </h3>
                Make a breakthrough in the business environment, change your attitude to work, increase awareness and
                responsibility

            </div>
            <div className={style.item}>

                <h3>
                    <div className={style.circle}>
                        <span className={style.number}>2</span>
                    </div>
                    SKILL PROCESSES
                </h3>

                Get specific tools, diagrams and formulas. Improve professional performance

            </div>
            <div className={style.item}>

                <h3>
                    <div className={style.circle}>
                        <span className={style.number}>3</span>
                    </div>
                    CONTINUOUS GROWTH
                </h3>
                Tune-in to new changes and achievements. Use new skills and tools to achieve your goals
            </div>

        </div>
    )
};
//<svg xmlns={"http://www.w3.org/2000/svg"}>
//                 </svg>
export default withNamespaces()(CorporateTraining);