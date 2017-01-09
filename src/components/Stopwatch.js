import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Colors from '../constant/Colors';

const styles = {
    titleStyle: {
        fontSize: 24,
        color: '#fff',
    },
};

class Stopwatch extends Component {
    static route = {
        navigationBar: {
            title: 'Stopwatch',
            titleStyle: styles.titleStyle,
            backgroundColor: Colors.navbarColor,
            borderBottomWidth: 1,
            borderBottomColor: '#272727'
        }
    }

    render() {
        return (
            <View>
                <Text>Stopwatch not implement yet</Text>
            </View>
        );
    }
}

export default Stopwatch;
