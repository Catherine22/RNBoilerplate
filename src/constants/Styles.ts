import { StyleSheet } from 'react-native';

const colors = {
    primary: '#6200ee',
    primaryVariant: '#3700b3',
    secondary: '#03dac6',
    secondaryVariant: '#018786',

    background: '#ffffff',
    surface: '#ffffff',
    error: '#b00020',
    placeHolder: '#c3c3c3'
};

const dimens = {
    marginNavBar: 16
};

const common = StyleSheet.create({
    bigNumber: {
        fontSize: 24
    },
    context: {
        fontSize: 16
    }
});

export { colors, common, dimens };
