import React from 'react';
import { Provider } from 'react-redux';
import {
    NavigationContext,
    NavigationProvider,
    StackNavigation,
    TabNavigation,
    TabNavigationItem,
} from '@exponent/ex-navigation';
import { Ionicons } from '@exponent/vector-icons';

import Store from './Store';
import Router from './Router';

const navigationContext = new NavigationContext({
    router: Router,
    store: Store
});

const App = () => {
    const { selectedTab } = styles;
    return (
        <Provider store={Store}>
            <NavigationProvider context={navigationContext}>
                <TabNavigation
                    id="root"
                    navigatorUID="main"
                    initialTab="timer">
                    <TabNavigationItem
                        id="stopWatch"
                        selectedStyle={selectedTab}
                        renderIcon={(isSelected) => <Ionicons name="ios-timer-outline" size={38} color="#fff" style={{ marginLeft: 10 }} />}>
                        >
                        <StackNavigation initialRoute={'home'} />
                    </TabNavigationItem>
                    <TabNavigationItem
                        id="timer"
                        selectedStyle={selectedTab}
                        renderIcon={(isSelected) => <Ionicons name="ios-timer-outline" size={38} color="#fff" style={{ marginLeft: 10 }} />}>
                        >
                        <StackNavigation initialRoute={'home'} />
                    </TabNavigationItem>
                </TabNavigation>
            </NavigationProvider>
        </Provider>
    );
};

const styles = {
    selectedTab: {
        backgroundColor: 'orange'
    }
};

export default App;
