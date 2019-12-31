import React, { FC } from 'react';
import { StyleSheet, TouchableHighlight, Text, ViewStyle, Linking } from 'react-native';
import { colors } from '../../constants/Styles';

interface Props {
    title: string;
    link: string;
    style?: ViewStyle;
}

interface Styles {
    container: ViewStyle;
    text: ViewStyle;
}

const CLink: FC<Props> = props => {
    return (
        <TouchableHighlight
            style={[styles.container, props.style]}
            onPress={() => openURL(props.link)}
            underlayColor={'#ffffff'}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableHighlight>
    );
};

const openURL = (url: string) => {
    console.log('open', url);
    Linking.canOpenURL(url)
        .then(supported => {
            if (!supported) {
                console.log("Can't handle url: " + url);
            } else {
                // option1: open link on browser
                return Linking.openURL(url);

                // option2: open link on webview
            }
        })
        .catch(err => console.error('An error occurred', err));
};

const styles = StyleSheet.create<Styles>({
    container: {
        borderBottomColor: colors.primary,
        borderBottomWidth: 1
    },
    text: {
        color: colors.primary,
        textAlign: 'center',
        fontSize: 16
    }
});

export default CLink;
