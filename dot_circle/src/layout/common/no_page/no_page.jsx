import s from './empty_page.module.css'
import {withNamespaces} from "react-i18next";

const NoPage = ({t, name}) => {
    return (
        <div className={s.noPage}>
            <h1>
                <span className={s.pageName}>{t(name)}</span> {t('page in development')}
            </h1>
        </div>
    )

}

export default withNamespaces()(NoPage);