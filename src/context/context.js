import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { auth, db } from '../firebase/firebase-config';
import reducer from './reducer';
import Img from '../assets/images/person.jpg';
import Loading from '../components/Loading/Loading';

const AppContext = React.createContext();
AppContext.displayName = 'AppGlobalContext';

export const initialState = {
    // user: {
    //     uid: '4343edjfdmahid4503EDG',
    //     email: 'mahid@gmail.com',
    //     name: 'Mahid',
    //     isOnline: true,
    //     image: Img
    // },
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
            id: 'uruugrjjf ',
            uid: 'ccAapWoq5YRrfqNLr1Jg1GJpsrC3',
            text: 'Hello Raju. How are you?',
            createdAt: new Date(),
            name: 'Mahid',
            image: Img,
        },
        {
            id: 'kdfjorehh',
            uid: 'raju1234',
            name: 'Raju',
            text: 'Yeah, fine. What about your Result',
            image: null,
            createdAt: new Date(),
        },
        {
            id: 'zkuygiejf',
            uid: 'ccAapWoq5YRrfqNLr1Jg1GJpsrC3',
            text: 'Well I go 3.82 in my 3rd year final exam.',
            createdAt: new Date(),
            name: 'Mahid',
            image: null,
        },
        {
            id: 'zkruyiejf',
            uid: '4343edjfdmahid4503EDG',
            text: 'Well I go 3.82 in my 3rd year final exam.',
            createdAt: new Date(),
            name: 'Mahid',
            image: null,
        },
        {
            id: 'zkurryyiejf',
            uid: 'ccAapWoq5YRrfqNLr1Jg1GJpsrC3',
            text: 'Well I go 3.82 in my 3rd year final exam.',
            createdAt: new Date(),
            name: 'Mahid',
            image: null,
        },
    ],
    user: null,
    isSidebarOpen: false,
}


export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [loading, setLoading] = useState(true);

    const handleSidebar = () => {
        dispatch({ type: 'SIDEBAR_TOGGLE' });
    }

    // Get User and Auth info
    const getUser = async (user) => {
        try {
            const userRef = doc(db, 'users', user.uid);
            const userData = await getDoc(userRef);
            dispatch({ type: 'SIGN_IN', payload: userData.data() });
            setLoading(false);
        } catch (error) {
            console.log('Get uyser problem', error);
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getUser(user);
            } else {
                dispatch({ type: 'SIGN_OUT' });
                setLoading(false);
            }
        })
    }, []);


    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <AppContext.Provider value={{
            ...state,
            handleSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}