import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, StatusBar, Dimensions } from 'react-native';
import { Colors } from '../../styles';
import { CTextInput, Card } from '../../components/common';

const SignIn = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    <Card>
                        <CTextInput
                            placeHolder="clientId"
                            onChangeText={text => onChangeText(text)}
                            style={styles.inputText}>
                            SignIn
                        </CTextInput>
                    </Card>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const onChangeText = (clientId: String) => {
    console.log('clientId', clientId);
};

const width50 = Dimensions.get('window').width / 2;
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.background
    },
    inputText: {
        width: width50,
        marginHorizontal: 8,
        marginTop: 8
    }
});

export default SignIn;
