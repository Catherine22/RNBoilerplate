import React, { FC } from 'react';
import {
    StyleSheet,
    StatusBar,
    ViewStyle,
    StyleProp,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { Colors } from '../../styles';

interface Props {
    style?: StyleProp<ViewStyle>;
}

interface Styles {
    scrollView: ViewStyle;
}

const Container: FC<Props> = props => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    {props.children}
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create<Styles>({
    scrollView: {
        backgroundColor: Colors.background
    }
});

export default Container;
