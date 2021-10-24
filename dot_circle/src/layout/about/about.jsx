import style from "./about.module.css";
import CorporateTraining from "./training_card/corp_training";
import Video from "./video_card/video_slider";
import TextBox from "./profit/profit";
import AboutMeBox from "./about_me_card/AboutMeBox";
import {compose} from "redux";
import {withFirstRedirect} from "../../services/withFirstRedirect";
import {withRouter} from "react-router-dom";
import IndividualTraining from "./training_card/individual_training";
import LearningProcessCard from "./learning_process_card/learning_process_card";
import CriterionCard from "./creterias_card/creterias_card";
import LinkCard from "./link_card/link_card";
import TopSlider from "./top_slider/top_slider";
import Footer from "../footer/footer";

const About = () => {

    return (
        <div className={style.about}>
            <TopSlider/>
            <CorporateTraining/>
            <IndividualTraining/>
            <TextBox/>
            <Video/>
            <AboutMeBox/>
            <LearningProcessCard/>
            <CriterionCard/>
            <LinkCard/>
            <Footer/>
        </div>
    )
};

export default compose(withFirstRedirect, withRouter)(About);