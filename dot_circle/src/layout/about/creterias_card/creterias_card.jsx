import style from './creterias_card.module.css'
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import image from './img/creterias.png'

const Сreterias_card = (props) => {
    let t = (key) => i18next.t(key);
    return (

        <div className={style.container}>
            <div className={style.leftContent}>
                <img src={image} alt=""/>
            </div>

            <div className={style.rightContent}>
               <h1 className={style.blackColor}>{t('Our trainings are for you,\n' +
                   'if ...')}</h1>
                <h1>{t('1 YOU ARE DEVELOPMENT ORIENTED')}</h1>
                <span>{t('And your goals are far beyond an average company goals')}</span>
                <h1>{t('2 YOU INCREASE SALES')}</h1>
                <span>{t('And you know that investment in training always works for profit')}</span>
                <h1>{t('3 YOU TAKE CARE OF THE IMAGE')}</h1>
                <span>{t('And employees high performance is important for you')}</span>
                <h1>{t('4 YOU BUILD A TEAM')}</h1>
                <span>{t('And strengths and power of corporate spirit is a priority for you')}</span>

            </div>

        </div>
    )
};

export default withNamespaces()(Сreterias_card);