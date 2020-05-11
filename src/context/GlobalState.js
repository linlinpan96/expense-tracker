import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    transactions: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component - provides states, actions, to whatever it's wrapped around
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // ACTIONS  - make calls to reducer
    // Delete transaction
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    // Add transaction
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        addTransaction,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}