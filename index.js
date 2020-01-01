import { AppRegistry } from 'react-native';
import RootNavigator from './src/views/RootNavigator';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => RootNavigator);
