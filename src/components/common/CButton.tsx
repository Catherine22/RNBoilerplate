import React, { FC } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text,
    ViewStyle,
    StyleProp,
    TextStyle
} from 'react-native';
import { colors } from '../../constants/Styles';

interface Props {
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    isSolid?: boolean;
    title: string;
    onPress: () => void;
}

interface Styles {
    button: ViewStyle;
    text: ViewStyle;
    solidButton: ViewStyle;
    solidText: ViewStyle;
}

const CButton: FC<Props> = props => {
    return props.isSolid ? (
        <TouchableHighlight
            style={[styles.solidButton, props.buttonStyle]}
            onPress={props.onPress}
            underlayColor={colors.primary}>
            <Text style={[styles.solidText, props.textStyle]}>{props.title}</Text>
        </TouchableHighlight>
    ) : (
        <TouchableHighlight
            style={[styles.button, props.buttonStyle]}
            onPress={props.onPress}
            underlayColor={colors.primaryVariant}>
            <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create<Styles>({
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderColor: colors.primary,
        borderWidth: 1,
        backgroundColor: colors.primary
    },
    text: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16
    },
    solidButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderColor: colors.primary,
        borderWidth: 1,
        backgroundColor: '#ffffff'
    },
    solidText: {
        color: colors.primary,
        textAlign: 'center',
        fontSize: 16
    }
});

export default CButton;
