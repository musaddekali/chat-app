function reducer(state, action) {
    switch (action.type) {
        case 'SIDEBAR_TOGGLE':
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen,
            };

        case 'SIGN_IN':
            return {
                ...state,
                user: action.payload
            }

        case 'SIGN_OUT':
            return {
                ...state,
                user: null
            }

        default:
            return state;
    }
}

export default reducer;