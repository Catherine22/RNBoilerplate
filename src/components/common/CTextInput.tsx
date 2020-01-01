import React, { Component } from 'react';
import { StyleSheet, TextInput, ViewStyle, StyleProp } from 'react-native';
import { colors } from '../../constants/Styles';

enum Types {
    Email,
    Password,
    Name,
    Others
}

interface Props {
    placeHolder?: string;
    onChangeText: (text: string) => void;
    style?: StyleProp<ViewStyle>;
    type?: Types;
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
        let type = this.props.type ?? Types.Others;
        // +: convert to number
        switch (+type) {
            case Types.Email:
                return (
                    <TextInput
                        style={[styles.view, this.props.style]}
                        onChangeText={this.onChangeText}
                        value={this.state.value}
                        placeholder={this.props.placeHolder}
                        autoCapitalize="none"
                        autoCompleteType="email"
                    />
                );
            case Types.Password:
                return (
                    <TextInput
                        style={[styles.view, this.props.style]}
                        onChangeText={this.onChangeText}
                        value={this.state.value}
                        placeholder={this.props.placeHolder}
                        autoCapitalize="none"
                        autoCompleteType="password"
                        secureTextEntry
                    />
                );
            case Types.Name:
                return (
                    <TextInput
                        style={[styles.view, this.props.style]}
                        onChangeText={this.onChangeText}
                        value={this.state.value}
                        placeholder={this.props.placeHolder}
                        autoCapitalize="none"
                        autoCompleteType="name"
                    />
                );
            default:
                return (
                    <TextInput
                        style={[styles.view, this.props.style]}
                        onChangeText={this.onChangeText}
                        value={this.state.value}
                        placeholder={this.props.placeHolder}
                        autoCapitalize="sentences"
                        autoCorrect
                    />
                );
        }
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
        borderColor: colors.placeHolder,
        borderWidth: 1
    }
});

export { Types };
export default CTextInput;
