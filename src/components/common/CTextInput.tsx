import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, TextInput, ViewStyle, StyleProp } from 'react-native';
import { Colors } from '../../styles';

interface Props {
    placeHolder: string;
    onChangeText: (text: String) => void;
    style: StyleProp<ViewStyle>;
}

interface Styles {
    view: ViewStyle;
}

const CTextInput: FC<Props> = props => {
    const [value, onChangeText] = useState('');
    useEffect(() => {
        props.onChangeText(value);
    });

    return (
        <TextInput
            style={[styles.view, props.style]}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder={props.placeHolder}
        />
    );
};

const styles = StyleSheet.create<Styles>({
    view: {
        height: 40,
        borderColor: Colors.placeHolder,
        borderWidth: 1
    }
});

export { CTextInput };
