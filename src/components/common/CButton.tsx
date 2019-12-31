import React, { FC } from 'react';
import { StyleSheet, TouchableHighlight, Text, ViewStyle, StyleProp } from 'react-native';
import { Colors, Font } from '../../constants/Styles';

interface Props {
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<ViewStyle>;
    title: string;
    onPress: () => void;
}

interface Styles {
    button: ViewStyle;
    text: ViewStyle;
}

const CButton: FC<Props> = props => {
    return (
        <TouchableHighlight
            style={[styles.button, props.buttonStyle]}
            onPress={props.onPress}
            underlayColor={Colors.primaryVariant}>
            <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create<Styles>({
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderColor: Colors.primary,
        borderWidth: 1,
        backgroundColor: Colors.primary
    },
    text: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: Font.buttonSize
    }
});

export default CButton;
