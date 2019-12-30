import { AppRegistry } from 'react-native';
import AuthNavigator from './src/views/auth/AuthNavigator';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AuthNavigator);
