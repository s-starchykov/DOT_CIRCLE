import style from "./about.module.css";
import CorporateTraining from "./training_card/CorporateTraining";
import Video_card_1 from "./video_card/video_card_1";
import TextBox from "./TextBox/TextBox";
import AboutMeBox from "./about_me_card/AboutMeBox";
import {compose} from "redux";
import {withFirstRedirect} from "../../services/withFirstRedirect";
import {withRouter} from "react-router-dom";
import IndividualTraining from "./training_card/individual_training/individual_training";
import Video_card_2 from "./video_card/video_card_2";
import Video_card_3 from "./video_card/video_card_3";
import Video_card_4 from "./video_card/video_card_4";
import Learning_process_card from "./learning_process_card/learning_process_card";
import Сreterias_card from "./creterias_card/creterias_card";
import Cooperation_process_card from "./coopereation_process_card/cooperation_process_card";
import Link_card from "./link_card/link_card";



const About = () => {

    return (
        <div className={style.about}>
            <CorporateTraining />
           <IndividualTraining />
            <TextBox />
            <Video_card_1 />
            <Video_card_2 />
            <Video_card_3 />
            <Video_card_4 />
            <AboutMeBox/>
            <Learning_process_card/>
            <Сreterias_card />
            <Link_card/>
        </div>
    )
};

export default compose(withFirstRedirect, withRouter)(About);