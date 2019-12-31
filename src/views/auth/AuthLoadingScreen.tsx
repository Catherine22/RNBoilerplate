import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';
import { firebaseConfig } from '../../constants/Secrets';
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
