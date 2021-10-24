import style from './cooperation_process.module.css'
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import arrow from '../../../assets/arrow_cooperation_process.svg'

const CooperationProcessCard = (props) => {
    let t = (key) => i18next.t(key);
    return (

        <div className={style.container}>
            <h2>{t('How is the process of cooperation')}</h2>
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

export default withNamespaces()(CooperationProcessCard);