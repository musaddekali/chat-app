import Img from '../assets/images/person.jpg';

export const initialState = {
    user: {
        uid: '4343edjfdmahid4503EDG',
        email: 'mahid@gmail.com',
        name: 'Mahid',
        isOnline: true,
        image: Img
    },
    messages: [
        {
            id: 'abcmakujdjd',
            uid: 'raju1234',
            text: 'Hello Mahid',
            createdAt: new Date(),
            name: 'Raju',
            image: null,
        },
        {
            id: 'uruurjjf ',
            uid: '4343edjfdmahid4503EDG',
            text: 'Hello Raju. How are you?',
            createdAt: new Date(),
            name: 'Mahid',
            image: Img,
        },
        {
            id: 'kdfjoehh',
            uid: 'raju1234',
            name: 'Raju',
            text: 'Yeah, fine. What about your Result',
            image: null,
            createdAt: new Date(),
        },
        {
            id: 'zkuyiejf',
            uid: '4343edjfdmahid4503EDG',
            text: 'Well I go 3.82 in my 3rd year final exam.',
            createdAt: new Date(),
            name: 'Mahid',
            image: null,
        },
        {
            id: 'zkuyiejf',
            uid: '4343edjfdmahid4503EDG',
            text: 'Well I go 3.82 in my 3rd year final exam.',
            createdAt: new Date(),
            name: 'Mahid',
            image: null,
        },
        {
            id: 'zkurryiejf',
            uid: '4343edjfdmahid4503EDG',
            text: 'Well I go 3.82 in my 3rd year final exam.',
            createdAt: new Date(),
            name: 'Mahid',
            image: null,
        },
    ],
    // user: null,
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