// Define initial state data
const initialState = {
    headerItems: [
        {title: 'About', icon: 'bx bx-grid-alt', path: '/'},
        {title: 'Business trainings', icon: 'bx bx-task', path: '/trainings'},
        {title: 'Open programs', icon: 'bx bx-conversation', path: '/open_programs'},
        {title: 'Dream team', icon: 'bx bx-group', path: '/team'},
        {title: 'Consulting', icon: 'bx bx-user-voice', path: '/consulting'},
        {title: 'Webinars', icon: 'bx bx-microphone', path: '/webinars'},
        {title: 'Useful', icon: 'bx bx-book-bookmark', path: '/useful'},
        {title: 'Gallery', icon: 'bx bx-images', path: '/gallery/'},
    ]
}

const menuReducer = (state = initialState, action) => {
    console.log(action);
    return state;
}

export default menuReducer;