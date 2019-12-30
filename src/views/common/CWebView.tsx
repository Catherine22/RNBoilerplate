import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { WebView } from 'react-native-webview';

interface Props {
    url: string;
    navigation: NavigationStackProp;
}

// API reference: https://github.com/react-native-community/react-native-webview/blob/master/docs/Reference.md
class CWebView extends Component<Props> {
    constructor(props: Props) {
        super(props);
        console.log('webview', this.props.navigation.getParam('url'));
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <WebView source={{ uri: this.props.navigation.getParam('url') }} incognito={true} />
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        justifyContent: 'center'
    }
});
export default CWebView;
