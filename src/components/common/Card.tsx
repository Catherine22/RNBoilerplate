import React, { FC } from 'react';
import { StyleSheet, View, ViewStyle, StyleProp } from 'react-native';
import { colors } from '../../constants/Styles';

interface Props {
    style?: StyleProp<ViewStyle>;
}

interface Styles {
    card: ViewStyle;
}

const Card: FC<Props> = props => {
    return <View style={[styles.card, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create<Styles>({
    card: {
        marginHorizontal: 24,
        padding: 8,
        borderRadius: 8,
        borderColor: colors.placeHolder,
        borderWidth: 1
    }
});

export default Card;
