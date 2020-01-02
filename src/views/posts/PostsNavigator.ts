import Posts from './Posts';
import { createStackNavigator } from 'react-navigation-stack';

const routeConfigs = {
    Posts: {
        screen: Posts,
        navigationOptions: () => ({
            title: 'Posts'
        })
    }
};

const stackNavigatorConfig = {
    initialRouteName: 'Posts',
    defaultNavigationOptions: {
        title: 'Unknown',
        mode: 'card', // [card, modal]
        headerMode: 'float' // [float, screen, none]
    }
};

const PostsNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);
export default PostsNavigator;
