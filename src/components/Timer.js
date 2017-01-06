import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from '@exponent/ex-navigation';
import { connect } from 'react-redux';

import Store from '../Store';
import Router from '../Router';

import {
    changeHour,
    changeMinute,
    changeRingTone
} from '../actions';
import { Button } from './common';

const styles = {
    titleStyle: {
        fontSize: 20,
        fontWeight: '300',
        color: '#fff',
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)'
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.92)'
    },
    timePickerStyle: {

    },
    ringTonePickerStyle: {
        height: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.93)',
    },
    controlButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
};

class Timer extends Component {
    static route = {
        navigationBar: {
            title: 'Timer',
            titleStyle: styles.titleStyle,
            backgroundColor: 'rgba(0, 0, 0, 0.93)',
        }
    }

    gotoRingTone() {
        const navigatorUID = Store.getState().navigation.currentNavigatorUID;
        Store.dispatch(NavigationActions.push(navigatorUID, Router.getRoute('ringToneList')));
    }

    render() {
        const {
            container,
            timePickerStyle,
            ringTonePickerStyle,
            controlButtonStyle
        } = styles;
        return (
            <View style={container}>
                <View style={timePickerStyle}>
                </View>
                <View style={ringTonePickerStyle}>
                </View>
                <View style={controlButtonStyle}>
                    <Button>Cancel</Button>
                    <Button>Start</Button>
                </View>
            </View>
        );
    }

    // _handlePress = () => {
    //     this.props.navigator.push('home');
    // }
}

const mapStateToProps = (state) => {
    const { timer } = state;
    return { timer };
};

export default connect(mapStateToProps, {
    changeHour,
    changeMinute,
    changeRingTone
})(Timer);
