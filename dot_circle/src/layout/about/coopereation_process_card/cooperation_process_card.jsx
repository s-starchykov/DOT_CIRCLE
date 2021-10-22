import style from './cooperation_process_card.module.css'
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import arrow from './img/New Text Document.svg'

const Cooperation_process_card = (props) => {
    let t = (key) => i18next.t(key);
    return (

        <div className={style.container}>
            <h2>{t('HOW IS THE PROCESS OF COOPERATION')}</h2>
            <div className={style.verticalBlock}>
                <h1 className={style.cooperationH1}>1</h1>
                <p>{t('Training Information')}</p>
            </div>
            <div className={style.arrow}>
                <img src={arrow} alt=""/>
            </div>

            <div className={style.verticalBlock}>
                <h1>2</h1>
                <p>{t('Personal meeting with the Coach')}</p>
            </div>
            <div className={style.arrow}>
                <img src={arrow} alt=""/>
            </div>


            <div className={style.verticalBlock}>
                <h1>3</h1>
                <p>{t('Timing')}</p>
            </div>
            <div className={style.arrow}>
                <img src={arrow} alt=""/>
            </div>

            <div className={style.verticalBlock}>
                <h1>4</h1>
                <p>{t('Contract')}</p>
            </div>
            <div className={style.arrow}>
                <img src={arrow} alt=""/>
            </div>

            <div className={style.verticalBlock}>
                <h1>5</h1>
                <p>{t('Training')}</p>
            </div>
            <div className={style.arrow}>
                <img src={arrow} alt=""/>
            </div>

            <div className={style.verticalBlock}>
                <h1>6</h1>
                <p>{t('Summary')}</p>
            </div>


        </div>
    )
};

export default withNamespaces()(Cooperation_process_card);