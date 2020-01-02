import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, StatusBar } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { colors } from '../../constants/Styles';

type Props = {
    navigation: NavigationStackProp<{ title: string }>;
};

class Posts extends React.Component<Props> {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <Text>Posts</Text>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.background
    }
});

export default Posts;
