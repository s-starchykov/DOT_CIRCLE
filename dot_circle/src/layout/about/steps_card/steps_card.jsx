import style from "./steps_card.module.scss"
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';


const Steps_card = () => {

    return (
        <div className={style.container}>
            <div className={style.topLine}>
                <h1>{t('WHY WE')}</h1>
                <p>
                    {t('Each training is a well-thought-out open')}
                </p>
            </div>
            <div className={style.botLine}>
            </div>
        </div>
    )
};




export default withNamespaces()(Steps_card);