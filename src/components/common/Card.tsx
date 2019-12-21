import React, { FC } from 'react';
import { StyleSheet, View, ViewStyle, StyleProp } from 'react-native';
import { Colors } from '../../styles';

interface Props {
    // style: StyleProp<ViewStyle>;
}

interface Styles {
    view: ViewStyle;
}

const Card: FC<Props> = props => {
    return <View style={[styles.view /*, props.style*/]}>{props.children}</View>;
};

const styles = StyleSheet.create<Styles>({
    view: {
        marginVertical: 24,
        borderRadius: 8,
        borderColor: Colors.placeHolder,
        borderWidth: 1
    }
});

export { Card };
