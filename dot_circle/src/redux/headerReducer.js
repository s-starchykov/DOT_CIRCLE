// Define initial state data
const initialState = {
    headerItems: {
        trainings: [
            {title: 'TIME MANAGEMENT', path: 'time_management'},
            {title: 'STRESS MANAGEMENT', path: 'stress_management'},
            {title: 'INTUITIVE MANAGEMENT', path: 'intuitive_management'},
            {title: 'SELF-DEVELOPMENT', path: 'self_development'}
        ],
        open_programs: [
            {title: 'TRANSFORMATION PROGRAM', path: 'transformation_program'},
            {title: 'LIFE MANAGEMENT PROGRAM', path: 'life_management'},
            {title: 'MY BEST YEAR PROGRAM', path: 'my_best_year'}
        ],
        consulting: [
            {title: 'INDIVIDUAL CONSULTING', path: 'individual_consulting'},
            {title: 'MANAGEMENT CONSULTING', path: 'management_consulting'}
        ]
    }

}

const headerReducer = (state = initialState, action) => {
    console.log(action);
    return state;
}

export default headerReducer;