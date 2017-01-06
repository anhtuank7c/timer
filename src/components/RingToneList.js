import React, { Component } from 'react';
import { View, Text } from 'react-native';

class RingToneList extends Component {
    static route = {
        navigationBar: {
            title: 'RingToneList'
        }
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 65 }}>
                <Text style={{ fontSize: 20, color: '#202020' }}>RingToneList</Text>
            </View>
        );
    }

    _handlePress = () => {
        this.props.navigator.pop();
    }
}

export default RingToneList;
