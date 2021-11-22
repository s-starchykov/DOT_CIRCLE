const initialState = {
    businessTraining: [
        {
            name: 'Time Management',
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
    ],

    timeManagement: {
        headerTitle: 'Time Management',
        headerMessage: 'What is time and how is it valuable to us',
        headerBg: 'time_management.png',
        content: 'The general approach does not work here',
        middleTitle: 'Target audience for the training',
        middleContent: ['Top-Management', 'Heads of Departments', 'All those interested in the effective time management', 'Managers'],
        bottomTitle: 'Purpose of the training',
        bottomContent: [
            {number: '1', content: 'Lack of time hinders the achievement of goals'},
            {number: '2', content: 'You do not know how harmoniously combine personal and work goals'},
            {number: '3', content: 'You want to figure out which method of planning will be most effective for you'},
            {number: '4', content: 'It is necessary to determine how to motivate yourself to achieve your goals'},
            {number: '5', content: 'You postpone important things "for later"'},
            {number: '6', content: 'Want to say “NO” to unnecessary time-eaters?'}],

    },

    stressManagement: {
        header:[{title:'The intuitive management', content: 'The training is aimed at awakening intuitive ability and further development of creative thinking skills.'}],
        bgImage: '',
        blockOne: [{title:'Response to these factors is the mobilization', content: 'We should cultivate our own abilities in order to'} ],
        blockTwo: [
            {title:'Aims and goals of this course'},
            {number: '1', content: '- learn unique ways to relieve stress and learn how to use them'},
            {number: '2', content: '- develop skills to restore physical and mental strength;'},
            {number: '3', content: '- get acquainted with the methods of stress management methods in'},
            {number: '4', content: '- learn how to respond appropriately to various circumstances and'},
            {number: '5', content: '- master the technique of instant relaxation in the routine of everyday'},
            {number: '6', content: '- master the breathing technique for rapid regulation of psycho'},
            {number: '7', content: '- master the techniques of anti-stress meditation;'},
            {number: '8', content: '- learn how to build effective communication and relationships in the'},
            {number: '9', content: '- form a joyful and optimistic inner determination, which would allow you'},
            {number: '10', content: '- increase the level of internal concentration and efficiency;'},
            {number: '11', content: '- master the techniques of behavior management and psycho-energetic'},
        ],
        blockThree: [
            {title: 'Targeted audience'},
            {number: '1', content: 'Managers of all levels, middle-rank managers, who need to improve personal stress resistance and strive to improve the level of stress management in'},
            {number: '2', content: '\n' +
                    'Service employees who want to increase the quality of client service'},
            {number: '3', content: 'Individuals who want to improve personal efficiency and avoid bad emotions in stressful situations'}

        ]
    },

    selfDevelopment: {
        header: [
            {title: 'Self-development', content: 'Authorial program.What is self-development and what is it for'}
        ],
        topContent: [
            {title: 'For whom is this programme?'},
            {image:'', content:'Business owners'},
            {image:'', content:'Top-Management'},
            {image:'', content:'Managers'},
            {image:'', content:'Employees'},
        ],

    },


}


const trainingPageReducer = (state = initialState, action) => {
    console.log(action);
    return state;
};

export default trainingPageReducer;