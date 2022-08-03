import Img from '../assets/images/person.jpg';
export const initialState = {
    user: {
        uid: '4343edjfdmahid4503EDG',
        email: 'mahid@gmail.com',
        name: 'Mahid Ahmod',
        isOnline: true,
        img: Img
    },
    isSidebarOpen: false,
}


function reducer(state, action) {
    switch (action.type) {
        case 'SIDEBAR_TOGGLE':
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen,
            }

        default:
            return state;
    }
}

export default reducer;