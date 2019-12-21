import React from 'react';
import Profile from './Profile';
import { createStackNavigator } from 'react-navigation-stack';

const routeConfigs = {
    Profile: {
        screen: Profile,
        navigationOptions: () => ({
            title: 'Profile'
        })
    }
};

const stackNavigatorConfig = {
    initialRouteName: 'Profile',
    defaultNavigationOptions: {
        title: 'Unknown',
        mode: 'card', // [card, modal]
        headerMode: 'float' // [float, screen, none]
    }
};

const ProfileNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);
export default ProfileNavigator;
