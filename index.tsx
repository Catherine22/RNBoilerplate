import { AppRegistry } from 'react-native';
import App from './src/App';
import SignIn from './src/views/auth/SignIn';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => SignIn);
