import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Colors from '../constant/Colors';

const styles = {
    titleStyle: {
        fontSize: 24,
        color: '#fff',
    },
};

class BedTime extends Component {
    static route = {
        navigationBar: {
            title: 'BedTime',
            titleStyle: styles.titleStyle,
            backgroundColor: Colors.navbarColor,
            borderBottomWidth: 1,
            borderBottomColor: '#272727'
        }
    }

    render() {
        return (
            <View>
                <Text>BedTime not implement yet</Text>
            </View>
        );
    }
}

export default BedTime;
