import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import { WebView } from 'react-native-webview';

interface Props {
    uri: string;
}

// API reference: https://github.com/react-native-community/react-native-webview/blob/master/docs/Reference.md
const CWebView: FC<Props> = props => {
    return <WebView source={{ uri: props.uri }}></WebView>;
};

export default CWebView;
