import React from 'react';
import SignIn from './SignIn';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppNavigator from '../../AppNavigator';
import AuthLoadingScreen from '../auth/AuthLoadingScreen';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import AuthWebView from './AuthWebView';
import { Text, Button } from 'react-native';

// Auth stack
const routeConfigs = {
    SignIn: {
        screen: SignIn,
        navigationOptions: () => ({
            header: null
        })
    },

    WebView: {
        screen: AuthWebView,
        navigationOptions: () => ({
            headerBackTitle: 'back'
        })
    }
};

const stackNavigatorConfig = {
    initialRouteName: 'SignIn'
};

const AuthNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);

// Bundle auth stack and app stack
const switchNavigatorConfig = {
    initialRouteName: 'AuthLoading'
};

const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthNavigator,
        App: AppNavigator
    },
    switchNavigatorConfig
);

const Auth = createAppContainer(SwitchNavigator);
export default Auth;
