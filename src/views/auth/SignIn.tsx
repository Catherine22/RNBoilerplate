import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text,
    View,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { Colors } from '../../styles';
import CTextInput from '../../components/common/CTextInput';
import Card from '../../components/common/Card';
import CButton from '../../components/common/CButton';
import CLink from '../../components/common/CLink';

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
                        <CTextInput
                            placeHolder="Client ID"
                            onChangeText={this.updateClientId}
                            style={styles.inputText}
                        />
                        <CButton
                            title="Sign in"
                            onPress={this.signIn}
                            buttonStyle={styles.buttonStyle}
                        />
                        <CLink
                            title="What is my client ID?"
                            link="https://developer.github.com/apps/building-oauth-apps/"></CLink>
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

const WIDGET_WIDTH = Dimensions.get('window').width / 2;
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
        width: WIDGET_WIDTH
    },
    buttonStyle: {
        margin: 16,
        width: WIDGET_WIDTH
    }
});

export default SignIn;
