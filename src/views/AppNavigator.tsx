import DashboardNavigator from './dashboard/DashboardNavigator';
import PostsNavigator from './posts/PostsNavigator';
import AlbumsNavigator from './albums/AlbumsNavigator';
import SettingsNavigator from './settings/SettingsNavigator';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { colors } from '../constants/Styles';

const routeConfigs = {
    Dashboard: {
        screen: DashboardNavigator,
        navigationOptions: () => ({
            title: 'Dashboard'
        })
    },
    Posts: {
        screen: PostsNavigator,
        navigationOptions: () => ({
            title: 'Posts'
        })
    },
    Albums: {
        screen: AlbumsNavigator,
        navigationOptions: () => ({
            title: 'Albums'
        })
    },
    Settings: {
        screen: SettingsNavigator,
        navigationOptions: () => ({
            title: 'Settings'
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
        activeTintColor: colors.primary,
        labelStyle: {
            fontSize: 12
        },
        style: {
            backgroundColor: colors.surface
        }
    }
};

const AppNavigator = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);
export default AppNavigator;
