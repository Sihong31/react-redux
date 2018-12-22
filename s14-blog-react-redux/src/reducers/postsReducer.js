export default (state = [], action) => {
    // must return any value besides undefined
    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    };
};