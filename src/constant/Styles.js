import { Dimensions } from 'react-native';
import Colors from './Colors';

const { height } = Dimensions.get('window');

export default {
    container: {
        flex: 1,
        backgroundColor: Colors.containerColor,
    },
    timePickerStyle: {
        flexDirection: 'row',
        height: (height * 0.4),
        paddingTop: 20,
    },
    remaintingContainerStyle: {
        height: (height * 0.4),
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerStyle: {
        alignItems: 'center',
    },
    pickerLabelStyle: {
        color: '#fff',
        fontSize: 18,
    },
    ringTonePickerStyle: {
        height: 40,
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
