import style from './TextBox.module.css'
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';

let TextBox = () => {
    let t = (key) => i18next.t(key);
    return (
        <div className={style.TextBox}>
            <div className={style.head}>
                <h1>
                    {t('WHAT DO YOU GET FROM OUR OPEN PROGRAMS?')}
                </h1>
            </div>
            <div className={style.content}>
                <h3>
                    {t('RESULTS')}
                </h3>

                <p>
                    {t('A lot of practice and little theory')}
                </p>
                <br/>
                <h3>
                    {t('LEARNING PROCESS')}
                </h3>
                <p>
                    {t('Activities are held in an atmosphere of trust and understanding')}

                </p>
                <br/>
                <h3>
                    {t('STRONG PERSONALITY SKILLS')}

                </h3>
                <p>
                    {t('You learn to effectively manage your resources and time')}
                </p>
                <br/>
                <h3>
                    {t('NEW CIRCLE OF COMMUNICATION')}
                </h3>
                <p>
                    {t('You meet new people, gain new connections and get a lot of useful information')}
                </p>
            </div>
        </div>
        
    )
};

export default withNamespaces()(TextBox);