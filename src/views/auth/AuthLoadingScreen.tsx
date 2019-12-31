import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';
import * as firebase from 'firebase/app';

type Props = {
    navigation: NavigationStackProp<{ title: string }>;
};

class AuthLoadingScreen extends React.Component<Props> {
    componentDidMount() {
        this.initFirebase();
        this.bootstrapAsync();
    }

    initFirebase = () => {
        let firebaseConfig = {
            apiKey: 'AIzaSyB4xzPrwbkUUXinzIkMAOeLfjqI3hEpkMU',
            authDomain: 'rnboilerplate-26890.firebaseapp.com',
            databaseURL: 'https://rnboilerplate-26890.firebaseio.com',
            projectId: 'rnboilerplate-26890',
            storageBucket: 'rnboilerplate-26890.appspot.com',
            messagingSenderId: '451059371574',
            appId: '1:451059371574:web:3ffb15715471161edf5297',
            measurementId: 'G-12R91KMJP8'
        };
        firebase.initializeApp(firebaseConfig);
    };

    bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('@token');
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
