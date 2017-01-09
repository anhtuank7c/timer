import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    Picker,
    TouchableOpacity
} from 'react-native';
import { NavigationActions } from '@exponent/ex-navigation';
import { Ionicons } from '@exponent/vector-icons';
import { connect } from 'react-redux';

import Colors from '../constant/Colors';
import Store from '../Store';
import Router from '../Router';
import { Button } from './common';
import {
    changeHour,
    changeMinute,
    changeRingTone,
    cancelCountDown,
    startCountDown,
    pauseCountDown,
} from '../actions';

const { width, height } = Dimensions.get('window');

const styles = {
    titleStyle: {
        fontSize: 24,
        color: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#0d0d0d',
    },
    timePickerStyle: {
        flexDirection: 'row',
        height: (height * 0.4),
        paddingTop: 20,
    },
    pickerStyle: {
        alignItems: 'center',
    },
    pickerLabelStyle: {
        color: '#fff',
        fontSize: 18,
    },
    ringTonePickerStyle: {
        height: 60,
        backgroundColor: '#161616',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderTopWidth: 1,
        borderTopColor: '#272727',
        borderBottomWidth: 1,
        borderBottomColor: '#272727'
    },
    controlButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 30,
    },
    remaintingLabelStyle: {
        color: '#fff',
        fontSize: 50,
    }
};

class Timer extends Component {
    static route = {
        navigationBar: {
            title: 'Timer',
            titleStyle: styles.titleStyle,
            backgroundColor: '#161616',
            borderBottomWidth: 1,
            borderBottomColor: '#272727'
        }
    }

    onHourChange(hour) {
        this.props.changeHour({ hour });
    }

    onMinuteChange(minute) {
        this.props.changeMinute({ minute });
    }

    onCancelPress() {
        this.props.cancelCountDown();
    }

    onStartPausePress() {
        const { btnStartPauseLabel } = this.props;
        if (btnStartPauseLabel === 'Start') {
            this.props.startCountDown();
        } else {
            this.props.pauseCountDown();
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
        } = styles;
        const {
            hourList,
            minuteList,
            btnStartPauseLabel,
            remaining,
        } = this.props;
        return (
            btnStartPauseLabel === 'Pause' ?
                (
                    <View style={timePickerStyle}>
                        <Text style={remaintingLabelStyle}>{remaining}</Text>
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
        } = styles;
        const {
            ringTone,
            btnCancelDisabled,
            btnStartPauseLabel,
        } = this.props;
        const isStart = btnStartPauseLabel === 'Start';
        const btnStartBackgroundColor = isStart ? Colors.btnStartColor : Colors.btnPauseColor;
        const btnStartLabelColor = isStart ? Colors.btnStartLabelColor : Colors.btnPauseLabelColor;

        return (
            <View style={container}>
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
                        onPress={this.onStartPausePress.bind(this)}>
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
    };
};

export default connect(mapStateToProps, {
    changeHour,
    changeMinute,
    changeRingTone,
    cancelCountDown,
    startCountDown,
    pauseCountDown,
})(Timer);
