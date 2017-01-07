import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    Picker
} from 'react-native';
import { NavigationActions } from '@exponent/ex-navigation';
import { connect } from 'react-redux';

import Store from '../Store';
import Router from '../Router';
import { Button } from './common';
import {
    changeHour,
    changeMinute,
    changeRingTone
} from '../actions';

const { width, height } = Dimensions.get('window');

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
        flexDirection: 'row',
        height: (height / 2),
    },
    ringTonePickerStyle: {
        height: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.93)',
    },
    controlButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 30,
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

    onHourChange(hour) {
        this.props.changeHour({ hour });
    }

    onMinuteChange(minute) {
        this.props.changeMinute({ minute });
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
        const { hourList, minuteList } = this.props;

        return (
            <View style={container}>
                <View style={timePickerStyle}>
                    <Picker
                        style={{ width: width / 2 }}
                        selectedValue={this.props.hour}
                        onValueChange={this.onHourChange.bind(this)}>
                        {
                            hourList.map((val, i) => {
                                return (<Picker.Item label={val} key={`hour-${i}`} value={i} />);
                            })
                        }
                    </Picker>

                    <Picker
                        style={{ width: width / 2 }}
                        selectedValue={this.props.minute}
                        onValueChange={this.onMinuteChange.bind(this)}>
                        {
                            minuteList.map((val, i) => {
                                return (<Picker.Item label={val} key={`minute-${i}`} value={i} />);
                            })
                        }
                    </Picker>
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
    const { hourList, hour, minuteList, minute } = state.timer;
    return { hourList, hour, minuteList, minute };
};

export default connect(mapStateToProps, {
    changeHour,
    changeMinute,
    changeRingTone
})(Timer);
