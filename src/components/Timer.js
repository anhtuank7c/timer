import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from '@exponent/ex-navigation';
import { connect } from 'react-redux';

import {
    changeHour,
    changeMinute,
    changeRingTone
} from '../actions';

class Timer extends Component {
    static route = {
        navigationBar: {
            title: 'Timer'
        }
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 65 }}>
                <Text style={{ fontSize: 20, color: '#202020' }}>Timer home</Text>
            </View>
        );
    }

    _handlePress = () => {
        this.props.navigator.push('home');
    }
}

export default connect(null, {
    changeHour,
    changeMinute,
    changeRingTone
})(Timer);
