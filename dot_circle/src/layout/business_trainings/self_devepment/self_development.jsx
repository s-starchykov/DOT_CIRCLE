import s from './self_development.module.scss'


import {withNamespaces} from "react-i18next";

import {connect} from "react-redux";
import {compose} from "redux";


const SelfDevelopment = ({t, trainings}) => {
    const header = trainings.selfDevelopment.header.map(i => <div className={s.header}>
            <h1>{t(i.title)}</h1>
            <p>{t(i.content)}</p>
        </div>
    )
    const topContent = trainings.selfDevelopment.topContent.map(i =>
        <div className={s.topContent}>
            <h1>{t(i.title)}</h1>
            <div className={s.item}><img src={(i.image)} alt=""/>
                <p>{t(i.content)}</p></div>
        </div>)

    const middleContent = trainings.selfDevelopment.middleContent.map(i => <div
        className={s.middleContent}><p>{t(i.content)}</p></div>)


    const bottomContent = trainings.selfDevelopment.bottomContent.map(i => <div
        className={s.bottomContent}>
        <h1>{t(i.firstTitle)}</h1>
        <h1>{t(i.secondTitle)}</h1>
        <div className={s.bottomContainer}>{t(i.number + i.content)}</div>
        <h2>{t(i.thirdTitle)}</h2>
        <h2>{t(i.fourthTitle)}</h2>
    </div>)
    return (
        <div className={s.selfDevelopment}>
            {header}
            {topContent}
            {middleContent}
            {bottomContent}
        </div>
    )
}


const mapStateToProps = (state) => ({trainings: state.trainingPageReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(SelfDevelopment);