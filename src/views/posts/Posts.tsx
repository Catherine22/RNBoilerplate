import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    Text,
    StatusBar,
    TouchableOpacity,
    View
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { colors, common, dimens } from '../../constants/Styles';
import Card from '../../components/common/Card';
import { connect } from 'react-redux';

interface OwnProps {
    navigation: NavigationStackProp<{ title: string }>;
}

interface StateProps {
    posts: [];
}

type Props = StateProps & OwnProps;

interface State {
    selected: Array<number>;
}

class Posts extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selected: []
        };
    }

    render() {
        let contain =
            this.props.posts && this.props.posts.length > 0 ? (
                <FlatList
                    style={styles.scrollView}
                    data={this.props.posts}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => this.onSelect(item.id)}
                            style={[
                                styles.item,
                                {
                                    backgroundColor: item.selected
                                        ? colors.selectedItem
                                        : colors.surface
                                }
                            ]}>
                            <Card style={styles.cardView}>
                                <Text style={common.context}>{item.title}</Text>
                                <View style={styles.line}></View>
                                <Text style={common.context}>{item.body}</Text>
                            </Card>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item: any) => `${item.id}`}
                    extraData={this.state.selected}></FlatList>
            ) : (
                <Text>No data</Text>
            );
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>{contain}</SafeAreaView>
            </>
        );
    }

    onSelect = (id: number) => {
        const selected = this.state.selected;
        selected.push(id);
        this.setState({
            selected
        });
    };
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.background
    },
    item: {},
    cardView: {
        margin: dimens.marginNavBar
    },
    line: {
        borderColor: colors.placeHolder,
        borderBottomWidth: 1,
        marginVertical: 8
    }
});

const mapStateToProps = (state: any) => {
    const { posts } = state.fetchPosts;
    return { posts };
};

export default connect(mapStateToProps)(Posts);
