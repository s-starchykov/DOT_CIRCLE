

const initialState = {
    BisTrTopContent: [
        {name: 'Time Management', massage: 'What is time and how is it valuable to us', link:'time_management'},
        {name: 'Stress management', massage: 'Stress is the body’s response to external challenges', link: 'stress_management' }
    ],
    BisTrBotContent: [
        {name: 'Self-development', massage: 'Authorial program', link:'self_development'},
        {name: 'The intuitive management', massage: 'The training is aimed at awakening', link:'intuitive_management'}
    ],
    data1: [
        {number:'1', massage: 'Lack of time hinders the achievement of goals'},
        {number:'2', massage: ' You do not know how harmoniously combine personal and work goals '},
        {number:'3', massage: ' You want to figure out which method of planning will be most effective for you '},
        {number:'4', massage: 'It is necessary to determine how to motivate yourself to achieve your goals '},
        {number:'5', massage: 'You postpone important things "for later"'},
        {number:'6', massage: 'Want to say “NO” to unnecessary time-eaters?'},
        ]
}


const trainingPageReducer = (state = initialState, action) => {
    console.log(action);
    return state;
};

export default trainingPageReducer;