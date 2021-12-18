const initialState = {
    businessTraining: {
        content: [

            {
                name: 'Time management',
                massage: 'What is time and how is it valuable to us',
                link: 'time_management',
                src: 'time_management.png'
            },
            {
                name: 'Stress management',
                massage: 'Stress is the body’s response to external challenges',
                link: 'stress_management', src: 'stress_management.png'
            },
            {
                name: 'Self-development',
                massage: 'Authorial program',
                link: 'self_development',
                src: 'self_development.png'
            },
            {
                name: 'The intuitive management',
                massage: 'The training is aimed at awakening',
                link: 'intuitive_management',
                src: 'intuitive_management.png'
            }
        ]
    },

    timeManagement: {
        headerTitle: 'Time management',
        headerMessage: 'What is time and how is it valuable to us',
        headerBg: 'time_management.png',
        content: 'The general approach does not',
        middleTitle: 'Target audience for the training',
        middleContent: ['Top-Management', 'Heads of Departments', 'All those interested in the effective time management', 'Managers'],
        bottomTitle: 'Purpose of the training',
        bottomContent: [
            {number: '1', content: 'Lack of time hinders the achievement of goals'},
            {number: '2', content: 'You do not know how harmoniously combine personal and work goals'},
            {number: '3', content: 'You want to figure out which method of planning will be most effective for you'},
            {number: '4', content: 'It is necessary to determine how to motivate yourself to achieve your goals'},
            {number: '5', content: 'You postpone important things'},
            {number: '6', content: 'Want to say “NO” to unnecessary time-eaters?'}]
    },

    stressManagement: {
        headerTitle: 'Stress management',
        headerMessage: 'Stress is the body’s response to external challenges',
        headerBg: 'stress_management.png',
        blockOneTitle: 'Response to these factors is the mobilization',
        blockOneContent: 'We should cultivate our own abilities in order to',
        blockTwoTitle: 'Aims and goals of this course',
        blockTwoContent: [
            {number: '1', content: 'Learn unique ways to relieve stress and learn how to use them'},
            {number: '2', content: 'Develop skills to restore physical and mental strength'},
            {number: '3', content: 'Get acquainted with the methods of stress management methods in'},
            {number: '4', content: 'Learn how to respond appropriately to various circumstances and'},
            {number: '5', content: 'Master the technique of instant relaxation in the routine of everyday'},
            {number: '6', content: 'Master the breathing technique for rapid regulation of psycho'},
            {number: '7', content: 'Master the techniques of anti-stress meditation;'},
            {number: '8', content: 'Learn how to build effective communication and relationships in the'},
            {number: '9', content: 'Form a joyful and optimistic inner determination, which would allow you'},
            {number: '10', content: 'Increase the level of internal concentration and efficiency'},
            {number: '11', content: 'Master the techniques of behavior management and psycho-energetic'},
        ],
        blockThreeTitle: 'Targeted audience',
        blockThreeContent: [
            {
                number: '1',
                content: 'Managers of all levels, middle-rank managers'
            },
            {
                number: '2',
                content: 'Service employees who want to increase the quality of client service'},
            {
                number: '3',
                content: 'Individuals who want to improve personal efficiency'
            }
        ]
    },

    selfDevelopment: {
        header: [
            {title: 'Self-development', content: 'Authorial program.What is self-development and what is it for'}
        ],
        topContent: [
            {title: 'For whom is this programme?'},
            {image: '', content: 'Business owners'},
            {image: '', content: 'Top-Management'},
            {image: '', content: 'Managers'},
            {image: '', content: 'Employees'},
        ],
        middleContent: [{content: 'Self-development is a continuous improvement of'}],
        bottomContent: [
            {firstTitle: 'Aims and goals of self-development training:'},
            {secondTitle: 'Training program'},
            {number: 'Series 1', content: 'Self-determination'},
            {number: 'Series 2', content: 'Planning'},
            {number: 'Series 3', content: 'Health potential'},
            {number: 'Series 4', content: 'Continuous practice'},
            {number: 'Series 5', content: 'Mission'},
            {number: 'Series 6', content: '“How I can be better” Project'},
            {thirdTitle: 'Trainings are held in a corporate and individual formats'},
            {fourthTitle: 'Targeted audience is managers of all levels'},
        ]

    },


}


const trainingPageReducer = (state = initialState, action) => {
    console.log(action);
    return state;
};

export default trainingPageReducer;