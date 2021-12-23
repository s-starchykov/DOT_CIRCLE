import s from './self_development.module.scss'
import {withNamespaces} from "react-i18next";
import {connect} from "react-redux";
import {compose} from "redux";
import Background from "../../common/background/background";
import background from "../../../assets/self_development.png";
import PageTitle from "../../common/page_title/page_title";
import MaterialBox from "../../common/material_box/material_box";


const SelfDevelopment = ({t, trainings}) => {

    const InfoContent = (str) => {
        return <>{t(str).split(`\n`).map(e => <h2 className={s.title}><i className={'bx bx-message-square-detail'}/>{e}
        </h2>)}</>
    };

    const BlockOne = () => {
        return <div className={s.numberRange}>
            {InfoContent(trainings.selfDevelopment.headerMessage)}
            {trainings.selfDevelopment.blockOneContent.map(i => <div className={s.item}>
                <h2>{i.number}</h2>
                <p>{t(i.content)}</p>
            </div>)}
        </div>
    };


    const BlockTwo = () => {
        return trainings.selfDevelopment.middleContent.map(i => <div className={s.blockTwo}>
            <p className={s.normal}>{t(i.content)}</p>
        </div>);
    };

    const BlockThree = () => {
        return <div className={s.numberRange}>
            {InfoContent(trainings.selfDevelopment.bottomFirstTitle)}
            {trainings.selfDevelopment.bottomContent.map(i =>
                <div className={s.item}>
                    <h2>{(t(i.content)).split('-')[0]}</h2>
                    <p>{(t(i.content)).split('-')[1]}</p>
                </div>)}
        </div>
    };

    const InfoBox = () => {
        return <>
            {InfoContent(trainings.selfDevelopment.thirdTitle)}
            {InfoContent(trainings.selfDevelopment.fourthTitle)}
        </>
    };


    return (
        <div className={s.selfDevelopment}>
            <Background background={background}/>
            <PageTitle title={t(trainings.selfDevelopment.headerTitle)}/>
            <MaterialBox content={<><BlockOne/><BlockTwo/></>}/>
            <MaterialBox content={<BlockThree/>}/>
            <MaterialBox content={<InfoBox/>}/>
        </div>
    );
};


const mapStateToProps = (state) => ({trainings: state.trainingPageReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(SelfDevelopment);