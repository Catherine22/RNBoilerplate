import Albums from './Albums';
import { createStackNavigator } from 'react-navigation-stack';

const routeConfigs = {
    Albums: {
        screen: Albums,
        navigationOptions: () => ({
            title: 'Albums'
        })
    }
};

const stackNavigatorConfig = {
    initialRouteName: 'Albums',
    defaultNavigationOptions: {
        title: 'Unknown',
        mode: 'card', // [card, modal]
        headerMode: 'float' // [float, screen, none]
    }
};

const AlbumsNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);
export default AlbumsNavigator;
