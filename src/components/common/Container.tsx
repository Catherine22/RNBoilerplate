import React, { FC } from 'react';
import {
    StyleSheet,
    StatusBar,
    ViewStyle,
    StyleProp,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { colors } from '../../constants/Styles';

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
        backgroundColor: colors.background
    }
});

export default Container;
