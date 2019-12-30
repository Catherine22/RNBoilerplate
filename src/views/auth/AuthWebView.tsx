import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { WebView } from 'react-native-webview';

interface Props {
    url: string;
    navigation: NavigationStackProp;
}

// API reference: https://github.com/react-native-community/react-native-webview/blob/master/docs/Reference.md
class AuthWebView extends Component<Props> {
    constructor(props: Props) {
        super(props);
        console.log('webview', this.props.navigation.getParam('url'));
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <WebView
                    source={{ uri: this.props.navigation.getParam('url') }}
                    incognito={true}
                    onLoad={this.onLoad}
                />
            </SafeAreaView>
        );
    }

    onLoad = (syntheticEvent: any) => {
        const { nativeEvent } = syntheticEvent;
        if (nativeEvent.url.includes('?code=')) {
            let code = nativeEvent.url.split('?code=')[1];
            console.log('code', code);
        }
    };
}
const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        justifyContent: 'center'
    }
});
export default AuthWebView;
