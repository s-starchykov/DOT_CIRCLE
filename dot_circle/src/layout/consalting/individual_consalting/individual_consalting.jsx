import s from "./individual_consulting.module.scss"
import {withNamespaces} from "react-i18next";


const IndividualConsulting = ({t}) => {
    return (
        <div className={s.individual}>
            <div className={s.blockOne}>
                <h2>
                    {t('Immerse yourself')}
                </h2>
                <br/>
                <p>{t('Life Management consultation')}</p>
                <br/>
            </div>

            <div className={s.blockTwo}>
                <h1>{t('3 reasons to choose us')}</h1>
                <i className={'bx bx-down-arrow-alt'}/>
                <i className={'bx bx-down-arrow-alt'}/>
                <i className={'bx bx-down-arrow-alt'}/>
                <p>{t('We are result-oriented')}</p>
                <p>{t('Conscious choice. Life management')}</p>
                <p>{t('High efficiency. Close cooperation gives')}</p>
            </div>

            <div className={s.blockThree}>
                <h2>{t('What is the essence of the individual')}</h2>
                <details className={s.dropdownBox}>
                    <summary className={s.dropdownTitle}>
                        <h2>{t("Individual consulting is necessary in the following cases")}</h2></summary>

                    <p className={s.dropdownMassage}>{t('constant challenge at work')}</p>
                </details>

                <details className={s.dropdownBox}>
                    <summary className={s.dropdownTitle}>
                        <h2>{t("How to make a difference")}</h2>
                    </summary>
                    <p className={s.dropdownMassage}>
                        {t('First of all, you need to get rid of the burden of unnecessary memories')}
                    </p>
                </details>

                <details className={s.dropdownBox}>
                    <summary className={s.dropdownTitle}>
                        <h2>{t("We can’t help")}</h2>
                    </summary>
                    <p className={s.dropdownMassage}>
                        {t('An applicant who is trying to collect a confidential')}
                    </p>
                </details>


            </div>

        </div>
    )


}
export default withNamespaces()(IndividualConsulting);


