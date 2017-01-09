import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@exponent/vector-icons';
import { connect } from 'react-redux';
import Colors from '../constant/Colors';
import {
    choosingRingTone
} from '../actions';

class RingToneListItem extends Component {
    choosingRingTone(item) {
        this.props.choosingRingTone({ tmpRingTone: item });
    }

    renderIcon() {
        const { selected } = this.props;
        const { iconContainer } = styles;
        if (selected) {
            return (
                <View style={iconContainer}>
                    <Ionicons name="ios-checkmark-outline" size={32} color={Colors.itemCheckedColor} />
                </View>
            );
        }
        return <View style={iconContainer} />
    }

    render() {
        const { currentItem } = this.props;
        const { listItem, listItemText } = styles;
        return (
            <TouchableOpacity onPress={this.choosingRingTone.bind(this, currentItem)}>
                <View style={listItem}>
                    {this.renderIcon()}
                    <Text style={listItemText}>{currentItem.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = {
    iconContainer: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -40
    },
    listItem: {
        backgroundColor: Colors.listItemColor,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.listItemBorderColor,
    },
    listItemText: {
        color: Colors.listItemTextColor,
        fontSize: 16,
    },
};

const mapStateToProps = (state, props) => {
    const selected = state.timer.tmpRingTone.id === props.currentItem.id;
    return { selected };
};

export default connect(mapStateToProps, {
    choosingRingTone
})(RingToneListItem);
