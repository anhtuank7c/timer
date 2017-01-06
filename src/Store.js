import {
    createNavigationEnabledStore,
    NavigationReducer
} from '@exponent/ex-navigation';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

const reduxStore = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(ReduxThunk)
    )
);

const store = createNavigationEnabledStore({
    reduxStore,
    navigationStateKey: 'navigation'
});

export default store;