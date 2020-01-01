import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Dimensions, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import CTextInput, { Types } from '../../components/common/CTextInput';
import Card from '../../components/common/Card';
import CButton from '../../components/common/CButton';
import CLink from '../../components/common/CLink';
import * as firebase from 'firebase/app';
import 'firebase/auth';

type Props = {
    navigation: NavigationStackProp;
};

type State = {
    email: string;
    password: string;
};

class SignIn extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.container}>
                    <Card style={styles.cardView}>
                        <CTextInput
                            placeHolder="Email"
                            onChangeText={this.updateEmail}
                            style={styles.inputEmail}
                            type={Types.Email}
                        />
                        <CTextInput
                            placeHolder="Password"
                            onChangeText={this.updatePassword}
                            style={styles.inputPwd}
                            type={Types.Password}
                        />
                        <View style={styles.buttonArea}>
                            <CButton
                                title="Sign up"
                                onPress={this.signUp}
                                buttonStyle={styles.signUpBtn}
                            />
                            <CButton
                                title="Sign in"
                                onPress={this.signIn}
                                buttonStyle={styles.signInBtn}
                                isSolid
                            />
                        </View>
                        <CLink
                            style={styles.links}
                            title="Learn more about Firebase auth"
                            link="https://firebase.google.com/docs/auth/web/start?authuser=1"></CLink>
                    </Card>
                </SafeAreaView>
            </>
        );
    }

    updateEmail = (email: string) => {
        this.setState({ email });
    };

    updatePassword = (password: string) => {
        this.setState({ password });
    };

    objToQueryString = (obj: any) => {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    };

    signUp = () => {
        const { email, password } = this.state;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(function(user) {
                console.log('success', user);
                // user.email
                // user.refreshToken
            })
            .catch(function(error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                console.warn('sign in error', errorCode, errorMessage);
            });
    };

    signIn = () => {
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(function(user) {
                console.log('success', user);
                // user.email
                // user.refreshToken
            })
            .catch(function(error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                console.warn('sign up error', errorCode, errorMessage);
            });
    };
}

const WIDGET_WIDTH = (Dimensions.get('window').width * 2) / 3;
const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        justifyContent: 'center'
    },
    cardView: {
        alignItems: 'center', // horizontal centre
        justifyContent: 'center', // vertical centre
        height: 200
    },
    inputEmail: {
        width: WIDGET_WIDTH,
        marginTop: 16
    },
    inputPwd: {
        width: WIDGET_WIDTH,
        marginTop: 8
    },
    buttonArea: {
        width: WIDGET_WIDTH,
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    signUpBtn: {
        width: WIDGET_WIDTH / 2 - 8
    },
    signInBtn: {
        width: WIDGET_WIDTH / 2 - 8
    },
    links: {
        marginBottom: 16
    }
});

export default SignIn;
