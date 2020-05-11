const initialState = {
    isUser: true,
    isAuthed: true,
    email: ''
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'PERMIT_AUTH':
            return { ...state, isAuthed: true }
        case 'NO_PERMIT_AUTH':
            return { ...state, isAuthed: false }
        case 'SAVE_USER_INFO':
            return { ...state, email: action.email }
        default:
            return state;
    }
};

export default user;
