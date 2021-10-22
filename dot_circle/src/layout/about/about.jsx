import style from "./about.module.css";
import CorporateTraining from "./CorporateTraining/CorporateTraining";
import Video_card_1 from "./video_card/video_card_1";
import TextBox from "./TextBox/TextBox";
import AboutMeBox from "./AboutMeBox/AboutMeBox";
import {compose} from "redux";
import {withFirstRedirect} from "../../services/withFirstRedirect";
import {withRouter} from "react-router-dom";
import IndividualTraining from "./individual_training/individual_training";
import Video_card_2 from "./video_card/video_card_2";
import Video_card_3 from "./video_card/video_card_3";
import Video_card_4 from "./video_card/video_card_4";
import Learning_process_card from "./learning_process_card/learning_process_card";
import Сreterias_card from "./creterias_card/creterias_card";
import Cooperation_process_card from "./coopereation_process_card/cooperation_process_card";
import Link_card from "./link_card/link_card";



const About = () => {
//     let boxContent = [
//         {
//             boxName: 'Corporate Training',
//             content: 'Corporate training programs ' +
//                 'can effectively improve the effectiveness of teamwork. In the process of implementation, issues of simultaneous training of several ' +
//                 'employees, personnel of ' +
//                 'a department or a division of a company are solved.',
//             itemOneName: "INITIATION PROCESS",
//             itemOneContent: "Make a breakthrough in the business environment, change your attitude to work, increase awareness and responsibility",
//             itemTwoName: 'SKILL PROCESSES',
//             itemTwoContent: 'Get specific tools, diagrams and formulas. Improve professional performance',
//             itemThreeName: 'CONTINUOUS GROWTH',
//             itemThreeContent: 'Tune-in to new changes and achievements. Use new skills and tools to achieve your goals'
//         },
//         {
//             boxName: 'OPEN TRAINING',
//             content: 'An open training format involves a combined composition of groups consisting of employees of various companies and individuals who want to make a qualitative change in their lives. Training is conducted in the form of a seminar, business training according to the program announced in the announcement.',
//             itemOneName: "INITIATION PROCESS",
//             itemOneContent: "Carry out an in-depth study of the issue, change your attitude to what is happening in life, increase the level of awareness and responsibility",
//             itemTwoName: 'SKILL PROCESSES',
//             itemTwoContent: 'Get specific tools, knowledge, skill practices',
//             itemThreeName: 'CONTINUOUS GROWTH',
//             itemThreeContent: 'Bring Purity of Mind to your life. Tune-in to new goals and achievements. Get help and help others. Make new friends with like-minded people. Use new skills and tools to achieve your goals'
//         }
//     ];





    // let corporateTraining = boxContent.map(c => <CorporateTraining boxName={c.boxName} content={c.content}
    //                                                                itemOneName={c.itemOneName}
    //                                                                itemOneContent={c.itemOneContent}
    //                                                                itemTwoName={c.itemTwoName}
    //                                                                itemTwoContent={c.itemTwoContent}
    //                                                                itemThreeName={c.itemThreeName}
    //                                                                itemThreeContent={c.itemThreeContent}/>);

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