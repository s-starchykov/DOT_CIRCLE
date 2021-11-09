import s from "./welcome_consalting.module.scss"
import {withNamespaces} from "react-i18next";
import consulting from "../../assets/consalting.png"


const Consulting = ({t}) => {
    const data = [
        {'name': 'Individual consulting', 'content': 'discover your talents'},
        {'name': 'Management consulting', 'content': 'www.altempuscapital.com'}
    ];

    let objects = () => data.map(i =>
        <div className={s.consultingType}>
            <h1>{t(i.name)}</h1>
            <p>{t(i.content)}</p>
        </div>
    );


    return (
        <div className={s.consultingPage}>
            <img src={consulting} alt="" className={s.bgImage}/>
            {objects()}
        </div>
    )
};

export default withNamespaces()(Consulting);