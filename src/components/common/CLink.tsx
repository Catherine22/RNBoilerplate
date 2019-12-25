import React, { FC } from 'react';
import { StyleSheet, TouchableHighlight, Text, ViewStyle, Linking } from 'react-native';
import { Colors, Font } from '../../styles';

interface Props {
    title: string;
    link: string;
}

interface Styles {
    container: ViewStyle;
    text: ViewStyle;
}

const CLink: FC<Props> = props => {
    return (
        <TouchableHighlight
            style={styles.container}
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
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1
    },
    text: {
        color: Colors.primary,
        textAlign: 'center',
        fontSize: Font.buttonSize
    }
});

export default CLink;
