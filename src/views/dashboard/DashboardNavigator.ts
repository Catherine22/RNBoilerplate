import Dashboard from './Dashboard';
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

const DashboardNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);
export default DashboardNavigator;
