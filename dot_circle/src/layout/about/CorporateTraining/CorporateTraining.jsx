import style from './CorporateTraining.module.css';
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';


const CorporateTraining = () => {
    // Minify i18next construction
    let t = (key) => i18next.t(key);

    return (
        <div className={style.CorporateTraining}>


            <div className={style.topline}>
                <div className={style.leftContent}>
                    <img src="http://dot-circle.com/img/IMG_8513.jpg" alt=""/>
                </div>

                <div className={style.rightContent}>
                    <h1>{t('Corporate Training')}
                    </h1>
                    <span>{t('Corporate training programs can effectively')}</span>
                </div>
            </div>
            <div className={style.item}>

                <h3>
                    <div className={style.circle}>
                        <span className={style.number}>1</span>
                    </div>
                    {t('INVITATION PROCESS')}

                </h3>
                {t('Make a breakthrough')}


            </div>
            <div className={style.item}>

                <h3>
                    <div className={style.circle}>
                        <span className={style.number}>2</span>
                    </div>
                    {t('SKILL PROCESSES')}
                </h3>
                {t('Get specific tools')}
            </div>
            <div className={style.item}>

                <h3>
                    <div className={style.circle}>
                        <span className={style.number}>3</span>
                    </div>
                    {t('CONTINUOUS GROWTH')}

                </h3>
                {t('Tune-in to new changes and achievements')}
            </div>
        </div>
    )
};

export default withNamespaces()(CorporateTraining);