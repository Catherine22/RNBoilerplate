import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, View, StatusBar } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { colors, common, dimens } from '../../constants/Styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAlbums, getPosts } from '../../actions/HttpClient';
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
    getPosts: () => void;
}

type Props = StateProps & DispatchProps & OwnProps;

class Dashboard extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAlbums();
        this.props.getPosts();
    }

    render() {
        let albumBit =
            this.props.albums && this.props.albums.length > 0 ? (
                <View style={styles.dataPiece}>
                    <Text style={common.bigNumber}>{this.props.albums.length}</Text>
                    <Text style={common.context}>albums</Text>
                </View>
            ) : (
                <View style={styles.dataPiece}>
                    <Text style={common.bigNumber}>0</Text>
                    <Text style={common.context}>albums</Text>
                </View>
            );

        let postBit =
            this.props.posts && this.props.posts.length > 0 ? (
                <View style={styles.dataPiece}>
                    <Text style={common.bigNumber}>{this.props.posts.length}</Text>
                    <Text style={common.context}>posts</Text>
                </View>
            ) : (
                <View style={styles.dataPiece}>
                    <Text style={common.bigNumber}>0</Text>
                    <Text style={common.context}>posts</Text>
                </View>
            );

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
                            {albumBit}
                            {postBit}
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
        margin: dimens.marginNavBar
    },
    line: {
        borderColor: colors.placeHolder,
        borderBottomWidth: 1,
        marginVertical: 8
    },
    dataPiece: {
        marginVertical: 8
    }
});

const mapStateToProps = (state: any) => {
    const { albums } = state.fetchAlbums;
    const { posts } = state.fetchPosts;
    return { albums, posts };
};

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators(
        {
            getAlbums,
            getPosts
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
