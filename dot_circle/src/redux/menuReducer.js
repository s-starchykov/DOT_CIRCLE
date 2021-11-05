// Define initial state data
const initialState = {
    headerItems: [
        {title: 'About', icon: 'bx bx-grid-alt', path: '/'},
        {title: 'Business trainings', icon: 'bx bx-user', path: '/trainings'},
        {title: 'Open programs', icon: 'bx bx-chat', path: '/open_programs'},
        {title: 'Dream team', icon: 'bx bx-folder', path: '/team'},
        {title: 'Consulting', icon: 'bx bx-cart-alt', path: '/consulting'},
        {title: 'Webinars', icon: 'bx bx-heart', path: '/webinars'},
        {title: 'Useful', icon: 'bx bx-cog', path: '/useful'},
        {title: 'Gallery', icon: 'bx bx-cog', path: '/gallery'},
    ]
}

const menuReducer = (state = initialState, action) => {
    console.log(action);
    return state;
}

export default menuReducer;