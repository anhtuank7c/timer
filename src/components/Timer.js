import React, { Component } from 'react';
import {
    View,
    Text,
    Picker,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import { NavigationActions, NavigationStyles } from '@exponent/ex-navigation';
import { Ionicons } from '@exponent/vector-icons';
import { connect } from 'react-redux';

import Styles from '../constant/Styles';
import Colors from '../constant/Colors';
import Store from '../Store';
import Router from '../Router';
import { Button, NavBar } from './common';
import {
    changeHour,
    changeMinute,
    changeRingTone,
    cancelPress,
    startPress,
    pausePress,
    updateRemainingTime,
} from '../actions';

const { width } = Dimensions.get('window');
class Timer extends Component {
    static route = {
        navigationBar: {
            title: 'Timer',
            visible: false
        },
        styles: {
            ...NavigationStyles.SlideVertical
        }
    }

    componentWillReceiveProps() {
        this.timeout = setTimeout(() => {
            const { remaining, pause } = this.props;
            if (remaining > 0 && !pause) {
                this.props.updateRemainingTime({ remaining: remaining - 1 });
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    onHourChange(hour) {
        const { minute } = this.props;
        this.props.changeHour({ hour, minute });
    }

    onMinuteChange(minute) {
        const { hour } = this.props;
        this.props.changeMinute({ hour, minute });
    }

    onCancelPress() {
        const { hour, minute } = this.props;
        this.props.cancelPress({ hour, minute });
    }

    onStartPauseResume() {
        const { btnStartPauseLabel, hour, minute, remaining, totalTime } = this.props;
        if (btnStartPauseLabel === 'Start' || btnStartPauseLabel === 'Resume') {
            let localTotalTime = totalTime;
            if (localTotalTime === 0) {
                localTotalTime = ((hour * 60) + minute) * 60;
            }
            let localRemaining = remaining;
            if (localRemaining === 0) {
                localRemaining = localTotalTime;
            }
            this.props.startPress({ hour, minute, totalTime: localTotalTime, remaining: localRemaining });
        } else {
            this.props.pausePress();
        }
    }

    gotoRingTone() {
        const navigatorUID = Store.getState().navigation.currentNavigatorUID;
        Store.dispatch(NavigationActions.push(navigatorUID, Router.getRoute('ringToneList')));
    }

    renderPickerOrRemainingTime() {
        const {
            timePickerStyle,
            pickerStyle,
            pickerLabelStyle,
            remaintingLabelStyle,
            remaintingContainerStyle,
        } = Styles;
        const {
            hourList,
            minuteList,
            btnCancelDisabled,
            remaining
        } = this.props;

        // format remaining in hh:MM:ss
        const remainingString = new Date(null, null, null, null, null, remaining)
            .toTimeString()
            .replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');

        return (
            !btnCancelDisabled ?
                (
                    <View style={remaintingContainerStyle}>
                        <Text style={remaintingLabelStyle}>{remainingString}</Text>
                    </View>
                ) :
                (
                    <View style={timePickerStyle}>
                        <View style={pickerStyle}>
                            <Text style={pickerLabelStyle}>hour</Text>
                            <Picker
                                style={{ width: width / 2 }}
                                selectedValue={this.props.hour}
                                onValueChange={this.onHourChange.bind(this)}
                                itemStyle={{ color: '#fff', fontSize: 28, }} >
                                {
                                    hourList.map((val, i) => {
                                        return (<Picker.Item label={val} key={`hour-${i}`} value={i} />);
                                    })
                                }
                            </Picker>
                        </View>
                        <View style={pickerStyle}>
                            <Text style={pickerLabelStyle}>minute</Text>
                            <Picker
                                style={{ width: width / 2 }}
                                selectedValue={this.props.minute}
                                onValueChange={this.onMinuteChange.bind(this)}
                                itemStyle={{ color: '#fff', fontSize: 28, }} >
                                {
                                    minuteList.map((val, i) => {
                                        return (<Picker.Item label={val} key={`minute-${i}`} value={i} />);
                                    })
                                }
                            </Picker>
                        </View>
                    </View>
                )
        );
    }

    render() {
        const {
            container,
            ringTonePickerStyle,
            controlButtonStyle,
        } = Styles;
        const {
            ringTone,
            btnCancelDisabled,
            btnStartPauseLabel,
        } = this.props;
        const isStart = (btnStartPauseLabel === 'Start' || btnStartPauseLabel === 'Resume');
        const btnStartBackgroundColor = isStart ? Colors.btnStartColor : Colors.btnPauseColor;
        const btnStartLabelColor = isStart ? Colors.btnStartLabelColor : Colors.btnPauseLabelColor;

        return (
            <View style={container}>
                <NavBar title="Timer" />
                {this.renderPickerOrRemainingTime()}
                <TouchableOpacity onPress={this.gotoRingTone.bind(this)}>
                    <View style={ringTonePickerStyle}>
                        <Text style={{ color: '#fff', fontSize: 18, }}>When Timer Ends</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 18, marginRight: 10 }}>{ringTone.name}</Text>
                            <Ionicons name="ios-arrow-forward-outline" size={24} color="#fff" />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={controlButtonStyle}>
                    <Button
                        disabled={btnCancelDisabled}
                        onPress={this.onCancelPress.bind(this)}>Cancel</Button>
                    <Button
                        btnEnabledColor={btnStartBackgroundColor}
                        titleEnabledColor={btnStartLabelColor}
                        onPress={this.onStartPauseResume.bind(this)}>
                        {btnStartPauseLabel}
                    </Button>
                </View>
            </View>
        );
    }

    // _handlePress = () => {
    //     this.props.navigator.push('home');
    // }
}

const mapStateToProps = (state) => {
    const {
        hourList,
        hour,
        minuteList,
        minute,
        ringTone,
        btnCancelDisabled,
        btnStartPauseLabel,
        remaining,
        totalTime,
        pause
    } = state.timer;

    return {
        hourList,
        hour,
        minuteList,
        minute,
        ringTone,
        btnCancelDisabled,
        btnStartPauseLabel,
        remaining,
        totalTime,
        pause
    };
};

export default connect(mapStateToProps, {
    changeHour,
    changeMinute,
    changeRingTone,
    cancelPress,
    startPress,
    pausePress,
    updateRemainingTime,
})(Timer);
