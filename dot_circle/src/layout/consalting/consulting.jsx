import s from "./welcome_consalting.module.scss"
import {withNamespaces} from "react-i18next";
import consulting from "../../assets/consalting.png"
import {NavLink, Route, useRouteMatch} from "react-router-dom";
import {useState} from "react";
import Iframe from "../common/iframe/iframe";
import IndividualConsulting from "./individual_consalting/individual_consalting";

const Consulting = ({t}) => {
    const match = useRouteMatch();
    const [showManagement, setShowManagement] = useState(false);
    const [showIndividual, setShowIndividual] = useState(false);

    return (
        <div className={s.consultingPage}>
            <img src={consulting} alt="" className={s.bgImage}/>
            <h1 className={s.pageTitle}>{t('Individual consulting')}</h1>
            <div className={s.consultingType}
                 onClick={() => setShowIndividual(!showIndividual)}>
                <div>
                    <h1>{t('Individual consulting')}</h1>
                    <p>{t('Discover your talents')}</p>
                </div>
            </div>

            {showIndividual && <div className={s.individualConsulting}>
                <button onClick={() => setShowIndividual(!showIndividual)}>X</button>

            </div>}

            <i className={'bx bx-sort-alt-2'}/>


            <div className={s.consultingType} onClick={() => setShowManagement(!showManagement)}>
                <div>
                    <h1>{t('Management consulting')}</h1>
                    <p>{t('www.altempuscapital.com')}</p>
                </div>

            </div>
            {showManagement && <div className={s.appear}>
                <button onClick={() => setShowManagement(!showManagement)}>x</button>
                <Iframe source={'http://dot-circle.com/pages/consulting.html'}/>
            </div>
            }
        </div>
    )
}


export default withNamespaces()(Consulting);