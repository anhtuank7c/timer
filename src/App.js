import React from 'react';
import { Provider } from 'react-redux';
import {
    NavigationContext,
    NavigationProvider,
    StackNavigation,
} from '@exponent/ex-navigation';

import Store from './Store';
import Router from './Router';

const navigationContext = new NavigationContext({
    router: Router,
    store: Store
});

const App = () => {
    return (
        <Provider store={Store}>
            <NavigationProvider context={navigationContext}>
                <StackNavigation initialRoute={Router.getRoute('rootNavigation')} />
            </NavigationProvider>
        </Provider>
    );
};

export default App;
