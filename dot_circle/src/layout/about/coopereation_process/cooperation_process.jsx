import style from './cooperation_process.module.css'
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import arrow from '../../../assets/arrow_cooperation_process.svg'

const CooperationProcessCard = (props) => {
    let t = (key) => i18next.t(key);
    return (

        <div className={style.container}>
            <h1>{t('How is the process of cooperation')}</h1>

            <div className={style.topLine}>
                <div className={style.item}>
                    <p>1</p>
                    <img src={arrow} alt=""/>
                </div>

                <div className={style.item}>
                    <p>2</p>
                    <img src={arrow} alt=""/>
                </div>

                <div className={style.item}>
                    <p>3</p>
                    <img src={arrow} alt=""/>
                </div>

                <div className={style.item}>
                    <p>4</p>
                    <img src={arrow} alt=""/>
                </div>

                <div className={style.item}>
                    <p>5</p>
                    <img src={arrow} alt=""/>
                </div>

                <div className={style.item}>
                    <p>6</p>
                </div>

            </div>

            <div className={style.botLine}>
                <div className={style.item}>
                    <p>
                        {t('Training Information')}
                    </p>
                </div>

                <div className={style.item}>
                    <p>
                        {t('Personal meeting')}
                    </p>
                </div>

                <div className={style.item}>
                    <p>
                        {t('Timing')}
                    </p>
                </div>

                <div className={style.item}>
                    <p>
                        {t('Contract')}
                    </p>
                </div>

                <div className={style.item}>
                    <p>
                        {t('Training')}
                    </p>
                </div>

                <div className={style.item}>
                    <p>
                        {t('Summary')}
                    </p>
                </div>


            </div>


        </div>
    )
};

export default withNamespaces()(CooperationProcessCard);