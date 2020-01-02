import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';
import { firebaseConfig } from '../../constants/Secrets';
import * as firebase from 'firebase/app';
import 'firebase/auth';

type Props = {
    navigation: NavigationStackProp<{ title: string }>;
};

class AuthLoadingScreen extends React.Component<Props> {
    componentDidMount() {
        this.initFirebase();
        this.bootstrapAsync();
    }

    initFirebase = async () => {
        !firebase.app.length && firebase.initializeApp(firebaseConfig);
    };

    bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('@email');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default AuthLoadingScreen;
