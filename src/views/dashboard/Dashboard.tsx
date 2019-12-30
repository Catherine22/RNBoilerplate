import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, StatusBar } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { Colors } from '../../styles';

type Props = {
    navigation: NavigationStackProp<{ title: string }>;
};

class Dashboard extends React.Component<Props> {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <Text>Dashboard</Text>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.background
    }
});

export default Dashboard;
