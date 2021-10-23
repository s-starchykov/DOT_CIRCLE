import style from "./about.module.css";
import CorporateTraining from "./training_card/corp_training";
import VideoCard1 from "./video_card/video_card_1";
import TextBox from "./profit/profit";
import AboutMeBox from "./about_me_card/AboutMeBox";
import {compose} from "redux";
import {withFirstRedirect} from "../../services/withFirstRedirect";
import {withRouter} from "react-router-dom";
import IndividualTraining from "./training_card/individual_training";
import VideoCard2 from "./video_card/video_card_2";
import VideoCard3 from "./video_card/video_card_3";
import VideoCard4 from "./video_card/video_card_4";
import LearningProcessCard from "./learning_process_card/learning_process_card";
import CriterionCard from "./creterias_card/creterias_card";
import LinkCard from "./link_card/link_card";

const About = () => {

    return (
        <div className={style.about}>
            <CorporateTraining/>
            <IndividualTraining/>
            <TextBox/>
            <VideoCard1/>
            <VideoCard2/>
            <VideoCard3/>
            <VideoCard4/>
            <AboutMeBox/>
            <LearningProcessCard/>
            <CriterionCard/>
            <LinkCard/>
        </div>
    )
};

export default compose(withFirstRedirect, withRouter)(About);