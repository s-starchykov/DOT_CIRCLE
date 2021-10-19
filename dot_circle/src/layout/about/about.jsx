import style from "./about.module.css";
import CorporateTraining from "./CorporateTraining/CorporateTraining";
import VideoBox from "./VideoBox/VideoBox";
import TextBox from "./TextBox/TextBox";
import AboutMeBox from "./AboutMeBox/AboutMeBox";


const About = () => {
    let boxContent = [
        {
            boxName: 'Corporate Training ',
            content: 'Corporate training programs ' +
                'can effectively improve the effectiveness of teamwork. In the process of implementation, issues of simultaneous training of several ' +
                'employees, personnel of ' +
                'a department or a division of a company are solved.',
            itemOneName: "INITIATION PROCESS",
            itemOneContent: "Make a breakthrough in the business environment, change your attitude to work, increase awareness and responsibility",
            itemTwoName: 'SKILL PROCESSES',
            itemTwoContent: 'Get specific tools, diagrams and formulas. Improve professional performance',
            itemThreeName: 'CONTINUOUS GROWTH',
            itemThreeContent: 'Tune-in to new changes and achievements. Use new skills and tools to achieve your goals'
        },
        {
            boxName: 'OPEN TRAINING',
            content: 'An open training format involves a combined composition of groups consisting of employees of various companies and individuals who want to make a qualitative change in their lives. Training is conducted in the form of a seminar, business training according to the program announced in the announcement.',
            itemOneName: "INITIATION PROCESS",
            itemOneContent: "Carry out an in-depth study of the issue, change your attitude to what is happening in life, increase the level of awareness and responsibility",
            itemTwoName: 'SKILL PROCESSES',
            itemTwoContent: 'Get specific tools, knowledge, skill practices',
            itemThreeName: 'CONTINUOUS GROWTH',
            itemThreeContent: 'Bring Purity of Mind to your life. Tune-in to new goals and achievements. Get help and help others. Make new friends with like-minded people. Use new skills and tools to achieve your goals'
        }
    ];


    let videoBoxData = [
        {
            link: "https://www.youtube.com/embed/yPN81XlZ1oo",
            name: 'TRANSFORMATION PROGRAM',
            text: 'This program was created in the basis of a profound and rethought experience shaped by the study of Eastern philosophies for more than 25 years. It took many years to understand and select the most practical from our ancestors’ heritage.'
        },
        {
            link: 'https://www.youtube.com/embed/9h84XtWV3Lg',
            name: "SELF-DEVELOPMENT",
            text: 'Self-development is a continuous improvement of personal and professional qualities. This process allows you to improve your own life as well as to develop your intelligence. This self-improvement opens new opportunities for the harmonization of your life, its qualitative improvement, develops self-confidence and harmony.'
        },

        {
            link: "https://www.youtube.com/embed/2hp6b_k8ezY",
            name: '"STRESS-MANAGEMENT"',
            text: 'We should cultivate our own abilities in order to protect ourselves from excessive stress. “Stress management” training will help you to take a qualitative step forward.'
        },

        {
            link: "https://www.youtube.com/embed/wtI4mQ4My1M",
            name: 'TIME MANAGEMENT',
            text: 'What is time and how is it valuable to us?\n' +
                'Time management training teaches how to manage such resource as time.\n' +
                'What is the reason for the constant lack of time for the most important things?'
        },


    ];


    let videoBox = videoBoxData.map(v => <VideoBox link={v.link}
                                                   name={v.name}
                                                   text={v.text}/>);

    let corporateTraining = boxContent.map(c => <CorporateTraining boxName={c.boxName} content={c.content}
                                                                   itemOneName={c.itemOneName}
                                                                   itemOneContent={c.itemOneContent}
                                                                   itemTwoName={c.itemTwoName}
                                                                   itemTwoContent={c.itemTwoContent}
                                                                   itemThreeName={c.itemThreeName}
                                                                   itemThreeContent={c.itemThreeContent}/>);

    return (
        <div className={style.about}>
            {corporateTraining}
            <TextBox/>
            {videoBox}
            <AboutMeBox/>
        </div>
    )
};

export default About;