import CorporateTraining from "./training_card/corp_training";
import Video from "./video_card/video_slider";
import TextBox from "./profit/profit";
import AboutMeBox from "./about_me/about_me";
import {compose} from "redux";
import {withFirstRedirect} from "../../services/withFirstRedirect";
import {withRouter} from "react-router-dom";
import IndividualTraining from "./training_card/individual_training";
import LearningProcessCard from "./learning_process/learning_process";
import CriterionCard from "./creterias_card/creterias_card";
import LinkCard from "./link_card/link_card";
import TopSlider from "./top_slider/top_slider";
import Footer from "../footer/footer";
import WhyWe from "./why_we/why_we";
import {useEffect} from "react";
import {withNamespaces} from "react-i18next";

const About = ({t}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('About'));

    return (
        <>
            <TopSlider/>
            <CorporateTraining/>
            <IndividualTraining/>
            <TextBox/>
            <Video/>
            <AboutMeBox/>
            <WhyWe/>
            <LearningProcessCard/>
            <CriterionCard/>
            <LinkCard/>
            <Footer/>
        </>
    )
};

export default compose(withFirstRedirect, withRouter, withNamespaces())(About);