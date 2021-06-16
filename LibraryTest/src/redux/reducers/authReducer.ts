const initialState = {
    name: 'your name here',
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case 'UPDATE_NAME':
            return {
                ...state,
                name: actions.payload,
            }
        case 'UPDATE_NAME_SUCCESS': 
            return {
                ...state,
                name: actions.payload,
            }
        default:
            return state;
    }
}