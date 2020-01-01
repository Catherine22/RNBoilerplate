import Repo from './Repo';
import { createStackNavigator } from 'react-navigation-stack';

const routeConfigs = {
    Repo: {
        screen: Repo,
        navigationOptions: () => ({
            title: 'Repo'
        })
    }
};

const stackNavigatorConfig = {
    initialRouteName: 'Repo',
    defaultNavigationOptions: {
        title: 'Unknown',
        mode: 'card', // [card, modal]
        headerMode: 'float' // [float, screen, none]
    }
};

const RepoNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);
export default RepoNavigator;
