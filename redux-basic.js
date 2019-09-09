const redux  = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0
}
const rootReducer = (state=initialState, action) => {
    if (action.type === 'INC') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter + action.payload
        }
    }
    return state;
}

const store = createStore(rootReducer);
console.log(store.getState());

store.subscribe(() => {
    console.log('subscription',store.getState())
});


store.dispatch({type: 'INC'});
store.dispatch({type: 'ADD', payload: 10});
console.log(store.getState());


