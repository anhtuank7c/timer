import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
    StackNavigation,
    TabNavigation,
    TabNavigationItem,
} from '@exponent/ex-navigation';
import { Ionicons } from '@exponent/vector-icons';

import Colors from './constant/Colors';

class RootNavigation extends Component {
    _renderIcon(name, isSelected) {
        return (
            <Ionicons
                name={name}
                size={32}
                color={isSelected ? Colors.tabbarIconSelected : Colors.tabbarIconDefault}
                />
        );
    }

    _renderTitle(title, isSelected) {
        return (
            <Text style={{ fontSize: 10, color: isSelected ? Colors.tabbarIconSelected : Colors.tabbarIconDefault }}>{title}</Text>
        );
    }

    render() {
        return (
            <TabNavigation
                tabBarColor={Colors.tabbarColor}
                tabBarHeight={65}
                initialTab="timer">
                <TabNavigationItem
                    id="worldClock"
                    title
                    renderTitle={isSelected => this._renderTitle('World Clock', isSelected)}
                    renderIcon={isSelected => this._renderIcon('ios-globe-outline', isSelected)}
                    >
                    <StackNavigation initialRoute="worldClock" />
                </TabNavigationItem>
                <TabNavigationItem
                    id="alarm"
                    title
                    renderTitle={isSelected => this._renderTitle('Alarm', isSelected)}
                    renderIcon={isSelected => this._renderIcon('ios-alarm-outline', isSelected)}
                    >
                    <StackNavigation initialRoute="alarm" />
                </TabNavigationItem>
                <TabNavigationItem
                    id="bedTime"
                    title
                    renderTitle={isSelected => this._renderTitle('BedTime', isSelected)}
                    renderIcon={isSelected => this._renderIcon('ios-folder-open-outline', isSelected)}
                    >
                    <StackNavigation initialRoute="bedTime" />
                </TabNavigationItem>
                <TabNavigationItem
                    id="stopwatch"
                    title
                    renderTitle={isSelected => this._renderTitle('Stopwatch', isSelected)}
                    renderIcon={isSelected => this._renderIcon('ios-stopwatch-outline', isSelected)}
                    >
                    <StackNavigation initialRoute="stopwatch" />
                </TabNavigationItem>
                <TabNavigationItem
                    id="timer"
                    title
                    renderTitle={isSelected => this._renderTitle('Timer', isSelected)}
                    renderIcon={isSelected => this._renderIcon('ios-timer-outline', isSelected)}
                    >
                    <StackNavigation initialRoute="timer" />
                </TabNavigationItem>
            </TabNavigation>
        );
    }
}

export default RootNavigation;
