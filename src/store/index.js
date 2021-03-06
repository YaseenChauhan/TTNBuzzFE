import { createStore, applyMiddleware} from 'redux';
import mainReducer from '../reducers/main.reducer';

import thunk from 'redux-thunk';

const store = createStore(mainReducer,applyMiddleware(thunk));
store.subscribe(()=> {
    console.log('store',store.getState());
})

export default store;