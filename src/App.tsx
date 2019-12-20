import React from 'react';
import DashboardNavigator from './views/dashboard/DashboardNavigator';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Colors } from './styles';

const routeConfigs = {
    Dashboard: {
        screen: DashboardNavigator,
        navigationOptions: () => ({
            title: 'Dashboard'
        })
    }
};

const tabNavigatorConfig = {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: {
        title: 'Unknown',
        mode: 'card', // [card, modal]
        headerMode: 'float' // [float, screen, none]
    },
    tabBarOptions: {
        activeTintColor: Colors.primary,
        labelStyle: {
            fontSize: 12
        },
        style: {
            backgroundColor: Colors.surface
        }
    }
};

const MainNavigator = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);
const App = createAppContainer(MainNavigator);
export default App;
