import React, { Component } from 'react';
import { ListView, ScrollView, View, Text } from 'react-native';
import { NavigationActions, NavigationStyles } from '@exponent/ex-navigation';
import { connect } from 'react-redux';
import Store from '../Store';
import Colors from '../constant/Colors';
import { NavBar } from './common';
import RingToneListItem from './RingToneListItem';
import {
    changeRingTone
} from '../actions';

class RingToneList extends Component {
    static route = {
        navigationBar: {
            visible: false,
        },
        styles: {
            ...NavigationStyles.SlideVertical
        }
    }

    componentWillMount() {
        this.createDataSource(this.props);
    }

    onCancelPress() {
        const navigatorUID = Store.getState().navigation.currentNavigatorUID;
        Store.dispatch(NavigationActions.pop(navigatorUID));
    }

    onSetPress() {
        const { tmpRingTone } = this.props;
        this.props.changeRingTone({ ringTone: tmpRingTone });
        const navigatorUID = Store.getState().navigation.currentNavigatorUID;
        Store.dispatch(NavigationActions.pop(navigatorUID));
    }

    createDataSource({ ringToneList }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(ringToneList);
    }

    _handlePress = () => {
        this.props.navigator.pop();
    }

    renderRow(item) {
        return <RingToneListItem currentItem={item} />;
    }

    render() {
        const { container, listView } = styles;
        return (
            <View style={container}>
                <NavBar
                    title="When Timer Ends"
                    titleLeft="Cancel"
                    onLeftPress={this.onCancelPress.bind(this)}
                    titleRight="Set"
                    onRightPress={this.onSetPress.bind(this)}
                    />
                <ScrollView indicatorStyle="white">
                    <ListView
                        style={listView}
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow.bind(this)} />
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: Colors.containerColor,
    },
    listView: {
        marginTop: 30,
        paddingLeft: 40,
        backgroundColor: Colors.listItemColor,
        borderTopWidth: 1,
        borderTopColor: Colors.navbarBorderColor,
        borderBottomWidth: 1,
        borderBottomColor: Colors.navbarBorderColor,
    },
};

const mapStateToProps = (state) => {
    const { ringTone, ringToneList } = state.timer;
    let { tmpRingTone } = state.timer;
    if (tmpRingTone === undefined) {
        tmpRingTone = ringTone;
    }
    return { tmpRingTone, ringToneList };
};

export default connect(mapStateToProps, {
    changeRingTone
})(RingToneList);
