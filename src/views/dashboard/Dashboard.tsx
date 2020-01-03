import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, View, StatusBar } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { colors, common, dimens } from '../../constants/Styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAlbums } from '../../actions/Albums';
import Card from '../../components/common/Card';

interface OwnProps {
    navigation: NavigationStackProp<{ title: string }>;
}

interface StateProps {
    albums: [];
    posts: [];
}

interface DispatchProps {
    getAlbums: () => void;
}

type Props = StateProps & DispatchProps & OwnProps;

class Dashboard extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAlbums();
    }

    render() {
        let functionBit =
            this.props.albums && this.props.albums.length > 0 ? (
                <View>
                    <Text style={common.bigNumber}>{this.props.albums.length}</Text>
                    <Text style={common.context}>albums</Text>
                </View>
            ) : null;
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <Card style={styles.cardView}>
                            <Text style={common.context}>Summary</Text>
                            <View style={styles.line}></View>
                            {functionBit}
                        </Card>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.background
    },
    cardView: {
        height: 200,
        margin: dimens.marginNavBar
    },
    line: {
        borderColor: colors.placeHolder,
        borderBottomWidth: 1,
        marginVertical: 8
    }
});

const mapStateToProps = (state: any) => {
    const { albums } = state.fetchData;
    return { albums };
};

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators(
        {
            getAlbums
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
