import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text, Button, Dimensions } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { Colors } from '../../styles';
import CTextInput from '../../components/common/CTextInput';
import Card from '../../components/common/Card';

type Props = {
    navigation: NavigationStackProp;
};

class SignIn extends Component {
    constructor(props: Props) {
        super(props);
        this.state = {
            clientId: null
        };
    }

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.container}>
                    <Card style={styles.cardView}>
                        <Text>My Auth app</Text>
                        <CTextInput
                            placeHolder="Client ID"
                            onChangeText={this.updateClientId}
                            style={styles.inputText}
                        />
                        <Button title="Sign in" onPress={this.signIn}></Button>
                    </Card>
                </SafeAreaView>
            </>
        );
    }

    updateClientId = (clientId: String) => {
        this.setState({ clientId });
    };

    signIn = () => {
        console.log('clientId', this.state);
    };
}

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
    inputText: {
        width: Dimensions.get('window').width / 2
    }
});

export default SignIn;
