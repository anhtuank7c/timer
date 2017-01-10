import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavBar } from './common';
import Styles from '../constant/Styles';

class BedTime extends Component {
    static route = {
        navigationBar: {
            visible: false
        }
    }

    render() {
        const { container } = Styles;
        return (
            <View style={container}>
                <NavBar title="World Clock" />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 30 }}>BedTime not implement yet</Text>
                </View>
            </View>
        );
    }
}

export default BedTime;
