// Reducer: how we specify the application state changes in RESPONSE to certain actions to our context/store
// Passed into useReducer() -> can access state values in GlobaState.js -> passed into the 'value' prop of Provider (returned to App.js)
export default (state, action) => {
    
    // Takes
    switch(action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state
    }
}