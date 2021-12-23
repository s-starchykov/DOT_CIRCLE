import s from "./programs.module.scss"
import {withNamespaces} from "react-i18next";
import {useEffect, useState} from "react";
import CustomPopup from "../common/popup/popup";
import Background from "../common/background/background";
import PageTitle from "../common/page_title/page_title";
import HoveredItem from "../common/hovered_item/hovered_item";
import NoPage from "../common/no_page/no_page";
import {connect} from "react-redux";
import {compose} from "redux";
import Immersion from "./immersion/immersion";
import Transformation from "./transformation/transformation";

const Programs = ({t, name, programs}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('Open programs'));

    // Set page background image on mouse enter event
    const [currentBackground, setActive] = useState(`${process.env.PUBLIC_URL}/assets/transformation.png`);

    // Set current component to show in popup menu
    const [showPopup, setShowPopup] = useState(null);

    let getComponent = (cn) => {
        switch (cn) {
            case 'time_management':
                return '';

            case 'stress_management':
                return '';

            case 'immersion':
                return <Immersion/>;

            default:
                return <Transformation/>
        }
    };


    let Content = () => programs.programs.content.map(i =>
        <HoveredItem content={
            <div onMouseEnter={() => setActive(`${process.env.PUBLIC_URL}/assets/${i.src}.png`)}
                 onClick={() => setShowPopup(i.link)}>
                <h1>{t(i.name)}</h1>
                <p>{t(i.massage)}</p>
            </div>
        }/>
    );


    return (
        <div className={`${s.businessTrainings} ${showPopup != null && s.mute}`}>
            <PageTitle title={t(name)}/>
            <Background background={currentBackground}/>
            <Content/>
            <CustomPopup onClose={() => setShowPopup(null)}
                         show={showPopup != null}
                         children={getComponent(showPopup)}/>
        </div>
    );
};

let mapStateToProps = (state) => ({programs: state.programsReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(Programs);