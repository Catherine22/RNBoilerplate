import React, { Component } from 'react';
import { StyleSheet, TextInput, ViewStyle, StyleProp } from 'react-native';
import { Colors } from '../../styles';

interface Props {
    placeHolder?: string;
    onChangeText: (text: String) => void;
    style?: StyleProp<ViewStyle>;
}

interface Styles {
    view: ViewStyle;
}

interface State {
    value: string;
}

class CTextInput extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <TextInput
                style={[styles.view, this.props.style]}
                onChangeText={this.onChangeText}
                value={this.state.value}
                placeholder={this.props.placeHolder}
            />
        );
    }

    onChangeText = (text: string) => {
        this.setState(
            {
                value: text
            },
            () => {
                this.props.onChangeText(text);
            }
        );
    };
}

const styles = StyleSheet.create<Styles>({
    view: {
        height: 40,
        borderColor: Colors.placeHolder,
        borderWidth: 1
    }
});

export default CTextInput;
