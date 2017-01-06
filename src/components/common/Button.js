import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const Button = ({ children, onPress, outerBorderStyle, containerStyle, titleStyle, disabled }) => {
    const { container, outerBorder, text } = styles;
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}>
            <View style={[outerBorder, outerBorderStyle]}>
                <View style={[container, containerStyle]}>
                    <Text style={[text, titleStyle]}>{children}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    outerBorder: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    text: {
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 18,
        fontWeight: '300',
    }
};

export { Button };
