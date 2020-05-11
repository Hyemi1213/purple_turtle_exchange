const notices = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_NOTICES':
            return state = action.data;
        default:
            return state;
    }
};

export default notices;
