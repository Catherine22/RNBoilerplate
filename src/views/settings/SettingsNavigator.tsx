import React from 'react';
import Settings from './Settings';
import { createStackNavigator } from 'react-navigation-stack';

const routeConfigs = {
    Settings: {
        screen: Settings,
        navigationOptions: () => ({
            title: 'Settings'
        })
    }
};

const stackNavigatorConfig = {
    initialRouteName: 'Settings',
    defaultNavigationOptions: {
        title: 'Unknown',
        mode: 'card', // [card, modal]
        headerMode: 'float' // [float, screen, none]
    }
};

const SettingsNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);
export default SettingsNavigator;
