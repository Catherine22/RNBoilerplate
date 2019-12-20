import React from 'react';
import Dashboard from './views/dashboard/Dashboard';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const routeConfigs = {
    Dashboard: {
        screen: Dashboard,
        navigationOptions: () => ({
            title: 'Dashboard'
        })
    }
};

const stackNavigatorConfig = {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: {
        title: 'Unknown',
        mode: 'card', // [card, modal]
        headerMode: 'float' // [float, screen, none]
    }
};

const MainNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);
const App = createAppContainer(MainNavigator);
export default App;
