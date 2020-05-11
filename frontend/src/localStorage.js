export const loadState = () => {
    try {
        const serializedState = JSON.parse(localStorage.getItem('state'));

        if (!serializedState) {
            return [];
        }
        return serializedState;
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};
